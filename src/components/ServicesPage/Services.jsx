import { services } from '@/constants/data';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Services() {
  return (
    <div className='grid gap-8 lg:px-12 xl:px-24'>
      {/* title  */}
      {/* <div className="grid gap-2">
        <Link 
        href={'services'}
        className=" text-primary roboto-bold text-4xl lg:text-5xl">Web Services.</Link>
        <p className=" text-light">Where <span className=" text-primary">ideas</span> transform into <span className=" text-primary">web</span> realities.</p>
      </div> */}
      {/* services map func  */}
      <div className=' grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {services.map((item, index)=>{
          return <div key={index}
          className=' p-4 md:p-8 rounded-lg border border-primary hover:bg-primary duration-300 hover:text-white grid gap-8 min-h-max group'
          >
          <div className=' grid gap-4'>
          <h1 className=' text-2xl roboto-bold flex gap-2 items-center'>{item?.title} <ArrowRight /> </h1>
          <p className=' text-sm text-light'>{item?.desc}</p>
          </div>
          <div className=' grid gap-4'>
          <h1 className=" text-lg roboto-bold text-white">
                Features:
              </h1>
              <ul className=" px-6 grid gap-2 text-sm">
                {item?.features.map((ele,index)=>{
                  return <li 
                  className=" flex gap-2 items-center"
                  key={index}>
                    <Check size={18} color="green" /> {ele}
                  </li>
                })}
              </ul>
          </div>
          
          <div className="w-full">
              <Link className=" bg-primary rounded text-light p-2 px-6 w-full text-center float-right group-hover:bg-gray-200 group-hover:text-black" href={`/#contact`}>{item?.cta}</Link>
              </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services;