import PageLayout from '@/components/PageLayout/PageLayout'
import ProjectInDetail from '@/components/ProjectsPage/ProjectInDetail'
import BreadCrumbs from '@/components/utils/BreadCrumbs'
import React from 'react'

export default function page({params}) {
    const breadcrumbs = [
        {name:" Home", path: "/"},
        {name:" Projects", path: "/projects"},
        {name:" Read Verve", path: params?.slug},
    ];

  return (
    <PageLayout>
        <div>
            <BreadCrumbs data={breadcrumbs} />
            <ProjectInDetail slug={params?.slug} />
        </div>
    </PageLayout>
  )
}
