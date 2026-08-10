import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Disposable Vapes 2026 | Top Picks Ranked | GetSmoke",
  description:
    "The best disposable vapes of 2026 ranked by puff count, flavor quality, and value. Geek Bar Pulse X2, Lost Mary MO20000, EBCreate BC Pro and more. Free shipping $89+.",
  alternates: { canonical: "https://getsmoke.com/best-disposable-vapes" },
  openGraph: {
    title: "Best Disposable Vapes 2026 | GetSmoke",
    description:
      "Top disposable vapes of 2026 ranked and reviewed. Shop with free shipping on orders $89+.",
    url: "https://getsmoke.com/best-disposable-vapes",
    images: [{ url: "https://getsmoke.com/og-default.jpg" }],
  },
  keywords:
    "best disposable vapes 2026, best disposable vape, top disposable vapes, disposable vape ranked, buy disposable vapes online, best vape 2026",
};

export const dynamic = "force-static";

const TOP_PICKS = [
  {
    rank: 1,
    slug: "geek-bar-pulse-x2-50000-puffs",
    name: "Geek Bar Pulse X2",
    puffs: "50,000",
    price: "from $14.99",
    image: "/model-banners/geek-bar-pulse-x2-hero.jpg",
    badge: "Editor's Pick",
    pros: ["50,000 puffs — longest lasting", "Smart display with battery/juice level", "50+ flavors available", "Dual mode: Regular + Boost"],
    verdict: "The Geek Bar Pulse X2 is the most advanced disposable vape available in 2026. With 50,000 puffs, a real-time display, and Boost mode for stronger hits, it sets the standard. Best value for heavy vapers.",
  },
  {
    rank: 2,
    slug: "lost-mary-mo20000-20000-puffs",
    name: "Lost Mary MO20000",
    puffs: "20,000",
    price: "from $13.99",
    image: "/model-banners/lost-mary-mo20000-hero.jpg",
    badge: "Best Flavor",
    pros: ["Exceptional flavor accuracy", "20,000 puffs with mesh coil", "Compact ergonomic design", "Consistent draw from first to last puff"],
    verdict: "Lost Mary is widely regarded as the best for flavor quality. The MO20000 delivers accurate, full fruit flavors that last the entire device life. Best pick for flavor-focused vapers.",
  },
  {
    rank: 3,
    slug: "ebcreate-bc-pro-40000-puffs",
    name: "EBCreate BC Pro",
    puffs: "40,000",
    price: "from $15.99",
    image: "/model-banners/ebcreate-bc-pro-hero.jpg",
    badge: "Best Value",
    pros: ["40,000 puffs at a great price", "LED battery indicator", "Type-C fast charging", "Wide flavor selection"],
    verdict: "The BC Pro from EBCreate packs 40,000 puffs at a price that beats the competition. If you want maximum puffs per dollar, this is the one.",
  },
  {
    rank: 4,
    slug: "geek-bar-pulse-2-25000-puffs",
    name: "Geek Bar Pulse 2",
    puffs: "25,000",
    price: "from $14.99",
    image: "/model-banners/geek-bar-pulse-2-hero.jpg",
    badge: "Most Popular",
    pros: ["25,000 puffs", "Upgraded coil vs original Pulse", "Smooth draw, no burnt taste", "Available in 40+ flavors"],
    verdict: "The Pulse 2 improves on the original with better coil tech and smoother airflow. A reliable daily driver with 25,000 puffs and consistent performance.",
  },
];

const FAQ = [
  {
    q: "What is the best disposable vape in 2026?",
    a: "The Geek Bar Pulse X2 is the best overall disposable vape in 2026 with 50,000 puffs, a smart battery display, and dual output modes. For flavor, Lost Mary MO20000 leads. For value, EBCreate BC Pro is the top pick.",
  },
  {
    q: "How long does a disposable vape last?",
    a: "It depends on puff count and usage. A 10,000-puff device lasts roughly 1-2 weeks for average users (300-400 puffs/day). A 50,000-puff device like the Geek Bar Pulse X2 can last 2-3 months.",
  },
  {
    q: "What disposable vape has the most puffs?",
    a: "As of 2026, the Geek Bar Pulse X2 offers the highest puff count at 50,000 puffs. Other high-count options include EBCreate BC Pro (40,000), RAZ DC25000 (25,000), and Lost Mary Turbo (35,000).",
  },
  {
    q: "Are disposable vapes worth it vs a pod system?",
    a: "Disposable vapes are more convenient - no refilling, no coil changes, no maintenance. A pod system is more cost-effective long-term but requires upkeep. For casual or on-the-go use, disposables are ideal.",
  },
  {
    q: "What disposable vape has the best flavor?",
    a: "Lost Mary consistently ranks highest for flavor accuracy. Their mesh coil technology delivers clean, true-to-name fruit and menthol flavors from the first puff to the last.",
  },
  {
    q: "Where can I buy the best disposable vapes online?",
    a: "GetSmoke.com carries all the top brands including Geek Bar, Lost Mary, RAZ, HQD, Fume, and EBCreate. Free shipping on orders over $89. Adults 21+ only.",
  },
];

export default function BestDisposableVapesPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Disposable Vapes 2026",
    url: "https://getsmoke.com/best-disposable-vapes",
    numberOfItems: TOP_PICKS.length,
    itemListElement: TOP_PICKS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://getsmoke.com/models/${p.slug}`,
    })),
  };

  return (
    <main className="font-unbounded bg-white text-black">
      {/* Hero */}
      <section className="bg-black text-white py-14 px-4 text-center">
        <p className="text-[#fe3500] text-sm font-bold mb-2">Updated August 2026</p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Best Disposable Vapes 2026
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6">
          Top-rated disposable vapes ranked by puff count, flavor quality, and value. All available for online purchase with free shipping on orders $89+.
        </p>
        <Link
          href="/vapes"
          className="inline-block bg-[#fe3500] text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition"
        >
          Shop All Disposable Vapes
        </Link>
      </section>

      {/* Trust badges */}
      <section className="border-b border-gray-100 py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs md:text-sm">
          {[
            { icon: "🚚", text: "Free shipping $89+" },
            { icon: "✅", text: "Adults 21+ only" },
            { icon: "⚡", text: "Same-day shipping" },
            { icon: "🔒", text: "Secure checkout" },
          ].map((b) => (
            <div key={b.text} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-gray-600">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top picks */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-2 text-center">
          Top 4 Disposable Vapes of 2026
        </h2>
        <p className="text-center text-sm text-gray-500 mb-10">
          Ranked by GetSmoke editors based on puff count, flavor, build quality, and price.
        </p>

        <div className="space-y-8">
          {TOP_PICKS.map((p) => (
            <div
              key={p.slug}
              className="border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6"
            >
              {/* Rank + image */}
              <div className="flex flex-col items-center gap-3 md:w-48 shrink-0">
                <span className="text-5xl font-bold text-gray-100 leading-none">
                  #{p.rank}
                </span>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-3" />
                </div>
                <span className="bg-[#fe3500] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-[#fe3500] font-bold text-sm">{p.price}</span>
                </div>
                <p className="text-gray-400 text-xs mb-3">{p.puffs} puffs</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.verdict}</p>

                <ul className="space-y-1 mb-5">
                  {p.pros.map((pro) => (
                    <li key={pro} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-[#fe3500] font-bold">✓</span> {pro}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/models/${p.slug}`}
                  className="inline-block bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition"
                >
                  Shop {p.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How we rank */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">How We Rank Disposable Vapes</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            GetSmoke evaluates disposable vapes across five criteria: puff count accuracy, flavor quality and consistency, device build and ergonomics, price-to-puff ratio, and customer satisfaction based on real purchase data.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Rankings are updated monthly. We carry all products listed and can confirm their in-stock availability. All prices listed are starting prices - final cost depends on flavor selection.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQ.map((item) => (
            <div key={item.q} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-sm mb-2">{item.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
        />
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-10 px-4 text-center">
        <p className="font-bold text-lg mb-2">Ready to order?</p>
        <p className="text-gray-400 text-sm mb-6">
          All products in stock. Free shipping on orders $89+. Adults 21+ only.
        </p>
        <Link
          href="/vapes"
          className="inline-block bg-[#fe3500] text-white px-10 py-3 rounded-full font-bold hover:bg-red-600 transition"
        >
          Shop All Disposable Vapes
        </Link>
      </section>
    </main>
  );
}
