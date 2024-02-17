import Contact from "@/components/ContactPage/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageLayout from "@/components/PageLayout/PageLayout";
import Projects from "@/components/ProjectsPage/Projects";
import Services from "@/components/ServicesPage/Services";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <PageLayout>
      <div className=" grid gap-6 md:gap-12 mt-4">
        <HeroSection />
        <Services />          
        <Projects showMoreBtn={true} />
        <Skills />
        <Contact />
      </div>
    </PageLayout>
  );
}
