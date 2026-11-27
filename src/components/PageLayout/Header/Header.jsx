"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Work", slug: "/projects" },
  { name: "About", slug: "/about" },
  { name: "Services", slug: "/services" },
  { name: "Contact", slug: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      if (currentScrollY <= 10) setIsVisible(true);
      else if (currentScrollY > lastScrollY.current && currentScrollY > 80) setIsVisible(false);
      else if (currentScrollY < lastScrollY.current) setIsVisible(true);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const showHeader = isVisible || isOpen;
  const overlayHome = isHome && !scrolled;

  return (
    <header
      className={`${
        isHome ? "fixed" : "sticky"
      } left-0 right-0 top-0 z-50 transition-transform duration-300 ease-out ${
        isHome ? "" : "mb-2"
      } ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="shell">
        <div
          className={`flex items-center justify-between px-4 py-3 md:px-6 ${
            overlayHome
              ? "rounded-b-3xl border border-t-0 border-white/10 bg-ink/25 backdrop-blur-md"
              : "rounded-b-3xl border border-t-0 border-ink/10 bg-stone-soft/85 backdrop-blur-xl"
          }`}
        >
          <Link className="flex items-center gap-3" href="/" aria-label="Abdullah home">
            <Image
              src="/avatar.jpg"
              width={40}
              height={40}
              alt=""
              className={`size-10 rounded-full object-cover ${
                overlayHome ? "border border-white/20" : "border border-ink/10"
              }`}
              priority
            />
            <span
              className={`font-display text-xl font-semibold tracking-[-0.04em] ${
                overlayHome ? "text-white" : "text-ink"
              }`}
            >
              Abdullah
            </span>
          </Link>

          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } absolute left-4 right-4 top-[4.5rem] md:static md:block`}
            aria-label="Primary"
          >
            <ul
              className={`flex flex-col gap-1 rounded-2xl p-3 shadow-soft md:min-w-0 md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
                overlayHome
                  ? "border border-white/10 bg-ink/90"
                  : "border border-ink/10 bg-stone-soft"
              }`}
            >
              {links.map((item) => {
                const active =
                  item.slug === "/"
                    ? pathname === "/"
                    : pathname === item.slug || pathname.startsWith(`${item.slug}/`);
                return (
                  <li key={item.name}>
                    <Link
                      href={item.slug}
                      className={`block rounded-full px-4 py-2 text-sm font-medium transition ${
                        active
                          ? overlayHome
                            ? "bg-white text-ink"
                            : "bg-ink text-white"
                          : overlayHome
                            ? "text-white/70 hover:bg-white/10 hover:text-white"
                            : "text-ink-muted hover:bg-white hover:text-ink"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li className="md:ml-2">
                <Link
                  href="/contact"
                  className={`block rounded-full px-4 py-2 text-center text-sm font-semibold transition ${
                    overlayHome
                      ? "bg-signal text-white hover:bg-white hover:text-ink"
                      : "bg-signal text-white hover:bg-ink"
                  }`}
                >
                  Start a project
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className={`inline-flex size-11 items-center justify-center rounded-full md:hidden ${
              overlayHome
                ? "border border-white/20 text-white"
                : "border border-ink/10 text-ink"
            }`}
            onClick={() => setIsOpen((val) => !val)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
