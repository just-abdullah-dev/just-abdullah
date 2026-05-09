"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Btn from "@/components/utils/Btn";

export default function Header() {
  const links = [
    { name: "Projects", slug: "/projects" },
    { name: "Experience", slug: "/#experience" },
    { name: "Products", slug: "/#products" },
    { name: "About", slug: "/about" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky left-0 right-0 top-0 z-50 mb-4 flex items-center justify-between rounded-b-3xl border-b border-white/10 bg-black/75 px-4 py-3 backdrop-blur-xl md:px-8">
      <Link className="flex items-center gap-3" href="/">
        <Image
          src="/avatar.jpg"
          width={44}
          height={44}
          alt="Abdullah avatar"
          className="size-11 rounded-full border border-white/15 object-cover"
          priority
        />
        <span className="text-lg font-bold tracking-[-0.04em] text-white">ABDULLAH</span>
      </Link>
      <nav className={`${isOpen ? "block" : "hidden"} absolute right-4 top-16 md:static md:block`}>
        <ul className="flex min-w-52 flex-col gap-2 rounded-2xl border border-white/10 bg-black p-3 shadow-2xl md:min-w-0 md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
          {links.map((item) => (
            <li key={item.name}>
              <Link onClick={() => setIsOpen(false)} href={item.slug} className="block">
                <Btn className="w-full !px-4 !py-2 text-sm md:w-fit">{item.name}</Btn>
              </Link>
            </li>
          ))}
          <li>
            <Link onClick={() => setIsOpen(false)} href="/#contact" className="block">
              <Btn className="w-full !px-4 !py-2 text-sm md:w-fit">Contact</Btn>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className={`rounded-full border border-white/10 p-2 md:hidden ${isOpen ? "bg-white text-black" : "text-white"}`}
        onClick={() => setIsOpen((val) => !val)}
        aria-label="Toggle navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </header>
  );
}
