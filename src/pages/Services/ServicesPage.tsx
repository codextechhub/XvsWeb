import PageLayout from "../../components/PageLayout";
import BookDemoBanner from "../../components/BookDemoBanner";
import { usePageMeta } from "../../pageTitles";
import Hero from "./sections/Hero";
import GroupNav from "./sections/GroupNav";
import GroupSection from "./sections/GroupSection";
import { SERVICE_GROUPS } from "./content";
import "./services.css";

/**
 * The Services page: what XVS does, broken down.
 *
 *   Hero          – intro + the six groups at a glance
 *   GroupNav      – sticky tabs to jump between groups
 *   GroupSection  – one per group, each listing its services;
 *                   every service opens to show the problem, how it
 *                   works, what you get and a story from Bright Star
 *   BookDemoBanner – the closing call to action
 *
 * All words live in ./content.ts. Styles live in ./services.css.
 */
export default function ServicesPage() {
  usePageMeta("services");

  return (
    <PageLayout className="services">
      <Hero />
      <GroupNav />
      {SERVICE_GROUPS.map((group) => (
        <GroupSection key={group.id} group={group} />
      ))}
      <BookDemoBanner />
    </PageLayout>
  );
}
