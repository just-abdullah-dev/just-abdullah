import Contact from "@/components/ContactPage/Contact";
import Trust from "@/components/CustomerFeedback/Trust";
import Education from "@/components/Education/Education";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import HeroSection from "@/components/HeroSection/HeroSection";
import LaunchPad from "@/components/LaunchPad/LaunchPad";
import PageLayout from "@/components/PageLayout/PageLayout";
import Projects from "@/components/ProjectsPage/Projects";
import Skills from "@/components/Skills/Skills";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  title: undefined,
  description:
    "Abdullah is a product-minded Full Stack Engineer and founder building scalable SaaS, React Native platforms, and AI-integrated systems. Explore selected work and start a project.",
});

export default function Home() {
  return (
    <PageLayout fullBleed>
      <HeroSection />
      <div className="shell flex flex-col">
        <Projects showMoreBtn limit={3} />
        <Trust />
        <ExperienceTimeline />
        {/* <LaunchPad /> */}
        <Skills />
        <Education />
        <Contact compact />
      </div>
    </PageLayout>
  );
}
