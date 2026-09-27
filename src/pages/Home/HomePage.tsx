import PageLayout from "../../components/PageLayout";
import BookDemoBanner from "../../components/BookDemoBanner";
import { usePageMeta } from "../../pageTitles";
import Hero from "./sections/Hero";
import BuiltFor from "./sections/BuiltFor";
import Statement from "./sections/Statement";
import Features from "./sections/Features";
import DayAtBrightStar from "./sections/DayAtBrightStar";
import ServicesPreview from "./sections/ServicesPreview";
import Trust from "./sections/Trust";
import "./home.css";

/**
 * The XVS home page, top to bottom
 * (the moving background comes from PageLayout, see components/SiteBackground.tsx):
 *
 *   Hero             – headline, the dashboard and a live activity feed
 *   BuiltFor         – scrolling band of the people XVS is for
 *   Statement        – one sentence that lights up as you scroll (01 · 02 · 03)
 *   Features         – 01 records, 02 money, 03 control, each with a screenshot
 *   DayAtBrightStar  – a school day on XVS, as a timeline (dark section)
 *   ServicesPreview  – the six service groups, linking to /services
 *   Trust            – access, approvals and audit
 *   BookDemoBanner   – the closing call to action
 *
 * To change any text or image, edit ./content.ts.
 * To restyle, edit ./home.css (organised in the same order).
 * To reorder or remove a section, move or delete its line below.
 */
export default function HomePage() {
  usePageMeta("home");

  return (
    <PageLayout className="home">
      <Hero />
      <BuiltFor />
      <Statement />
      <Features />
      <DayAtBrightStar />
      <ServicesPreview />
      <Trust />
      <BookDemoBanner />
    </PageLayout>
  );
}
