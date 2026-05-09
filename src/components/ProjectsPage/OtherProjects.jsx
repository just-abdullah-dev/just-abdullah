import { projects } from "@/constants/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function OtherProjects({ slug }) {
  const otherProjects = projects.filter((item) => item?.slug !== slug);

  return (
    <div className="relative mt-10 max-w-[85vw]">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-black/95 via-black/45 to-transparent lg:block" />
      <div className="pointer-events-none absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-2 text-white backdrop-blur lg:flex">
        <ArrowRight size={16} className="scroll-hint" />
        <ArrowRight size={16} className="scroll-hint [animation-delay:0.15s]" />
      </div>

      <div className="scrollbar-hide flex gap-5 overflow-x-auto pb-3 pr-16">
        {otherProjects.map((item, index) => (
          <Link
            key={`${item.slug}-${index}`}
            href={`/projects/${item?.slug}`}
            className="group flex min-h-[320px] min-w-[320px] max-w-[320px] flex-col justify-between rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] sm:min-w-[360px] sm:max-w-[360px]"
          >
            <div className="grid gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <ArrowUpRight className="text-gray-500 transition group-hover:text-white" size={18} />
              </div>

              <div className="grid gap-3">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{item?.title}</h3>
                <p className="text-gray-300">{item?.tagline}</p>
                <p className="text-sm leading-6 text-gray-500">{item?.summary || item?.tagline}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {item?.keywords.slice(0, 5).map((keyword) => (
                <span key={keyword} className="header-pill">
                  {keyword}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
