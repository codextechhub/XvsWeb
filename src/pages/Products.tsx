import { useEffect, useRef } from 'react'
import PageMotion from './Products.motion.js'

export default function Products() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.title = "Products \u2014 CodeX"
    document.querySelector('meta[name="description"]')?.setAttribute("content", "The CodeX product portfolio. XVS, our school management platform, is the flagship; more products are in development.")
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
      <a href="/" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-39" >{"Home"}</a>
      <a href="#top" style={{"fontSize": "15px", "fontWeight": "500", "color": "#212121"}} className="ref-state-40" >{"Products"}</a>
      <a href="/about" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-41" >{"About"}</a>
      <a href="/contact" style={{"fontSize": "15px", "fontWeight": "500", "color": "#555654"}} className="ref-state-42" >{"Contact"}</a>
      <a href="/contact" style={{"display": "inline-flex", "alignItems": "center", "gap": "8px", "background": "#4A659D", "color": "#fff", "fontSize": "15px", "fontWeight": "500", "padding": "11px 20px", "borderRadius": "10px", "boxShadow": "0 1px 2px rgba(48,58,81,.16)", "transition": "transform 200ms ease, box-shadow 200ms ease, background 200ms ease"}} className="ref-state-43" >{"Book a Demo"}</a>
    </nav>
    <div data-nav-panel="" style={{"display": "none", "width": "100%", "flexDirection": "column", "gap": "2px", "paddingTop": "10px", "borderTop": "1px solid #EDEFF4"}}>
      <a href="/" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Home"}</a>
      <a href="#top" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#212121"}} >{"Products"}</a>
      <a href="/about" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"About"}</a>
      <a href="/contact" style={{"padding": "13px 4px", "fontSize": "16px", "fontWeight": "500", "color": "#555654"}} >{"Contact"}</a>
      <a href="/contact" style={{"marginTop": "8px", "display": "flex", "alignItems": "center", "justifyContent": "center", "minHeight": "50px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "borderRadius": "11px"}} >{"Book a Demo"}</a>
    </div>
  </div>
</header><main id="main-content">

<section style={{"position": "relative", "padding": "clamp(44px,6vw,86px) 24px clamp(28px,3.5vw,44px)"}}>
  <div data-drift="" style={{"position": "absolute", "top": "-200px", "right": "6%", "width": "460px", "height": "460px", "borderRadius": "50%", "background": "radial-gradient(circle,rgba(74,101,157,.09),transparent 68%)", "filter": "blur(12px)", "pointerEvents": "none", "animation": "cx-drift 19s ease-in-out infinite"}}></div>
  <div style={{"position": "relative", "maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "28px"}}>
    <div style={{"flex": "1 1 480px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
      <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Portfolio"}</span>
      <h1 style={{"margin": "0", "maxWidth": "14ch", "fontSize": "clamp(38px,5.4vw,66px)", "lineHeight": "1.03", "letterSpacing": "-.035em", "fontWeight": "600"}}>{"Our Products"}</h1>
      <p style={{"margin": "0", "maxWidth": "520px", "fontSize": "clamp(16px,1.4vw,18.5px)", "lineHeight": "1.62", "color": "#555654", "textWrap": "pretty"}}>{"We ship few products and we ship them deep. Each one takes on a whole operating problem — not a feature — and owns the records that problem runs on."}</p>
    </div>
    <div style={{"flex": "0 1 260px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
      <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
        <span data-pulse="" style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#16A34A", "animation": "cx-pulse 2.6s ease-in-out infinite"}}></span>
        <span style={{"fontSize": "14px", "color": "#555654"}}><strong style={{"fontWeight": "600", "color": "#212121"}}>{"1"}</strong>{" live in production"}</span>
      </div>
      <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
        <span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#C9D0DF"}}></span>
        <span style={{"fontSize": "14px", "color": "#555654"}}><strong style={{"fontWeight": "600", "color": "#212121"}}>{"2"}</strong>{" in development"}</span>
      </div>
    </div>
  </div>
</section>

<section data-reveal="" style={{"padding": "0 24px clamp(28px,3.5vw,44px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "position": "relative", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "clamp(20px,2.4vw,26px)", "boxShadow": "0 30px 70px rgba(48,58,81,.09),0 2px 8px rgba(48,58,81,.04)", "overflow": "hidden"}}>
    <div style={{"display": "flex", "flexWrap": "wrap", "gap": "clamp(26px,3.5vw,52px)", "padding": "clamp(24px,4vw,52px) clamp(24px,4vw,52px) 0"}}>

      <div style={{"flex": "1 1 400px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "22px", "paddingBottom": "clamp(28px,4vw,52px)"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "13px"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "48px", "height": "48px", "borderRadius": "14px", "background": "#303A51", "flex": "none"}}>
            <svg width="24" height="20" viewBox="0 0 30 25" fill="none" aria-hidden="true" style={{"color": "#fff"}}><path d="M13.9493 14.0612C17.6443 8.2554 19.9781 5.27429 24.9001 0.372653C22.2283 -0.771525 20.3744 0.615508 16.5566 5.97844L11.8634 13.4094L6.77909 11.845C4.19062 11.2553 2.74787 10.8566 0 11.4539C4.25594 12.6334 6.59352 13.4114 10.5597 15.3649C7.42046 19.5739 5.37817 21.5893 1.04294 24.2298C3.51963 24.9652 4.89632 24.7958 7.30056 22.9261C9.57745 20.8802 10.8378 19.256 12.9063 16.5382C17.1978 19.0111 19.6243 20.6002 23.8572 22.4047C26.5897 22.9516 27.7376 22.8718 29.0719 21.4921C23.2733 19.015 19.927 17.3396 13.9493 14.0612Z" fill="currentColor"></path><path d="M22.5535 10.1503C19.5947 11.5749 17.9464 12.4495 14.9922 14.322L16.8174 15.3649C21.2796 12.4323 23.8297 11.0245 28.42 8.71626C26.3014 8.75601 25.015 9.05585 22.5535 10.1503Z" fill="currentColor"></path></svg>
          </span>
          <div style={{"display": "flex", "flexDirection": "column", "gap": "3px", "minWidth": "0"}}>
            <div style={{"display": "flex", "alignItems": "center", "gap": "9px", "flexWrap": "wrap"}}>
              <span style={{"fontSize": "22px", "fontWeight": "600", "letterSpacing": "-.025em"}}>{"XVS"}</span>
              <span style={{"display": "inline-flex", "alignItems": "center", "gap": "6px", "fontSize": "11px", "fontWeight": "600", "padding": "4px 9px", "borderRadius": "999px", "background": "rgba(22,163,74,.12)", "color": "#0F6B32"}}>{"Live"}</span>
            </div>
            <span style={{"fontSize": "13px", "color": "#5C5D5C"}}>{"CodeX Vision System"}</span>
          </div>
        </div>

        <h2 style={{"margin": "0", "maxWidth": "15ch", "fontSize": "clamp(27px,3.1vw,40px)", "lineHeight": "1.1", "letterSpacing": "-.03em", "fontWeight": "600", "textWrap": "balance"}}>{"The complete operating system for schools"}</h2>
        <p style={{"margin": "0", "maxWidth": "430px", "fontSize": "16px", "lineHeight": "1.65", "color": "#555654", "textWrap": "pretty"}}>{"Institutions, branches, staff, students, fees and timetables in one governed platform. Built for school groups that outgrew spreadsheets and never want to reconcile two registers again."}</p>

        <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
          <span style={{"fontSize": "13px", "fontWeight": "500", "padding": "8px 14px", "borderRadius": "999px", "background": "#F7F7F7", "color": "#555654", "border": "1px solid #EDEFF4"}}>{"Multi-branch management"}</span>
          <span style={{"fontSize": "13px", "fontWeight": "500", "padding": "8px 14px", "borderRadius": "999px", "background": "#F7F7F7", "color": "#555654", "border": "1px solid #EDEFF4"}}>{"Attendance"}</span>
          <span style={{"fontSize": "13px", "fontWeight": "500", "padding": "8px 14px", "borderRadius": "999px", "background": "#F7F7F7", "color": "#555654", "border": "1px solid #EDEFF4"}}>{"Data import & reporting"}</span>
        </div>

        <a href="/xvs" style={{"display": "inline-flex", "alignSelf": "flex-start", "alignItems": "center", "gap": "9px", "background": "#4A659D", "color": "#fff", "fontSize": "16px", "fontWeight": "500", "padding": "15px 26px", "borderRadius": "12px", "boxShadow": "0 2px 4px rgba(48,58,81,.14)", "transition": "transform 220ms ease, box-shadow 220ms ease, background 220ms ease"}} className="ref-state-44" >{"\n          View XVS\n          "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>

      <div data-console-holder="" style={{"flex": "1 1 420px", "minWidth": "0", "position": "relative", "alignSelf": "stretch"}}>
        <div data-xvs-console="" data-float="" style={{"animation": "cx-float-c 13s ease-in-out infinite", "position": "absolute", "left": "0", "top": "clamp(0px,2vw,18px)", "width": "min(560px,124%)", "background": "#fff", "border": "1px solid #EAECF2", "borderRadius": "16px 0 0 0", "boxShadow": "0 30px 70px rgba(48,58,81,.14)", "overflow": "hidden"}}>
          <div style={{"display": "flex", "alignItems": "center", "gap": "9px", "padding": "12px 16px", "background": "#F7F7F7", "borderBottom": "1px solid #EDEFF4"}}>
            <span style={{"width": "8px", "height": "8px", "borderRadius": "50%", "background": "#DBE0EB"}}></span>
            <span style={{"width": "8px", "height": "8px", "borderRadius": "50%", "background": "#DBE0EB"}}></span>
            <span style={{"width": "8px", "height": "8px", "borderRadius": "50%", "background": "#DBE0EB"}}></span>
            <span style={{"marginLeft": "8px", "fontSize": "11.5px", "fontWeight": "500", "color": "#5C5D5C"}}>{"XVS · School register"}</span>
          </div>
          <div style={{"padding": "16px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 104px),1fr))", "gap": "9px"}}>
              <div style={{"border": "1px solid #F1F2F5", "borderRadius": "11px", "padding": "9px 11px", "display": "flex", "flexDirection": "column", "gap": "3px"}}>
                <span style={{"fontSize": "10px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Schools"}</span>
                <span data-x-count="21" style={{"fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
              </div>
              <div style={{"border": "1px solid #F1F2F5", "borderRadius": "11px", "padding": "9px 11px", "display": "flex", "flexDirection": "column", "gap": "3px"}}>
                <span style={{"fontSize": "10px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Branches"}</span>
                <span data-x-count="46" style={{"fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
              </div>
              <div style={{"border": "1px solid #F1F2F5", "borderRadius": "11px", "padding": "9px 11px", "display": "flex", "flexDirection": "column", "gap": "3px"}}>
                <span style={{"fontSize": "10px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Students"}</span>
                <span data-x-count="15800" style={{"fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
              </div>
              <div style={{"border": "1px solid #F1F2F5", "borderRadius": "11px", "padding": "9px 11px", "display": "flex", "flexDirection": "column", "gap": "3px"}}>
                <span style={{"fontSize": "10px", "fontWeight": "500", "color": "#5C5D5C"}}>{"Staff"}</span>
                <span data-x-count="1180" style={{"fontSize": "17px", "fontWeight": "600", "letterSpacing": "-.02em", "fontVariantNumeric": "tabular-nums"}}>{"0"}</span>
              </div>
            </div>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
              <div data-x-row="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 420ms ease, transform 420ms ease"}}>
                <span style={{"display": "grid", "placeItems": "center", "width": "24px", "height": "24px", "borderRadius": "8px", "background": "#F1F2F5", "fontSize": "9px", "fontWeight": "600", "color": "#5C5D5C", "flex": "none"}}>{"GA"}</span>
                <span style={{"display": "flex", "flexDirection": "column", "gap": "3px", "flex": "1", "minWidth": "0"}}>
                  <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#212121"}}>{"Grace Academy · Ikeja"}</span>
                  <span style={{"fontSize": "10.5px", "color": "#5C5D5C"}}>{"4 branches · 3,180 students"}</span>
                </span>
                <span style={{"fontSize": "10px", "fontWeight": "600", "padding": "4px 8px", "borderRadius": "999px", "background": "rgba(22,163,74,.12)", "color": "#0F6B32", "flex": "none"}}>{"Active"}</span>
              </div>
              <div data-x-row="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 420ms ease, transform 420ms ease"}}>
                <span style={{"display": "grid", "placeItems": "center", "width": "24px", "height": "24px", "borderRadius": "8px", "background": "#F1F2F5", "fontSize": "9px", "fontWeight": "600", "color": "#5C5D5C", "flex": "none"}}>{"NG"}</span>
                <span style={{"display": "flex", "flexDirection": "column", "gap": "3px", "flex": "1", "minWidth": "0"}}>
                  <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#212121"}}>{"Northgate Group · Abuja"}</span>
                  <span style={{"fontSize": "10.5px", "color": "#5C5D5C"}}>{"7 branches · 5,240 students"}</span>
                </span>
                <span style={{"fontSize": "10px", "fontWeight": "600", "padding": "4px 8px", "borderRadius": "999px", "background": "rgba(22,163,74,.12)", "color": "#0F6B32", "flex": "none"}}>{"Active"}</span>
              </div>
              <div data-x-row="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 420ms ease, transform 420ms ease"}}>
                <span style={{"display": "grid", "placeItems": "center", "width": "24px", "height": "24px", "borderRadius": "8px", "background": "#F1F2F5", "fontSize": "9px", "fontWeight": "600", "color": "#5C5D5C", "flex": "none"}}>{"PV"}</span>
                <span style={{"display": "flex", "flexDirection": "column", "gap": "3px", "flex": "1", "minWidth": "0"}}>
                  <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#212121"}}>{"Palm Valley Schools · Ibadan"}</span>
                  <span style={{"fontSize": "10.5px", "color": "#5C5D5C"}}>{"2 branches · 1,120 students"}</span>
                </span>
                <span style={{"fontSize": "10px", "fontWeight": "600", "padding": "4px 8px", "borderRadius": "999px", "background": "rgba(245,158,11,.14)", "color": "#8A5A08", "flex": "none"}}>{"Pending"}</span>
              </div>
              <div data-x-row="" style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "9px 10px", "borderRadius": "10px", "background": "#FBFBFC", "transition": "background 420ms ease, transform 420ms ease"}}>
                <span style={{"display": "grid", "placeItems": "center", "width": "24px", "height": "24px", "borderRadius": "8px", "background": "#F1F2F5", "fontSize": "9px", "fontWeight": "600", "color": "#5C5D5C", "flex": "none"}}>{"CC"}</span>
                <span style={{"display": "flex", "flexDirection": "column", "gap": "3px", "flex": "1", "minWidth": "0"}}>
                  <span style={{"fontSize": "12px", "fontWeight": "500", "color": "#212121"}}>{"Crest College · Enugu"}</span>
                  <span style={{"fontSize": "10.5px", "color": "#5C5D5C"}}>{"1 branch · 860 students"}</span>
                </span>
                <span style={{"fontSize": "10px", "fontWeight": "600", "padding": "4px 8px", "borderRadius": "999px", "background": "rgba(74,101,157,.12)", "color": "#4A659D", "flex": "none"}}>{"Inactive"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="capabilities" data-reveal="" style={{"padding": "clamp(44px,5.5vw,84px) 24px"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "clamp(28px,3.5vw,44px)"}}>
    <div style={{"display": "flex", "flexWrap": "wrap", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "22px"}}>
      <div style={{"maxWidth": "560px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
        <span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": ".16em", "textTransform": "uppercase", "color": "rgba(74,101,157,.8)"}}>{"Inside XVS"}</span>
        <h2 style={{"margin": "0", "fontSize": "clamp(26px,3vw,38px)", "lineHeight": "1.12", "letterSpacing": "-.03em", "fontWeight": "600"}}>{"Eight modules, one register"}</h2>
      </div>
      <p style={{"margin": "0", "maxWidth": "340px", "fontSize": "15.5px", "lineHeight": "1.6", "color": "#555654", "textWrap": "pretty"}}>{"Everything below reads and writes the same records, so a change in one place is not a reconciliation job in another."}</p>
    </div>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 238px),1fr))", "gap": "14px"}}>
      <div data-mod="" style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "18px 18px 20px", "display": "flex", "flexDirection": "column", "gap": "9px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-45">
        <span data-mod-num="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"01"}</span>
        <h3 style={{"margin": "0", "fontSize": "16.5px", "fontWeight": "600", "letterSpacing": "-.015em"}}>{"Institution & branches"}</h3>
        <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "#555654"}}>{"Onboard a school, add branches under it, and keep the group structure explicit rather than implied."}</p>
      </div>
      <div data-mod="" style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "18px 18px 20px", "display": "flex", "flexDirection": "column", "gap": "9px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-46">
        <span data-mod-num="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"02"}</span>
        <h3 style={{"margin": "0", "fontSize": "16.5px", "fontWeight": "600", "letterSpacing": "-.015em"}}>{"Roles & permissions"}</h3>
        <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "#555654"}}>{"Named roles built from individual permission keys, so access is granted by the action, not the job title."}</p>
      </div>
      <div data-mod="" style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "18px 18px 20px", "display": "flex", "flexDirection": "column", "gap": "9px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-47">
        <span data-mod-num="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"03"}</span>
        <h3 style={{"margin": "0", "fontSize": "16.5px", "fontWeight": "600", "letterSpacing": "-.015em"}}>{"Data import & validation"}</h3>
        <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "#555654"}}>{"Upload a term's records in bulk. Every row is validated and flagged before anything is published."}</p>
      </div>
      <div data-mod="" style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "18px 18px 20px", "display": "flex", "flexDirection": "column", "gap": "9px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-48">
        <span data-mod-num="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"04"}</span>
        <h3 style={{"margin": "0", "fontSize": "16.5px", "fontWeight": "600", "letterSpacing": "-.015em"}}>{"Reporting & export"}</h3>
        <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "#555654"}}>{"Build a report once, run it on demand, and take the file away with a record of who exported what."}</p>
      </div>
      <div data-mod="" style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "18px 18px 20px", "display": "flex", "flexDirection": "column", "gap": "9px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-49">
        <span data-mod-num="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"05"}</span>
        <h3 style={{"margin": "0", "fontSize": "16.5px", "fontWeight": "600", "letterSpacing": "-.015em"}}>{"Fees & billing"}</h3>
        <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "#555654"}}>{"Bill a term, track what has been collected against it, and see the gap per branch without a spreadsheet."}</p>
      </div>
      <div data-mod="" style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "18px 18px 20px", "display": "flex", "flexDirection": "column", "gap": "9px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-50">
        <span data-mod-num="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"06"}</span>
        <h3 style={{"margin": "0", "fontSize": "16.5px", "fontWeight": "600", "letterSpacing": "-.015em"}}>{"Attendance"}</h3>
        <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "#555654"}}>{"Marked where it happens, visible the same morning, and summarised by class, branch and term."}</p>
      </div>
      <div data-mod="" style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "18px 18px 20px", "display": "flex", "flexDirection": "column", "gap": "9px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-51">
        <span data-mod-num="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"07"}</span>
        <h3 style={{"margin": "0", "fontSize": "16.5px", "fontWeight": "600", "letterSpacing": "-.015em"}}>{"Timetabling"}</h3>
        <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "#555654"}}>{"Periods, classes and staff assignments in one place, with the clashes surfaced before the term starts."}</p>
      </div>
      <div data-mod="" style={{"background": "#fff", "border": "1px solid #EDEFF4", "borderRadius": "14px", "padding": "18px 18px 20px", "display": "flex", "flexDirection": "column", "gap": "9px", "transition": "transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease"}} className="ref-state-52">
        <span data-mod-num="" style={{"fontSize": "11px", "fontWeight": "600", "color": "#4A659D", "fontVariantNumeric": "tabular-nums"}}>{"08"}</span>
        <h3 style={{"margin": "0", "fontSize": "16.5px", "fontWeight": "600", "letterSpacing": "-.015em"}}>{"Parent & student portal"}</h3>
        <p style={{"margin": "0", "fontSize": "14px", "lineHeight": "1.55", "color": "#555654"}}>{"The parts of the record a family should see, and nothing else — scoped by the same permission system."}</p>
      </div>
    </div>
    <div style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "14px", "padding": "18px 20px", "borderRadius": "16px", "background": "#F7F7F7", "border": "1px solid #EDEFF4"}}>
      <span style={{"display": "grid", "placeItems": "center", "width": "36px", "height": "36px", "borderRadius": "11px", "background": "rgba(74,101,157,.10)", "color": "#4A659D", "flex": "none"}}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"></path><path d="M9 12l2 2 4-4"></path></svg>
      </span>
      <p style={{"margin": "0", "flex": "1 1 320px", "minWidth": "0", "fontSize": "15px", "lineHeight": "1.55", "color": "#555654"}}>{"Underneath all eight: secure authentication, session control and an audit trail that records every action against the person who took it."}</p>
      <a href="/contact" style={{"fontSize": "15px", "fontWeight": "500", "color": "#4A659D"}} >{"Ask about governance →"}</a>
    </div>
  </div>
</section>


<section data-reveal="" style={{"padding": "0 24px clamp(56px,6.5vw,96px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "clamp(22px,2.5vw,32px)"}}>
    <div style={{"display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "justifyContent": "space-between", "gap": "16px"}}>
      <h2 style={{"margin": "0", "fontSize": "clamp(22px,2.4vw,30px)", "lineHeight": "1.15", "letterSpacing": "-.025em", "fontWeight": "600"}}>{"In development"}</h2>
      <p style={{"margin": "0", "fontSize": "14.5px", "color": "#5C5D5C"}}>{"Named when they ship, not before."}</p>
    </div>
    <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%, 300px),1fr))", "gap": "16px"}}>
      <div style={{"position": "relative", "overflow": "hidden", "background": "#fff", "border": "1px dashed #DDE2EC", "borderRadius": "18px", "padding": "26px 24px 28px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
        <div data-sweep="" style={{"position": "absolute", "top": "0", "bottom": "0", "width": "40%", "background": "linear-gradient(90deg,transparent,rgba(74,101,157,.05),transparent)", "animation": "cx-sweep 4.6s cubic-bezier(.45,0,.55,1) infinite", "pointerEvents": "none"}}></div>
        <div style={{"display": "flex", "alignItems": "center", "gap": "11px"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "40px", "height": "40px", "borderRadius": "12px", "background": "#F7F7F7", "color": "#B8BAB7", "flex": "none"}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="8" width="18" height="13" rx="2.5"></rect><path d="M8 8V6a4 4 0 0 1 8 0v2"></path></svg>
          </span>
          <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"In build"}</span>
        </div>
        <h3 style={{"margin": "0", "fontSize": "19px", "fontWeight": "600", "letterSpacing": "-.02em", "color": "#555654"}}>{"Product two"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#555654", "textWrap": "pretty"}}>{"A second platform for organizations outside education, on the same governance and reporting foundation as XVS."}</p>
      </div>
      <div style={{"position": "relative", "overflow": "hidden", "background": "#fff", "border": "1px dashed #DDE2EC", "borderRadius": "18px", "padding": "26px 24px 28px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
        <div style={{"display": "flex", "alignItems": "center", "gap": "11px"}}>
          <span style={{"display": "grid", "placeItems": "center", "width": "40px", "height": "40px", "borderRadius": "12px", "background": "#F7F7F7", "color": "#B8BAB7", "flex": "none"}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>
          </span>
          <span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": ".1em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"In research"}</span>
        </div>
        <h3 style={{"margin": "0", "fontSize": "19px", "fontWeight": "600", "letterSpacing": "-.02em", "color": "#555654"}}>{"Product three"}</h3>
        <p style={{"margin": "0", "fontSize": "15px", "lineHeight": "1.6", "color": "#555654", "textWrap": "pretty"}}>{"Early work, shaped with the institutions already running XVS. If you have a problem you think belongs here, tell us."}</p>
      </div>
    </div>
  </div>
</section>


<section data-reveal="" style={{"padding": "0 24px clamp(72px,8vw,112px)"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "background": "#303A51", "borderRadius": "clamp(20px,2.5vw,28px)", "padding": "clamp(28px,5vw,64px)", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "clamp(24px,3.5vw,48px)"}}>
    <div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
      <h2 style={{"margin": "0", "fontSize": "clamp(26px,3.2vw,40px)", "lineHeight": "1.1", "letterSpacing": "-.03em", "fontWeight": "600", "color": "#fff", "textWrap": "balance"}}>{"See XVS on your own structure"}</h2>
      <p style={{"margin": "0", "maxWidth": "460px", "fontSize": "16px", "lineHeight": "1.62", "color": "rgba(255,255,255,.68)", "textWrap": "pretty"}}>{"Bring your branch list and a sample register. Forty minutes, walked through on real workflows, ending with a straight answer on fit."}</p>
    </div>
    <a href="/contact" style={{"display": "inline-flex", "alignItems": "center", "gap": "9px", "background": "#fff", "color": "#303A51", "fontSize": "16px", "fontWeight": "500", "padding": "15px 26px", "borderRadius": "12px", "flex": "none", "transition": "transform 220ms ease, box-shadow 220ms ease"}} className="ref-state-53" >{"\n      Book a Demo\n      "}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h13"></path><path d="m12 5 7 7-7 7"></path></svg>
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
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Company"}</p>
        <a href="/about" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-54" >{"About"}</a>
        <a href="/contact" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-55" >{"Contact"}</a>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Products"}</p>
        <a href="/xvs" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-56" >{"XVS"}</a>
      </div>
      <div style={{"flex": "0 1 160px", "minWidth": "140px", "display": "flex", "flexDirection": "column", "gap": "13px"}}>
        <p style={{"margin": "0", "fontSize": "12px", "fontWeight": "600", "letterSpacing": ".12em", "textTransform": "uppercase", "color": "#5C5D5C"}}>{"Legal"}</p>
        <a href="/privacy" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-57" >{"Privacy"}</a>
        <a href="/terms" style={{"fontSize": "15px", "color": "#555654"}} className="ref-state-58" >{"Terms"}</a>
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
