import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import Btn from "../utils/Btn";

const cvUrl =
  "https://docs.google.com/document/d/1VuZUAkCQCse91MA25MYUx1L88Y7JqQzR/edit";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black px-5 py-10 shadow-2xl shadow-black/40 md:px-10 lg:px-14 lg:py-16">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gray-500/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-gray-300">
            <span className="size-2 rounded-full bg-emerald-400" />
            Available for premium builds
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.08em] text-white md:text-7xl xl:text-8xl">
            Abdullah builds clean products that feel expensive.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
            Full Stack Developer focused on Next.js, React, Node.js,
            PostgreSQL, SaaS platforms, REST APIs, and AI-integrated systems —
            with a sharp eye for black-and-white interfaces that stand out.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="w-full sm:w-fit">
              <Btn className="w-full sm:w-fit">Start a project</Btn>
            </Link>
            <Link
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
            >
              <Download size={18} /> Download CV
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-white">
            <div>
              <p className="text-3xl font-bold">2+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Years</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4x</p>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Dean List</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-white/10" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
            <Image
              src="/profile.jpg"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover grayscale transition duration-500 hover:grayscale-0"
              width={520}
              height={650}
              alt="Abdullah portrait"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">Haripur, Pakistan</p>
              <div className="mt-2 flex items-center justify-between gap-4 text-white">
                <span>just.abdullah.dev@gmail.com</span>
                <Mail size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link href="#projects" className="relative mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gray-500 hover:text-white">
        Scroll <ArrowDown size={16} />
      </Link>
    </section>
  );
}
