import { skills } from "@/constants/data";

const categoryStyles = {
  Frontend: "border-white/15 bg-violet-500/30 text-white",
  Backend: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  Mobile: "border-orange-400/30 bg-orange-400/10 text-orange-200",
  Database: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  Data: "border-sky-400/30 bg-sky-400/10 text-sky-200",
  "AI / ML": "border-purple-400/30 bg-purple-400/10 text-purple-200",
  Learning: "border-yellow-400/30 bg-yellow-400/10 text-yellow-200",
  Architecture: "border-white/15 bg-white/10 text-gray-200",
  Security: "border-red-400/30 bg-red-400/10 text-red-200",
};

function Skills() {
  return (
    <section className="premium-section">
      <div className="section-kicker">Technical Skills</div>
      <div className="section-heading-grid">
        <h2 className="section-title">A practical stack for SaaS, AI APIs, and mobile-ready products.</h2>
        <p className="section-copy">
          Strongest in Next.js, React, Node.js, PostgreSQL, Prisma, REST APIs,
          authentication, RBAC, responsive UI, and production-focused system design.
        </p>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              <span className={`rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] ${categoryStyles[skill.category] || "border-white/10 text-gray-300"}`}>
                {skill.category}
              </span>
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.25em] text-gray-500">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
