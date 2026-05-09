"use client";
import { projects } from "@/constants/data";
import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import OtherProjects from "./OtherProjects";
import Btn from "../utils/Btn";

export default function ProjectInDetail({ slug }) {
  const data = projects.find((item) => item?.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!data) {
    return (
      <section className="premium-section">
        <div className="section-kicker">Project</div>
        <h1 className="section-title">Project not found.</h1>
        <p className="section-copy">The case study you requested does not exist in the current project list.</p>
      </section>
    );
  }

  const images = data?.images || [];
  const hasMultipleImages = images.length > 1;
  const activeImageSrc = images[activeImage] || images[0];
  const projectPeriod = [data?.startedOn, data?.completedOn].filter(Boolean).join(" - ");

  const showPreviousImage = () => {
    setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNextImage = () => {
    setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="grid gap-10">
      <section className="premium-section !bg-black/75 overflow-hidden">
        <div className="grid items-start gap-8 xl:grid-cols-[0.95fr_1.15fr]">
          <div className="grid gap-6">
            <div className="section-kicker">Case Study</div>
            <div className="grid gap-4">
              <h1 className="section-title">{data.title}</h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-300">{data.tagline}</p>
              <p className="max-w-2xl text-base leading-7 text-gray-400">{data.summary || data.tagline}</p>
            </div>

            {/* <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gray-500">
                <CalendarDays size={16} />
                Project Timeline
              </div>
              <div className="text-base text-gray-300">{projectPeriod || "Currently active"}</div>
            </div> */}

            <div className="flex flex-wrap gap-3">
              {data?.repo ? (
                <Link className="w-full sm:w-auto" target="_blank" href={data.repo}>
                  <Btn className="w-full gap-2 sm:w-auto">
                    See on GitHub <Github size={18} />
                  </Btn>
                </Link>
              ) : null}
              {data?.link ? (
                <Link className="w-full sm:w-auto" target="_blank" href={data.link}>
                  <Btn className="w-full gap-2 sm:w-auto">
                    Visit Site <ExternalLink size={18} />
                  </Btn>
                </Link>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2">
              {data?.keywords.map((item) => (
                <span key={item} className="header-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black">
                <Image
                  className="h-full w-full object-cover object-top"
                  alt={`${data.title} preview ${activeImage + 1}`}
                  src={activeImageSrc}
                  width={1400}
                  height={900}
                  priority
                />
                {hasMultipleImages ? (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur transition hover:bg-white hover:text-black"
                      aria-label="Show previous project image"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur transition hover:bg-white hover:text-black"
                      aria-label="Show next project image"
                    >
                      <ArrowRight size={18} />
                    </button>
                    <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gray-200 backdrop-blur">
                      {String(activeImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                    </div>
                  </>
                ) : null}
              </div>
            </div>

            {hasMultipleImages ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {images.map((item, index) => (
                  <button
                    key={`${item}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-[1.25rem] border p-2 text-left transition ${activeImage === index ? "border-white bg-white/[0.08]" : "border-white/10 bg-white/[0.03] hover:border-white/30"}`}
                    aria-label={`Show image ${index + 1} for ${data.title}`}
                  >
                    <div className="relative aspect-[2/1] overflow-hidden rounded-[0.9rem] bg-black">
                      <Image
                        className="h-full w-full object-cover object-top"
                        src={item}
                        alt={`${data.title} thumbnail ${index + 1}`}
                        width={200}
                        height={150}
                      />
                    </div>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="premium-section grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="grid gap-5">
          <div>
            <div className="section-kicker">Project Story</div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">What this build covers.</h2>
          </div>
          <ReactMarkdown className="project-markdown">{data?.desc}</ReactMarkdown>
        </div>

        <div className="grid content-start gap-5">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="section-kicker !mb-3">Stack</div>
            <div className="flex flex-wrap gap-2">
              {data?.keywords.map((item) => (
                <span key={item} className="header-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="section-kicker !mb-3">Links</div>
            <div className="grid gap-3">
              {data?.repo ? (
                <Link target="_blank" href={data.repo} className="header-pill justify-between">
                  Repository <Github size={16} />
                </Link>
              ) : null}
              {data?.link ? (
                <Link target="_blank" href={data.link} className="header-pill justify-between">
                  Live Preview <ExternalLink size={16} />
                </Link>
              ) : null}
              {!data?.repo && !data?.link ? <p className="text-sm leading-6 text-gray-400">Private client project. Public repository and live link are not available.</p> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="section-heading-grid">
          <div>
            <div className="section-kicker">More Work</div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">Other projects in the archive.</h2>
          </div>
          <p className="section-copy">A broader mix of SaaS products, experiments, interfaces, and shipped builds from different stages of the portfolio.</p>
        </div>
        <OtherProjects slug={slug} />
      </section>
    </div>
  );
}
