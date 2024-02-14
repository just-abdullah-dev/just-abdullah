import PageLayout from '@/components/PageLayout/PageLayout'
import HeroSection from '@/components/ServicesPage/HeroSection';
import Services from '@/components/ServicesPage/Services';
import React from 'react'

function page() {
  return (
    <PageLayout>
        <HeroSection />
        <Services />
    </PageLayout>
  )
}

export default page;