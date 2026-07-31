"use client";
import React, { useState } from "react";
import { internships, workExperience } from "@/constants/data";
import { Briefcase, Building2, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";

export default function ExperienceTimeline() {
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllInternships, setShowAllInternships] = useState(false);

  const workExperienceList = workExperience;
  const displayedWork = showAllWork ? workExperienceList : workExperienceList.slice(0, 2);

  const internshipsList = [...internships].reverse();
  const displayedInternships = showAllInternships ? internshipsList : internshipsList.slice(0, 2);

  return (
    <section id="experience" className="premium-section my-10">
      <div className="section-kicker flex items-center gap-2 text-purple-400">
        <Briefcase className="size-4" /> Work Experience & Internships
      </div>
      <div className="section-heading-grid place-items-start pt-2">
        <h2 className="section-title md:whitespace-nowrap font-serif italic">Engineered in real products</h2>
        <p className="section-copy">
          From founding logistics startups to B2B veterinary platforms, SME accounting suites, and healthcare systems — every role represents production delivery.
        </p>
      </div>

      {/* Main Work Experience Section */}
      <div className="mt-12">
        <div className="mb-6 flex items-center gap-3">
          {/* <span className="flex size-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Building2 className="size-4" />
          </span> */}
          <h3 className="text-xl md:text-2xl font-serif italic font-bold text-white tracking-wide">
            Work Experience
          </h3>
        </div>

        <div className="relative grid gap-6 pl-2 md:pl-0">
          <div className="absolute left-4 top-6 hidden h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/40 to-transparent md:block" />

          {displayedWork.map((item, index) => (
            <article
              key={`${item.company}-${item.period}`}
              className="group relative grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/10 md:ml-12 md:grid-cols-[0.85fr_1.15fr] md:p-7"
            >
              <div className="absolute -left-[3.45rem] top-5 hidden size-9 place-items-center ml-1 rounded-full border border-purple-500/50 bg-black text-xs font-bold text-purple-300 shadow-md shadow-purple-500/20 md:grid">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-purple-400">
                  <span className="flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-[11px] text-purple-300">
                    <Calendar className="size-3" /> {item.period}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="size-3 text-gray-500" /> {item.location}
                    </span>
                  )}
                </div>

                <h4 className="mt-3 text-xl md:text-2xl font-bold text-white transition duration-300 group-hover:text-purple-300">
                  {item.role}
                </h4>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-300 font-medium">
                  <Building2 className="size-4 text-purple-400" /> {item.company}
                </div>

                <span className="mt-4 inline-flex rounded-full border border-white/15 bg-black/50 px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] font-mono text-gray-400">
                  {item.type}
                </span>
              </div>

              <ul className="grid gap-3 text-xs md:text-sm leading-6 text-gray-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-purple-400 shadow-sm shadow-purple-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {workExperienceList.length > 2 && (
            <div className={`relative flex justify-center ${!showAllWork ? "-mt-16 pt-20 pb-ackdrop-blur-xl z-10 md:ml-12" : "mt-4 md:ml-12"}`}>
              <button
                onClick={() => setShowAllWork((prev) => !prev)}
                className="group relative flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-6 py-2.5 text-xs md:text-sm font-medium text-purple-300 backdrop-blur-md transition-all duration-300 hover:border-purple-500/60 hover:bg-purple-900/50 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
              >
                <span>{showAllWork ? "Show Less" : `See More (${workExperienceList.length - 2} more)`}</span>
                {showAllWork ? (
                  <ChevronUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Internships Section (Moved to Last) */}
      <div className="mt-16 pt-10 border-t border-white/10">
        <div className="mb-6 flex items-center gap-3">
          {/* <span className="flex size-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Building2 className="size-4" />
          </span> */}
          <h3 className="text-xl font-serif italic md:text-2xl font-bold text-white tracking-wide">
            Internships
          </h3>
        </div>

        <div className="relative grid gap-6 pl-2 md:pl-0">
          <div className="absolute left-4 top-6 hidden h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-emerald-500/60 to-transparent md:block" />

          {displayedInternships.map((item, index) => (
            <article
              key={`${item.company}-${item.period}`}
              className="group relative grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-emerald-500/10 md:ml-12 md:grid-cols-[0.85fr_1.15fr] md:p-7"
            >
              <div className="absolute -left-[3.45rem] top-5 ml-1 hidden size-9 place-items-center rounded-full border border-emerald-500/50 bg-black text-xs font-bold text-emerald-300 md:grid">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-[11px] text-emerald-300">
                    <Calendar className="size-3" /> {item.period}
                  </span>
                  {item.location && (
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="size-3 text-gray-500" /> {item.location}
                    </span>
                  )}
                </div>

                <h4 className="mt-3 text-xl md:text-2xl font-bold text-white transition duration-300 group-hover:text-emerald-300">
                  {item.role}
                </h4>

                <div className="mt-1 flex items-center gap-2 text-sm text-gray-300 font-medium">
                  <Building2 className="size-4 text-emerald-400" /> {item.company}
                </div>

                <span className="mt-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-950/30 px-3.5 py-1 text-[11px] uppercase tracking-[0.2em] font-mono text-emerald-300">
                  {item.type}
                </span>
              </div>

              <ul className="grid gap-3 text-xs md:text-sm leading-6 text-gray-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          {internshipsList.length > 2 && (
            <div className={`relative flex justify-center ${!showAllInternships ? "-mt-16 pt-20 pb-4 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-[2px] z-10 md:ml-12" : "mt-4 md:ml-12"}`}>
              <button
                onClick={() => setShowAllInternships((prev) => !prev)}
                className="group relative flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-6 py-2.5 text-xs md:text-sm font-medium text-emerald-300 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-900/50 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <span>{showAllInternships ? "Show Less" : `See More Internships (${internshipsList.length - 2} more)`}</span>
                {showAllInternships ? (
                  <ChevronUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
