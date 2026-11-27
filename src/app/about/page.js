import AboutSection from "@/components/AboutPage/AboutSection";
import Contact from "@/components/ContactPage/Contact";
import PageLayout from "@/components/PageLayout/PageLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "About Abdullah — Full Stack Engineer and GateTak founder. Background in SaaS, healthtech, mobile apps, education at PAF-IAST, and production delivery across web and mobile.",
  keywords: [
    "About Abdullah developer",
    "Full Stack Engineer Pakistan",
    "GateTak founder",
    "PAF-IAST software engineer",
  ],
});

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutSection />
      <Contact compact />
    </PageLayout>
  );
}
