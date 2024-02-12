import React from 'react';
import Link from 'next/link';
import { social_links } from '@/constants/data';

function Socials({css}) {
  return (
    <ul className={css}>
              {social_links.map((item, index)=>{
                return <li key={index}>
                  <Link target="_blank" href={item?.link}>
                    {item?.jsx}
                  </Link>
                </li>
              })}
            </ul>
  )
}

export default Socials