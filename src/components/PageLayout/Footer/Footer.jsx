import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Socials from "@/components/utils/Socials";
import { SITE } from "@/lib/site";

const links = [
  { name: "Work", slug: "/projects" },
  { name: "About", slug: "/about" },
  { name: "Services", slug: "/services" },
  { name: "Contact", slug: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-ink/10 bg-ink text-white">
      <div className="shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="grid gap-4">
          <Link href="/" className="font-display text-3xl font-semibold tracking-[-0.04em]">
            Abdullah
          </Link>
          <p className="max-w-sm text-sm leading-6 text-white/60">
            Full Stack Engineer and founder building real products — SaaS, mobile platforms, and
            AI-integrated systems with a calm, production-first approach.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
            Navigate
          </p>
          <ul className="grid gap-2">
            {links.map((item) => (
              <li key={item.name}>
                <Link className="text-sm text-white/70 transition hover:text-white" href={item.slug}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
            Contact
          </p>
          <div className="grid gap-3 text-sm text-white/70">
            <Link
              className="inline-flex items-center gap-2 transition hover:text-white"
              href={`mailto:${SITE.email}`}
            >
              <Mail size={16} /> {SITE.email}
            </Link>
            <Link
              className="inline-flex items-center gap-2 transition hover:text-white"
              href={`tel:${SITE.phone}`}
            >
              <Phone size={16} /> {SITE.phoneDisplay}
            </Link>
          </div>
          <div className="mt-5">
            <Socials css="flex flex-wrap gap-2 [&_a]:border-white/15 [&_a]:text-white/60 [&_a:hover]:border-signal [&_a:hover]:text-signal-soft" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {SITE.brand}. Built with care.
      </div>
    </footer>
  );
}
