import Contact from "@/components/ContactPage/Contact";
import Education from "@/components/Education/Education";
import ExperienceTimeline from "@/components/Experience/ExperienceTimeline";
import HeroSection from "@/components/HeroSection/HeroSection";
import LaunchPad from "@/components/LaunchPad/LaunchPad";
import PageLayout from "@/components/PageLayout/PageLayout";
import Projects from "@/components/ProjectsPage/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <PageLayout>
      <main className="relative grid gap-8 pb-10 md:gap-12">
        <HeroSection />
        <Projects showMoreBtn={true} />
        <ExperienceTimeline />
        <LaunchPad />
        <Skills />
        <Education />
        <Contact />
      </main>
    </PageLayout>
  );
}
