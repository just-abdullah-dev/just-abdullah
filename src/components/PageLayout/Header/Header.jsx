"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const links = [
    { name: "Projects", slug: "/projects" },
    { name: "Experience", slug: "/#experience" },
    { name: "Products", slug: "/#products" },
    { name: "About", slug: "/about" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky left-0 right-0 top-0 z-50 mb-6 flex items-center justify-between rounded-b-3xl border-b border-white/10 bg-black/75 px-4 py-4 backdrop-blur-xl md:px-8">
      <Link className="flex items-center gap-3" href="/">
        <span className="grid size-10 place-items-center rounded-full border border-white/15 bg-white text-sm font-black text-black">A</span>
        <span className="text-lg font-bold tracking-[-0.04em] text-white">ABDULLAH</span>
      </Link>
      <nav className={`${isOpen ? "block" : "hidden"} absolute right-4 top-16 md:static md:block`}>
        <ul className="flex min-w-52 flex-col gap-2 rounded-2xl border border-white/10 bg-black p-3 shadow-2xl md:min-w-0 md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
          {links.map((item) => (
            <li key={item.name}>
              <Link
                onClick={() => setIsOpen(false)}
                className="block rounded-full px-4 py-2 text-sm text-gray-300 transition hover:bg-white hover:text-black"
                href={item.slug}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              onClick={() => setIsOpen(false)}
              className="block rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
              href="/#contact"
            >
              Contact
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
