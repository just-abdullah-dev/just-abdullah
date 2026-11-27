import PageLayout from "@/components/PageLayout/PageLayout";
import Services from "@/components/ServicesPage/Services";
import Contact from "@/components/ContactPage/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { faqs } from "@/constants/data";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services",
  path: "/services",
  description:
    "Work with Abdullah on product builds, SaaS systems, React Native apps, and architecture reviews. Clear scope, production quality, founder-friendly process.",
  keywords: [
    "hire full stack developer",
    "Next.js freelance developer",
    "React Native contractor",
    "SaaS development services",
  ],
});

export default function ServicesPage() {
  return (
    <PageLayout>
      <JsonLd data={faqJsonLd(faqs)} />
      <Services />
      <Contact compact />
    </PageLayout>
  );
}
