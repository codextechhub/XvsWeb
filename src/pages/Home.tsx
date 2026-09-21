import { useEffect, useRef } from 'react'
import { submitEmail } from '../submitEmail'
import PageMotion from './Home.motion.js'

export default function Home() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.title = "XVS \u2014 School management platform | CodeX"
    document.querySelector('meta[name="description"]')?.setAttribute("content", "XVS is a school management platform for single campuses and multi-branch groups: institutions, roles, attendance, fees, imports and reporting on one governed record.")
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
      <a href="/" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-1" >{"Home"}</a>
      <a href="/products" style={{"fontSize": "15px", "fontWeight": "500", "color": "#212121"}} className="ref-state-2" >{"Products"}</a>
      <a href="/about" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-3" >{"About"}</a>
      <a href="/contact" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-4" >{"Contact"}</a>
      <a href="#demo" style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "background": "#4A659D", "color": "#fff", "fontSize": "15px", "fontWeight": "500", "padding": "11px 20px", "borderRadius": "10px", "boxShadow": "0 1px 2px rgba(48,58,81,.16)", "transition": "transform 200ms ease, box-shadow 200ms ease, background 200ms ease"}} className="ref-state-5" >{"Book a Demo"}</a>
    </nav>
    <div data-nav-panel="" style={{"display": "none", "width": "100%", "flexDirection": "column", "gap": "2px", "paddingTop": "10px", "borderTop": "1px solid #EDEFF4"}}>
      <a href="/" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Home"}</a>
      <a href="/products" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#212121"}} >{"Products"}</a>
      <a href="/about" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"About"}</a>
      <a href="/contact" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Contact"}</a>
      <a href="#demo" style={{"marginTop": "8px", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "50px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "borderRadius": "11px"}} >{"Book a Demo"}</a>
    </div>
  </div>
</header><main id="main-content">

<section style={{"position": "relative", "padding": "clamp(32px,4.5vw,64px) 24px clamp(28px,3.5vw,44px)"}}>
  <div data-drift="" style={{"position": "absolute", "top": "-190px", "left": "8%", "width": "520px", "height": "520px", "borderRadius": "50%", "background": "radial-gradient(circle,rgba(74,101,157,.10),transparent 68%)", "filter": "blur(12px)", "pointerEvents": "none", "animation": "cx-drift 18s ease-in-out infinite"}}></div>

  <div style={{"position": "relative", "maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "20px"}}>
    <div style={{"display": "flex", "alignItems": "center", "gap": "11px"}}>
      <span style={{"display": "grid", "placeItems": "center", "width": "40px", "height": "40px", "borderRadius": "12px", "background": "#303A51", "flex": "none"}}>
        <svg width="20" height="17" viewBox="0 0 30 25" fill="none" aria-hidden="true" style={{"color": "#fff"}}><path d="M13.9493 14.0612C17.6443 8.2554 19.9781 5.27429 24.9001 0.372653C22.2283 -0.771525 20.3744 0.615508 16.5566 5.97844L11.8634 13.4094L6.77909 11.845C4.19062 11.2553 2.74787 10.8566 0 11.4539C4.25594 12.6334 6.59352 13.4114 10.5597 15.3649C7.42046 19.5739 5.37817 21.5893 1.04294 24.2298C3.51963 24.9652 4.89632 24.7958 7.30056 22.9261C9.57745 20.8802 10.8378 19.256 12.9063 16.5382C17.1978 19.0111 19.6243 20.6002 23.8572 22.4047C26.5897 22.9516 27.7376 22.8718 29.0719 21.4921C23.2733 19.015 19.927 17.3396 13.9493 14.0612Z" fill="currentColor"></path></svg>
      </span>
      <div style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "1px"}}>
        <span style={{"fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em", "lineHeight": "1.1"}}>{"XVS"}</span>
        <span style={{"fontSize": "11.5px", "color": "#5C5D5C"}}>{"CodeX Vision System"}</span>
      </div>
    </div>
    <h1 style={{"margin": "0", "maxWidth": "20ch", "fontSize": "clamp(36px,5.2vw,62px)", "lineHeight": "1.04", "letterSpacing": "-.035em", "fontWeight": "600", "textWrap": "balance"}}>{"One system for every campus, every record, every day"}</h1>
    <p style={{"margin": "0", "maxWidth": "600px", "fontSize": "clamp(16px,1.4vw,18.5px)", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"A school management platform for educational institutions — from a single campus to a multi-branch group. Institutions, people, attendance, fees, timetables and reporting on one governed record."}</p>
    <div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "center", "gap": "12px", "marginTop": "2px"}}>
      <a href="#demo" style={{"display": "inline-flex", "alignItems": "center", "gap": "9px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "padding": "15px 26px", "borderRadius": "12px", "boxShadow": "0 2px 4px rgba(48,58,81,.14)", "transition": "transform 220ms ease, box-shadow 220ms ease, background 220ms ease"}} className="ref-state-6" >{"\n        Book a Demo\n        "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13"></path><path d="m12 5 7 7-7 7"></path></svg>
      </a>
      <a href="#showcase" data-scroll="" style={{"display": "inline-flex", "alignItems": "center", "gap": "9px", "background": "#fff", "color": "#212121", "fontSize": "16px", "fontWeight": "500", "padding": "15px 26px", "borderRadius": "12px", "border": "1px solid #E3E6ED", "transition": "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease"}} className="ref-state-7" >{"\n        See it in action\n        "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v13"></path><path d="m5 12 7 7 7-7"></path></svg>
      </a>
    </div>
  </div>

  <div data-parallax="1.4" style={{"position": "relative", "maxWidth": "1000px", "margin": "clamp(30px,4vw,56px) auto 0"}}>
    <div data-hero-console="" data-float="" style={{"animation": "cx-float-c 13s ease-in-out infinite", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "clamp(14px,1.6vw,20px)", "boxShadow": "0 44px 96px rgba(48,58,81,.14),0 4px 14px rgba(48,58,81,.05)", "overflow": "hidden"}}>
      <div style={{"display": "flex", "alignItems": "center", "gap": "9px", "padding": "12px 16px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}>
        <span style={{"width": "8px", "height": "8px", "borderRadius": "50%", "background": "#DBE0EB"}}></span>
        <span style={{"width": "8px", "height": "8px", "borderRadius": "50%", "background": "#DBE0EB"}}></span>
        <span style={{"width": "8px", "height": "8px", "borderRadius": "50%", "background": "#DBE0EB"}}></span>
        <span style={{"marginLeft": "8px", "fontSize": "11.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"XVS · Platform overview"}</span>
        <span style={{"marginLeft": "auto", "display": "flex", "alignItems": "center", "gap": "7px"}}>
          <span data-pulse="" style={{"width": "6px", "height": "6px", "borderRadius": "50%", "background": "#16A34A", "animation": "cx-pulse 2.4s ease-in-out infinite"}}></span>
          <span style={{"fontSize": "10.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Live"}</span>
        </span>
      </div>
      <div style={{"display": "flex", "minHeight": "clamp(240px,28vw,330px)"}}>
        <div style={{"flex": "none", "width": "clamp(52px,9vw,168px)", "borderRight": "1px solid #F1F2F5", "padding": "14px 10px", "display": "flex", "flexDirection": "column", "gap": "7px", "background": "#FCFCFD", "overflow": "hidden"}}>
          <span data-nav-row="" style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 9px", "borderRadius": "9px", "background": "rgba(74,101,157,.10)", "transition": "background 400ms ease"}}><span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#4A659D", "flex": "none"}}></span><span style={{"flex": "1", "minWidth": "0", "fontSize": "11px", "fontWeight": "500", "color": "#3B5482", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"Overview"}</span></span>
          <span data-nav-row="" style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 9px", "borderRadius": "9px", "transition": "background 400ms ease"}}><span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#DBE0EB", "flex": "none"}}></span><span style={{"flex": "1", "minWidth": "0", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"Schools"}</span></span>
          <span data-nav-row="" style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 9px", "borderRadius": "9px", "transition": "background 400ms ease"}}><span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#DBE0EB", "flex": "none"}}></span><span style={{"flex": "1", "minWidth": "0", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"People"}</span></span>
          <span data-nav-row="" style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 9px", "borderRadius": "9px", "transition": "background 400ms ease"}}><span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#DBE0EB", "flex": "none"}}></span><span style={{"flex": "1", "minWidth": "0", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"Fees"}</span></span>
          <span data-nav-row="" style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "8px 9px", "borderRadius": "9px", "transition": "background 400ms ease"}}><span style={{"width": "14px", "height": "14px", "borderRadius": "4px", "background": "#DBE0EB", "flex": "none"}}></span><span style={{"flex": "1", "minWidth": "0", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"Reports"}</span></span>
        </div>
        <div style={{"flex": "1", "minWidth": "0", "padding": "16px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 108px),1fr))", "gap": "10px"}}>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "12px", "padding": "11px 12px", "display": "flex", "flexDirection": "column", "gap": "5px"}}>
              <span style={{"fontSize": "10.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Schools"}</span>
              <span data-hcount="9" style={{"fontSize": "21px", "fontWeight": "600", "letterSpacing": "-.03em", "lineHeight": "1.1", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
            </div>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "12px", "padding": "11px 12px", "display": "flex", "flexDirection": "column", "gap": "5px"}}>
              <span style={{"fontSize": "10.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Branches"}</span>
              <span data-hcount="24" style={{"fontSize": "21px", "fontWeight": "600", "letterSpacing": "-.03em", "lineHeight": "1.1", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
            </div>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "12px", "padding": "11px 12px", "display": "flex", "flexDirection": "column", "gap": "5px"}}>
              <span style={{"fontSize": "10.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Students"}</span>
              <span data-hcount="8640" style={{"fontSize": "21px", "fontWeight": "600", "letterSpacing": "-.03em", "lineHeight": "1.1", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
            </div>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "12px", "padding": "11px 12px", "display": "flex", "flexDirection": "column", "gap": "5px"}}>
              <span style={{"fontSize": "10.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Staff"}</span>
              <span data-hcount="640" style={{"fontSize": "21px", "fontWeight": "600", "letterSpacing": "-.03em", "lineHeight": "1.1", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
            </div>
          </div>
          <div style={{"flex": "1", "border": "1px solid #F1F2F5", "borderRadius": "14px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "11px", "minHeight": "0"}}>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "10px"}}>
              <span style={{"fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Enrolment by branch"}</span>
              <span style={{"fontSize": "11px", "fontWeight": "600", "color": "#0F6B32"}}>{"▲ 6% this term"}</span>
            </div>
            <div style={{"flex": "1", "display": "flex", "alignItems": "flex-end", "gap": "7px", "minHeight": "74px"}}>
              <span data-hbar="" style={{"flex": "1", "height": "4%", "borderRadius": "5px 5px 2px 2px", "background": "#DBE0EB", "transition": "height 900ms cubic-bezier(.16,1,.3,1)"}}></span>
              <span data-hbar="" style={{"flex": "1", "height": "4%", "borderRadius": "5px 5px 2px 2px", "background": "#DBE0EB", "transition": "height 900ms cubic-bezier(.16,1,.3,1)"}}></span>
              <span data-hbar="" style={{"flex": "1", "height": "4%", "borderRadius": "5px 5px 2px 2px", "background": "#DBE0EB", "transition": "height 900ms cubic-bezier(.16,1,.3,1)"}}></span>
              <span data-hbar="" style={{"flex": "1", "height": "4%", "borderRadius": "5px 5px 2px 2px", "background": "#4A659D", "transition": "height 900ms cubic-bezier(.16,1,.3,1)"}}></span>
              <span data-hbar="" style={{"flex": "1", "height": "4%", "borderRadius": "5px 5px 2px 2px", "background": "#DBE0EB", "transition": "height 900ms cubic-bezier(.16,1,.3,1)"}}></span>
              <span data-hbar="" style={{"flex": "1", "height": "4%", "borderRadius": "5px 5px 2px 2px", "background": "#DBE0EB", "transition": "height 900ms cubic-bezier(.16,1,.3,1)"}}></span>
              <span data-hbar="" style={{"flex": "1", "height": "4%", "borderRadius": "5px 5px 2px 2px", "background": "#DBE0EB", "transition": "height 900ms cubic-bezier(.16,1,.3,1)"}}></span>
              <span data-hbar="" style={{"flex": "1", "height": "4%", "borderRadius": "5px 5px 2px 2px", "background": "#DBE0EB", "transition": "height 900ms cubic-bezier(.16,1,.3,1)"}}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="showcase" data-reveal="" style={{"padding": "clamp(48px,6vw,84px) 0 clamp(48px,6vw,84px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "padding": "0 24px", "display": "flex", "flexWrap": "wrap", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "20px"}}>
    <div style={{"maxWidth": "560px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
      <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"The platform"}</span>
      <h2 style={{"margin": "0", "fontSize": "clamp(26px,3vw,38px)", "lineHeight": "1.12", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Every screen a school actually works in"}</h2>
    </div>
  </div>

  <div data-rail="" style={{"marginTop": "clamp(24px,3vw,40px)", "overflow": "hidden", "maskImage": "linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)", "WebkitMaskImage": "linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)"}}>
    <div data-rail-track="" data-dir="-1" style={{"display": "flex", "gap": "18px", "padding": "6px 0", "willChange": "transform"}}>
      <div style={{"flex": "none", "width": "340px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Platform overview"}</span></div>
        <div style={{"height": "186px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "7px"}}>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "9px", "padding": "7px 8px", "display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "9.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Schools"}</span><span style={{"fontSize": "15px", "fontWeight": "600", "letterSpacing": "-.02em", "lineHeight": "1.1", "fontVariantNumeric": "tabular-nums"}}>{"9"}</span></div>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "9px", "padding": "7px 8px", "display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "9.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Branches"}</span><span style={{"fontSize": "15px", "fontWeight": "600", "letterSpacing": "-.02em", "lineHeight": "1.1", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"24"}</span></div>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "9px", "padding": "7px 8px", "display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "9.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Students"}</span><span style={{"fontSize": "15px", "fontWeight": "600", "letterSpacing": "-.02em", "lineHeight": "1.1", "fontVariantNumeric": "tabular-nums"}}>{"8,640"}</span></div>
          </div>
          <div style={{"flex": "1", "display": "flex", "flexDirection": "column", "gap": "6px", "minHeight": "0"}}>
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "8px"}}><span style={{"fontSize": "9.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Records processed"}</span><span style={{"fontSize": "9.5px", "fontWeight": "600", "color": "#0F6B32"}}>{"▲ 8%"}</span></div>
            <div style={{"flex": "1", "display": "flex", "alignItems": "flex-end", "gap": "5px", "minHeight": "0"}}><span style={{"flex": "1", "height": "40%", "borderRadius": "3px", "background": "#F1F2F5"}}></span><span style={{"flex": "1", "height": "62%", "borderRadius": "3px", "background": "#F1F2F5"}}></span><span style={{"flex": "1", "height": "50%", "borderRadius": "3px", "background": "#DBE0EB"}}></span><span style={{"flex": "1", "height": "78%", "borderRadius": "3px", "background": "#4A659D"}}></span><span style={{"flex": "1", "height": "56%", "borderRadius": "3px", "background": "#F1F2F5"}}></span><span style={{"flex": "1", "height": "70%", "borderRadius": "3px", "background": "#F1F2F5"}}></span></div>
            <div style={{"display": "flex", "justifyContent": "space-between", "gap": "4px"}}><span style={{"fontSize": "9px", "color": "#8F918F"}}>{"Sep"}</span><span style={{"fontSize": "9px", "color": "#8F918F"}}>{"Oct"}</span><span style={{"fontSize": "9px", "color": "#8F918F"}}>{"Nov"}</span><span style={{"fontSize": "9px", "color": "#8F918F"}}>{"Dec"}</span><span style={{"fontSize": "9px", "color": "#8F918F"}}>{"Jan"}</span><span style={{"fontSize": "9px", "color": "#8F918F"}}>{"Feb"}</span></div>
          </div>
        </div>
      </div>
      <div style={{"flex": "none", "width": "340px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"School register"}</span></div>
        <div style={{"height": "186px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "7px"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "height": "26px", "padding": "0 9px", "border": "1px solid #F1F2F5", "borderRadius": "8px", "background": "#FBFBFC"}}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8F918F" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
            <span style={{"fontSize": "9.5px", "color": "#8F918F"}}>{"Search schools"}</span>
          </div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "0 2px"}}><span style={{"flex": "1", "fontSize": "9px", "fontWeight": "600", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#8F918F"}}>{"School"}</span><span style={{"width": "34px", "fontSize": "9px", "fontWeight": "600", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Br."}</span><span style={{"width": "46px", "fontSize": "9px", "fontWeight": "600", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Status"}</span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "5px 2px", "borderTop": "1px solid #F7F7F7"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "10px", "fontWeight": "500", "color": "#212121", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"Grace Academy"}</span><span style={{"width": "34px", "fontSize": "10px", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"4"}</span><span style={{"width": "46px", "fontSize": "8.5px", "fontWeight": "600", "padding": "3px 6px", "borderRadius": "999px", "background": "rgba(22,163,74,.14)", "color": "#0F6B32", "textAlign": "center"}}>{"Active"}</span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "5px 2px", "borderTop": "1px solid #F7F7F7"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "10px", "fontWeight": "500", "color": "#212121", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"Northgate Group"}</span><span style={{"width": "34px", "fontSize": "10px", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"7"}</span><span style={{"width": "46px", "fontSize": "8.5px", "fontWeight": "600", "padding": "3px 6px", "borderRadius": "999px", "background": "rgba(22,163,74,.14)", "color": "#0F6B32", "textAlign": "center"}}>{"Active"}</span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "5px 2px", "borderTop": "1px solid #F7F7F7"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "10px", "fontWeight": "500", "color": "#212121", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"Palm Valley Schools"}</span><span style={{"width": "34px", "fontSize": "10px", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"2"}</span><span style={{"width": "46px", "fontSize": "8.5px", "fontWeight": "600", "padding": "3px 6px", "borderRadius": "999px", "background": "rgba(245,158,11,.16)", "color": "#8A5A08", "textAlign": "center"}}>{"Onboard"}</span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "5px 2px", "borderTop": "1px solid #F7F7F7"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "10px", "fontWeight": "500", "color": "#212121", "overflow": "hidden", "textOverflow": "ellipsis", "whiteSpace": "nowrap"}}>{"Crest College"}</span><span style={{"width": "34px", "fontSize": "10px", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"1"}</span><span style={{"width": "46px", "fontSize": "8.5px", "fontWeight": "600", "padding": "3px 6px", "borderRadius": "999px", "background": "rgba(74,101,157,.14)", "color": "#4A659D", "textAlign": "center"}}>{"Review"}</span></div>
        </div>
      </div>
      <div style={{"flex": "none", "width": "340px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Roles & permissions"}</span></div>
        <div style={{"height": "186px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "7px"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "6px"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "9px", "fontWeight": "600", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Role"}</span><span style={{"width": "30px", "fontSize": "9px", "fontWeight": "500", "color": "#8F918F", "textAlign": "center"}}>{"Fees"}</span><span style={{"width": "30px", "fontSize": "9px", "fontWeight": "500", "color": "#8F918F", "textAlign": "center"}}>{"Att."}</span><span style={{"width": "30px", "fontSize": "9px", "fontWeight": "500", "color": "#8F918F", "textAlign": "center"}}>{"Recs"}</span><span style={{"width": "30px", "fontSize": "9px", "fontWeight": "500", "color": "#8F918F", "textAlign": "center"}}>{"Pay"}</span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 0", "borderTop": "1px solid #F7F7F7"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "10px", "fontWeight": "500", "color": "#212121"}}>{"Head office"}</span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 0", "borderTop": "1px solid #F7F7F7"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "10px", "fontWeight": "500", "color": "#212121"}}>{"Bursar"}</span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><span style={{"width": "9px", "height": "2px", "borderRadius": "2px", "background": "#C9CDD6"}}></span></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><span style={{"width": "9px", "height": "2px", "borderRadius": "2px", "background": "#C9CDD6"}}></span></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><span style={{"width": "9px", "height": "2px", "borderRadius": "2px", "background": "#C9CDD6"}}></span></span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 0", "borderTop": "1px solid #F7F7F7"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "10px", "fontWeight": "500", "color": "#212121"}}>{"Registrar"}</span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><span style={{"width": "9px", "height": "2px", "borderRadius": "2px", "background": "#C9CDD6"}}></span></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><span style={{"width": "9px", "height": "2px", "borderRadius": "2px", "background": "#C9CDD6"}}></span></span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "6px", "padding": "6px 0", "borderTop": "1px solid #F7F7F7"}}><span style={{"flex": "1", "minWidth": "0", "fontSize": "10px", "fontWeight": "500", "color": "#212121"}}>{"Teacher"}</span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><span style={{"width": "9px", "height": "2px", "borderRadius": "2px", "background": "#C9CDD6"}}></span></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><span style={{"width": "9px", "height": "2px", "borderRadius": "2px", "background": "#C9CDD6"}}></span></span><span style={{"width": "30px", "display": "grid", "placeItems": "center"}}><span style={{"width": "9px", "height": "2px", "borderRadius": "2px", "background": "#C9CDD6"}}></span></span></div>
        </div>
      </div>
      <div style={{"flex": "none", "width": "340px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Import batch"}</span></div>
        <div style={{"height": "186px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "padding": "7px 9px", "border": "1px solid #F1F2F5", "borderRadius": "9px"}}>
            <span style={{"display": "grid", "placeItems": "center", "width": "24px", "height": "24px", "borderRadius": "7px", "background": "rgba(74,101,157,.10)", "color": "#4A659D", "flex": "none"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path></svg></span>
            <span style={{"flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "1px"}}><span style={{"fontSize": "10px", "fontWeight": "500", "color": "#212121"}}>{"students-term2.csv"}</span><span style={{"fontSize": "9px", "color": "#8F918F"}}>{"1,248 rows"}</span></span>
            <span style={{"fontSize": "10px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"72%"}</span>
          </div>
          <span style={{"height": "5px", "borderRadius": "4px", "background": "#F1F2F5", "position": "relative", "overflow": "hidden"}}><span style={{"position": "absolute", "inset": "0", "width": "72%", "borderRadius": "4px", "background": "#4A659D"}}></span></span>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
            <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "5px 8px", "borderRadius": "8px", "background": "rgba(22,163,74,.07)"}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0F6B32" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span style={{"flex": "1", "minWidth": "0", "fontSize": "9.5px", "color": "#555654"}}>{"Identity fields"}</span><span style={{"fontSize": "9px", "fontWeight": "600", "color": "#0F6B32"}}>{"624 valid"}</span></div>
            <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "5px 8px", "borderRadius": "8px", "background": "rgba(22,163,74,.07)"}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0F6B32" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg><span style={{"flex": "1", "minWidth": "0", "fontSize": "9.5px", "color": "#555654"}}>{"Guardian contacts"}</span><span style={{"fontSize": "9px", "fontWeight": "600", "color": "#0F6B32"}}>{"623 valid"}</span></div>
            <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "5px 8px", "borderRadius": "8px", "background": "rgba(245,158,11,.10)"}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8A5A08" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M12 8v5M12 16.5v.5"></path><circle cx="12" cy="12" r="9"></circle></svg><span style={{"flex": "1", "minWidth": "0", "fontSize": "9.5px", "color": "#555654"}}>{"Class placement"}</span><span style={{"fontSize": "9px", "fontWeight": "600", "color": "#8A5A08"}}>{"1 flagged"}</span></div>
          </div>
        </div>
      </div>
      <div style={{"flex": "none", "width": "340px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Attendance"}</span></div>
        <div style={{"height": "186px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "8px"}}><span style={{"fontSize": "9.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"JSS 2 · Ikeja · week 6"}</span><span style={{"fontSize": "10px", "fontWeight": "600", "color": "#0F6B32", "fontVariantNumeric": "tabular-nums"}}>{"96%"}</span></div>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(12,1fr)", "gap": "4px"}}>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
              <span data-tile="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#16A34A"}}></span>
            
          </div>
          <div style={{"marginTop": "auto", "display": "flex", "flexWrap": "wrap", "gap": "9px"}}>
            <span style={{"display": "inline-flex", "alignItems": "center", "gap": "4px", "fontSize": "9px", "color": "#8F918F"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "2px", "background": "#16A34A"}}></span>{"Present 42"}</span>
            <span style={{"display": "inline-flex", "alignItems": "center", "gap": "4px", "fontSize": "9px", "color": "#8F918F"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "2px", "background": "#F59E0B"}}></span>{"Late 4"}</span>
            <span style={{"display": "inline-flex", "alignItems": "center", "gap": "4px", "fontSize": "9px", "color": "#8F918F"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "2px", "background": "#E33131"}}></span>{"Absent 2"}</span>
          </div>
        </div>
      </div>
    </div>

    <div data-rail-track="" data-dir="1" style={{"display": "flex", "gap": "18px", "padding": "14px 0 6px", "willChange": "transform"}}>
      <div style={{"flex": "none", "width": "300px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Fees & billing"}</span></div>
        <div style={{"height": "162px", "padding": "13px", "display": "flex", "alignItems": "center", "gap": "12px"}}>
          <div style={{"position": "relative", "width": "70px", "height": "70px", "flex": "none"}}>
            <svg viewBox="0 0 112 112" aria-hidden="true" style={{"width": "100%", "height": "100%", "transform": "rotate(-90deg)"}}><circle cx="56" cy="56" r="46" fill="none" stroke="#F1F2F5" strokeWidth="13"></circle><circle cx="56" cy="56" r="46" fill="none" stroke="#4A659D" strokeWidth="13" strokeLinecap="round" strokeDasharray="289" strokeDashoffset="64"></circle></svg>
            <span style={{"position": "absolute", "inset": "0", "display": "grid", "placeItems": "center"}}><span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "-.02em", "fontVariantNumeric": "tabular-nums"}}>{"78%"}</span></span>
          </div>
          <div style={{"flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
            <span style={{"fontSize": "9px", "fontWeight": "600", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Term 2 fees"}</span>
            <span style={{"fontSize": "13px", "fontWeight": "600", "letterSpacing": "-.02em", "fontVariantNumeric": "tabular-nums"}}>{"₦48.2M"}</span>
            <span style={{"fontSize": "9.5px", "color": "#5C5D5C"}}>{"of ₦62M billed"}</span>
            <span style={{"fontSize": "9.5px", "color": "#8A5A08", "fontWeight": "500"}}>{"₦13.8M outstanding"}</span>
          </div>
        </div>
      </div>
      <div style={{"flex": "none", "width": "300px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Timetable"}</span></div>
        <div style={{"height": "162px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(5,1fr)", "gap": "5px"}}><span style={{"fontSize": "9px", "fontWeight": "600", "color": "#8F918F", "textAlign": "center"}}>{"Mon"}</span><span style={{"fontSize": "9px", "fontWeight": "600", "color": "#8F918F", "textAlign": "center"}}>{"Tue"}</span><span style={{"fontSize": "9px", "fontWeight": "600", "color": "#8F918F", "textAlign": "center"}}>{"Wed"}</span><span style={{"fontSize": "9px", "fontWeight": "600", "color": "#8F918F", "textAlign": "center"}}>{"Thu"}</span><span style={{"fontSize": "9px", "fontWeight": "600", "color": "#8F918F", "textAlign": "center"}}>{"Fri"}</span></div>
          <div style={{"flex": "1", "display": "grid", "gridTemplateColumns": "repeat(5,1fr)", "gridAutoRows": "1fr", "gap": "5px", "minHeight": "0"}}>
            <span style={{"borderRadius": "5px", "background": "#DBE0EB", "display": "grid", "placeItems": "center", "fontSize": "8.5px", "fontWeight": "600", "color": "#3E4657"}}>{"Mth"}</span><span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span><span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span><span style={{"borderRadius": "5px", "background": "rgba(74,101,157,.20)", "display": "grid", "placeItems": "center", "fontSize": "8.5px", "fontWeight": "600", "color": "#3B5482"}}>{"Eng"}</span><span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span>
            <span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span><span style={{"borderRadius": "5px", "background": "#DBE0EB", "display": "grid", "placeItems": "center", "fontSize": "8.5px", "fontWeight": "600", "color": "#3E4657"}}>{"Bio"}</span><span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span><span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span><span style={{"borderRadius": "5px", "background": "#DBE0EB", "display": "grid", "placeItems": "center", "fontSize": "8.5px", "fontWeight": "600", "color": "#3E4657"}}>{"Mth"}</span>
            <span style={{"borderRadius": "5px", "background": "rgba(74,101,157,.20)", "display": "grid", "placeItems": "center", "fontSize": "8.5px", "fontWeight": "600", "color": "#3B5482"}}>{"Chm"}</span><span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span><span style={{"borderRadius": "5px", "background": "#DBE0EB", "display": "grid", "placeItems": "center", "fontSize": "8.5px", "fontWeight": "600", "color": "#3E4657"}}>{"Hist"}</span><span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span><span style={{"borderRadius": "5px", "background": "#F7F7F7"}}></span>
          </div>
        </div>
      </div>
      <div style={{"flex": "none", "width": "300px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Export builder"}</span></div>
        <div style={{"height": "162px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "7px"}}>
            <span style={{"flex": "1", "minWidth": "0", "display": "flex", "alignItems": "center", "height": "22px", "padding": "0 8px", "border": "1px solid #F1F2F5", "borderRadius": "7px", "fontSize": "9.5px", "color": "#5C5D5C"}}>{"Fees register · term 2"}</span>
            <span style={{"display": "grid", "placeItems": "center", "height": "22px", "width": "52px", "borderRadius": "7px", "background": "#4A659D", "fontSize": "9px", "fontWeight": "600", "color": "#fff"}}>{"Run"}</span>
          </div>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "5px"}}>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "9.5px", "color": "#555654"}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4A659D" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{"Student name"}</span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "9.5px", "color": "#555654"}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4A659D" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{"Branch & class"}</span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "9.5px", "color": "#555654"}}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4A659D" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{"Amount billed"}</span>
            <span style={{"display": "flex", "alignItems": "center", "gap": "6px", "fontSize": "9.5px", "color": "#8F918F"}}><span style={{"width": "10px", "height": "10px", "border": "1.5px solid #DBE0EB", "borderRadius": "3px"}}></span>{"Guardian contact"}</span>
          </div>
          <span style={{"marginTop": "auto", "fontSize": "9px", "color": "#8F918F"}}>{"Last run 14 Mar · 3,180 rows"}</span>
        </div>
      </div>
      <div style={{"flex": "none", "width": "300px", "background": "#303A51", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.18)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "rgba(255,255,255,.06)", "borderBottom": "1px solid rgba(255,255,255,.08)"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#7FE3AE"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "rgba(255,255,255,.62)"}}>{"Audit events"}</span></div>
        <div style={{"height": "162px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
          <span style={{"fontSize": "9px", "lineHeight": "1.3", "color": "rgba(255,255,255,.88)", "fontVariantNumeric": "tabular-nums"}}>{"09:14 · export.run · Fees register"}</span>
          <span style={{"fontSize": "9px", "lineHeight": "1.3", "color": "rgba(255,255,255,.7)", "fontVariantNumeric": "tabular-nums"}}>{"09:02 · attendance.mark · JSS2"}</span>
          <span style={{"fontSize": "9px", "lineHeight": "1.3", "color": "rgba(255,255,255,.54)", "fontVariantNumeric": "tabular-nums"}}>{"08:47 · role.assign · Bursar"}</span>
          <span style={{"fontSize": "9px", "lineHeight": "1.3", "color": "rgba(255,255,255,.38)", "fontVariantNumeric": "tabular-nums"}}>{"08:31 · permission.deny · payroll.view"}</span>
          <span style={{"fontSize": "9px", "lineHeight": "1.3", "color": "rgba(255,255,255,.24)", "fontVariantNumeric": "tabular-nums"}}>{"08:12 · auth.login · 2 devices"}</span>
        </div>
      </div>
      <div style={{"flex": "none", "width": "300px", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "14px", "boxShadow": "0 14px 34px rgba(48,58,81,.08)", "overflow": "hidden"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "7px", "padding": "10px 13px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#DBE0EB"}}></span><span style={{"marginLeft": "6px", "fontSize": "11px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Parent portal"}</span></div>
        <div style={{"height": "162px", "padding": "13px", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "9px"}}>
            <span style={{"display": "grid", "placeItems": "center", "width": "30px", "height": "30px", "borderRadius": "50%", "background": "#DBE0EB", "fontSize": "10px", "fontWeight": "600", "color": "#3E4657", "flex": "none"}}>{"CO"}</span>
            <div style={{"flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "1px"}}><span style={{"fontSize": "10.5px", "fontWeight": "600", "color": "#212121"}}>{"Chidi Okonkwo"}</span><span style={{"fontSize": "9px", "color": "#8F918F"}}>{"JSS 2 · Ikeja"}</span></div>
          </div>
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(2,1fr)", "gap": "8px"}}>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "9px", "padding": "6px 8px", "display": "flex", "flexDirection": "column", "gap": "1px"}}><span style={{"fontSize": "8.5px", "fontWeight": "500", "color": "#8F918F"}}>{"Attendance"}</span><span style={{"fontSize": "13px", "fontWeight": "600", "letterSpacing": "-.02em", "color": "#0F6B32", "fontVariantNumeric": "tabular-nums"}}>{"97%"}</span></div>
            <div style={{"border": "1px solid #F1F2F5", "borderRadius": "9px", "padding": "6px 8px", "display": "flex", "flexDirection": "column", "gap": "1px"}}><span style={{"fontSize": "8.5px", "fontWeight": "500", "color": "#8F918F"}}>{"Fees due"}</span><span style={{"fontSize": "13px", "fontWeight": "600", "letterSpacing": "-.02em", "fontVariantNumeric": "tabular-nums"}}>{"₦0"}</span></div>
          </div>
          <span style={{"marginTop": "auto", "fontSize": "9px", "color": "#8F918F"}}>{"Term 2 report available 28 Mar"}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section data-reveal="" style={{"background": "#F7F7F7", "padding": "clamp(56px,7vw,104px) 24px"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "clamp(44px,6vw,92px)"}}>

    <div style={{"display": "flex", "flexWrap": "wrap", "flexDirection": "row", "alignItems": "center", "gap": "clamp(26px,4vw,64px)"}}>
      <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "15px"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Institutions"}</span>
        <h3 style={{"margin": "0", "fontSize": "clamp(24px,2.7vw,34px)", "lineHeight": "1.14", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"One school or twenty, structured the same way"}</h3>
        <p style={{"margin": "0", "maxWidth": "440px", "fontSize": "16px", "lineHeight": "1.65", "color": "#555654", "textWrap": "pretty"}}>{"Onboard a school, then add branches under it — each with its own students, staff and register, all rolling up to the group. Head office sees the whole picture; a branch head sees their branch, and nothing they should not."}</p>
      </div>
      <div data-frag="branches" style={{"flex": "1 1 380px", "minWidth": "0", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "16px", "padding": "16px", "boxShadow": "0 18px 44px rgba(48,58,81,.07)", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "10px"}}>
          <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Grace Academy"}</span>
          <span style={{"fontSize": "11px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "rgba(22,163,74,.12)", "color": "#0F6B32"}}>{"Active"}</span>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "7px"}}>
          <div data-brow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 11px", "borderRadius": "11px", "background": "#FBFBFC", "border": "1px solid #F1F2F5", "opacity": "0", "transform": "translateY(8px)", "transition": "opacity 460ms ease, transform 460ms ease"}}>
            <span style={{"display": "grid", "placeItems": "center", "width": "22px", "height": "22px", "borderRadius": "7px", "background": "rgba(74,101,157,.12)", "fontSize": "8.5px", "fontWeight": "600", "color": "#3B5482", "flex": "none"}}>{"IK"}</span>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12.5px", "fontWeight": "500", "color": "#212121"}}>{"Ikeja · main branch"}</span>
            <span data-bcount="1240" style={{"fontSize": "12px", "fontWeight": "600", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
          </div>
          <div data-brow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 11px", "borderRadius": "11px", "background": "#FBFBFC", "border": "1px solid #F1F2F5", "opacity": "0", "transform": "translateY(8px)", "transition": "opacity 460ms ease, transform 460ms ease"}}>
            <span style={{"display": "grid", "placeItems": "center", "width": "22px", "height": "22px", "borderRadius": "7px", "background": "rgba(74,101,157,.12)", "fontSize": "8.5px", "fontWeight": "600", "color": "#3B5482", "flex": "none"}}>{"IA"}</span>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12.5px", "fontWeight": "500", "color": "#212121"}}>{"Ikeja Annex"}</span>
            <span data-bcount="640" style={{"fontSize": "12px", "fontWeight": "600", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
          </div>
          <div data-brow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 11px", "borderRadius": "11px", "background": "#FBFBFC", "border": "1px solid #F1F2F5", "opacity": "0", "transform": "translateY(8px)", "transition": "opacity 460ms ease, transform 460ms ease"}}>
            <span style={{"display": "grid", "placeItems": "center", "width": "22px", "height": "22px", "borderRadius": "7px", "background": "rgba(74,101,157,.12)", "fontSize": "8.5px", "fontWeight": "600", "color": "#3B5482", "flex": "none"}}>{"LK"}</span>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12.5px", "fontWeight": "500", "color": "#212121"}}>{"Lekki campus"}</span>
            <span data-bcount="820" style={{"fontSize": "12px", "fontWeight": "600", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
          </div>
          <div data-brow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 11px", "borderRadius": "11px", "background": "#FBFBFC", "border": "1px solid #F1F2F5", "opacity": "0", "transform": "translateY(8px)", "transition": "opacity 460ms ease, transform 460ms ease"}}>
            <span style={{"display": "grid", "placeItems": "center", "width": "22px", "height": "22px", "borderRadius": "7px", "background": "rgba(74,101,157,.12)", "fontSize": "8.5px", "fontWeight": "600", "color": "#3B5482", "flex": "none"}}>{"YB"}</span>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12.5px", "fontWeight": "500", "color": "#212121"}}>{"Yaba campus"}</span>
            <span data-bcount="480" style={{"fontSize": "12px", "fontWeight": "600", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
          </div>
        </div>
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "10px", "paddingTop": "9px", "borderTop": "1px solid #F1F2F5"}}>
          <span style={{"fontSize": "12px", "color": "#5C5D5C"}}>{"Group total"}</span>
          <span data-bcount="3180" style={{"fontSize": "15px", "fontWeight": "600", "letterSpacing": "-.02em", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
        </div>
      </div>
    </div>

    <div style={{"display": "flex", "flexWrap": "wrap", "flexDirection": "row-reverse", "alignItems": "center", "gap": "clamp(26px,4vw,64px)"}}>
      <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "15px"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Governance"}</span>
        <h3 style={{"margin": "0", "fontSize": "clamp(24px,2.7vw,34px)", "lineHeight": "1.14", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Access granted by the action, not the job title"}</h3>
        <p style={{"margin": "0", "maxWidth": "440px", "fontSize": "16px", "lineHeight": "1.65", "color": "#555654", "textWrap": "pretty"}}>{"Roles are assembled from individual permission keys, so a bursar can collect fees without seeing payroll and a teacher can mark attendance without editing records. Every check is enforced server-side and written to the trail."}</p>
      </div>
      <div data-frag="perm" style={{"flex": "1 1 380px", "minWidth": "0", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "16px", "padding": "16px", "boxShadow": "0 18px 44px rgba(48,58,81,.07)", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Permission check"}</span>
        <div data-prow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 11px", "borderRadius": "11px", "border": "1px solid #F1F2F5", "opacity": "0", "transform": "translateX(-10px)", "transition": "opacity 440ms ease, transform 440ms ease, border-color 440ms ease"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F7F7", "fontSize": "10px", "fontWeight": "600", "color": "#555654", "flex": "none"}}>{"BU"}</span>
          <span style={{"flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "12.5px", "fontWeight": "500"}}>{"Bursar"}</span><span style={{"fontSize": "11px", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"fees.collect"}</span></span>
          <span data-ppill="" style={{"fontSize": "10.5px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "#F1F2F5", "color": "#5C5D5C", "flex": "none", "transition": "background 300ms ease, color 300ms ease"}}>{"Checking"}</span>
        </div>
        <div data-prow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 11px", "borderRadius": "11px", "border": "1px solid #F1F2F5", "opacity": "0", "transform": "translateX(-10px)", "transition": "opacity 440ms ease, transform 440ms ease, border-color 440ms ease"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F7F7", "fontSize": "10px", "fontWeight": "600", "color": "#555654", "flex": "none"}}>{"BU"}</span>
          <span style={{"flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "12.5px", "fontWeight": "500"}}>{"Bursar"}</span><span style={{"fontSize": "11px", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"payroll.view"}</span></span>
          <span data-ppill="" style={{"fontSize": "10.5px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "#F1F2F5", "color": "#5C5D5C", "flex": "none", "transition": "background 300ms ease, color 300ms ease"}}>{"Checking"}</span>
        </div>
        <div data-prow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 11px", "borderRadius": "11px", "border": "1px solid #F1F2F5", "opacity": "0", "transform": "translateX(-10px)", "transition": "opacity 440ms ease, transform 440ms ease, border-color 440ms ease"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F7F7", "fontSize": "10px", "fontWeight": "600", "color": "#555654", "flex": "none"}}>{"TE"}</span>
          <span style={{"flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "12.5px", "fontWeight": "500"}}>{"Teacher"}</span><span style={{"fontSize": "11px", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"attendance.mark"}</span></span>
          <span data-ppill="" style={{"fontSize": "10.5px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "#F1F2F5", "color": "#5C5D5C", "flex": "none", "transition": "background 300ms ease, color 300ms ease"}}>{"Checking"}</span>
        </div>
        <div data-prow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "10px 11px", "borderRadius": "11px", "border": "1px solid #F1F2F5", "opacity": "0", "transform": "translateX(-10px)", "transition": "opacity 440ms ease, transform 440ms ease, border-color 440ms ease"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "26px", "height": "26px", "borderRadius": "8px", "background": "#F7F7F7", "fontSize": "10px", "fontWeight": "600", "color": "#555654", "flex": "none"}}>{"TE"}</span>
          <span style={{"flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "12.5px", "fontWeight": "500"}}>{"Teacher"}</span><span style={{"fontSize": "11px", "color": "#5C5D5C", "fontVariantNumeric": "tabular-nums"}}>{"student.records.edit"}</span></span>
          <span data-ppill="" style={{"fontSize": "10.5px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "#F1F2F5", "color": "#5C5D5C", "flex": "none", "transition": "background 300ms ease, color 300ms ease"}}>{"Checking"}</span>
        </div>
      </div>
    </div>

    <div style={{"display": "flex", "flexWrap": "wrap", "flexDirection": "row", "alignItems": "center", "gap": "clamp(26px,4vw,64px)"}}>
      <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "15px"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Attendance"}</span>
        <h3 style={{"margin": "0", "fontSize": "clamp(24px,2.7vw,34px)", "lineHeight": "1.14", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Marked in class, visible the same morning"}</h3>
        <p style={{"margin": "0", "maxWidth": "440px", "fontSize": "16px", "lineHeight": "1.65", "color": "#555654", "textWrap": "pretty"}}>{"Teachers mark their own register where the class happens. Management sees capture rates by class, branch and term without chasing anyone, and a pattern of absence surfaces while it can still be acted on."}</p>
      </div>
      <div data-frag="attendance" style={{"flex": "1 1 380px", "minWidth": "0", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "16px", "padding": "16px", "boxShadow": "0 18px 44px rgba(48,58,81,.07)", "display": "flex", "flexDirection": "column", "gap": "11px"}}>
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "10px"}}>
          <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"This week"}</span>
          <span data-apct="" style={{"fontSize": "13px", "fontWeight": "600", "color": "#0F6B32", "fontVariantNumeric": "tabular-nums"}}>{"0%"}</span>
        </div>
        <div style={{"display": "grid", "gridTemplateColumns": "repeat(12,1fr)", "gap": "4px"}}>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
            <span data-acell="" style={{"aspectRatio": "1", "borderRadius": "3px", "background": "#F1F2F5", "transition": "background 400ms ease"}}></span>
          
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "7px", "paddingTop": "4px"}}>
          <div data-arow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "opacity": "0", "transition": "opacity 420ms ease"}}><span style={{"fontSize": "12px", "color": "#555654", "flex": "1"}}>{"JSS 2 · Ikeja"}</span><span style={{"height": "6px", "width": "96px", "borderRadius": "4px", "background": "#F1F2F5", "overflow": "hidden"}}><span data-abar="" style={{"display": "block", "height": "100%", "width": "0%", "background": "#16A34A", "transition": "width 900ms cubic-bezier(.16,1,.3,1)"}}></span></span></div>
          <div data-arow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "opacity": "0", "transition": "opacity 420ms ease"}}><span style={{"fontSize": "12px", "color": "#555654", "flex": "1"}}>{"SSS 1 · Lekki"}</span><span style={{"height": "6px", "width": "96px", "borderRadius": "4px", "background": "#F1F2F5", "overflow": "hidden"}}><span data-abar="" style={{"display": "block", "height": "100%", "width": "0%", "background": "#16A34A", "transition": "width 900ms cubic-bezier(.16,1,.3,1)"}}></span></span></div>
          <div data-arow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "opacity": "0", "transition": "opacity 420ms ease"}}><span style={{"fontSize": "12px", "color": "#555654", "flex": "1"}}>{"Primary 4 · Yaba"}</span><span style={{"height": "6px", "width": "96px", "borderRadius": "4px", "background": "#F1F2F5", "overflow": "hidden"}}><span data-abar="" style={{"display": "block", "height": "100%", "width": "0%", "background": "#F59E0B", "transition": "width 900ms cubic-bezier(.16,1,.3,1)"}}></span></span></div>
        </div>
      </div>
    </div>

    <div style={{"display": "flex", "flexWrap": "wrap", "flexDirection": "row-reverse", "alignItems": "center", "gap": "clamp(26px,4vw,64px)"}}>
      <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "15px"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Migration"}</span>
        <h3 style={{"margin": "0", "fontSize": "clamp(24px,2.7vw,34px)", "lineHeight": "1.14", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Bring a whole term in, and know what is wrong before it lands"}</h3>
        <p style={{"margin": "0", "maxWidth": "440px", "fontSize": "16px", "lineHeight": "1.65", "color": "#555654", "textWrap": "pretty"}}>{"Upload your existing register as a file. Every row is validated against the template, problems are flagged with the row number and the reason, and nothing is published until you say so."}</p>
      </div>
      <div data-frag="import" style={{"flex": "1 1 380px", "minWidth": "0", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "16px", "padding": "16px", "boxShadow": "0 18px 44px rgba(48,58,81,.07)", "display": "flex", "flexDirection": "column", "gap": "11px"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "border": "1px solid #F1F2F5", "borderRadius": "11px", "padding": "10px 11px"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "30px", "height": "30px", "borderRadius": "9px", "background": "rgba(74,101,157,.10)", "color": "#4A659D", "flex": "none"}}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"></path><path d="M14 3v5h5"></path></svg>
          </span>
          <span style={{"flex": "1", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "2px"}}><span style={{"fontSize": "12.5px", "fontWeight": "500"}}>{"students-term2.csv"}</span><span style={{"fontSize": "11px", "color": "#5C5D5C"}}>{"1,248 rows · guardian contacts"}</span></span>
          <span data-ipct="" style={{"fontSize": "12px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums", "flex": "none"}}>{"0%"}</span>
        </div>
        <span style={{"height": "6px", "borderRadius": "4px", "background": "#F1F2F5", "overflow": "hidden"}}><span data-ibar="" style={{"display": "block", "height": "100%", "width": "0%", "borderRadius": "4px", "background": "#4A659D"}}></span></span>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "7px"}}>
          <div data-irow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 400ms ease"}}>
            <span data-idot="" style={{"width": "16px", "height": "16px", "borderRadius": "50%", "background": "#E8EAF0", "display": "grid", "placeItems": "center", "flex": "none", "transition": "background 400ms ease"}}></span>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12px", "color": "#555654"}}>{"Identity fields"}</span>
            <span data-ilabel="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#5C5D5C", "flex": "none"}}>{"Queued"}</span>
          </div>
          <div data-irow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 400ms ease"}}>
            <span data-idot="" style={{"width": "16px", "height": "16px", "borderRadius": "50%", "background": "#E8EAF0", "display": "grid", "placeItems": "center", "flex": "none", "transition": "background 400ms ease"}}></span>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12px", "color": "#555654"}}>{"Guardian contacts"}</span>
            <span data-ilabel="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#5C5D5C", "flex": "none"}}>{"Queued"}</span>
          </div>
          <div data-irow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 400ms ease"}}>
            <span data-idot="" style={{"width": "16px", "height": "16px", "borderRadius": "50%", "background": "#E8EAF0", "display": "grid", "placeItems": "center", "flex": "none", "transition": "background 400ms ease"}}></span>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12px", "color": "#555654"}}>{"Class placement"}</span>
            <span data-ilabel="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#5C5D5C", "flex": "none"}}>{"Queued"}</span>
          </div>
        </div>
        <div data-isum="" style={{"display": "flex", "alignItems": "center", "gap": "9px", "padding": "10px 11px", "borderRadius": "11px", "background": "rgba(245,158,11,.10)", "opacity": "0", "transform": "translateY(8px)", "transition": "opacity 440ms ease, transform 440ms ease"}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A5A08" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M12 8v5M12 16.5v.5"></path><circle cx="12" cy="12" r="9"></circle></svg>
          <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#8A5A08"}}>{"Row 412 · guardian phone missing"}</span>
        </div>
      </div>
    </div>

    <div style={{"display": "flex", "flexWrap": "wrap", "flexDirection": "row", "alignItems": "center", "gap": "clamp(26px,4vw,64px)"}}>
      <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "15px"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Fees"}</span>
        <h3 style={{"margin": "0", "fontSize": "clamp(24px,2.7vw,34px)", "lineHeight": "1.14", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"What was billed, what came in, per branch"}</h3>
        <p style={{"margin": "0", "maxWidth": "440px", "fontSize": "16px", "lineHeight": "1.65", "color": "#555654", "textWrap": "pretty"}}>{"Bill a term once and track collection against it. The gap is visible per branch and per class, so a follow-up conversation starts from the record rather than a reconstructed spreadsheet."}</p>
      </div>
      <div data-frag="fees" style={{"flex": "1 1 380px", "minWidth": "0", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "16px", "padding": "16px", "boxShadow": "0 18px 44px rgba(48,58,81,.07)", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px"}}>
        <div style={{"flex": "0 0 118px", "position": "relative", "width": "118px", "height": "118px"}}>
          <svg viewBox="0 0 112 112" aria-hidden="true" style={{"width": "100%", "height": "100%", "transform": "rotate(-90deg)"}}>
            <circle cx="56" cy="56" r="46" fill="none" stroke="#F1F2F5" strokeWidth="12"></circle>
            <circle data-fring="" cx="56" cy="56" r="46" fill="none" stroke="#4A659D" strokeWidth="12" strokeLinecap="round" strokeDasharray="289" strokeDashoffset="289" style={{"transition": "stroke-dashoffset 2400ms cubic-bezier(.16,1,.3,1)"}}></circle>
          </svg>
          <span style={{"position": "absolute", "inset": "0", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "gap": "1px"}}>
            <span data-fpct="" style={{"fontSize": "22px", "fontWeight": "600", "letterSpacing": "-.03em", "lineHeight": "1", "fontVariantNumeric": "tabular-nums"}}>{"0%"}</span>
            <span style={{"fontSize": "10px", "color": "#5C5D5C"}}>{"collected"}</span>
          </span>
        </div>
        <div style={{"flex": "1 1 150px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "11.5px", "color": "#555654"}}>{"Ikeja"}</span><span style={{"height": "7px", "borderRadius": "4px", "background": "#F1F2F5", "overflow": "hidden"}}><span data-fbar="" style={{"display": "block", "height": "100%", "width": "0%", "background": "#4A659D", "transition": "width 1000ms cubic-bezier(.16,1,.3,1)"}}></span></span></div>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "11.5px", "color": "#555654"}}>{"Lekki"}</span><span style={{"height": "7px", "borderRadius": "4px", "background": "#F1F2F5", "overflow": "hidden"}}><span data-fbar="" style={{"display": "block", "height": "100%", "width": "0%", "background": "#4A659D", "transition": "width 1000ms cubic-bezier(.16,1,.3,1)"}}></span></span></div>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}><span style={{"fontSize": "11.5px", "color": "#555654"}}>{"Yaba"}</span><span style={{"height": "7px", "borderRadius": "4px", "background": "#F1F2F5", "overflow": "hidden"}}><span data-fbar="" style={{"display": "block", "height": "100%", "width": "0%", "background": "#F59E0B", "transition": "width 1000ms cubic-bezier(.16,1,.3,1)"}}></span></span></div>
          <span style={{"fontSize": "11.5px", "color": "#5C5D5C", "paddingTop": "2px"}}>{"₦48.2M of ₦62M billed"}</span>
        </div>
      </div>
    </div>

    <div style={{"display": "flex", "flexWrap": "wrap", "flexDirection": "row-reverse", "alignItems": "center", "gap": "clamp(26px,4vw,64px)"}}>
      <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "15px"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Reporting & audit"}</span>
        <h3 style={{"margin": "0", "fontSize": "clamp(24px,2.7vw,34px)", "lineHeight": "1.14", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Take the numbers out, and keep the record of who did"}</h3>
        <p style={{"margin": "0", "maxWidth": "440px", "fontSize": "16px", "lineHeight": "1.65", "color": "#555654", "textWrap": "pretty"}}>{"Build a report once and run it whenever it is needed. Files are queued, produced and downloadable — and every export, login and record change is written to a trail you can hand to a board or an inspector."}</p>
      </div>
      <div data-frag="reporting" style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
        <div style={{"background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "16px", "padding": "16px", "boxShadow": "0 18px 44px rgba(48,58,81,.07)", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
          <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".08em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Export runs"}</span>
          <div data-erow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 400ms ease"}}>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12.5px", "color": "#212121"}}>{"Fees register · term 2"}</span>
            <span data-epill="" style={{"fontSize": "10.5px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "#F1F2F5", "color": "#5C5D5C", "flex": "none", "transition": "background 300ms ease, color 300ms ease"}}>{"Queued"}</span>
          </div>
          <div data-erow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 400ms ease"}}>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12.5px", "color": "#212121"}}>{"Attendance summary"}</span>
            <span data-epill="" style={{"fontSize": "10.5px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "#F1F2F5", "color": "#5C5D5C", "flex": "none", "transition": "background 300ms ease, color 300ms ease"}}>{"Queued"}</span>
          </div>
          <div data-erow="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 400ms ease"}}>
            <span style={{"flex": "1", "minWidth": "0", "fontSize": "12.5px", "color": "#212121"}}>{"Staff directory"}</span>
            <span data-epill="" style={{"fontSize": "10.5px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "#F1F2F5", "color": "#5C5D5C", "flex": "none", "transition": "background 300ms ease, color 300ms ease"}}>{"Queued"}</span>
          </div>
        </div>
        <div style={{"background": "#303A51", "borderRadius": "16px", "padding": "16px", "boxShadow": "0 20px 44px rgba(48,58,81,.20)", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
            <span data-pulse="" style={{"width": "6px", "height": "6px", "borderRadius": "50%", "background": "#7FE3AE", "animation": "cx-pulse 2.2s ease-in-out infinite"}}></span>
            <span style={{"fontSize": "10.5px", "fontWeight": "600", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(255,255,255,.55)"}}>{"Audit trail"}</span>
          </div>
          <span data-lline="" style={{"fontSize": "11px", "lineHeight": "1.35", "color": "rgba(255,255,255,.9)", "fontVariantNumeric": "tabular-nums", "transition": "opacity 300ms ease, transform 300ms ease"}}>{"export.run · Fees register · A. Okonkwo"}</span>
          <span data-lline="" style={{"fontSize": "11px", "lineHeight": "1.35", "color": "rgba(255,255,255,.6)", "fontVariantNumeric": "tabular-nums", "transition": "opacity 300ms ease, transform 300ms ease"}}>{"attendance.mark · JSS2 · 42 present"}</span>
          <span data-lline="" style={{"fontSize": "11px", "lineHeight": "1.35", "color": "rgba(255,255,255,.38)", "fontVariantNumeric": "tabular-nums", "transition": "opacity 300ms ease, transform 300ms ease"}}>{"role.assign · Bursar → K. Adeyemi"}</span>
        </div>
      </div>
    </div>
  </div>
</section>


<section data-reveal="" style={{"padding": "clamp(48px,6vw,80px) 24px 0"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 300px),1fr))", "gap": "16px"}}>
    <div style={{"display": "flex", "gap": "14px", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "16px", "padding": "20px"}}>
      <span style={{"display": "grid", "placeItems": "center", "width": "40px", "height": "40px", "borderRadius": "12px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2.5"></rect><path d="M3 9h18M8 4V2M16 4V2"></path></svg>
      </span>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "minWidth": "0"}}>
        <h3 style={{"margin": "0", "fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Timetabling"}</h3>
        <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.55", "color": "#555654"}}>{"Periods, classes and staff assignments in one place, with clashes surfaced before the term starts."}</p>
      </div>
    </div>
    <div style={{"display": "flex", "gap": "14px", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "16px", "padding": "20px"}}>
      <span style={{"display": "grid", "placeItems": "center", "width": "40px", "height": "40px", "borderRadius": "12px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-3.9 3.6-7 8-7s8 3.1 8 7"></path></svg>
      </span>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "minWidth": "0"}}>
        <h3 style={{"margin": "0", "fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Parent & student portal"}</h3>
        <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.55", "color": "#555654"}}>{"The parts of the record a family should see, scoped by the same permission system as staff access."}</p>
      </div>
    </div>
  </div>
</section>


<section data-reveal="" style={{"padding": "clamp(56px,7vw,104px) 24px clamp(40px,5vw,64px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "clamp(28px,3.5vw,44px)"}}>
    <div style={{"maxWidth": "600px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
      <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Who it's for"}</span>
      <h2 style={{"margin": "0", "fontSize": "clamp(26px,3vw,38px)", "lineHeight": "1.12", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Three people, one record between them"}</h2>
    </div>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 280px),1fr))", "gap": "16px"}}>
      <div style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "18px", "padding": "26px 24px 28px", "display": "flex", "flexDirection": "column", "gap": "13px", "transition": "transform 260ms ease, box-shadow 260ms ease"}} className="ref-state-8">
        <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Owners & management"}</span>
        <h3 style={{"margin": "0", "fontSize": "20px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"One version of the group"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#555654", "textWrap": "pretty"}}>{"Enrolment, collection and capture rates across every branch, from the same records the branches work in — not a monthly roll-up someone assembled by hand."}</p>
      </div>
      <div style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "18px", "padding": "26px 24px 28px", "display": "flex", "flexDirection": "column", "gap": "13px", "transition": "transform 260ms ease, box-shadow 260ms ease"}} className="ref-state-9">
        <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Administrators"}</span>
        <h3 style={{"margin": "0", "fontSize": "20px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"The day handled in one place"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#555654", "textWrap": "pretty"}}>{"Admissions, transfers, fees, staff records and the term's imports, with permissions that let you delegate work without handing over everything."}</p>
      </div>
      <div style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "18px", "padding": "26px 24px 28px", "display": "flex", "flexDirection": "column", "gap": "13px", "transition": "transform 260ms ease, box-shadow 260ms ease"}} className="ref-state-10">
        <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Teachers & staff"}</span>
        <h3 style={{"margin": "0", "fontSize": "20px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Less admin, same morning"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#555654", "textWrap": "pretty"}}>{"Mark attendance, see your classes and timetable, and record what happened once — without a paper register that has to be typed up later."}</p>
      </div>
    </div>
  </div>
</section>

<section data-reveal="" style={{"padding": "0 24px clamp(56px,7vw,96px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "background": "#303A51", "borderRadius": "clamp(20px,2.5vw,28px)", "padding": "clamp(26px,4.5vw,60px)", "display": "flex", "flexDirection": "column", "gap": "clamp(26px,3.5vw,44px)"}}>
    <h2 style={{"margin": "0", "maxWidth": "18ch", "fontSize": "clamp(26px,3.2vw,40px)", "lineHeight": "1.1", "letterSpacing": "-.03em", "fontWeight": "600", "color": "#fff", "textWrap": "balance"}}>{"Why schools choose XVS"}</h2>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 232px),1fr))", "gap": "clamp(20px,3vw,36px)"}}>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "9px", "paddingTop": "18px", "borderTop": "1px solid rgba(255,255,255,.18)"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "color": "#DBE0EB", "fontVariantNumeric": "tabular-nums"}}>{"01"}</span>
        <h3 style={{"margin": "0", "fontSize": "17.5px", "fontWeight": "600", "color": "#fff", "letterSpacing": "-.015em"}}>{"Multi-branch by design"}</h3>
        <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "rgba(255,255,255,.66)"}}>{"Branches are part of the model, not a workaround. Adding a campus does not mean a second system."}</p>
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "9px", "paddingTop": "18px", "borderTop": "1px solid rgba(255,255,255,.18)"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "color": "#DBE0EB", "fontVariantNumeric": "tabular-nums"}}>{"02"}</span>
        <h3 style={{"margin": "0", "fontSize": "17.5px", "fontWeight": "600", "color": "#fff", "letterSpacing": "-.015em"}}>{"Governance first"}</h3>
        <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "rgba(255,255,255,.66)"}}>{"Permissions down to the action, sessions you can end, and an audit trail behind every change."}</p>
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "9px", "paddingTop": "18px", "borderTop": "1px solid rgba(255,255,255,.18)"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "color": "#DBE0EB", "fontVariantNumeric": "tabular-nums"}}>{"03"}</span>
        <h3 style={{"margin": "0", "fontSize": "17.5px", "fontWeight": "600", "color": "#fff", "letterSpacing": "-.015em"}}>{"Cloud-based"}</h3>
        <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "rgba(255,255,255,.66)"}}>{"Nothing to install per campus. Head office and branches work on the same records, wherever they are."}</p>
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "9px", "paddingTop": "18px", "borderTop": "1px solid rgba(255,255,255,.18)"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "color": "#DBE0EB", "fontVariantNumeric": "tabular-nums"}}>{"04"}</span>
        <h3 style={{"margin": "0", "fontSize": "17.5px", "fontWeight": "600", "color": "#fff", "letterSpacing": "-.015em"}}>{"Built on real operations"}</h3>
        <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "rgba(255,255,255,.66)"}}>{"Shaped with registrars and bursars, so the exceptions they handle daily are in the design."}</p>
      </div>
    </div>
  </div>
</section>

<section id="demo" data-reveal="" style={{"padding": "0 24px clamp(72px,8vw,112px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "background": "#DBE0EB", "borderRadius": "clamp(20px,2.5vw,28px)", "padding": "clamp(22px,5vw,64px)", "display": "flex", "flexWrap": "wrap", "gap": "clamp(32px,4vw,64px)"}}>
    <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
      <h2 style={{"margin": "0", "fontSize": "clamp(28px,3.4vw,44px)", "lineHeight": "1.08", "letterSpacing": "-.03em", "fontWeight": "600", "textWrap": "balance"}}>{"See XVS in action"}</h2>
      <p style={{"margin": "0", "maxWidth": "420px", "fontSize": "16.5px", "lineHeight": "1.65", "color": "#3E4657", "textWrap": "pretty"}}>{"Forty minutes, walked through on workflows from your own school. Bring your branch list and a sample register and we will show the migration path with your data shape, not a canned demo."}</p>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "marginTop": "4px"}}>
        <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "color": "#3E4657"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4A659D" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{" Your structure, set up live"}</span>
        <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "color": "#3E4657"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4A659D" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{" Roles mapped to your staff"}</span>
        <span style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "15px", "color": "#3E4657"}}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4A659D" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg>{" A straight answer on fit and timeline"}</span>
      </div>
    </div>
    <form data-demo-form="" style={{"flex": "1 1 380px", "minWidth": "0", "background": "#fff", "borderRadius": "18px", "padding": "clamp(18px,3vw,32px)", "display": "flex", "flexDirection": "column", "gap": "14px", "boxShadow": "0 24px 60px rgba(48,58,81,.10)"}} onSubmit={submitEmail}>
      <input type="hidden" name="reason" value="Demo request" />
      <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
        <label htmlFor="xv-name" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"Full name"}</label>
        <input id="xv-name" name="name" type="text" required placeholder="Adaeze Okonkwo" style={{"height": "46px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-11" />
        <p data-err="name" style={{"margin": "0", "display": "none", "fontSize": "12.5px", "color": "#A81E1E"}}></p>
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
        <label htmlFor="xv-org" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"School or group"}</label>
        <input id="xv-org" name="organization" type="text" required placeholder="Grace Academy" style={{"height": "46px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-12" />
        <p data-err="organization" style={{"margin": "0", "display": "none", "fontSize": "12.5px", "color": "#A81E1E"}}></p>
      </div>
      <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 150px),1fr))", "gap": "14px"}}>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
          <label htmlFor="xv-email" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"Work email"}</label>
          <input id="xv-email" name="email" type="email" required placeholder="you@school.edu.ng" style={{"height": "46px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-13" />
          <p data-err="email" style={{"margin": "0", "display": "none", "fontSize": "12.5px", "color": "#A81E1E"}}></p>
        </div>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
          <label htmlFor="xv-phone" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"Phone"}</label>
          <input id="xv-phone" name="phone" type="tel" placeholder="Optional" style={{"height": "46px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-14" />
          <p data-err="phone" style={{"margin": "0", "display": "none", "fontSize": "12.5px", "color": "#A81E1E"}}></p>
        </div>
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
        <label htmlFor="xv-branches" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"How many branches?"}</label>
        <input id="xv-branches" name="branches" type="text" placeholder="e.g. 3 campuses, 1,400 students" style={{"height": "46px", "padding": "0 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "color": "#212121", "background": "#FBFBFC", "outline": "none", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-15" />
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "6px"}}>
        <label htmlFor="xv-msg" style={{"fontSize": "13px", "fontWeight": "500", "color": "#555654"}}>{"What would you like to cover?"}</label>
        <textarea id="xv-msg" name="message" rows={3} placeholder="What you use today, and what is not working" style={{"padding": "12px 14px", "border": "1px solid #E3E6ED", "borderRadius": "10px", "fontSize": "15px", "lineHeight": "1.5", "color": "#212121", "background": "#FBFBFC", "outline": "none", "resize": "vertical", "transition": "border-color 180ms ease, box-shadow 180ms ease"}} className="ref-state-16"></textarea>
      </div>
      <button type="submit" style={{"marginTop": "4px", "height": "50px", "border": "0", "borderRadius": "11px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "cursor": "pointer", "transition": "transform 200ms ease, box-shadow 200ms ease, background 200ms ease"}} className="ref-state-17">{"Request a demo"}</button>
      <p data-status="" style={{"margin": "0", "fontSize": "12.5px", "lineHeight": "1.5", "color": "#5C5D5C"}}>{"We'll send these details straight to our team."}</p>
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
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Company"}</p>
        <a href="/about" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-18" >{"About"}</a>
        <a href="/contact" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-19" >{"Contact"}</a>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Products"}</p>
        <a href="/products" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-20" >{"All products"}</a>
        <a href="#top" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-21" >{"XVS"}</a>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Legal"}</p>
        <a href="/privacy" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-22" >{"Privacy"}</a>
        <a href="/terms" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-23" >{"Terms"}</a>
      </div>
    </div>
    <div style={{"display": "flex", "flexWrap": "wrap", "gap": "12px", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "24px", "borderTop": "1px solid #F1F2F5"}}>
      <p style={{"margin": "0", "fontSize": "13.5px", "color": "#5C5D5C"}}>{"© 2026 CodeX Technologies"}</p>
      <p style={{"margin": "0", "fontSize": "13.5px", "color": "#5C5D5C"}}>{"Lagos, Nigeria"}</p>
    </div>
  </div>
</footer>

</div>
</div>
}
