import { services } from '@/constants/data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Services() {
  return (
    <div className='grid gap-8 lg:px-12 xl:px-24'>
      {/* title  */}
      <div className="grid gap-2">
        <Link 
        href={'services'}
        className=" text-primary roboto-bold text-4xl lg:text-5xl">Web Services.</Link>
        <p className=" text-light">Where <span className=" text-primary">ideas</span> transform into <span className=" text-primary">web</span> realities.</p>
      </div>
      {/* services map func  */}
      <div className=' grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {services.map((item, index)=>{
          return <Link key={index}
          className=' p-4 rounded-lg border border-primary hover:bg-primary duration-300 hover:text-white'
          href={`/services#${item?.slug}`}
          >
          <h1 className=' text-2xl roboto-bold mb-2 flex gap-2 items-center'>{item?.title} <ArrowRight /> </h1>
          <p className=' text-sm text-light'>{item?.desc}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Services;