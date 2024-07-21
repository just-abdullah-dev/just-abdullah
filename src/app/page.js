import Contact from "@/components/ContactPage/Contact";
import CustomerFeedback from "@/components/CustomerFeedback/CustomerFeedback";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageLayout from "@/components/PageLayout/PageLayout";
import Projects from "@/components/ProjectsPage/Projects";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <PageLayout>
      <div className=" grid gap-6 md:gap-12 mt-4">
        <HeroSection />        
        <Projects showMoreBtn={true} />
        <CustomerFeedback />
        <Skills />
        <Contact />
      </div>
    </PageLayout>
  );
}
