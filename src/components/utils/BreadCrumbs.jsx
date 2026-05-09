import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BreadCrumbs({ data }) {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-black/75 px-4 py-3 text-sm text-gray-400 md:w-fit md:px-5 ">
      {data.map((item, index) => {
        const label = item?.name
          ?.split(" ")
          .filter(Boolean)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        const isLast = index === data.length - 1;

        return (
          <React.Fragment key={`${item?.path}-${index}`}>
            <Link
              className={`transition ${isLast ? "font-medium text-white" : "text-gray-400 hover:text-white"}`}
              href={item?.path}
            >
              {label}
            </Link>
            {!isLast ? <ChevronRight size={14} className="text-gray-600" /> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}
