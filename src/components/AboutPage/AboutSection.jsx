import { Award, BookOpen, GraduationCap, MoveRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Btn from "../utils/Btn";
import { achievements, education } from "@/constants/data";

const strengths = [
  "Founder & Full Stack Lead at GateTak — building 3 React Native apps & Next.js admin dashboard.",
  "B2B & SaaS Architecture — 50+ clinic ordering platforms, dynamic pricing engines, & multi-tenant school systems.",
  "Academic Excellence — BSc Software Engineering graduate from PAF-IAST (CGPA: 3.47, 4x Dean's List).",
  "Teaching Assistant — TA for 7 courses across 4 semesters including DSA, Programming Fundamentals, & Networks.",
];

const techGroups = [
  { label: "Frontend", items: "React.js, Next.js, Tailwind CSS, Framer Motion, Redux, TypeScript, HTML, CSS" },
  { label: "Backend", items: "Node.js, Express.js, Next.js API Routes, FastAPI, Nest.js, REST APIs, WebSockets" },
  { label: "Mobile", items: "React Native, Expo" },
  { label: "AI / ML", items: "Python, DenseNet121 Transfer Learning, Deep Learning, CNNs, RAG" },
  { label: "Databases", items: "PostgreSQL, Prisma ORM, MongoDB, Mongoose, MySQL, Supabase" },
  { label: "Tools", items: "Git, GitHub, Vercel, GCP, AWS S3, Postman, Docker, VS Code" },
];

export default function AboutSection() {
  return (
    <section className="premium-section grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="relative h-fit overflow-hidden rounded-[2rem] border border-white/10 bg-purple-500/[0.03] p-3 lg:sticky lg:top-12">
        <Image
          className="aspect-[4/5] h-fit w-full rounded-[1.5rem] object-cover"
          src="/v3-crop.png"
          alt="Abdullah Profile Picture"
          width={900}
          height={1100}
          loading="eager"
          priority
        />
        <div className="mt-4 p-3 rounded-2xl border border-white/10 bg-black/50 backdrop-blur">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">
            <GraduationCap className="size-4" /> {education.institute}
          </div>
          <p className="mt-1 text-xs text-gray-300">
            {education.degree} • <span className="text-purple-300 font-bold">4x Dean&apos;s List</span>
          </p>
        </div>
      </div>

      <div className="grid content-center gap-8 text-light">
        <div className="grid gap-4">
          <div className="section-kicker flex items-center gap-2 text-purple-400">
            <Sparkles className="size-4" /> About Abdullah
          </div>
          <h1 className="section-title">
            Full Stack Software Engineer & Startup Founder.
          </h1>
          <p className="section-copy">
            Results-driven Full Stack Engineer with <strong className="text-white">~2 years of hands-on professional experience</strong> building scalable SaaS platforms, REST APIs, and AI-integrated systems across multiple client and product teams.
          </p>
          <p className="text-base leading-7 text-gray-300">
            Proven track record delivering production-ready applications in Next.js, React, Node.js, TypeScript, and PostgreSQL — from complex multi-tenant architectures to real-time telehealth video and delivery networks. Currently founding <strong className="text-purple-300">GateTak</strong>, a city-wide logistics platform, as full stack lead across web and mobile. 
          </p>
        </div>

        {/* Strengths Cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs md:text-sm leading-6 text-gray-300 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.05]"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Academic & TA Highlight */}
        <div className="rounded-[2rem] border border-purple-500/30 bg-purple-950/20 p-5 md:p-6">
          <div className="flex items-center gap-2 text-sm font-bold text-purple-300 uppercase tracking-wider">
            <BookOpen className="size-4" /> Teaching Assistant & Honors
          </div>
          <p className="mt-2 text-xs md:text-sm leading-6 text-gray-300">
            Served as <strong className="text-white">Teaching Assistant for 7 courses</strong> across 4 semesters (Programming Fundamentals, ICT, DSA, Calculus, Applied Physics, Computer Networks, Discrete Structures). Recognized on the <strong className="text-purple-300">Dean&apos;s List 4 consecutive semesters</strong> for top academic standing.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {achievements.map((ach, i) => (
              <span key={i} className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-200">
                <Award className="size-3 text-purple-400" /> {ach.split(" - ")[0]}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-6">
          <h2 className="text-xl font-bold text-white">Full Technology Stack</h2>
          <div className="mt-5 grid gap-4">
            {techGroups.map((group) => (
              <div key={group.label} className="grid gap-1 border-b border-white/10 pb-3 last:border-0 last:pb-0 md:grid-cols-[9rem_1fr]">
                <span className="text-xs uppercase font-semibold tracking-[0.25em] text-gray-400">{group.label}</span>
                <span className="text-xs md:text-sm text-gray-300">{group.items}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/#contact" className="w-fit">
          <Btn className="gap-3">
            Let&apos;s build together <MoveRight size={20} />
          </Btn>
        </Link>
      </div>
    </section>
  );
}
