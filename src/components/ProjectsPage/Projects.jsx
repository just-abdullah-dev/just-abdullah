import { projects } from "@/constants/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

function ProjectRow({ item, index }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.2)}>
      <Link
        href={`/projects/${item.slug}`}
        className="group grid gap-5 border-b border-ink/10 py-8 transition md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10 md:py-10"
      >
        <div className="order-2 md:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-faint">
            {String(index + 1).padStart(2, "0")}
            {item.startedOn ? ` · ${item.startedOn}` : ""}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-ink transition group-hover:text-signal md:text-3xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-signal">{item.tagline}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-ink-muted md:text-base">
            {item.summary || item.tagline}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.keywords.slice(0, 4).map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-ink/10 bg-white px-3 py-1 text-[11px] text-ink-muted"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-2xl border border-ink/10 bg-white md:order-2">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={item.images[0]}
              alt={`${item.title} preview`}
              width={720}
              height={450}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              priority={index < 2}
            />
            <span className="absolute bottom-4 right-4 flex size-10 items-center justify-center rounded-full bg-ink text-white opacity-0 transition group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Projects({ showMoreBtn = true, limit }) {
  const featured = projects.filter((p) => p.featured !== false && p.indexable !== false);
  const list = showMoreBtn
    ? (limit ? featured.slice(0, limit) : featured.slice(0, 6))
    : projects.filter((p) => p.indexable !== false);

  const experiments = showMoreBtn
    ? []
    : projects.filter((p) => p.indexable === false);

  return (
    <section id="projects" className="section-block">
      <Reveal>
        <div className="mb-4">
          <p className="section-kicker">{showMoreBtn ? "Selected work" : "Project archive"}</p>
          <h2 className="section-title">
            {showMoreBtn ? "Built for real use." : "All engineered projects."}
          </h2>
          <p className="section-copy mt-4">
            {showMoreBtn
              ? "Flagship product work across logistics, healthtech, SaaS, and AI — designed to ship and scale."
              : "A curated archive of production platforms, client products, and product experiments."}
          </p>
        </div>
      </Reveal>

      <div className="mt-4 border-t border-ink/10">
        {list.map((item, index) => (
          <ProjectRow key={item.slug} item={item} index={index} />
        ))}
      </div>

      {showMoreBtn ? (
        <div className="mt-8">
          <Link href="/projects" className="actionBtn-outline">
            View all projects <ArrowUpRight className="ml-2 size-4" />
          </Link>
        </div>
      ) : null}

      {experiments.length > 0 ? (
        <div className="mt-16">
          <p className="section-kicker">Experiments</p>
          <p className="section-copy mb-6">
            Smaller builds kept for reference — listed here, not prioritized for search.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {experiments.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/projects/${item.slug}`}
                  className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink transition hover:border-signal/30"
                >
                  <span>{item.title}</span>
                  <ArrowUpRight size={16} className="text-ink-faint" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
