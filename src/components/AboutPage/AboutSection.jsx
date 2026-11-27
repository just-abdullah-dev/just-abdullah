import Image from "next/image";
import Link from "next/link";
import { achievements, education } from "@/constants/data";
import Btn from "../utils/Btn";
import Reveal from "@/components/motion/Reveal";

const strengths = [
  "Founder & Full Stack Lead at GateTak — three React Native apps and a Next.js admin panel.",
  "B2B & SaaS architecture — clinic platforms, dynamic pricing, multi-tenant school systems.",
  "Academic excellence — BSc Software Engineering at PAF-IAST (CGPA 3.48, 4x Dean's List).",
  "Teaching Assistant for 7 courses across 4 semesters including DSA and Programming Fundamentals.",
];

const techGroups = [
  { label: "Frontend", items: "React.js, Next.js, Tailwind CSS, Framer Motion, TypeScript" },
  { label: "Backend", items: "Node.js, Express.js, FastAPI, Nest.js, REST APIs" },
  { label: "Mobile", items: "React Native, Expo" },
  { label: "AI / ML", items: "Python, DenseNet121, Deep Learning, CNNs, RAG" },
  { label: "Databases", items: "PostgreSQL, Prisma, MongoDB, MySQL, Supabase" },
  { label: "Tools", items: "Git, Vercel, GCP, AWS S3, Docker" },
];

export default function AboutSection() {
  return (
    <section className="section-block !pt-8">
      <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white p-3">
            <Image
              className="aspect-[4/5] w-full rounded-2xl object-cover scale-x-[-1]"
              src="/about.jpg"
              alt="Abdullah, Full Stack Engineer and founder"
              width={900}
              height={1100}
              priority
            />
            <div className="mt-4 px-2 pb-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">
                {education.institute}
              </p>
              <p className="mt-1 text-sm text-ink-muted">
                {education.degree} · 4x Dean&apos;s List
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-10">
          <Reveal>
            <p className="section-kicker">About</p>
            <h1 className="section-title">Full Stack Engineer & startup founder.</h1>
            <p className="section-copy mt-4">
              Results-driven engineer with hands-on experience building scalable SaaS platforms, REST APIs, and AI-integrated systems across client and product teams.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-muted">
              Proven delivery in Next.js, React, Node.js, TypeScript, and PostgreSQL — from
              multi-tenant architectures to telehealth and city logistics. Currently founding{" "}
              <strong className="text-ink">GateTak</strong> as full stack lead across web and mobile.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <Btn>Work with me</Btn>
              </Link>
              <Link href="/projects">
                <Btn variant="outline">See projects</Btn>
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Strengths</h2>
            <ul className="mt-4 grid gap-3">
              {strengths.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-ink/10 bg-white px-4 py-4 text-sm leading-6 text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Technical range</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {techGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-ink/10 bg-stone-soft p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-signal">
                    {group.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-ink-muted">{group.items}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink">Achievements</h2>
            <ul className="mt-4 grid gap-3">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
