import Socials from "@/components/utils/Socials";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const links = [
    { name: "Services", slug: "services" },
    { name: "Projects", slug: "projects" },
    { name: "About", slug: "about" },
  ];
  
  return (
    <footer className="bg-dark pt-8 ">
      <div className="container mx-auto px-4 md:px-16 lg:px-28 flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo & Name, pages links*/}
          <div className=" flex items-center md:items-start flex-col gap-3">
            <Link
              className=" flex gap-4 items-center"
              href={process.env.BASE_URL || "http://localhost:3000"}
            >
             
              <h2 className=" text-2xl">Just Abdullah</h2>
            </Link>
            <ul className=" flex gap-4 md:flex-col lg:flex-row">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className="" href={item?.slug}>
                      {item?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Contact me  */}
          <div className="flex items-center md:items-start flex-col gap-3">
            <h2 className="text-white text-xl font-semibold">
              Contact Me
            </h2>
            <div className=" flex gap-4">
              <Link
                className=" text-gray-300 hover:text-white"
                href={"mailto:just.abdullah.dev@gmail.com"}
              >
                <Mail />
              </Link>
              <Link
                className=" text-gray-300 hover:text-white"
                href={"tel:+923140571198"}
              >
                <Phone />
              </Link>
            </div>
          </div>
          {/* follow me  */}
          <div className=" flex items-center md:items-start flex-col gap-3">
            <h2 className="text-white text-xl font-semibold">Follow Me</h2>
            <Socials css={'flex space-x-4 '} />
          </div>
        </div>
        <div className="mt-8 mb-2 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Just Abdullah.
          </p>
        </div>
      </div>
    </footer>
  );
}
