import PageLayout from "../../components/PageLayout";
import { usePageMeta } from "../../pageTitles";
import Hero from "./sections/Hero";
import BuiltFor from "./sections/BuiltFor";
import Statement from "./sections/Statement";
import Quote from "./sections/Quote";
import Features from "./sections/Features";
import Trust from "./sections/Trust";
import ServicesPreview from "./sections/ServicesPreview";
import DayAtBrightStar from "./sections/DayAtBrightStar";
import Faq from "./sections/Faq";
import ClosingCta from "./sections/ClosingCta";
import "./home.css";

/**
 * The XVS home page, top to bottom:
 *
 *   Hero             headline and buttons side by side, then the "How XVS works" reel
 *   BuiltFor         "Built for" label with the people XVS serves scrolling past
 *   Statement        one sentence that lights up as you scroll, then three summary cards
 *   Quote            a large quote card whose words sharpen as you scroll
 *   Features         01 records, 02 money, 03 control, each with a screenshot
 *   Trust            the security card: access, approvals and audit
 *   ServicesPreview  the six service groups in three columns, linking to /services
 *   DayAtBrightStar  a school day as a sliding row of moments
 *   Faq              common questions, as an accordion (also sent to Google)
 *   ClosingCta       the headline again, with the buttons
 *
 * To change any text or image, edit ./content.ts.
 * To restyle, edit ./home.css (organised in the same order; colours at the top).
 * To reorder or remove a section, move or delete its line below.
 */
export default function HomePage() {
  usePageMeta("home");

  return (
    <PageLayout className="home">
      <Hero />
      <BuiltFor />
      <Statement />
      <Quote />
      <Features />
      <Trust />
      <ServicesPreview />
      <DayAtBrightStar />
      <Faq />
      <ClosingCta />
    </PageLayout>
  );
}
