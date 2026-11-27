import PageLayout from "@/components/PageLayout/PageLayout";
import Projects from "@/components/ProjectsPage/Projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projects",
  path: "/projects",
  description:
    "Project archive by Abdullah — GateTak logistics, AWC veterinary platform, Astra telehealth, Bonny, Nigotis accounting, Sehat-AI, and more production builds.",
  keywords: [
    "Abdullah projects",
    "Next.js case studies",
    "React Native portfolio",
    "SaaS projects Pakistan",
  ],
});

export default function ProjectsPage() {
  return (
    <PageLayout>
      <Projects showMoreBtn={false} />
    </PageLayout>
  );
}
