import Socials from "@/components/utils/Socials";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const links = [
    { name: "Projects", slug: "/projects" },
    { name: "Experience", slug: "/#experience" },
    { name: "Products", slug: "/#products" },
    { name: "About", slug: "/about" },
  ];

  return (
    <footer className="mt-12 rounded-t-[2rem] border-t border-white/10 bg-black py-8">
      <div className="grid gap-8 px-4 md:grid-cols-3 md:px-8">
        <div className="grid gap-3">
          <Link className="text-2xl font-bold tracking-[-0.05em] text-white" href="/">
            Just Abdullah
          </Link>
          <p className="max-w-sm text-sm leading-6 text-gray-500">
            Full Stack Developer building premium web, mobile, SaaS, and AI-integrated product experiences.
          </p>
        </div>
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <ul className="flex flex-wrap gap-3">
            {links.map((item) => (
              <li key={item.name}>
                <Link className="text-gray-400 transition hover:text-white" href={item.slug}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold text-white">Contact & Social</h2>
          <div className="flex gap-4">
            <Link className="text-gray-400 transition hover:text-white" href="mailto:just.abdullah.dev@gmail.com"><Mail /></Link>
            <Link className="text-gray-400 transition hover:text-white" href="tel:+923140571198"><Phone /></Link>
          </div>
          <Socials css="flex space-x-4" />
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Just Abdullah. Built in black, white, and intention.</p>
      </div>
    </footer>
  );
}
