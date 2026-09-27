import PageLayout from "../../components/PageLayout";
import BookDemoBanner from "../../components/BookDemoBanner";
import { usePageMeta } from "../../pageTitles";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import People from "./sections/People";
import Principles from "./sections/Principles";
import { CLOSING } from "./content";
import "./about.css";

/**
 * The About page, top to bottom:
 *
 *   Hero        – "Behind every school day", with the connected-record diagram
 *   Story       – our belief, then why XVS exists
 *   People      – who XVS is made for (three cards)
 *   Principles  – access, history, imports, growth
 *   BookDemoBanner – the closing call to action
 *
 * All words live in ./content.ts. Styles live in ./about.css.
 */
export default function AboutPage() {
  usePageMeta("about");

  return (
    <PageLayout className="about">
      <Hero />
      <Story />
      <People />
      <Principles />
      <BookDemoBanner eyebrow={CLOSING.eyebrow} title={CLOSING.title} body={CLOSING.body} />
    </PageLayout>
  );
}
