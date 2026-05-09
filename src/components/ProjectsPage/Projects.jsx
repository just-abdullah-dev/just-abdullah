import { projects } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Btn from "../utils/Btn";

function Projects({ showMoreBtn }) {
  const visibleProjects = showMoreBtn ? projects.slice(0, 6) : projects;

  return (
    <section id="projects" className="premium-section">
      {showMoreBtn ? (
        <div className="section-heading-grid">
          <div>
            <div className="section-kicker">Selected Projects</div>
            <h2 className="section-title">Product-grade builds with clean architecture.</h2>
          </div>
          <p className="section-copy">
            A mix of SaaS platforms, AI-enabled systems, dashboards, mobile-backed
            products, and brand experiences — with more case studies coming soon.
          </p>
        </div>
      ) : (
        <div className="mb-10">
          <div className="section-kicker">Project Archive</div>
          <h1 className="section-title">All Projects.</h1>
        </div>
      )}

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {visibleProjects.map((item, index) => (
          <Link
            key={`${item.slug}-${index}`}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
            href={`/projects/${item?.slug}`}
          >
            <div className="relative aspect-video overflow-hidden bg-gray-950">
              <Image
                className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={item?.images[0]}
                alt={`${item?.title} picture`}
                width={700}
                height={420}
                priority={index < 2}
              />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gray-300 backdrop-blur">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="p-5 md:p-6">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-gray-400">{item.tagline}</p>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{item.summary || item.tagline}</p>
                </div>
                <span className="whitespace-nowrap text-sm text-gray-500">{item.startedOn} — {item.completedOn}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.keywords.slice(0, 6).map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {showMoreBtn && (
        <Link href="/projects" className="mx-auto mt-8 w-fit">
          <Btn>See More Projects</Btn>
        </Link>
      )}
    </section>
  );
}

export default Projects;
