"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { reviews } from "@/constants/data";
import Reveal from "@/components/motion/Reveal";

const PREVIEW_WORDS = 50;

function truncateWords(text, limit) {
  const words = text.trim().split(/\s+/);
  if (words.length <= limit) {
    return { preview: text.trim(), isTruncated: false };
  }
  return {
    preview: words.slice(0, limit).join(" "),
    isTruncated: true,
  };
}

function ReviewCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  const { preview, isTruncated } = truncateWords(item.review, PREVIEW_WORDS);
  const displayText = expanded || !isTruncated ? item.review : `${preview}…`;

  return (
    <figure className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 md:p-7">
      <blockquote className="text-sm leading-7 text-ink-muted md:text-base">
        “{displayText}”
        {isTruncated ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="ml-1 inline font-semibold text-signal transition hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? "See less" : "See more"}
          </button>
        ) : null}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-5">
        <Image
          src={item.avatar}
          alt={item.name}
          width={44}
          height={44}
          className="size-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-ink">{item.name}</p>
          <p className="text-xs text-ink-muted">{item.profession}</p>
          {item.projectSlug ? (
            <Link
              href={`/projects/${item.projectSlug}`}
              className="mt-1 inline-block text-xs font-medium text-signal hover:underline"
            >
              Related project
            </Link>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}

export default function Trust() {
  return (
    <section id="trust" className="section-block">
      <Reveal>
        <p className="section-kicker">Trust</p>
        <h2 className="section-title">Clients who shipped with me.</h2>
        <p className="section-copy mt-4">
          Clear communication, reliable delivery, and work that holds up after launch.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {reviews.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.06}>
            <ReviewCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
