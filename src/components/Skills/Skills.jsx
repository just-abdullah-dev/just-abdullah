import { skills } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Skills() {
  return (
    <div className="grid gap-6 lg:px-12 xl:px-24 mt-6 md:mt-0">
      {/* title  */}
      <Link
        href={"skills"}
        className=" text-primary roboto-bold text-4xl lg:text-5xl"
      >
        My expertise.
      </Link>
      {/* skills map func  */}
      <div className=" grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        <div className=" p-4 rounded-lg border border-primary bg-opacity-50 bg-light duration-300 text-dark h-[150px] flex flex-col justify-between items-center">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto"
            width={120}
            height={100}
            src={
              "https://upload.vectorlogo.zone/logos/nextjs/images/271afdac-aad3-4712-89fd-a25f63fd6dd4.svg"
            }
            alt={"Next.js logo"}
          />
          <h1 className=" text-xl roboto-medium mx-auto text-center">
            Next.js
          </h1>
        </div>
        <div className=" p-4 rounded-lg border border-primary bg-opacity-40 bg-light duration-300 text-dark h-[150px] flex flex-col justify-between items-center">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto"
            width={90}
            height={90}
            src={
              "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
            }
            alt={"React.js logo"}
          />
          <h1 className=" text-xl roboto-medium mx-auto text-center">
            React.js
          </h1>
        </div>
        <div className=" p-4 rounded-lg border border-primary bg-opacity-40 bg-light duration-300 text-dark h-[150px] flex flex-col justify-between items-center">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto"
            width={90}
            height={90}
            src={
              "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            }
            alt={"Tailwind CSS logo"}
          />
          <h1 className=" text-xl roboto-medium mx-auto text-center">
            Tailwind CSS
          </h1>
        </div>
        <div className=" p-4 rounded-lg border border-primary bg-opacity-40 bg-light duration-300 text-dark h-[150px] flex flex-col justify-between items-center">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto"
            width={125}
            height={100}
            src={
              "https://nodejs.org/static/images/logo.svg"
            }
            alt={"Node.js logo"}
          />
          <h1 className=" text-xl roboto-medium mx-auto text-center">
            Node.js
          </h1>
        </div>
        <div className=" p-4 rounded-lg border border-primary bg-opacity-40 bg-light duration-300 text-dark h-[150px] flex flex-col justify-between items-center">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto"
            width={90}
            height={90}
            src={
              "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
            }
            alt={"Express.js logo"}
          />
          <h1 className=" text-xl roboto-medium mx-auto text-center">
            Express.js
          </h1>
        </div>
        <div className=" p-4 rounded-lg border border-primary bg-opacity-40 bg-light duration-300 text-dark h-[150px] flex flex-col justify-between items-center">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto"
            width={150}
            height={100}
            src={
              "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg"
            }
            alt={"MongoDB logo"}
          />
          <h1 className=" text-xl roboto-medium mx-auto text-center">
            MongoDB
          </h1>
        </div>
        <div className=" p-4 rounded-lg border border-primary bg-opacity-40 bg-light duration-300 text-dark h-[150px] flex flex-col justify-between items-center">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto"
            width={85}
            height={85}
            src={
              "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            }
            alt={"Git logo"}
          />
          <h1 className=" text-xl roboto-medium mx-auto text-center">
            Git
          </h1>
        </div>
        <div className=" p-4 rounded-lg border border-primary bg-opacity-40 bg-light duration-300 text-dark h-[150px] flex flex-col justify-between items-center">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto"
            width={80}
            height={80}
            src={
              "https://www.vectorlogo.zone/logos/github/github-tile.svg"
            }
            alt={"GitHub logo"}
          />
          <h1 className=" text-xl roboto-medium mx-auto text-center">
            GitHub
          </h1>
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
