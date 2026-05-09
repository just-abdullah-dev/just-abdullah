import { learningFocus, productsToLaunch } from "@/constants/data";

const accentClasses = {
  green: "border-emerald-400/30 text-emerald-300 bg-emerald-400/10",
  orange: "border-orange-400/30 text-orange-300 bg-orange-400/10",
  gray: "border-white/20 text-gray-200 bg-white/10",
};

export default function LaunchPad() {
  return (
    <section id="products" className="premium-section">
      <div className="section-kicker">Next Products</div>
      <div className="section-heading-grid">
        <h2 className="section-title">Shipping more than portfolio projects.</h2>
        <p className="section-copy">
          The next chapter is focused on premium SaaS and AI-enabled products:
          useful systems, clean operations, and launch-ready engineering.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {productsToLaunch.map((product) => (
          <article key={product.name} className="premium-card min-h-60">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
              <span className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.25em] ${accentClasses[product.accent]}`}>
                {product.status}
              </span>
            </div>
            <p className="mt-8 text-gray-300">{product.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Currently Learning</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {learningFocus.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-200">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
