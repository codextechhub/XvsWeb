import { Link } from "react-router-dom";
import { Accent, Reveal } from "./shared/ui";
import { ArrowIcon } from "./shared/icons";
import { DEMO_LINK } from "./navigation";

/**
 * The navy "Book a demo" panel that closes most pages.
 * Every service in the guide ends on this same call to action.
 * Put accent words between *asterisks* in the title.
 */
export default function BookDemoBanner({
  eyebrow = "Next step",
  title = "See XVS *running your school*",
  body = "Book a demo and we will walk you through the modules your school needs, using your own classes and fees.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="demo-banner-section">
      <div className="container">
        <Reveal className="demo-banner">
          <div className="demo-banner-glow" aria-hidden="true" />
          <img className="demo-banner-logo" src="/logo.png" alt="" width={233} height={296} />
          <p className="eyebrow">{eyebrow}</p>
          <h2>
            <Accent text={title} />
          </h2>
          <p className="demo-banner-body">{body}</p>
          <Link to={DEMO_LINK.href} className="btn btn-light">
            {DEMO_LINK.label}
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
