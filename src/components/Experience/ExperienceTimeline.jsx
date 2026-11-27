"use client";

import { useState } from "react";
import { internships, workExperience } from "@/constants/data";
import { MapPin } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

function RoleCard({ item }) {
  return (
    <article className="grid gap-4 border-b border-ink/10 py-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
          {item.period}
        </p>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink md:text-2xl">{item.role}</h3>
        <p className="mt-1 text-sm font-medium text-signal">{item.company}</p>
        {item.location ? (
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-ink-muted">
            <MapPin size={12} /> {item.location}
          </p>
        ) : null}
        <span className="mt-4 inline-flex rounded-full border border-ink/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-ink-muted">
          {item.type}
        </span>
      </div>
      <ul className="grid gap-3 text-sm leading-6 text-ink-muted">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ExperienceTimeline() {
  const [showAllWork, setShowAllWork] = useState(false);
  const [showAllInternships, setShowAllInternships] = useState(false);

  const displayedWork = showAllWork ? workExperience : workExperience.slice(0, 3);
  const displayedInternships = showAllInternships ? internships : internships.slice(0, 1);

  return (
    <section id="experience" className="section-block">
      <Reveal>
        <p className="section-kicker">Experience</p>
        <h2 className="section-title">Engineered in real products.</h2>
        <p className="section-copy mt-4">
          From founding logistics to healthtech and SME systems — every role is production delivery.
        </p>
      </Reveal>

      <div className="mt-10 border-t border-ink/10">
        {displayedWork.map((item) => (
          <RoleCard key={`${item.company}-${item.period}`} item={item} />
        ))}
      </div>

      {workExperience.length > 3 ? (
        <button
          type="button"
          onClick={() => setShowAllWork((v) => !v)}
          className="mt-4 text-sm font-semibold text-signal hover:underline"
        >
          {showAllWork ? "Show less" : "Show full work history"}
        </button>
      ) : null}

      {/* <div className="mt-14">
        <h3 className="font-display text-2xl font-semibold text-ink">Internships</h3>
        <div className="mt-4 border-t border-ink/10">
          {displayedInternships.map((item) => (
            <RoleCard key={`${item.company}-${item.period}`} item={item} />
          ))}
        </div>
        {internships.length > 1 ? (
          <button
            type="button"
            onClick={() => setShowAllInternships((v) => !v)}
            className="mt-4 text-sm font-semibold text-signal hover:underline"
          >
            {showAllInternships ? "Show less" : "Show all internships"}
          </button>
        ) : null}
      </div> */}
    </section>
  );
}
