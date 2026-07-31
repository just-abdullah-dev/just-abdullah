"use client";

import { skills } from "@/constants/data";
import { Code2, Cpu } from "lucide-react";
import React from "react";

const categoryStyles = {
  Frontend: "border-purple-400/30 bg-purple-500/15 text-purple-200",
  Backend: "border-emerald-400/30 bg-emerald-500/15 text-emerald-200",
  Mobile: "border-orange-400/30 bg-orange-500/15 text-orange-200",
  Database: "border-sky-400/30 bg-sky-500/15 text-sky-200",
  Data: "border-sky-400/30 bg-sky-500/15 text-sky-200",
  Languages: "border-pink-400/30 bg-pink-500/15 text-pink-200",
  Expertise: "border-yellow-400/30 bg-yellow-500/15 text-yellow-200",
  Security: "border-red-400/30 bg-red-500/15 text-red-200",
  Tools: "border-white/20 bg-white/10 text-gray-200",
};

export default function Skills() {
  // Split skills into 2 balanced rows for the infinite marquees
  const half = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  // Duplicate for seamless loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="premium-section my-10 overflow-hidden">
      <div className="section-kicker flex items-center gap-2 text-purple-400">
        <Cpu className="size-4" /> Technical Stack & Expertise
      </div>
      <div className="section-heading-grid">
        <h2 className="section-title font-serif italic">Production Stack</h2>
        <p className="section-copy">
          Strongest in Next.js, React, Node.js, TypeScript, PostgreSQL, Prisma, REST APIs, authentication (RBAC), and production system design.
        </p>
      </div>

      <div className="relative mt-8 flex flex-col gap-4 overflow-hidden py-4">
        {/* Gradient Fades for Left & Right Edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black via-black/80 to-transparent md:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black via-black/80 to-transparent md:w-32" />

        {/* Row 1 Marquee (Scrolls Left) */}
        <div className="group flex overflow-hidden">
          <div className="flex animate-marquee gap-3 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {marqueeRow1.map((skill, idx) => (
              <div
                key={`r1-${skill.title}-${idx}`}
                className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 shadow-md transition duration-300 hover:border-purple-500/50 hover:bg-white/[0.08]"
              >
                <Code2 className="size-4 text-purple-400" />
                <span className="text-sm font-bold text-white">{skill.title}</span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider ${
                    categoryStyles[skill.category] || "border-white/10 text-gray-300"
                  }`}
                >
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 Marquee (Scrolls Right) */}
        <div className="group flex overflow-hidden">
          <div className="flex animate-marquee-reverse gap-3 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {marqueeRow2.map((skill, idx) => (
              <div
                key={`r2-${skill.title}-${idx}`}
                className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 shadow-md transition duration-300 hover:border-purple-500/50 hover:bg-white/[0.08]"
              >
                <Code2 className="size-4 text-purple-400" />
                <span className="text-sm font-bold text-white">{skill.title}</span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider ${
                    categoryStyles[skill.category] || "border-white/10 text-gray-300"
                  }`}
                >
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
