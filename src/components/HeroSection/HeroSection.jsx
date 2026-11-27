"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Btn from "../utils/Btn";
import { SITE } from "@/lib/site";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative left-1/2 w-screen max-w-full -translate-x-1/2 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 opacity-70 md:opacity-80">
        <Image
          src="/bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover hidden md:block object-[center_18%] grayscale md:object-[78%_20%]"
          sizes="100vw"
        />
         <Image
          src="/about.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_18%] grayscale md:hidden"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/35 md:via-ink/75 md:to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/45" />

      <div className="shell relative flex min-h-dvh flex-col justify-end pb-14 pt-28 md:pb-20 md:pt-32">
        <motion.p
          className="font-display text-[12vw] font-semibold leading-[0.85] tracking-[-0.06em] text-white md:text-[7.5rem] lg:text-[9rem]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Abdullah
        </motion.p>

        <motion.div
          className="mt-6 grid max-w-2xl gap-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-balance text-2xl font-medium leading-snug text-white/95 md:text-3xl lg:text-4xl">
            Product-minded Full Stack Engineer & founder.
          </h1>
          <p className="max-w-xl text-base leading-7 text-white/65 md:text-lg">
            I build scalable SaaS, mobile platforms, and AI-integrated systems — from concept to
            market — with calm craft and production discipline.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="w-full sm:w-fit">
              <Btn className="w-full !bg-signal hover:!bg-white hover:!text-ink sm:w-fit">
                Start a project
              </Btn>
            </Link>
            <Link href="/projects" className="w-full sm:w-fit">
              <span className="actionBtn-outline w-full !border-white/25 !text-white hover:!bg-white hover:!text-ink sm:w-fit">
                View work
              </span>
            </Link>
            <Link
              href={SITE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-2 text-sm text-white/55 transition hover:text-white sm:ml-2"
            >
              <Download size={16} /> CV
            </Link>
          </div>
        </motion.div>

        <Link
          href="#projects"
          className="mt-12 inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.28em] text-white/45 transition hover:text-white"
        >
          Scroll <ArrowDown size={14} className="opacity-80" />
        </Link>
      </div>
    </section>
  );
}
