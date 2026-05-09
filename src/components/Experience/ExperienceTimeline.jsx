import { workExperience } from "@/constants/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="premium-section">
      <div className="section-kicker">Work Experience</div>
      <div className="section-heading-grid">
        <h2 className="section-title">Timeline built in real product environments.</h2>
        <p className="section-copy">
          From healthcare interfaces to B2B ordering, CMS-backed landing pages,
          dashboards, and SaaS workflows — each role sharpened delivery,
          architecture, and product thinking.
        </p>
      </div>

      <div className="relative mt-10 grid gap-5">
        <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-white/15 md:block" />
        {workExperience.map((item, index) => (
          <article
            key={`${item.company}-${item.period}`}
            className="group relative grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] md:ml-12 md:grid-cols-[0.8fr_1.2fr] md:p-7"
          >
            <div className="absolute -left-[3.35rem] top-8 hidden size-8 place-items-center rounded-full border border-white/20 bg-black text-xs text-white md:grid">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-gray-300">{item.company}</p>
              <span className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gray-400">
                {item.type}
              </span>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-gray-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
