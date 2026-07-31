"use client";

import { projects } from "@/constants/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronRight, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

export default function Projects({ showMoreBtn = true }) {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // For home page horizontal scroll section
  const desktopProjects = projects.slice(0, 6);
  const mobileProjects = projects.slice(0, 3);
  const displayProjects = isMobile ? mobileProjects : desktopProjects;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate transform range: for 7 cards (6 projects + see-more) on desktop or 4 cards on mobile
  const xTransform = isMobile ? ["0%", "-74%"] : ["0%", "-66%"];
  const x = useTransform(scrollYProgress, [0, 1], xTransform);

  // If rendering on the /projects page directly without horizontal pin
  if (!showMoreBtn) {
    return (
      <section id="projects" className="premium-section my-10 w-full min-w-0">
        <div className="mb-10">
          <div className="section-kicker flex items-center gap-2 text-purple-400">
            <Sparkles className="size-4" /> Project Archive
          </div>
          <h1 className="section-title">All Engineered Projects ({projects.length}).</h1>
          <p className="section-copy mt-3">
            Comprehensive archive of SaaS platforms, mobile delivery apps, telehealth platforms, accounting tools, and AI medical systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => (
            <Link
              key={`${item.slug}-${index}`}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/50 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-500/40 hover:bg-white/[0.04] hover:shadow-xl hover:shadow-purple-500/10"
              href={`/projects/${item.slug}`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/80">
                <Image
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.images[0]}
                  alt={`${item.title} preview`}
                  width={600}
                  height={380}
                />
                <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/80 px-3 py-0.5 text-xs font-mono text-gray-300 backdrop-blur">
                  #{String(index + 1).padStart(2, "0")}
                </div>
                {item.startedOn && (
                  <div className="absolute right-3 top-3 rounded-full border border-purple-500/30 bg-purple-950/80 px-2.5 py-0.5 text-[11px] font-medium text-purple-300 backdrop-blur">
                    {item.startedOn}
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-purple-300">
                    {item.title}
                  </h3>
                  <p className="mt-1 line-clamp-1 text-xs font-medium text-purple-400/90">{item.tagline}</p>
                  <p className="mt-2.5 line-clamp-2 text-xs leading-5 text-gray-400">{item.summary || item.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.keywords.slice(0, 3).map((keyword) => (
                      <span key={keyword} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-300">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <span className="flex size-7 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={targetRef}
      id="projects"
      className="relative h-[250vh] md:h-[290vh] w-full max-w-full min-w-0"
    >
      {/* Sticky Fullscreen Container - STICKS TO SCREEN UNTIL SCROLL ENDS */}
      <div className="sticky top-0 z-30 flex h-screen w-full max-w-full flex-col justify-between overflow-hidden bg-black/50 py-6 md:py-8 border-y border-white/10 backdrop-blur-xl rounded-[2.5rem] ">
        
        {/* Synced Section Header matching ExperienceTimeline */}
        <div className="mx-auto w-full max-w-[1500px] px-4 md:px-8 shrink-0">
          <div className="section-kicker flex items-center gap-2 text-purple-400">
            <Layers className="size-4" /> Selected Projects
          </div>
          <div className="section-heading-grid">
            <h2 className="section-title"> <span className="italic font-serif font-bold">Featured Works</span></h2>
            <p className="section-copy">
              A mix of SaaS platforms, mobile delivery apps, telehealth platforms, accounting tools, and AI medical systems.
            </p>
          </div>
        </div>

        {/* Horizontal Card Carousel Track */}
        <div className="flex flex-1 items-center overflow-hidden w-full max-w-full my-auto">
          <motion.div style={{ x }} className="flex gap-4 md:gap-6 px-4 md:px-8 shrink-0">
            {displayProjects.map((item, index) => (
              <Link
                key={`${item.slug}-${index}`}
                href={`/projects/${item.slug}`}
                className="group relative flex w-[82vw] sm:w-[360px] md:w-[420px] lg:w-[460px] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.03] p-4 md:p-5 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ height: "calc(100vh - 260px)", maxHeight: "460px", minHeight: "340px" }}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden rounded-2xl bg-black/80">
                  <Image
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    src={item.images[0]}
                    alt={`${item.title} picture`}
                    width={700}
                    height={420}
                    priority={index < 2}
                  />
                  <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/80 px-2.5 py-0.5 text-[11px] font-mono text-gray-300 backdrop-blur">
                    0{index + 1}
                  </div>
                  {item.startedOn && (
                    <div className="absolute right-3 top-3 rounded-full border border-purple-500/40 bg-purple-950/80 px-2.5 py-0.5 text-[10px] uppercase font-semibold text-purple-300 backdrop-blur">
                      {item.startedOn}
                    </div>
                  )}
                </div>

                {/* Details Container */}
                <div className="mt-3 md:mt-4 flex flex-1 flex-col justify-between overflow-hidden">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white transition duration-300 group-hover:text-purple-300 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm font-medium text-purple-400 line-clamp-1">
                      {item.tagline}
                    </p>
                    <p className="mt-2 text-xs md:text-sm leading-5 text-gray-400 line-clamp-2 sm:line-clamp-3">
                      {item.summary || item.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-10">
                      {item.keywords.slice(0, 4).map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] text-gray-300"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 group-hover:bg-purple-600 group-hover:border-purple-600">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}

            {/* See More Projects Card at end of horizontal row */}
            <Link
              href="/projects"
              className="group relative flex w-[75vw] sm:w-[300px] md:w-[360px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-dashed border-purple-500/40 bg-purple-950/20 p-6 text-center transition-all duration-300 hover:border-purple-400 hover:bg-purple-900/30 hover:shadow-2xl hover:shadow-purple-500/25"
              style={{ height: "calc(100vh - 260px)", maxHeight: "460px", minHeight: "340px" }}
            >
              <div className="flex size-14 items-center justify-center rounded-full border border-purple-400/40 bg-purple-500/20 text-purple-300 transition duration-300 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white">
                <ChevronRight className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-white group-hover:text-purple-300">
                View All Projects
              </h3>
              <p className="mt-2 text-xs md:text-sm text-gray-400 max-w-[220px]">
                Explore full project archive ({projects.length} engineered builds)
              </p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-300 transition duration-300 group-hover:bg-purple-500 group-hover:text-white">
                Open Archive <ArrowUpRight className="size-4" />
              </span>
            </Link>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
}
