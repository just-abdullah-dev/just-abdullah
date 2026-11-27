import { learningFocus, productsToLaunch } from "@/constants/data";
import Reveal from "@/components/motion/Reveal";

const accentMap = {
  green: "border-signal/30 bg-signal-faint text-signal",
  teal: "border-signal/30 bg-signal-faint text-signal",
  gray: "border-ink/10 bg-white text-ink-muted",
};

export default function LaunchPad() {
  return (
    <section id="products" className="section-block">
      <Reveal>
        <p className="section-kicker">Products</p>
        <h2 className="section-title">What I am building next.</h2>
        <p className="section-copy mt-4">
          Beyond client work: founding GateTak, school SaaS, medical AI, and venue booking.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {productsToLaunch.map((product, index) => (
          <Reveal key={product.name} delay={index * 0.05}>
            <article className="rounded-3xl border border-ink/10 bg-white p-6 md:p-7">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl font-semibold text-ink">{product.name}</h3>
                <span
                  className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                    accentMap[product.accent] || accentMap.gray
                  }`}
                >
                  {product.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-ink-muted">{product.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8 rounded-3xl border border-ink/10 bg-stone-soft p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-signal">
          Currently deepening
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {learningFocus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
