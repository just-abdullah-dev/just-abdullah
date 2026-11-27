import { projects } from "@/constants/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function OtherProjects({ currentSlug, slug }) {
  const activeSlug = currentSlug || slug;
  const otherProjects = projects
    .filter((item) => item?.slug !== activeSlug && item.indexable !== false)
    .slice(0, 6);

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">More work</p>
          <h2 className="font-display text-3xl font-semibold text-ink">Related projects</h2>
        </div>
        <Link href="/projects" className="text-sm font-semibold text-signal hover:underline">
          View archive
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((item) => (
          <Link
            key={item.slug}
            href={`/projects/${item.slug}`}
            className="group flex flex-col justify-between rounded-3xl border border-ink/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-signal/30 hover:shadow-soft"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-ink group-hover:text-signal">
                  {item.title}
                </h3>
                <ArrowUpRight className="size-4 shrink-0 text-ink-faint transition group-hover:text-signal" />
              </div>
              <p className="mt-2 text-sm text-ink-muted">{item.tagline}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.keywords.slice(0, 3).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-ink/10 bg-stone px-2.5 py-1 text-[11px] text-ink-muted"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
