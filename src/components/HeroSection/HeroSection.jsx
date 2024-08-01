import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className=" flex items-center overflow-hidden w-full text-gray-300 relative">
      <div className=" flex flex-col md:gap-2 md:w-1/2 lg:pl-12 xl:pl-24 py-12 md:py-0 gap-6">
        <div className=" text-6xl text-primary font-semibold stroke-white stroke-2 ">
          Here is Abdullah!
        </div>
        <div className=" text-4xl text-primary font-medium opacity-75">
          I am Full-Stack Developer.
        </div>
        {/* <div className=" font-medium text-xl">
            Turning <span className=" text-primary">ideas</span> into <span className=" text-primary">real life</span> products is my <span className=" text-primary">calling</span>
        </div> */}
        <div className=" w-[75%]">
            A student of software engineering, I have a passion to develop modern classical things for a startup to standout.
        </div>
            <Link 
            href={`#contact`}
            className="actionBtn w-fit"
            >Contact Me</Link>
      </div>
      <div className=" md:w-1/2 items-center justify-center  hidden md:flex ">
        <Image
        src={'/DP_New.jpeg'}
        className=" aspect-square scale-x-[-1] transition-hero-image"
        width={450}
        height={450}
        alt="hero-section-image"
        />

      </div>
    </div>
  );
}
