import { projects } from '@/constants/data'
import Link from 'next/link';
import React from 'react'

export default function OtherProjects({slug}) {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 py-6 px-8'>
        {projects.map((item, index) => {
            if(item?.slug === slug){
                return;
            }
            return <div key={index} className=' p-4 bg-opacity-30 bg-gray-500 rounded-xl'>
                <Link href={`/projects/${item?.slug}`} className=' hover:underline duration-300' >
                    <h1 className=' roboto-bold text-2xl text-primary'>{item?.title}</h1>
                    <h3>{item?.tagline}</h3>
                </Link>
                <div className=' flex flex-wrap gap-3'>
                    {item?.keywords.map((i, index)=>{
                        return  (<div key={index} className="">
                        {i},
                      </div>)
                    })}
                </div>
            </div>
        })}
    </div>
  )
}
