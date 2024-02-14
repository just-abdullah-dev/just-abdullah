import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className=" flex flex-col lg:flex-row items-center overflow-hidden w-full text-gray-300 relative bg-gray-40 py-12 lg:py-24 gap-10">
      <div className=" flex flex-col md:w-2/3 lg:pl-12 xl:pl-24 gap-6">
        <div className=" text-6xl lg:text-7xl text-primary roboto-bold">
          Web Services!
        </div>
        <div className=" text-3xl text-light roboto-bold">
          Where <span className="text-primary">ideas</span> transform into web{" "}
          <span className=" text-primary">realitites.</span>
        </div>
      </div>
      <div className=" w-full rounded-lg lg:w-1/3 overflow-hidden h-full flex items-center justify-center">
        <Image
        className=" w-full aspect-auto"
        src={'/skill-joiner-1.gif'}
        alt="pic"
        width={600}
        height={600}
        priority
        />
      </div>
    </div>
  );
}
