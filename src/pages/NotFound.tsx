import { useEffect, useRef } from 'react'

export default function NotFound() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.title = "Page not found \u2014 CodeX"
    document.querySelector('meta[name="description"]')?.setAttribute("content", "That page does not exist. Find your way back to CodeX.")
    
  }, [])
  return <div ref={root} className="reference-page">

<div style={{"minHeight": "100vh", "display": "flex", "flexDirection": "column", "overflow": "clip"}}>

<header style={{"flex": "none", "borderBottom": "1px solid #EDEFF4", "background": "#fff"}}>
  <div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "16px 24px", "display": "flex", "alignItems": "center", "gap": "16px"}}>
    <a href="/" style={{"display": "flex", "alignItems": "center", "gap": "11px", "flex": "none"}} aria-label="CodeX home">
      <svg width="36" height="30" viewBox="0 0 30 25" fill="none" aria-hidden="true" style={{"display": "block", "color": "#4A659D"}}>
        <path d="M13.9493 14.0612C17.6443 8.2554 19.9781 5.27429 24.9001 0.372653C22.2283 -0.771525 20.3744 0.615508 16.5566 5.97844L11.8634 13.4094L6.77909 11.845C4.19062 11.2553 2.74787 10.8566 0 11.4539C4.25594 12.6334 6.59352 13.4114 10.5597 15.3649C7.42046 19.5739 5.37817 21.5893 1.04294 24.2298C3.51963 24.9652 4.89632 24.7958 7.30056 22.9261C9.57745 20.8802 10.8378 19.256 12.9063 16.5382C17.1978 19.0111 19.6243 20.6002 23.8572 22.4047C26.5897 22.9516 27.7376 22.8718 29.0719 21.4921C23.2733 19.015 19.927 17.3396 13.9493 14.0612Z" fill="currentColor"></path>
        <path d="M22.5535 10.1503C19.5947 11.5749 17.9464 12.4495 14.9922 14.322L16.8174 15.3649C21.2796 12.4323 23.8297 11.0245 28.42 8.71626C26.3014 8.75601 25.015 9.05585 22.5535 10.1503Z" fill="currentColor"></path>
      </svg>
      
    </a>
    <a href="/contact" style={{"marginLeft": "auto", "fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-79" >{"Contact"}</a>
  </div>
</header>

<main id="main-content" style={{"position": "relative", "flex": "1", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "clamp(48px,7vw,96px) 24px"}}>
  <div data-drift="" style={{"position": "absolute", "top": "-140px", "left": "50%", "width": "560px", "height": "560px", "marginLeft": "-280px", "borderRadius": "50%", "background": "radial-gradient(circle,rgba(74,101,157,.09),transparent 68%)", "filter": "blur(12px)", "pointerEvents": "none", "animation": "cx-drift 20s ease-in-out infinite"}}></div>

  <div style={{"position": "relative", "maxWidth": "660px", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "24px"}}>
    <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "8px 16px", "borderRadius": "999px", "background": "#fff", "border": "1px solid #E8EAF0", "boxShadow": "0 1px 2px rgba(48,58,81,.04)"}}>
      <span data-blip="" style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#E33131", "animation": "cx-blip 2.4s ease-in-out infinite"}}></span>
      <span style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654", "fontVariantNumeric": "tabular-nums"}}>{"404 · record not found"}</span>
    </div>

    <h1 style={{"margin": "0", "fontSize": "clamp(38px,6vw,72px)", "lineHeight": "1.02", "letterSpacing": "-.04em", "fontWeight": "600", "textWrap": "balance"}}>{"This page is not in the register"}</h1>

    <p style={{"margin": "0", "maxWidth": "480px", "fontSize": "clamp(16px,1.5vw,18.5px)", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"The link may be out of date, or the page may have moved. Nothing has been lost — try one of these instead."}</p>

    <div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "center", "gap": "12px", "marginTop": "2px"}}>
      <a href="/" style={{"display": "inline-flex", "alignItems": "center", "gap": "9px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "padding": "15px 26px", "borderRadius": "12px", "boxShadow": "0 2px 4px rgba(48,58,81,.14)", "transition": "transform 220ms ease, box-shadow 220ms ease, background 220ms ease"}} className="ref-state-80" >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H6"></path><path d="m12 19-7-7 7-7"></path></svg>{"\n        Back to home\n      "}</a>
      <a href="/contact" style={{"display": "inline-flex", "alignItems": "center", "background": "#fff", "color": "#212121", "fontSize": "16px", "fontWeight": "500", "padding": "15px 26px", "borderRadius": "12px", "border": "1px solid #E3E6ED", "transition": "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease"}} className="ref-state-81" >{"Report a broken link"}</a>
    </div>

    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 180px),1fr))", "gap": "12px", "width": "100%", "marginTop": "clamp(16px,3vw,32px)"}}>
      <a href="/products" style={{"display": "flex", "flexDirection": "column", "gap": "5px", "textAlign": "left", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "16px 18px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-82" >
        <span style={{"fontSize": "15px", "fontWeight": "600", "color": "#212121", "letterSpacing": "-.015em"}}>{"Products"}</span>
        <span style={{"fontSize": "13.5px", "lineHeight": "1.5", "color": "#8F918F"}}>{"The CodeX portfolio"}</span>
      </a>
      <a href="/xvs" style={{"display": "flex", "flexDirection": "column", "gap": "5px", "textAlign": "left", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "16px 18px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-83" >
        <span style={{"fontSize": "15px", "fontWeight": "600", "color": "#212121", "letterSpacing": "-.015em"}}>{"XVS"}</span>
        <span style={{"fontSize": "13.5px", "lineHeight": "1.5", "color": "#8F918F"}}>{"School management platform"}</span>
      </a>
      <a href="/about" style={{"display": "flex", "flexDirection": "column", "gap": "5px", "textAlign": "left", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "16px 18px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-84" >
        <span style={{"fontSize": "15px", "fontWeight": "600", "color": "#212121", "letterSpacing": "-.015em"}}>{"About"}</span>
        <span style={{"fontSize": "13.5px", "lineHeight": "1.5", "color": "#8F918F"}}>{"How we work"}</span>
      </a>
    </div>
  </div>
</main>

<footer style={{"flex": "none", "background": "#fff", "borderTop": "1px solid #EDEFF4", "padding": "24px"}}>
  <div style={{"maxWidth": "1240px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "gap": "12px", "justifyContent": "space-between", "alignItems": "center"}}>
    <p style={{"margin": "0", "fontSize": "13.5px", "color": "#8F918F"}}>{"© 2026 CodeX Technologies"}</p>
    <p style={{"margin": "0", "fontSize": "13.5px", "color": "#8F918F"}}>{"Lagos, Nigeria"}</p>
  </div>
</footer>

</div>
</div>
}
