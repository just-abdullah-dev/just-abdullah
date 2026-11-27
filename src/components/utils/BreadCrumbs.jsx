import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BreadCrumbs({ data = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-muted">
        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1">
              {isLast ? (
                <span className="capitalize text-ink" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="capitalize transition hover:text-signal">
                  {item.name}
                </Link>
              )}
              {!isLast ? <ChevronRight size={14} className="text-ink-faint" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
