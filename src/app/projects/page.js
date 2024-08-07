import PageLayout from "@/components/PageLayout/PageLayout";
import Projects from "@/components/ProjectsPage/Projects";
import React from "react";

function page() {
  return (
    <PageLayout>
      <div className=" py-6 grid gap-12">
        <div className=" flex flex-col-reverse lg:flex-row items-center overflow-hidden w-full text-gray-300 relative gap-10">
          <div className=" flex flex-col lg:w-[55%] lg:pl-12 xl:pl-24 gap-6">
            <div className=" text-6xl lg:text-7xl text-primary font-bol font-bold py-1">
              Projects
            </div>
          </div>
        </div>
        <Projects showMoreBtn={false} />
      </div>
    </PageLayout>
  );
}

export default page;
