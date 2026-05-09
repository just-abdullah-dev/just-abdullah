import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Btn from "../utils/Btn";

const strengths = [
  "Production-ready SaaS architecture with authentication, RBAC, dashboards, and database-first planning.",
  "Full-stack delivery across Next.js, React, Node.js, FastAPI, PostgreSQL, Prisma, MongoDB, and Supabase.",
  "Mobile and AI product direction with React Native, Expo, Python, Google Colab, CNN workflows, and RAG learning.",
  "Strong UI taste for premium black-and-white interfaces, responsive layouts, and smooth product interactions.",
];

const techGroups = [
  { label: "Frontend", items: "React.js, Next.js, Tailwind CSS, Framer Motion, Redux, TypeScript" },
  { label: "Backend", items: "Node.js, Express.js, Next.js API Routes, FastAPI, Django, REST APIs" },
  { label: "Mobile", items: "React Native, Expo" },
  { label: "AI", items: "Python, Google Colab, Deep Learning, CNNs, RAG" },
  { label: "Databases", items: "PostgreSQL, Prisma ORM, MongoDB, Mongoose, MySQL, Supabase" },
  { label: "Tools", items: "Git, GitHub, Vercel, GCP, AWS S3, Postman, VS Code" },
];

export default function AboutSection() {
  return (
    <section className="premium-section grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="relative h-fit overflow-hidden rounded-[2rem] border border-white/10 bg-red-500/[0.03] p-3 lg:sticky lg:top-12">
        <Image
          className="aspect-[4/5] h-fit w-full rounded-[1.5rem] object-cover"
          src="/avatar.jpg"
          alt="Abdullah Profile Picture"
          width={900}
          height={1100}
          loading="eager"
          priority
        />
      </div>

      <div className="grid content-center gap-8 text-light">
        <div className="grid gap-4">
          <div className="section-kicker">About Abdullah</div>
          <h1 className="section-title">Full Stack Engineer
             {/* focused on building real-world products, scalable SaaS systems, AI-integrated solutions, and startup-driven platforms. */}</h1>
          <p className="section-copy">
            I am Abdullah, a Full Stack Engineer from Pakistan, building scalable web applications using Next.js, React.js, Node.js, PostgreSQL, and Prisma, while expanding into FastAPI, React Native, Expo, and AI-integrated systems. With 2+ years of experience, I have delivered 10+ projects, including SaaS platforms, AI-enabled systems, dashboards, and mobile-backed products. I am passionate about clean architecture, responsive UI, and production-focused system design. I am eager to contribute my skills to innovative projects and collaborate with visionary teams.

          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {strengths.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-gray-300">
              {item}
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-2xl font-semibold text-white">Technology stack</h2>
          <div className="mt-5 grid gap-4">
            {techGroups.map((group) => (
              <div key={group.label} className="grid gap-1 border-b border-white/10 pb-3 last:border-0 last:pb-0 md:grid-cols-[9rem_1fr]">
                <span className="text-sm uppercase tracking-[0.25em] text-gray-500">{group.label}</span>
                <span className="text-gray-300">{group.items}</span>
              </div>
            ))}
          </div>
        </div>

        <Link href="/#contact" className="w-fit">
          <Btn className="gap-3">
            Let&apos;s build together <MoveRight size={22} />
          </Btn>
        </Link>
      </div>
    </section>
  );
}
