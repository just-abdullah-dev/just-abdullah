import Contact from "@/components/ContactPage/Contact";
import PageLayout from "@/components/PageLayout/PageLayout";
import HeroSection from "@/components/ServicesPage/HeroSection";
import ServicesInDetail from "@/components/ServicesPage/ServicesInDetail";
import React from "react";

function page() {
  return (
    <PageLayout>
      <div className=" py-6 grid gap-12">
        <HeroSection />
        <ServicesInDetail />
      </div>
    </PageLayout>
  );
}

export default page;
