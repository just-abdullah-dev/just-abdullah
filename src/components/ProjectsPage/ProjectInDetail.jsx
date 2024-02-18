"use client";
import { projects } from "@/constants/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';

export default function ProjectInDetail({ slug }) {
  let data = projects.filter((item) => {
    if (item?.slug === slug) {
      return item;
    }
  });
  data = data[0];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      {/* hero section  */}
      <div className=" flex flex-col lg:flex-row items-center w-full text-light relative gap-10 p-6 mb-8">
        {/* title tagline  */}
        <div className=" flex flex-col w-full lg:w-[40%] ">
          <div className=" text-5xl lg:text-6xl text-primary roboto-bold">
            {data?.title}
          </div>
          <div className=" text-lg text-light">{data?.tagline}</div>
        </div>
        {/* image slider  */}
        <div className="w-full lg:w-[60%]">
          {data?.images.length > 1 ? (
            <Slider {...settings}>
              {data?.images.map((item, index) => {
                return (
                  <Image
                    className=" rounded-xl aspect-auto"
                    alt={item}
                    key={index}
                    src={item}
                    width={1000}
                    height={1000}
                  />
                );
              })}
            </Slider>
          ) : (
            <Image
              className=" rounded-xl aspect-auto"
              alt={data?.images[0]}
              key={data?.images[0]}
              src={data?.images[0]}
              width={1000}
              height={1000}
            />
          )}
        </div>
      </div>
      {data?.completedOn &&
      <p className=" text-light text-sm float-right mr-6 mb-8">Completed on: {data?.completedOn}</p>}
      {/* github and preview links  */}
      <div className=" flex items-center justify-around py-4 w-full mb-8">
        <Link className=" actionBtn w-28 text-center" target="_blank" href={data?.repo}>Code</Link>
        
        <Link className=" actionBtn w-28 text-center" target="_blank" href={data?.link}>Visit</Link>
      </div>
      {/* description  */}
      <div id="md-div" className="md:px-16 lg:px-24 mb-8"> 
      <ReactMarkdown className=" grid gap-2">{data?.desc}</ReactMarkdown> 
      </div>
      {/* tags  */}
      <div className="grid gap-4 mb-8 md:px-16 lg:px-24">
        <h2 className=" text-white roboto-bold text-lg">Tags:</h2>
        <div className=" flex flex-wrap items-center gap-6 px-4">
        {data?.keywords.map((item, index)=>{
          return <div key={index} className=" px-4 py-2 w-fit bg-primary">{item}
            </div>
        })}
        </div>
      </div>

      {/* others projects except this one  */}
      <div className=" mb-8 md:px-16 lg:px-24">

      </div>
    </div>
  );
}
