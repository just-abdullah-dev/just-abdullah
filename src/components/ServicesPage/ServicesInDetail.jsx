import { services } from "@/constants/data";
import { ArrowRight, Check, CrosshairIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServicesInDetail() {
  return (
    <div className="grid gap-8 lg:px-12 xl:px-24">
      {/* services map func  */}
      <div className=" grid gap-8 grid-cols-1">
        {services.map((item, index) => {
          return (
            <div
              id={item?.slug}
              key={index}
              className=" p-4 md:p-8 rounded-lg borde border-primary hover:bg-gray-500 hover:bg-opacity-30 duration-300 hover:text-white text-light flex flex-col lg:flex-row-reverse gap-6"
            >
              {/* image  */}
              <div className="flex items-center justify-center lg:w-[40%]">
                <Image
                  className=" aspect-auto w-[70%] lg:w-full"
                  src={item?.image}
                  alt={item?.title + " picture"}
                  width={600}
                  height={600}
                />
              </div>
              <div className=" lg:w-[60%] grid gap-2">
              <h1 className=" text-2xl lg:text-4xl roboto-bold flex gap-2 items-center text-primary">
                {item?.title}
              </h1>
              <p className="">{item?.desc}</p>
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
              <div className="w-full">
              <Link className=" bg-primary text-light p-2 px-6 w-fit float-right" href={`/#contact`}>Contact</Link>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesInDetail;
