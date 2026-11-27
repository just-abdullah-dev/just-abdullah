"use client";

import { projects } from "@/constants/data";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import OtherProjects from "./OtherProjects";
import Btn from "../utils/Btn";

export default function ProjectInDetail({ slug }) {
  const data = projects.find((item) => item?.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!data) {
    return (
      <section className="section-block">
        <p className="section-kicker">Project</p>
        <h1 className="section-title">Project not found.</h1>
        <p className="section-copy mt-4">
          The case study you requested does not exist in the current project list.
        </p>
        <Link href="/projects" className="mt-6 inline-block">
          <Btn variant="outline">Back to projects</Btn>
        </Link>
      </section>
    );
  }

  const images = data.images || [];
  const hasMultipleImages = images.length > 1;
  const activeImageSrc = images[activeImage] || images[0];
  const projectPeriod = [data.startedOn, data.completedOn].filter(Boolean).join(" — ");

  return (
    <div className="pb-10">
      <section className="grid items-start gap-10 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-6">
          <div>
            <p className="section-kicker">Case study</p>
            <h1 className="section-title">{data.title}</h1>
            <p className="mt-4 text-lg leading-8 text-ink-muted">{data.tagline}</p>
            {data.summary ? (
              <p className="mt-3 text-base leading-7 text-ink-muted">{data.summary}</p>
            ) : null}
            {projectPeriod ? (
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
                {projectPeriod}
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
            {data.repo ? (
              <Link target="_blank" rel="noopener noreferrer" href={data.repo}>
                <Btn className="gap-2">
                  GitHub <Github size={16} />
                </Btn>
              </Link>
            ) : null}
            {data.link ? (
              <Link target="_blank" rel="noopener noreferrer" href={data.link}>
                <Btn variant="outline" className="gap-2">
                  Live site <ExternalLink size={16} />
                </Btn>
              </Link>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {data.keywords.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs text-ink-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white p-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-stone">
              {activeImageSrc ? (
                <Image
                  className="h-full w-full object-cover object-top"
                  alt={`${data.title} preview ${activeImage + 1}`}
                  src={activeImageSrc}
                  width={1400}
                  height={900}
                  priority
                />
              ) : null}
              {hasMultipleImages ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((current) =>
                        current === 0 ? images.length - 1 : current - 1
                      )
                    }
                    className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white/90 text-ink"
                    aria-label="Previous image"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImage((current) =>
                        current === images.length - 1 ? 0 : current + 1
                      )
                    }
                    className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white/90 text-ink"
                    aria-label="Next image"
                  >
                    <ArrowRight size={16} />
                  </button>
                </>
              ) : null}
            </div>
          </div>

          {hasMultipleImages ? (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border ${
                    index === activeImage ? "border-signal" : "border-ink/10"
                  }`}
                  aria-label={`Show image ${index + 1}`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="96px" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-ink/10 bg-white p-6 md:p-10">
        <div className="project-markdown prose-none max-w-3xl">
          <ReactMarkdown>{data.desc}</ReactMarkdown>
        </div>
      </section>

      <OtherProjects currentSlug={slug} />
    </div>
  );
}
