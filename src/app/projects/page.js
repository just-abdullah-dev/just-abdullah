import PageLayout from "@/components/PageLayout/PageLayout";
import Projects from "@/components/ProjectsPage/Projects";
import React from "react";

function page() {
  return (
    <PageLayout>
      <div className=" py-6 grid gap-4">
       
        <Projects showMoreBtn={false} />
      </div>
    </PageLayout>
  );
}

export default page;
