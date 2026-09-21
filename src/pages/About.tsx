import { useEffect, useRef } from 'react'
import PageMotion from './About.motion.js'
import './About.css'

export default function About() {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    document.title = "About XVS \u2014 A clearer school day"
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Meet XVS: the school management platform that connects people, attendance, fees and reporting, from one campus to a growing school group.")
    const motion = new PageMotion(root.current!); motion.componentDidMount(); return () => motion.componentWillUnmount();
  }, [])
  return <div ref={root} className="reference-page xvs-about">

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
  <section className="xa-hero xa-wrap">
    <div className="xa-hero-copy">
      <p className="xa-eyebrow"><span /> ABOUT XVS</p>
      <h1>Behind every school day,<br /><em>everything connects.</em></h1>
      <p className="xa-intro">The student in the register. The payment at the bursar’s desk. The decision in the headteacher’s office. They are all part of the same school story.</p>
      <p className="xa-hero-description">XVS brings that story together. A school management platform that keeps your people, campuses and everyday work connected, so you can move through the day with a clearer picture.</p>
      <a className="xa-button" href="/contact">Let’s talk about your school <span aria-hidden="true">&#8599;</span></a>
      <a className="xa-text-link" href="#why-xvs">Get to know XVS <span aria-hidden="true">&#8595;</span></a>
    </div>
    <div className="xa-record" aria-label="XVS connects school records, from people and attendance to fees and reporting">
      <div className="xa-record-top"><span>THE CONNECTED SCHOOL</span><span className="xa-record-mark">XVS</span></div>
      <div className="xa-record-center"><span className="xa-orbit xa-orbit-one" /><span className="xa-orbit xa-orbit-two" /><div className="xa-record-core"><span>Your school.</span><strong>One shared<br />record.</strong></div></div>
      <div className="xa-record-node xa-node-one"><span className="xa-node-icon" aria-hidden="true">01</span><div><strong>People</strong><span>Every student. Every team.</span></div></div>
      <div className="xa-record-node xa-node-two"><span className="xa-node-icon" aria-hidden="true">02</span><div><strong>Attendance</strong><span>A clearer view of each day.</span></div></div>
      <div className="xa-record-node xa-node-three"><span className="xa-node-icon" aria-hidden="true">03</span><div><strong>Fees &amp; finance</strong><span>Follow the same figures.</span></div></div>
      <div className="xa-record-node xa-node-four"><span className="xa-node-icon" aria-hidden="true">04</span><div><strong>Reporting</strong><span>The whole picture, together.</span></div></div>
      <p className="xa-record-bottom"><span /> One campus or many. A common foundation.</p>
    </div>
  </section>

  <div className="xa-belief"><div className="xa-wrap"><span>OUR BELIEF</span><p>A school works best when the people behind it can trust the same information.</p></div></div>

  <section id="why-xvs" className="xa-story xa-wrap xa-section" data-reveal="">
    <div><p className="xa-eyebrow">WHY WE EXIST</p><h2>More time for the school.<br /><span>Less time piecing it together.</span></h2></div>
    <div className="xa-story-copy"><p>You know the work that happens between the lessons. A new student needs a place on the register. A parent asks about a balance. A branch head needs an accurate report before the next meeting.</p><p>When the answers live in separate spreadsheets, paper files and messages, even a simple question can become a morning’s work.</p><p>XVS exists to make that everyday work easier to follow. We bring student and staff records, attendance, fees, timetables and reporting into one place, with clear access for the people who need them.</p><p className="xa-story-close">So the next person who needs an answer can start with the record, and keep the day moving.</p></div>
  </section>

  <section className="xa-people-section">
    <div className="xa-wrap xa-section">
      <div className="xa-section-heading"><div><p className="xa-eyebrow">MADE FOR YOUR SCHOOL DAY</p><h2>Different responsibilities.<br />The same understanding.</h2></div><p>XVS is shaped around the people doing the work, and the different things each person needs to see.</p></div>
      <div className="xa-people-grid">
        {[
          ['01', 'For the people leading', 'See the school as a whole.', 'Follow enrolment, fee collection and attendance across your campuses, using the same records your teams work with every day.', 'School owners & leadership'],
          ['02', 'For the people organising', 'Keep the details connected.', 'Handle admissions, transfers, fees and staff records with permissions that let you share the work while keeping responsibility clear.', 'Administrators & bursars'],
          ['03', 'For the people teaching', 'Keep your attention on your class.', 'Mark attendance, see your classes and timetable, and record the day’s work without another paper register to type up later.', 'Teachers & academic teams'],
        ].map(([number, label, title, text, role]) => <article className="xa-person" key={number}><div className="xa-person-top"><span>{number}</span><span>{label}</span></div><h3>{title}</h3><p>{text}</p><div className="xa-person-role">{role}</div></article>)}
      </div>
    </div>
  </section>

  <section className="xa-trust xa-wrap xa-section" data-reveal="">
    <div className="xa-trust-intro"><p className="xa-eyebrow">CONFIDENCE, BUILT INTO THE DETAILS</p><h2>Knowing where things stand changes everything.</h2><p>A school record carries real responsibility. XVS gives your team practical ways to control access, understand changes and check information before it becomes part of the day’s work.</p><a className="xa-text-link" href="/xvs">Explore how XVS works <span aria-hidden="true">&#8599;</span></a><div className="xa-trust-note"><span aria-hidden="true">&#8627;</span><p>Clear records.<br />Clear responsibilities.<br /><strong>A stronger basis for decisions.</strong></p></div></div>
    <div className="xa-principles">
      {[
        ['01', 'The right access for each person.', 'A teacher can mark attendance. A bursar can collect fees. Permissions are set around the actions a person needs to take, helping you delegate with care.'],
        ['02', 'A history you can follow.', 'Changes, logins and exports leave an audit trail, so your team can look back at what happened when a question needs an answer.'],
        ['03', 'A considered start with your records.', 'Existing registers can be imported and checked row by row. Problems are flagged for review, and you decide when the information is ready to publish.'],
        ['04', 'Room for your next chapter.', 'Start with one campus or bring a school group together. Each branch keeps its own working view, while leadership can see across the group.'],
      ].map(([number, title, text]) => <article className="xa-principle" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
    </div>
  </section>

  <section className="xa-invitation xa-wrap" data-reveal="">
    <div className="xa-invitation-inner"><div><p className="xa-eyebrow">LET’S START WITH YOUR SCHOOL</p><h2>You know your school.<br /><span>Let’s see how XVS fits.</span></h2><p>Tell us how your team works, what takes too much time, and what you need to see more clearly. We’ll walk through XVS with your school’s workflows in mind.</p><a className="xa-button" href="/contact">Book a demo <span aria-hidden="true">&#8599;</span></a></div><div className="xa-demo-note"><span>A CONVERSATION, WITH CONTEXT</span><p>Bring your questions.<br />Your branch list.<br />A sample register.</p><small>We’ll explore the everyday work, and the path from your existing records.</small></div></div>
  </section>
</main><footer style={{"background": "#fff", "borderTop": "1px solid #EDEFF4", "padding": "clamp(48px,6vw,72px) 24px 32px"}}>
  <div style={{"maxWidth": "1160px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "gap": "44px"}}>
    <div style={{"display": "flex", "flexWrap": "wrap", "gap": "clamp(32px,5vw,72px)"}}>
      <div style={{"flex": "1 1 300px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
        <a href="/" style={{"display": "flex", "alignItems": "center", "gap": "11px", "alignSelf": "flex-start"}} aria-label="CodeX home">
          <svg width="32" height="27" viewBox="0 0 30 25" fill="none" aria-hidden="true" style={{"color": "#4A659D"}}><path d="M13.9493 14.0612C17.6443 8.2554 19.9781 5.27429 24.9001 0.372653C22.2283 -0.771525 20.3744 0.615508 16.5566 5.97844L11.8634 13.4094L6.77909 11.845C4.19062 11.2553 2.74787 10.8566 0 11.4539C4.25594 12.6334 6.59352 13.4114 10.5597 15.3649C7.42046 19.5739 5.37817 21.5893 1.04294 24.2298C3.51963 24.9652 4.89632 24.7958 7.30056 22.9261C9.57745 20.8802 10.8378 19.256 12.9063 16.5382C17.1978 19.0111 19.6243 20.6002 23.8572 22.4047C26.5897 22.9516 27.7376 22.8718 29.0719 21.4921C23.2733 19.015 19.927 17.3396 13.9493 14.0612Z" fill="currentColor"></path><path d="M22.5535 10.1503C19.5947 11.5749 17.9464 12.4495 14.9922 14.322L16.8174 15.3649C21.2796 12.4323 23.8297 11.0245 28.42 8.71626C26.3014 8.75601 25.015 9.05585 22.5535 10.1503Z" fill="currentColor"></path></svg>
          
        </a>
        <p style={{"margin": "0", "maxWidth": "300px", "fontSize": "15px", "lineHeight": "1.6", "color": "#555654"}}>{"XVS brings your school’s people, campuses and everyday records together. One connected place to keep the day moving."}</p>
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
