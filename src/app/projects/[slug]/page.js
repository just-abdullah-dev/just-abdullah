import PageLayout from "@/components/PageLayout/PageLayout";
import ProjectInDetail from "@/components/ProjectsPage/ProjectInDetail";
import BreadCrumbs from "@/components/utils/BreadCrumbs";
import { projects } from "@/constants/data";
import React from "react";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function page({ params }) {
  const formattedSlug = params?.slug
    ?.split("-")
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(" ");
  const breadcrumbs = [
    { name: "home", path: "/" },
    { name: "projects", path: "/projects" },
    { name: formattedSlug, path: `/projects/${params?.slug}` },
  ];

  return (
    <PageLayout>
      <div className="grid gap-4">
        <BreadCrumbs data={breadcrumbs} />
        <ProjectInDetail slug={params?.slug} />
      </div>
    </PageLayout>
  );
}
