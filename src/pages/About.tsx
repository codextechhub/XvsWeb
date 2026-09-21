import { useEffect, useRef } from 'react'
import PageMotion from './About.motion.js'

export default function About() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.title = "About \u2014 CodeX"
    document.querySelector('meta[name="description"]')?.setAttribute("content", "CodeX builds data platforms and organizational systems for institutions. How we work, and what we hold to.")
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
      <a href="/" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-25" >{"Home"}</a>
      <a href="/products" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-26" >{"Products"}</a>
      <a href="#top" style={{"fontSize": "15px", "fontWeight": "500", "color": "#212121"}} className="ref-state-27" >{"About"}</a>
      <a href="/contact" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-28" >{"Contact"}</a>
      <a href="/contact" style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "background": "#4A659D", "color": "#fff", "fontSize": "15px", "fontWeight": "500", "padding": "11px 20px", "borderRadius": "10px", "boxShadow": "0 1px 2px rgba(48,58,81,.16)", "transition": "transform 200ms ease, box-shadow 200ms ease, background 200ms ease"}} className="ref-state-29" >{"Book a Demo"}</a>
    </nav>
    <div data-nav-panel="" style={{"display": "none", "width": "100%", "flexDirection": "column", "gap": "2px", "paddingTop": "10px", "borderTop": "1px solid #EDEFF4"}}>
      <a href="/" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Home"}</a>
      <a href="/products" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Products"}</a>
      <a href="#top" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#212121"}} >{"About"}</a>
      <a href="/contact" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Contact"}</a>
      <a href="/contact" style={{"marginTop": "8px", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "50px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "borderRadius": "11px"}} >{"Book a Demo"}</a>
    </div>
  </div>
</header><main id="main-content">

<section style={{"position": "relative", "padding": "clamp(44px,6vw,88px) 24px clamp(36px,4.5vw,60px)"}}>
  <div data-drift="" style={{"position": "absolute", "top": "-200px", "left": "6%", "width": "480px", "height": "480px", "borderRadius": "50%", "background": "radial-gradient(circle,rgba(74,101,157,.09),transparent 68%)", "filter": "blur(12px)", "pointerEvents": "none", "animation": "cx-drift 18s ease-in-out infinite"}}></div>
  <div style={{"position": "relative", "maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "28px"}}>
    <div style={{"flex": "1 1 520px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
      <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"About"}</span>
      <h1 style={{"margin": "0", "maxWidth": "19ch", "fontSize": "clamp(36px,5vw,62px)", "lineHeight": "1.04", "letterSpacing": "-.035em", "fontWeight": "600", "textWrap": "balance"}}>{"We build the systems organizations run on"}</h1>
    </div>
    <p style={{"margin": "0", "flex": "0 1 380px", "fontSize": "clamp(16px,1.4vw,18.5px)", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"CodeX is a software company working on one problem: institutions whose records live in too many places to trust. We build the platforms that hold those records and the systems that govern who may touch them."}</p>
  </div>
</section>

<section data-reveal="" style={{"padding": "0 24px clamp(56px,7vw,96px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "gap": "clamp(28px,4vw,64px)"}}>
    <div style={{"flex": "1 1 420px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
      <h2 style={{"margin": "0", "fontSize": "clamp(24px,2.8vw,34px)", "lineHeight": "1.14", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"The problem we kept finding"}</h2>
      <p style={{"margin": "0", "fontSize": "16.5px", "lineHeight": "1.68", "color": "#555654", "textWrap": "pretty"}}>{"An organization grows, and its records grow with it — into a finance spreadsheet, a shared drive, a register in a drawer, and three tools that were never designed to agree. Nobody set out to build it that way. It accumulates."}</p>
      <p style={{"margin": "0", "fontSize": "16.5px", "lineHeight": "1.68", "color": "#555654", "textWrap": "pretty"}}>{"The cost shows up later: a figure that cannot be reconciled before a board meeting, a permission nobody can explain, a term of data that took two weeks to assemble by hand. That is not a reporting problem. It is a system problem, and it is the one we work on."}</p>
      <p style={{"margin": "0", "fontSize": "16.5px", "lineHeight": "1.68", "color": "#555654", "textWrap": "pretty"}}>{"So we build few products and build them deep. Each one takes on a whole operating problem rather than a feature of it, and owns the records that problem runs on. XVS, our school management platform, is the first."}</p>
    </div>
    <div style={{"flex": "1 1 320px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
      <div style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "16px", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
        <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#8F918F"}}>{"What we build"}</span>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "11px"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "11px", "paddingBottom": "11px", "borderBottom": "1px solid #F7F7F7"}}><span style={{"display": "grid", "placeItems": "center", "width": "32px", "height": "32px", "borderRadius": "10px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v5c0 1.657 3.582 3 8 3s8-1.343 8-3V5"></path><path d="M4 10v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5"></path></svg></span><span style={{"fontSize": "14.5px", "fontWeight": "500", "color": "#212121"}}>{"Data platforms"}</span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "11px", "paddingBottom": "11px", "borderBottom": "1px solid #F7F7F7"}}><span style={{"display": "grid", "placeItems": "center", "width": "32px", "height": "32px", "borderRadius": "10px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-3.9 3.6-7 8-7s8 3.1 8 7"></path></svg></span><span style={{"fontSize": "14.5px", "fontWeight": "500", "color": "#212121"}}>{"Organizational systems"}</span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "11px", "paddingBottom": "11px", "borderBottom": "1px solid #F7F7F7"}}><span style={{"display": "grid", "placeItems": "center", "width": "32px", "height": "32px", "borderRadius": "10px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v5c0 1.657 3.582 3 8 3s8-1.343 8-3V5"></path><path d="M12 16v5M9.5 18.5 12 21l2.5-2.5"></path></svg></span><span style={{"fontSize": "14.5px", "fontWeight": "500", "color": "#212121"}}>{"Automation & integration"}</span></div>
          <div style={{"display": "flex", "alignItems": "center", "gap": "11px"}}><span style={{"display": "grid", "placeItems": "center", "width": "32px", "height": "32px", "borderRadius": "10px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 3v18h18"></path><path d="m7 15 4-5 3 3 5-7"></path></svg></span><span style={{"fontSize": "14.5px", "fontWeight": "500", "color": "#212121"}}>{"Analytics & reporting"}</span></div>
        </div>
      </div>
      <div style={{"background": "#303A51", "borderRadius": "16px", "padding": "20px", "display": "flex", "flexDirection": "column", "gap": "9px"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
          <span data-pulse="" style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#7FE3AE", "animation": "cx-pulse 2.6s ease-in-out infinite"}}></span>
          <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "rgba(255,255,255,.55)"}}>{"Shipping now"}</span>
        </div>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "rgba(255,255,255,.78)"}}>{"XVS — the complete operating system for schools."}</p>
        <a href="/xvs" style={{"fontSize": "14.5px", "fontWeight": "500", "color": "#DBE0EB"}} className="ref-state-30" >{"See the platform →"}</a>
      </div>
    </div>
  </div>
</section>

<section data-reveal="" style={{"background": "#F7F7F7", "padding": "clamp(56px,7vw,100px) 24px"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "clamp(30px,4vw,48px)"}}>
    <div style={{"maxWidth": "620px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
      <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"How we engage"}</span>
      <h2 style={{"margin": "0", "fontSize": "clamp(26px,3vw,40px)", "lineHeight": "1.12", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Four things we do on every engagement"}</h2>
    </div>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 248px),1fr))", "gap": "clamp(18px,3vw,32px)"}}>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "2px solid #4A659D"}}>
        <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"01"}</span>
        <h3 style={{"margin": "0", "fontSize": "19px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Start with the operator"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"We sit with the registrar, the bursar, the branch head. The exceptions they handle every day are what software usually gets wrong, and they are where we start."}</p>
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "2px solid #DBE0EB"}}>
        <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"02"}</span>
        <h3 style={{"margin": "0", "fontSize": "19px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Model the structure honestly"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"Branches, roles and approvals go into the model as they actually are, not flattened to fit a schema that was convenient to build."}</p>
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "2px solid #DBE0EB"}}>
        <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"03"}</span>
        <h3 style={{"margin": "0", "fontSize": "19px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Migrate before you commit"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"Your existing records go in first, validated row by row, so you see what is wrong with the data you already have before anything goes live."}</p>
      </div>
      <div style={{"display": "flex", "flexDirection": "column", "gap": "11px", "paddingTop": "20px", "borderTop": "2px solid #DBE0EB"}}>
        <span style={{"fontSize": "12px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"04"}</span>
        <h3 style={{"margin": "0", "fontSize": "19px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Stay after launch"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"What we ship stays maintained, documented and versioned. Nothing goes live that we would not be able to support in three years."}</p>
      </div>
    </div>
  </div>
</section>

<section data-reveal="" style={{"padding": "clamp(56px,7vw,100px) 24px"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "gap": "clamp(28px,4vw,56px)"}}>
    <div style={{"flex": "1 1 340px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
      <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"What we hold to"}</span>
      <h2 style={{"margin": "0", "maxWidth": "16ch", "fontSize": "clamp(26px,3vw,40px)", "lineHeight": "1.12", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Governance is not a feature we added"}</h2>
    </div>
    <div style={{"flex": "1 1 420px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
      <div style={{"display": "flex", "gap": "14px", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "16px", "padding": "20px"}}>
        <span style={{"display": "grid", "placeItems": "center", "width": "38px", "height": "38px", "borderRadius": "12px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"></path><path d="M9 12l2 2 4-4"></path></svg></span>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "minWidth": "0"}}>
          <h3 style={{"margin": "0", "fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Permissioned to the action"}</h3>
          <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "#555654"}}>{"Access is granted by what someone may do, not by the title on their contract. Every check is enforced server-side."}</p>
        </div>
      </div>
      <div style={{"display": "flex", "gap": "14px", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "16px", "padding": "20px"}}>
        <span style={{"display": "grid", "placeItems": "center", "width": "38px", "height": "38px", "borderRadius": "12px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 8v4l3 2"></path><circle cx="12" cy="12" r="9"></circle></svg></span>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "minWidth": "0"}}>
          <h3 style={{"margin": "0", "fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"Answerable after the fact"}</h3>
          <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "#555654"}}>{"Who changed what, when, and under whose authority — recorded for every action, and exportable when someone asks."}</p>
        </div>
      </div>
      <div style={{"display": "flex", "gap": "14px", "background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "16px", "padding": "20px"}}>
        <span style={{"display": "grid", "placeItems": "center", "width": "38px", "height": "38px", "borderRadius": "12px", "background": "rgba(74,101,157,.09)", "color": "#4A659D", "flex": "none"}}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20V8M10 20V4M16 20v-8M22 20h-20"></path></svg></span>
        <div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "minWidth": "0"}}>
          <h3 style={{"margin": "0", "fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em"}}>{"One number, one source"}</h3>
          <p style={{"margin": "0", "fontSize": "14.5px", "lineHeight": "1.6", "color": "#555654"}}>{"A figure on a report traces back to the record it came from. No parallel version assembled for the meeting."}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section data-reveal="" style={{"padding": "0 24px clamp(72px,8vw,112px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "background": "#DBE0EB", "borderRadius": "clamp(20px,2.5vw,28px)", "padding": "clamp(26px,4.5vw,60px)", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "clamp(24px,3.5vw,48px)"}}>
    <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
      <h2 style={{"margin": "0", "maxWidth": "18ch", "fontSize": "clamp(26px,3.2vw,40px)", "lineHeight": "1.1", "letterSpacing": "-.03em", "fontWeight": "600", "textWrap": "balance"}}>{"Based in Lagos, working with institutions anywhere"}</h2>
      <p style={{"margin": "0", "maxWidth": "440px", "fontSize": "16px", "lineHeight": "1.62", "color": "#3E4657", "textWrap": "pretty"}}>{"If you are carrying a records problem you have stopped expecting anyone to fix, we would like to hear about it."}</p>
    </div>
    <a href="/contact" style={{"display": "inline-flex", "alignItems": "center", "gap": "9px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "padding": "15px 26px", "borderRadius": "12px", "flex": "none", "boxShadow": "0 2px 4px rgba(48,58,81,.14)", "transition": "transform 220ms ease, box-shadow 220ms ease, background 220ms ease"}} className="ref-state-31" >{"\n      Get in touch\n      "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13"></path><path d="m12 5 7 7-7 7"></path></svg>
    </a>
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
        <a href="#top" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-32" >{"About"}</a>
        <a href="/contact" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-33" >{"Contact"}</a>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Products"}</p>
        <a href="/products" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-34" >{"All products"}</a>
        <a href="/xvs" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-35" >{"XVS"}</a>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#8F918F"}}>{"Legal"}</p>
        <a href="/privacy" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-36" >{"Privacy"}</a>
        <a href="/terms" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-37" >{"Terms"}</a>
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
