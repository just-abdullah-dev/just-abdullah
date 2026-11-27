import { achievements, education } from "@/constants/data";
import Reveal from "@/components/motion/Reveal";

export default function Education() {
  return (
    <section id="education" className="section-block">
      <Reveal>
        <p className="section-kicker">Education</p>
        <h2 className="section-title">Academic foundation.</h2>
      </Reveal>

      <Reveal className="mt-8 rounded-3xl border border-ink/10 bg-white p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
          {education.period}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-ink md:text-3xl">
          {education.degree}
        </h3>
        <p className="mt-2 text-signal">{education.institute}</p>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-ink-muted">
          {education.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-6">
        <h3 className="font-display text-xl font-semibold text-ink">Achievements</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {achievements.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-ink/10 bg-stone-soft px-4 py-4 text-sm leading-6 text-ink-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
