import { useEffect, type MouseEvent } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './reference.css'
import './App.css'

function Legal({ title }: { title: string }) {
  useEffect(() => { document.title = `${title} — CodeX` }, [title])
  return <div className="legal-page"><a href="/">← XVS home</a><main><p>CodeX Technologies</p><h1>{title}</h1><p>This document has not been published on this website yet. Contact CodeX for the current {title.toLowerCase()} document.</p><a href="/contact">Contact CodeX →</a></main></div>
}

function Site() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView()
      else window.scrollTo({ top: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, location.hash])

  // Preserve semantic anchors while supporting client-side navigation and history.
  function followLink(event: MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]')
    if (!link || link.target || link.hasAttribute('download')) return
    const url = new URL(link.href)
    if (url.origin !== window.location.origin || link.getAttribute('href')?.startsWith('#')) return
    event.preventDefault()
    navigate(url.pathname + url.search + url.hash)
  }

  return <div onClick={followLink}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div id="page-content" tabIndex={-1}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/xvs" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Legal title="Privacy policy" />} />
        <Route path="/terms" element={<Legal title="Terms of use" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </div>
}

export default function App() {
  return <BrowserRouter><Site /></BrowserRouter>
}
