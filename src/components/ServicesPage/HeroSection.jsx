import Image from "next/image";
import React from "react";

export default function HeroSection() {
  // Hero Section for Service pAge
  return (
    <div className=" flex flex-col-reverse lg:flex-row items-center overflow-hidden w-full text-gray-300 relative gap-10">
      <div className=" flex flex-col lg:w-[55%] lg:pl-12 xl:pl-24 gap-6">
        <div className=" text-6xl lg:text-7xl text-primary roboto-bold">
          Web Services
        </div>
        <div className=" text-3xl text-light roboto-bold">
          Where <span className="text-primary">ideas</span> transform into web{" "}
          <span className=" text-primary">realitites.</span>
        </div>
      </div>
      <div className=" w-full lg:w-[45%] overflow-hidden h-full flex items-center justify-center">
        <Image
        className=" w-[80%] md:w-[60%] aspect-auto"
        src={'/web-service.png'}
        alt="pic"
        width={600}
        height={600}
        priority
        />
      </div>
    </div>
  );
}
