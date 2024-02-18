import PageLayout from '@/components/PageLayout/PageLayout'
import ProjectInDetail from '@/components/ProjectsPage/ProjectInDetail'
import BreadCrumbs from '@/components/utils/BreadCrumbs'
import React from 'react'

export default function page({params}) {
    const breadcrumbs = [
        {name:" home", path: "/"},
        {name:" projects", path: "/projects"},
        {name: params?.slug.replace("-"," "), path: params?.slug},
    ];

  return (
    <PageLayout> 
        <div className='gri'>
            <BreadCrumbs data={breadcrumbs} />
            <ProjectInDetail slug={params?.slug} />
        </div>
    </PageLayout>
  )
}
