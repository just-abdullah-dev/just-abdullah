import { education } from "@/constants/data";

export default function Education() {
  return (
    <section className="premium-section">
      <div className="section-kicker">Education</div>
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-semibold text-white">{education.degree}</h2>
            <p className="mt-2 text-gray-300">{education.institute}</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">{education.period}</p>
            <p className="mt-2 text-xl text-white">CGPA {education.cgpa}</p>
          </div>
        </div>
        <ul className="mt-6 grid gap-3 text-sm leading-6 text-gray-300 md:grid-cols-3">
          {education.highlights.map((highlight) => (
            <li key={highlight} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
