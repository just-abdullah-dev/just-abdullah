import { projects } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Btn from "../utils/Btn";
import AnimatedText from "../utils/AnimatedText";
import ImageSlider from "./ImageSlider";

function Projects({ showMoreBtn }) {
  return (
    <div className="grid gap-6 lg:px-12 xl:px-24 mt-6 md:mt-0">
      {/* title  */}
      {showMoreBtn && (
        <Link
          href={"projects"}
          className=" text-primary font-medium text-4xl lg:text-5xl mb-4"
        >
          Projects.
        </Link>
      )}
      {/* projects map func  */}
      <div className=" projects grid gap-8 grid-cols-1 text-light">
        {projects.map((item, index) => {
          if (showMoreBtn && index > 2) {
            return;
          }
          return (
            <Link
              key={index}
              className=" p-4 flex items-center justify-between relative  flex-row-reverse"
              href={`/projects/${item?.slug}`}
            >
              <div className="md:hidden duration-300 font-serif text-xl hover:text-primary absolute -top-6 left-0 ">
                <span className="">{index + 1}.</span> {item?.title}
              </div>
              <div className="hidden md:flex w-1/12 aspect-square font-bold text-3xl lg:text-4xl xl:text-5xl items-center justify-center border lg:border-2 xl:border-4 border-dark rounded-full bg-opacity-30 bg-gray-500">
                0{index + 1}
              </div>
              <div className="hidden md:block border-b border-primary w-4/12 relative">
                <div className="  text-4xl hover:text-primary absolute bottom-0 duration-300 left-16">
                  <AnimatedText
                    className=" h-[44px]"
                    yValue={-42}
                    text={item?.title}
                  />
                </div>
              </div>
              <div className=" w-full md:w-7/12 flex items-center justify-center aspect-video bg-opacity-30 bg-gray-500 rounded-lg">
                <div className=" w-full h-full bg-dark m-2 mt-4 rounded-md overflow-hidden relative flex items-center justify-center">
                  {/* <ImageSlider item={item} key={index} /> */}
                   <div className="relative w-full h-fit overflow-hidden">
                        <Image
                          className={`w-full h-fit transition-opacity duration-200`}
                          src={item?.images[0]}
                          alt={`${item?.title} picture`}
                          width={300}
                          height={300}
                          priority
                        />
                      </div>
                  <div className=" bg-dark bg-opacity-40 w-full absolute z-10 bottom-0 right-0 text-center py-2 text-sm md:text-base">
                    <AnimatedText
                      className=" mx-auto"
                      border={true}
                      text={"Tap to see"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {showMoreBtn && (
        <Link href={`/projects`} className="w-fit mx-auto">
          <Btn>See More Projects</Btn>
        </Link>
      )}
    </div>
  );
}

export default Projects;
