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
        className=" text-primary font-bold text-4xl lg:text-5xl"
      >
        My Expertise.
      </Link>
      {/* skills map func  */}
      <div className=" grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
        <div className=" skillDivCSS group overflow-hidden relative">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto z-10"
            width={120}
            height={100}
            src={
              "https://upload.vectorlogo.zone/logos/nextjs/images/271afdac-aad3-4712-89fd-a25f63fd6dd4.svg"
            }
            alt={"Next.js logo"}
          />
          <h1 className=" skillH1CSS">
            Next.js
          </h1>
          
          <div className=" skillLevelCSS h-[85%]"></div>
        </div>
        <div className=" skillDivCSS group overflow-hidden relative">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto z-10"
            width={90}
            height={90}
            src={
              "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
            }
            alt={"React.js logo"}
          />
          <h1 className=" skillH1CSS">
            React.js
          </h1>
          
          <div className=" skillLevelCSS h-[90%]"></div>
        </div>
        <div className=" skillDivCSS group overflow-hidden relative">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto z-10"
            width={90}
            height={90}
            src={
              "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            }
            alt={"Tailwind CSS logo"}
          />
          <h1 className=" skillH1CSS">
            Tailwind CSS
          </h1>
          
          <div className=" skillLevelCSS h-[90%]"></div>
        </div>
        <div className=" skillDivCSS group overflow-hidden relative">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto z-10"
            width={125}
            height={100}
            src={
              "https://nodejs.org/static/images/logo.svg"
            }
            alt={"Node.js logo"}
          />
          <h1 className=" skillH1CSS">
            Node.js
          </h1>
          
          <div className=" skillLevelCSS h-[80%]"></div>
        </div>
        <div className=" skillDivCSS group overflow-hidden relative">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto z-10"
            width={90}
            height={90}
            src={
              "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
            }
            alt={"Express.js logo"}
          />
          <h1 className=" skillH1CSS">
            Express.js
          </h1>
          
          <div className=" skillLevelCSS h-[85%]"></div>
        </div>
        <div className=" skillDivCSS group overflow-hidden relative">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto z-10"
            width={150}
            height={100}
            src={
              "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg"
            }
            alt={"MongoDB logo"}
          />
          <h1 className=" skillH1CSS">
            MongoDB
          </h1>
          
          <div className=" skillLevelCSS h-[75%]"></div>
        </div>
        <div className=" skillDivCSS group overflow-hidden relative">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto z-10"
            width={85}
            height={85}
            src={
              "/git.png"
            }
            alt={"Git logo"}
          />
          <h1 className=" skillH1CSS">
            Git
          </h1>
          
          <div className=" skillLevelCSS h-[85%]"></div>
        </div>
        <div className=" skillDivCSS group overflow-hidden relative">
          <Image
            className=" aspect-auto h-auto mx-auto my-auto z-10"
            width={80}
            height={80}
            src={
              "https://www.vectorlogo.zone/logos/github/github-tile.svg"
            }
            alt={"GitHub logo"}
          />
          <h1 className=" skillH1CSS">
            GitHub
          </h1>
          
          <div className=" skillLevelCSS h-[95%]"></div>
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
