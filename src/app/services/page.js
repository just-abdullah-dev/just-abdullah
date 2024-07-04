
import PageLayout from "@/components/PageLayout/PageLayout";
import HeroSection from "@/components/ServicesPage/HeroSection";
import Services from "@/components/ServicesPage/Services";
import React from "react";

function page() {
  return (
    <PageLayout>
      <div className=" py-6 grid gap-12">
        <HeroSection />
        <Services />
      </div>
    </PageLayout>
  );
}

export default page;
