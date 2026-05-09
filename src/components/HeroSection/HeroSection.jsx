import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import Btn from "../utils/Btn";

const cvUrl =
  "https://docs.google.com/document/d/1VuZUAkCQCse91MA25MYUx1L88Y7JqQzR/edit";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black px-5 py-7 shadow-2xl shadow-black/40 md:px-10 md:py-9 lg:px-14 lg:py-10">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gray-500/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="max-w-4xl text-6xl font-black leading-[0.82] tracking-[-0.06em] text-white md:text-8xl xl:text-9xl">
            Abdullah
          </h1>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-[1.95] tracking-[-0.065em] text-gray-200 md:text-5xl xl:text-6xl">
            builds clean products that feel <span className="font-mediumfont-sansitalic ">expensive.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg">
            Full Stack Engineer focused on building real-world products, scalable SaaS systems, AI-integrated solutions, and startup-driven platforms.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="#contact" className="w-full sm:w-fit">
              <Btn className="w-full sm:w-fit">Start a project</Btn>
            </Link>
            <Link href={cvUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-fit">
              <Btn className="w-full gap-2 sm:w-fit">
                <Download size={18} /> Download CV
              </Btn>
            </Link>
          </div>

          <div className="mt-8 grid max-w-md grid-cols-2 gap-3 border-t border-white/10 pt-5 text-white">
            <div>
              <p className="text-3xl font-bold">2+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Years</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Projects</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[25rem]">
          <div className="absolute -inset-4 rounded-[2.5rem] border border-white/10" />
          <div className="diagonal-portrait relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
            <Image
              src="/avatar.jpg"
              className="portrait-base aspect-[3/4] duration-300 w-full rounded-[1.5rem] object-cover"
              width={520}
              height={520}
              alt="Abdullah portrait"
              priority
            />
            {/* <Image
              src="/avatar.jpg"
              className="portrait-color duration-300 pointer-events-none absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[1.5rem] object-cover"
              width={520}
              height={650}
              alt=""
              aria-hidden="true"
              priority
            /> */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur">

              <Link className="flex flex-row-reverse items-center justify-between gap-4 text-white" href="mailto:just.abdullah.dev@gmail.com">
                <span>just.abdullah.dev@gmail.com</span>
                <Mail size={18} /></Link>

            </div>
          </div>
        </div>
      </div>

      <Link href="#projects" className="relative mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-gray-500 hover:text-white">
        Scroll <ArrowDown size={16} className="animate-scroll-arrow" />
      </Link>
    </section>
  );
}
