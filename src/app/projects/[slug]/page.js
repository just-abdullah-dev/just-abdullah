import PageLayout from "@/components/PageLayout/PageLayout";
import ProjectInDetail from "@/components/ProjectsPage/ProjectInDetail";
import BreadCrumbs from "@/components/utils/BreadCrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/constants/data";
import { breadcrumbJsonLd, buildMetadata, creativeWorkJsonLd } from "@/lib/seo";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    return buildMetadata({
      title: "Project not found",
      path: `/projects/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: project.title,
    description: project.summary || project.tagline,
    path: `/projects/${project.slug}`,
    image: project.images?.[0] || "/og-default.png",
    noIndex: project.indexable === false,
    keywords: [project.title, ...(project.keywords || []).slice(0, 6)],
  });
}

export default function ProjectPage({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ];

  return (
    <PageLayout>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={creativeWorkJsonLd(project)} />
      <div className="pt-6">
        <BreadCrumbs data={breadcrumbs} />
        <ProjectInDetail slug={params.slug} />
      </div>
    </PageLayout>
  );
}
