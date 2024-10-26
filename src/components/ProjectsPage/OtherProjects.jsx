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
            return <div key={index} className=' p-4 bg-opacity-30 bg-gray-500 rounded-xl flex flex-col items-start justify-between gap-3'>
                <Link href={`/projects/${item?.slug}`} className=' hover:underline duration-300' >
                    <h1 className=' font-bold text-2xl text-primary'>{item?.title}</h1>
                    <h3>{item?.tagline}</h3>
                </Link>
                <div className=' mt-3 flex flex-wrap gap-2 font-light'>
                    {item?.keywords.map((i, index)=>{
                        if(index > 4){
                            if(index + 1 === item?.keywords.length){
                                return <div key={index} className="py-1 px-4 rounded-lg bg-dark">
                                . . .
                              </div>
                            }else{
                                return;
                            }
                        }
                        return  (<div key={index} className="py-1 px-4 rounded-lg bg-dark">
                        {i}
                      </div>)
                    })}
                </div>
            </div>
        })}
    </div>
  )
}
