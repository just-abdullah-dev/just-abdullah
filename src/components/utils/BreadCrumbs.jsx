import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BreadCrumbs({data}) {
  return (
    <div className='flex items-center gap-3 ml-4'> 
        {data.map((item, index)=>{
            return <div key={index} className='flex items-center gap-3'>
                <Link
            className=' text-light hover:text-white'
            href={item?.path}>
                {item?.name}
            </Link>
            {index+1 !== data.length && "/"}
            </div>
        })}
    </div>
  )
}
