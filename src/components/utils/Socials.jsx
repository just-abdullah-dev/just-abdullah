import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { social_links } from "@/constants/data";

const icons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
};

export default function Socials({ css = "flex items-center gap-3" }) {
  return (
    <ul className={css}>
      {social_links.map((item) => {
        const Icon = icons[item.icon] || Github;
        return (
          <li key={item.name}>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="inline-flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition hover:border-signal/40 hover:text-signal"
            >
              <Icon size={18} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
