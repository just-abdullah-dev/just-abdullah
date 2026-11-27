import { skills } from "@/constants/data";
import Reveal from "@/components/motion/Reveal";

export default function Skills() {
  const groups = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="section-block">
      <Reveal>
        <p className="section-kicker">Stack</p>
        <h2 className="section-title">Tools I ship with.</h2>
        <p className="section-copy mt-4">
          A focused production stack for web, mobile, data, and AI-backed products.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(groups).map(([category, items], index) => (
          <Reveal key={category} delay={index * 0.04}>
            <div className="rounded-3xl border border-ink/10 bg-white p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-signal">
                {category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill.title}
                    className="rounded-full border border-ink/10 bg-stone px-3 py-1.5 text-sm text-ink"
                    title={skill.level}
                  >
                    {skill.title}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
