"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const links = [
    { name: "Services", slug: "services" },
    { name: "Projects", slug: "projects" },
    { name: "About", slug: "about" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" py-4 md:px-12 px-4 bg-dark bg-opacity-60 flex items-center justify-between sticky top-0 right-0 left-0 z-50">
      {/* Logo & Name */}
      <Link className=" flex gap-4 items-center" href={process.env.BASE_URL || "http://localhost:3000"}>
        <h1 className=" text-3xl tracking-tighter font-sans font-bold pb-1">
          JA
        </h1>
        <h2 className=" text-2xl">Just Abdullah</h2>
      </Link>
      <nav className={`md:block relative ${isOpen ? "block" : "hidden"}`}>
        <ul className={`${isOpen?"absolute top-8 md:left-0 -left-12 border border-primary rounded-lg py-2 px-8 flex flex-col gap-2 bg-dark":"flex space-x-8"} `}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  onClick={() => setIsOpen((val) => !val)}
                  className=" hover:text-primary duration-300"
                  href={item?.slug}
                >
                  {item?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className={`rounded-md p-1 md:hidden ${
            isOpen ? "bg-primary" : ""
          }`} onClick={() => setIsOpen((val) => !val)}>
        <svg
          xmlns="http://www.w3.org/200/svg"
          className={`h-6 w-6 text-white cursor-pointer `}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  );
}
