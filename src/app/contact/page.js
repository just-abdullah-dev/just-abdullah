import Contact from "@/components/ContactPage/Contact";
import PageLayout from "@/components/PageLayout/PageLayout";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description: `Contact Abdullah to discuss SaaS, mobile, or AI product builds. Email ${SITE.email} or use the project form.`,
  keywords: ["contact Abdullah developer", "hire Abdullah", "Just Abdullah contact"],
});

export default function ContactPage() {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  );
}
