import { faqs, services } from "@/constants/data";
import { Check } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import Btn from "@/components/utils/Btn";

export default function Services() {
  return (
    <div className="pb-10">
      <section className="section-block !pt-8">
        <Reveal>
          <p className="section-kicker">Services</p>
          <h1 className="section-title">How we can work together.</h1>
          <p className="section-copy mt-4">
            Engagements built for founders and teams who need production systems — not template
            sites. Clear scope, calm communication, measurable delivery.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.05}>
              <article className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 bg-white p-6 md:p-8">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-ink-muted">{item.desc}</p>
                  <ul className="mt-6 grid gap-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-ink-muted">
                        <Check size={16} className="mt-0.5 shrink-0 text-signal" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="mt-8 inline-block">
                  <Btn variant="outline">{item.cta}</Btn>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-block !pt-0">
        <Reveal>
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Common questions.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-ink/10 bg-white px-5 py-4 open:shadow-soft"
            >
              <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-signal transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-ink-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
