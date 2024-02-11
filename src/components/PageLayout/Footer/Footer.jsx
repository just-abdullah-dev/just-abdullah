import { Facebook, Github, Instagram, Linkedin, Mail, Phone, Twitter, X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const links = [
    { name: "Services", slug: "services" },
    { name: "Projects", slug: "projects" },
    { name: "About", slug: "about" },
  ];
  
  const social_links = [
    {jsx:<Linkedin />, link:"https://www.linkedin.com/in/abdullah-0b816122a/"},
    {jsx:<Github />, link:'https://github.com/just-abdullah-dev'},
    {jsx:<Twitter />, link:'https://twitter.com/just_abdullah_3'},
    {jsx:<Instagram />, link:'https://instagram.com/just_abdullah_._'},
    {jsx:<Facebook />, link:'https://www.facebook.com/profile.php?id=100063930870228'},
  ]
  return (
    <footer className="bg-dark py-8 ">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo & Name, pages links*/}
          <div className=" flex items-center flex-col gap-3">
            <Link
              className=" flex gap-4 items-center"
              href={process.env.BASE_URL || "#"}
            >
              <h1 className=" text-3xl tracking-tighter font-sans font-bold pb-1">
                JA
              </h1>
              <h2 className=" text-2xl">Just Abdullah</h2>
            </Link>
            <ul className=" flex space-x-16">
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
          <div className="flex items-center flex-col gap-3">
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
          <div className=" flex items-center flex-col gap-3">
            <h2 className="text-white text-xl font-semibold">Follow Me</h2>
            <ul className="flex space-x-4 ">
              {social_links.map((item, index)=>{
                return <li key={index}>
                  <Link target="_blank" href={item?.link}>
                    {item?.jsx}
                  </Link>
                </li>
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Just Abdullah. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
