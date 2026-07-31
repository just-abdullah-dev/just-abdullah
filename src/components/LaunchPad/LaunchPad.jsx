import { learningFocus, productsToLaunch } from "@/constants/data";
import { Rocket, Sparkles } from "lucide-react";

const accentClasses = {
  green: "border-emerald-400/40 text-emerald-300 bg-emerald-400/10 shadow-sm shadow-emerald-500/20",
  orange: "border-orange-400/40 text-orange-300 bg-orange-400/10 shadow-sm shadow-orange-500/20",
  gray: "border-purple-400/30 text-purple-300 bg-purple-400/10",
};

export default function LaunchPad() {
  return (
    <section id="products" className="premium-section my-10">
      <div className="section-kicker flex items-center gap-2 text-purple-400">
        <Rocket className="size-4" /> Next Products & Startup
      </div>
      <div className="section-heading-grid">
        <h2 className="section-title font-serif italic">Startup Ventures</h2>
        <p className="section-copy">
          Beyond client engineering: founding GateTak logistics, building multi-tenant school SaaS, medical AI tools, and arena booking platforms.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {productsToLaunch.map((product) => {
          const isGateTak = product.name === "GateTak";
          return (
            <article
              key={product.name}
              className={`relative flex flex-col justify-between rounded-[2rem] border p-6 transition-all duration-300 ${
                isGateTak
                  ? "border-purple-500/60 bg-gradient-to-b from-purple-950/40 via-black/80 to-purple-950/20 shadow-xl shadow-purple-500/15 hover:border-purple-400 hover:scale-[1.02]"
                  : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              }`}
            >
              {isGateTak && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full border border-purple-400/60 bg-purple-600 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white shadow-md">
                   Active Startup
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] uppercase font-bold tracking-[0.2em] ${
                      accentClasses[product.accent] || accentClasses.gray
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="mt-4 text-xs md:text-sm leading-6 text-gray-300">{product.desc}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
          <Sparkles className="size-4" /> Currently Learning & Deepening Expertise
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          {learningFocus.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-xs md:text-sm font-medium text-gray-200 shadow-inner hover:border-purple-500/40 hover:text-purple-300 transition duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
