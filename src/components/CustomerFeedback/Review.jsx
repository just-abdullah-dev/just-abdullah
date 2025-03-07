"use client";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Review({ data }) {
  return (
    <div className=" w-full h-full grid place-items-center">
      <div className=" flex flex-col md:flex-row w-full">
        <div className=" w-full md:w-[30%] relative grid place-items-center">
          <div className=" bg-primary rounded-xl h-full top-0 left-auto w-[50%] sm:w-[30%] md:w-[60%] right-auto absolute "></div>
          <div className=" m-3 md:m-6 p-4 md:p-6 grid gap-6 bg-gray-300 z-50 shadow-[0px_0px_18px_10px_#00000024] ">
            <Image
              src={data?.avatar}
              width={200}
              height={200}
              className=" aspect-square "
            />
            <div className=" grid place-items-center text-black">
              <h1 className=" font-semibold tracking-wider ">{data?.name}</h1>
              <p className=" text-sm">{data?.profession}</p>
            </div>
          </div>
        </div>
        <div className=" w-full h-full md:w-[70%] p-3 sm:p-6 md:py-12 md:pr-10">
          <h1 className=" text-3xl font-bold text-gray-300 relative w-full md:w-[38%]">
            {/* bar */}
            <div className=" h-[4px] w-[74%] sm:w-[33%] md:w-full absolute md:left-[-56px] bottom-[-2px] md:top-[-10px] bg-gray-300 z-50 hidde"></div>
            Client Review
          </h1>
          <div className=" w-full flex h-fit my-2 sm:my-4">
            <Quote
              fill="#9CA3AF"
              strokeWidth={0}
              size={32}
              className=" rotate-180"
            />
            <p className=" w-full p-1 sm:p-3 md:p-6 text-white text-sm md:text-base">
              {data?.review}
            </p>
            <div className="flex items-end">
              <Quote fill="#9CA3AF" strokeWidth={0} size={32} />
            </div>
          </div>
          <div className=" grid place-items-end pt-4">
            <Link
              href={`/projects/${data?.projectSlug}`}
              className=" text-[13px] hover:underline"
            >
              See Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
