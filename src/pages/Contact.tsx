import { useEffect, useRef } from 'react'
import { submitEmail } from '../submitEmail'
import PageMotion from './Contact.motion.js'

export default function Contact() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.title = "Contact \u2014 CodeX"
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Book a demo of XVS or ask CodeX about a data platform for your organization.")
    const motion = new PageMotion(root.current!); motion.componentDidMount(); return () => motion.componentWillUnmount();
  }, [])
  return <div ref={root} className="reference-page">

<div id="top" style={{"overflow": "clip"}}>

<header data-nav="" style={{"position": "sticky", "top": "0", "zIndex": "60", "transition": "background 320ms ease, backdrop-filter 320ms ease, border-color 320ms ease, box-shadow 320ms ease", "background": "rgba(251,251,252,0)", "borderBottom": "1px solid rgba(33,33,33,0)"}}>
  <div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "16px 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px 24px"}}>
    <a href="/" style={{"display": "flex", "alignItems": "center", "gap": "11px", "flex": "none"}} aria-label="CodeX home">
      <svg width="36" height="30" viewBox="0 0 30 25" fill="none" aria-hidden="true" style={{"display": "block", "color": "#4A659D"}}>
        <path d="M13.9493 14.0612C17.6443 8.2554 19.9781 5.27429 24.9001 0.372653C22.2283 -0.771525 20.3744 0.615508 16.5566 5.97844L11.8634 13.4094L6.77909 11.845C4.19062 11.2553 2.74787 10.8566 0 11.4539C4.25594 12.6334 6.59352 13.4114 10.5597 15.3649C7.42046 19.5739 5.37817 21.5893 1.04294 24.2298C3.51963 24.9652 4.89632 24.7958 7.30056 22.9261C9.57745 20.8802 10.8378 19.256 12.9063 16.5382C17.1978 19.0111 19.6243 20.6002 23.8572 22.4047C26.5897 22.9516 27.7376 22.8718 29.0719 21.4921C23.2733 19.015 19.927 17.3396 13.9493 14.0612Z" fill="currentColor"></path>
        <path d="M22.5535 10.1503C19.5947 11.5749 17.9464 12.4495 14.9922 14.322L16.8174 15.3649C21.2796 12.4323 23.8297 11.0245 28.42 8.71626C26.3014 8.75601 25.015 9.05585 22.5535 10.1503Z" fill="currentColor"></path>
      </svg>
      
    </a>
    <button type="button" data-nav-toggle="" aria-label="Menu" aria-expanded="false" style={{"display": "none", "marginLeft": "auto", "alignItems": "center", "justifyContent": "center", "width": "44px", "height": "44px", "border": "1px solid #E3E6ED", "borderRadius": "11px", "background": "#fff", "color": "#212121", "cursor": "pointer", "flex": "none"}}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>
    </button>
    <nav data-nav-links="" style={{"marginLeft": "auto", "display": "flex", "alignItems": "center", "gap": "30px"}}>
      <a href="/" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-60" >{"Home"}</a>
      <a href="/products" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-61" >{"Products"}</a>
      <a href="/about" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-62" >{"About"}</a>
      <a href="#top" style={{"fontSize": "15px", "fontWeight": "500", "color": "#212121"}} className="ref-state-63" >{"Contact"}</a>
      <a href="#form" data-scroll="" style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "background": "#4A659D", "color": "#fff", "fontSize": "15px", "fontWeight": "500", "padding": "11px 20px", "borderRadius": "10px", "boxShadow": "0 1px 2px rgba(48,58,81,.16)", "transition": "transform 200ms ease, box-shadow 200ms ease, background 200ms ease"}} className="ref-state-64" >{"Book a Demo"}</a>
    </nav>
    <div data-nav-panel="" style={{"display": "none", "width": "100%", "flexDirection": "column", "gap": "2px", "paddingTop": "10px", "borderTop": "1px solid #EDEFF4"}}>
      <a href="/" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Home"}</a>
      <a href="/products" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Products"}</a>
      <a href="/about" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"About"}</a>
      <a href="#top" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#212121"}} >{"Contact"}</a>
      <a href="#form" data-scroll="" style={{"marginTop": "8px", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "50px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "borderRadius": "11px"}} >{"Book a Demo"}</a>
    </div>
  </div>
</header><main id="main-content">

<section style={{"position": "relative", "padding": "clamp(44px,6vw,84px) 24px clamp(28px,3.5vw,44px)"}}>
  <div data-drift="" style={{"position": "absolute", "top": "-200px", "right": "6%", "width": "460px", "height": "460px", "borderRadius": "50%", "background": "radial-gradient(circle,rgba(74,101,157,.09),transparent 68%)", "filter": "blur(12px)", "pointerEvents": "none", "animation": "cx-drift 19s ease-in-out infinite"}}></div>
  <div style={{"position": "relative", "maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
    <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Contact"}</span>
    <h1 style={{"margin": "0", "maxWidth": "18ch", "fontSize": "clamp(36px,5vw,60px)", "lineHeight": "1.04", "letterSpacing": "-.035em", "fontWeight": "600", "textWrap": "balance"}}>{"Tell us what your records are doing to you"}</h1>
    <p style={{"margin": "0", "maxWidth": "560px", "fontSize": "clamp(16px,1.4vw,18.5px)", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"Whether you want a walkthrough of XVS or you are weighing up whether a platform is the answer at all, start here. We read every message ourselves."}</p>
  </div>
</section>

<section id="form" data-reveal="" style={{"padding": "0 24px clamp(56px,7vw,96px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "gap": "clamp(24px,3.5vw,48px)"}}>

    <div style={{"flex": "1 1 300px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
      <div style={{"background": "#303A51", "borderRadius": "18px", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
        <h2 style={{"margin": "0", "fontSize": "19px", "fontWeight": "600", "letterSpacing": "-.02em", "color": "#fff"}}>{"Book a demo"}</h2>
        <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "rgba(255,255,255,.7)"}}>{"Forty minutes on your own workflows. Bring your branch list and a sample register."}</p>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "9px"}}>
          <span style={{"display": "flex", "alignItems": "center", "gap": "9px", "fontSize": "14px", "color": "rgba(255,255,255,.82)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7FE3AE" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{" Your structure, set up live"}</span>
          <span style={{"display": "flex", "alignItems": "center", "gap": "9px", "fontSize": "14px", "color": "rgba(255,255,255,.82)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7FE3AE" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{" Migration questions answered"}</span>
          <span style={{"display": "flex", "alignItems": "center", "gap": "9px", "fontSize": "14px", "color": "rgba(255,255,255,.82)"}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7FE3AE" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{" A straight answer on fit"}</span>
        </div>
      </div>

      <div style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "18px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
        <div style={{"display": "flex", "gap": "12px"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "34px", "height": "34px", "borderRadius": "11px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2.5"></rect><path d="m3 7 9 6 9-6"></path></svg></span>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "3px", "minWidth": "0"}}>
            <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Email"}</span>
            <a href="mailto:info@codexng.com" style={{"fontSize": "14.5px", "fontWeight": "500", "wordBreak": "break-word"}} >{"info@codexng.com"}</a>
          </div>
        </div>
        <div style={{"display": "flex", "gap": "12px", "paddingTop": "16px", "borderTop": "1px solid #F7F7F7"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "34px", "height": "34px", "borderRadius": "11px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "3px", "minWidth": "0"}}>
            <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Where we are"}</span>
            <span style={{"fontSize": "14.5px", "fontWeight": "500", "color": "#212121"}}>{"Lagos, Nigeria"}</span>
            <span style={{"fontSize": "13px", "color": "#8F918F"}}>{"Working with institutions anywhere"}</span>
          </div>
        </div>
        <div style={{"display": "flex", "gap": "12px", "paddingTop": "16px", "borderTop": "1px solid #F7F7F7"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "34px", "height": "34px", "borderRadius": "11px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 8v4l3 2"></path><circle cx="12" cy="12" r="9"></circle></svg></span>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "3px", "minWidth": "0"}}>
            <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Response time"}</span>
            <span style={{"fontSize": "14.5px", "fontWeight": "500", "color": "#212121"}}>{"Within one business day"}</span>
          </div>
        </div>
      </div>
    </div>

    <form data-contact-form="" style={{"flex": "1 1 460px", "minWidth": "0", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "18px", "padding": "clamp(20px,3vw,34px)", "display": "flex", "flexDirection": "column", "gap": "16px", "boxShadow": "0 24px 60px rgba(48,58,81,.07)"}} onSubmit={submitEmail}>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "9px"}}>
        <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"What is this about?"}</span>
        <div data-reason="" style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
          <button type="button" data-reason-btn="" data-value="Demo" style={{"fontSize": "14px", "fontWeight": "500", "padding": "10px 16px", "borderRadius": "10px", "border": "1px solid #4A659D", "background": "rgba(74,101,157,.09)", "color": "#3B5482", "cursor": "pointer", "transition": "background 200ms ease, border-color 200ms ease, color 200ms ease"}}>{"Book a demo"}</button>
          <button type="button" data-reason-btn="" data-value="Question" style={{"fontSize": "14px", "fontWeight": "500", "padding": "10px 16px", "borderRadius": "10px", "border": "1px solid #E3E6ED", "background": "#fff", "color": "#555654", "cursor": "pointer", "transition": "background 200ms ease, border-color 200ms ease, color 200ms ease"}}>{"General question"}</button>
          <button type="button" data-reason-btn="" data-value="Partnership" style={{"fontSize": "14px", "fontWeight": "500", "padding": "10px 16px", "borderRadius": "10px", "border": "1px solid #E3E6ED", "background": "#fff", "color": "#555654", "cursor": "pointer", "transition": "background 200ms ease, border-color 200ms ease, color 200ms ease"}}>{"Partnership"}</button>
        </div>
        <input type="hidden" name="reason" data-reason-value="" value="Demo" />
      </div>

      <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 170px),1fr))", "gap": "16px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
          <label htmlFor="ct-name" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"Full name"}</label>
          <input id="ct-name" name="name" type="text" required placeholder="Adaeze Okonkwo" style={{"height": "47px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-65" />
          <p data-err="name" style={{"margin": "0", "display": "none", "fontSize": "12.5px", "color": "#A81E1E"}}></p>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
          <label htmlFor="ct-org" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"Organization"}</label>
          <input id="ct-org" name="organization" type="text" required placeholder="School, group or company" style={{"height": "47px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-66" />
          <p data-err="organization" style={{"margin": "0", "display": "none", "fontSize": "12.5px", "color": "#A81E1E"}}></p>
        </div>
      </div>

      <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 170px),1fr))", "gap": "16px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
          <label htmlFor="ct-email" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"Work email"}</label>
          <input id="ct-email" name="email" type="email" required placeholder="you@organization.com" style={{"height": "47px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-67" />
          <p data-err="email" style={{"margin": "0", "display": "none", "fontSize": "12.5px", "color": "#A81E1E"}}></p>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
          <label htmlFor="ct-phone" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"Phone"}</label>
          <input id="ct-phone" name="phone" type="tel" placeholder="Optional" style={{"height": "47px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-68" />
          <p data-err="phone" style={{"margin": "0", "display": "none", "fontSize": "12.5px", "color": "#A81E1E"}}></p>
        </div>
      </div>

      <div data-scale-field="" style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
        <label htmlFor="ct-scale" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"How big is the operation?"}</label>
        <input id="ct-scale" name="scale" type="text" placeholder="e.g. 3 campuses, 1,400 students" style={{"height": "47px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-69" />
      </div>

      <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
        <div style={{"display": "flex", "alignItems": "baseline", "justifyContent": "space-between", "gap": "10px"}}>
          <label htmlFor="ct-msg" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"Message"}</label>
          <span data-counter="" style={{"fontSize": "12px", "color": "#8F918F", "fontVariantNumeric": "tabular-nums"}}>{"0 / 600"}</span>
        </div>
        <textarea id="ct-msg" name="message" rows={5} maxLength={600} placeholder="What you use today, and what is not working" style={{"padding": "12px 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "lineHeight": "1.55", "color": "#212121", "background": "#FBFBFC", "outline": "none", "resize": "vertical", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-70"></textarea>
      </div>

      <button type="submit" style={{"height": "52px", "border": "0", "borderRadius": "11px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "cursor": "pointer", "transition": "transform 200ms ease, box-shadow 200ms ease, background 200ms ease"}} className="ref-state-71">{"Send message"}</button>
      <p data-status="" style={{"margin": "0", "fontSize": "12.5px", "lineHeight": "1.5", "color": "#8F918F"}}>{"We'll send these details straight to our team."}</p>
    </form>
  </div>
</section>

</main><footer style={{"background": "#fff", "borderTop": "1px solid #EDEFF4", "padding": "clamp(48px,6vw,72px) 24px 32px"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "44px"}}>
    <div style={{"display": "flex", "flexWrap": "wrap", "gap": "clamp(32px,5vw,72px)"}}>
      <div style={{"flex": "1 1 300px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
        <a href="/" style={{"display": "flex", "alignItems": "center", "gap": "11px", "alignSelf": "flex-start"}} aria-label="CodeX home">
          <svg width="32" height="27" viewBox="0 0 30 25" fill="none" aria-hidden="true" style={{"color": "#4A659D"}}><path d="M13.9493 14.0612C17.6443 8.2554 19.9781 5.27429 24.9001 0.372653C22.2283 -0.771525 20.3744 0.615508 16.5566 5.97844L11.8634 13.4094L6.77909 11.845C4.19062 11.2553 2.74787 10.8566 0 11.4539C4.25594 12.6334 6.59352 13.4114 10.5597 15.3649C7.42046 19.5739 5.37817 21.5893 1.04294 24.2298C3.51963 24.9652 4.89632 24.7958 7.30056 22.9261C9.57745 20.8802 10.8378 19.256 12.9063 16.5382C17.1978 19.0111 19.6243 20.6002 23.8572 22.4047C26.5897 22.9516 27.7376 22.8718 29.0719 21.4921C23.2733 19.015 19.927 17.3396 13.9493 14.0612Z" fill="currentColor"></path><path d="M22.5535 10.1503C19.5947 11.5749 17.9464 12.4495 14.9922 14.322L16.8174 15.3649C21.2796 12.4323 23.8297 11.0245 28.42 8.71626C26.3014 8.75601 25.015 9.05585 22.5535 10.1503Z" fill="currentColor"></path></svg>
          
        </a>
        <p style={{"margin": "0", "maxWidth": "300px", "fontSize": "15px", "lineHeight": "1.6", "color": "#555654"}}>{"Data platforms and organizational systems for institutions that need their records to agree."}</p>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Company"}</p>
        <a href="/about" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-72" >{"About"}</a>
        <a href="#top" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-73" >{"Contact"}</a>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Products"}</p>
        <a href="/products" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-74" >{"All products"}</a>
        <a href="/xvs" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-75" >{"XVS"}</a>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Legal"}</p>
        <a href="/privacy" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-76" >{"Privacy"}</a>
        <a href="/terms" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-77" >{"Terms"}</a>
      </div>
    </div>
    <div style={{"display": "flex", "flexWrap": "wrap", "gap": "12px", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "24px", "borderTop": "1px solid #F1F2F5"}}>
      <p style={{"margin": "0", "fontSize": "13.5px", "color": "#8F918F"}}>{"© 2026 CodeX Technologies"}</p>
      <p style={{"margin": "0", "fontSize": "13.5px", "color": "#8F918F"}}>{"Lagos, Nigeria"}</p>
    </div>
  </div>
</footer>

</div>
</div>
}
