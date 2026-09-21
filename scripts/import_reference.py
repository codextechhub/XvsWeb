"""Convert the supplied design exports into native React components.

Usage: python scripts/import_reference.py PATH_TO_REFERENCE_DIRECTORY
The exported support/tracking scripts are intentionally not imported.
"""
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys

source = Path(sys.argv[1])
dest = Path('src/pages')
dest.mkdir(parents=True, exist_ok=True)
css = []
routes = {'CodeX Home.dc.html': '/', 'XVS.dc.html': '/xvs',
          'Products Hub.dc.html': '/products', 'About.dc.html': '/about',
          'Contact.dc.html': '/contact'}
void = {'input', 'br', 'hr', 'img', 'meta', 'link', 'wbr'}
names = {'class': 'className', 'for': 'htmlFor', 'viewbox': 'viewBox',
         'tabindex': 'tabIndex', 'maxlength': 'maxLength', 'autocomplete': 'autoComplete'}

def camel(s):
    return re.sub(r'-([a-z])', lambda m: m[1].upper(), s)

class Converter(HTMLParser):
    def __init__(self, slug):
        super().__init__(convert_charrefs=True)
        self.out = []
        self.slug = slug

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        out = []
        states = []
        for key, value in attributes:
            if key.startswith('on'):
                continue
            if key in ('style-hover', 'style-focus'):
                cls = f'ref-state-{len(css)}'
                declarations = ';'.join(p + ' !important' for p in value.split(';') if p.strip())
                pseudo = ':hover' if key == 'style-hover' else ':focus-visible'
                css.append(f'.{cls}{pseudo} {{{declarations}}}')
                states.append(cls)
                continue
            if key == 'style':
                style = {camel(k.strip()): v.strip() for k, v in
                         (p.split(':', 1) for p in value.split(';') if ':' in p)}
                # auto-fit tracks must be allowed to shrink on narrow phones.
                if 'gridTemplateColumns' in style:
                    style['gridTemplateColumns'] = re.sub(r'minmax\((\d+px),', r'minmax(min(100%, \1),', style['gridTemplateColumns'])
                out.append('style={' + json.dumps(style) + '}')
                continue
            if key == 'href':
                value = routes.get(value, value)
            if key in ('required', 'disabled', 'multiple'):
                out.append(key)
                continue
            if key in ('rows', 'cols', 'size', 'maxlength', 'tabindex'):
                out.append(names.get(key, key) + '={' + value + '}')
                continue
            attr = names.get(key, key if key.startswith(('data-', 'aria-')) else camel(key))
            out.append(attr + '=' + json.dumps(value or ''))
        if states:
            out.append('className=' + json.dumps(' '.join(states)))
        if tag == 'form':
            out.append('onSubmit={submitEmail}')
        if tag == 'a' and 'aria-label' not in attrs:
            out.append('aria-label="CodeX home"' if 'display:flex;align-items:center;gap:11px' in attrs.get('style', '') else '')
        self.out.append('<' + tag + ' ' + ' '.join(out) + (' />' if tag in void else '>'))

    def handle_endtag(self, tag):
        if tag not in void:
            self.out.append('</' + tag + '>')

    def handle_data(self, data):
        self.out.append(data if not data.strip() else '{' + json.dumps(data, ensure_ascii=False) + '}')

for filename, component in [('XVS.dc.html', 'Home'), ('About.dc.html', 'About'),
                            ('Products Hub.dc.html', 'Products'), ('Contact.dc.html', 'Contact'),
                            ('404.dc.html', 'NotFound')]:
    raw = (source / filename).read_text(encoding='utf-8')
    css.extend(re.findall(r'<style>(.*?)</style>', raw, re.S))
    markup = raw.split('</helmet>', 1)[1].split('</x-dc>', 1)[0]
    if '<main' not in markup:
        markup = markup.replace('</header>', '</header><main id="main-content">', 1)
        markup = markup.replace('<footer', '</main><footer', 1)
    else:
        markup = markup.replace('<main ', '<main id="main-content" ', 1)
    markup = re.sub(r'<sc-for[^>]*hint-placeholder-count="(\d+)"[^>]*>(.*?)</sc-for>',
                    lambda m: m[2] * int(m[1]), markup, flags=re.S)
    markup = re.sub(r'</?sc-if[^>]*>', '', markup)
    markup = markup.replace('{{ submitLabel }}', 'Request a demo' if component == 'Home' else 'Send message')
    markup = markup.replace('{{ formNote }}', 'Opens your email app to send these details to CodeX.')
    markup = re.sub(r'href="#top"([^>]*>)(Privacy|Terms)</a>',
                    lambda m: 'href="/' + m[2].lower() + '"' + m[1] + m[2] + '</a>', markup)
    parser = Converter(component)
    parser.feed(markup)
    title = html.unescape(re.search(r'<title>(.*?)</title>', raw)[1])
    description = html.unescape(re.search(r'<meta name="description" content="(.*?)"', raw)[1])
    script = re.search(r'<script type="text/x-dc"[^>]*>(.*?)</script>', raw, re.S)
    runtime = ''
    if script:
        runtime = script[1]
        runtime = re.sub(r'  renderVals\(\) \{.*?\n  \}\n', '', runtime, flags=re.S)
        runtime = runtime.replace('class Component extends DCLogic {', 'export default class PageMotion {\n  props = {};\n  constructor(root) { this.root = root; }')
        runtime = runtime.replace('document.querySelector', 'this.root.querySelector')
        runtime = runtime.replace('window.innerWidth < 760', 'window.innerWidth < 900')
        runtime = re.sub(r'(\w+)\.addEventListener\(', r'this._listen(\1, ', runtime)
        runtime = runtime.replace('  props = {};', '''  props = {};
  _events = new AbortController();
  _listen(target, name, handler, options = {}) {
    target.addEventListener(name, handler, { ...(typeof options === "boolean" ? { capture: options } : options), signal: this._events.signal });
  }''')
        # Reduced-motion displays complete fragments without recursive timers.
        runtime = runtime.replace('const t = setTimeout(fn, ms);', 'if (this._reduce) { fn(); return; }\n    const t = setTimeout(fn, ms);')
        runtime = runtime.replace('this._at(el, 2400, write);', 'if (!this._reduce) this._at(el, 2400, write);')
        runtime = runtime.replace('    let open = false;', '''    let open = false;
    this._listen(window, "keydown", (event) => {
      if (event.key === "Escape" && open) { open = false; paint(); toggle?.focus(); }
    });''')
        # Stop counter frames too when a route unmounts.
        runtime = runtime.replace('  componentWillUnmount() {', '  componentWillUnmount() {\n    this._events.abort();\n    this.root.querySelectorAll("[data-rail-track] > [aria-hidden]").forEach((el) => el.remove());\n    this.root.querySelectorAll("*").forEach((el) => { if (el._raf) cancelAnimationFrame(el._raf); });')
        (dest / f'{component}.motion.js').write_text(runtime, encoding='utf-8')
        (dest / f'{component}.motion.d.ts').write_text('export default class PageMotion { constructor(root: HTMLElement); componentDidMount(): void; componentWillUnmount(): void; }\n', encoding='utf-8')
    imports = "import { useEffect, useRef } from 'react'\n"
    if '<form' in markup:
        imports += "import { submitEmail } from '../submitEmail'\n"
    if runtime:
        imports += f"import PageMotion from './{component}.motion.js'\n"
    effect = 'const motion = new PageMotion(root.current!); motion.componentDidMount(); return () => motion.componentWillUnmount();' if runtime else ''
    code = imports + f'\nexport default function {component}() {{\n  const root = useRef<HTMLDivElement>(null)\n  useEffect(() => {{\n    document.title = {json.dumps(title)}\n    document.querySelector(\'meta[name="description"]\')?.setAttribute("content", {json.dumps(description)})\n    {effect}\n  }}, [])\n  return <div ref={{root}} className="reference-page">' + ''.join(parser.out) + '</div>\n}\n'
    (dest / f'{component}.tsx').write_text(code, encoding='utf-8')

Path('src/reference.css').write_text('\n'.join(dict.fromkeys(css)), encoding='utf-8')
