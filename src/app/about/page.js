import AboutSection from '@/components/AboutPage/AboutSection';
import Contact from '@/components/ContactPage/Contact';
import PageLayout from '@/components/PageLayout/PageLayout';
import React from 'react'

function page() {
  return (
    <PageLayout>
      <div className=" grid gap-12">
      <AboutSection />
      </div>
    </PageLayout>
  )
}

export default page;