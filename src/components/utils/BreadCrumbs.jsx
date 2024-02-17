import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BreadCrumbs({data}) {
  return (
    <div className='flex items-center gap-4 mb-16'> 
        {data.map((item, index)=>{
            return <div key={index} className='flex items-center gap-4'>
                <Link
            className=' text-light hover:text-white'
            href={item?.path}>
                {item?.name}
            </Link>
            {index+1 !== data.length && <MoveRight className=' text-light' />}
            </div>
        })}
    </div>
  )
}
