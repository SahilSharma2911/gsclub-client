import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HQD GO Flavors Review 2026 - Black Ice, Miami Breeze, Razz Quake and More | GetSmoke",
  description:
    "Full HQD GO flavor review for 2026. Detailed taste notes on Black Ice, Miami Breeze, Razz Quake, and all HQD GO flavors. Plus: HQD GO vs HQD Cuvie comparison. Shop HQD vapes at GetSmoke.",
  alternates: { canonical: "https://getsmoke.com/blog/hqd-go-flavors-review" },
  keywords: [
    "vape hqd",
    "hqd go",
    "hqd go black ice",
    "hqd go miami breeze",
    "hqd go razz quake",
    "hqd go flavors",
    "hqd go review",
    "hqd disposable vape",
  ],
  openGraph: {
    title: "HQD GO Flavors Review 2026 - Black Ice, Miami Breeze, Razz Quake and More",
    description:
      "Honest HQD GO flavor reviews with detailed taste notes. Compare Black Ice, Miami Breeze, Razz Quake, and the full flavor lineup. Shop at GetSmoke.",
    url: "https://getsmoke.com/blog/hqd-go-flavors-review",
    images: [{ url: "https://getsmoke.com/og-default.jpg", width: 1200, height: 630, alt: "HQD GO Flavors Review 2026" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the HQD GO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HQD GO is a compact nicotine disposable vape made by HQD Tech. It typically offers around 5,000 to 6,000 puffs, uses 5% (50mg) nicotine salt e-liquid, features a mesh coil for consistent flavor, and charges via USB-C. It is designed as a convenient everyday carry device with a slim profile and a wide variety of flavors. HQD GO is available at GetSmoke in multiple flavor options.",
      },
    },
    {
      "@type": "Question",
      name: "What does HQD GO Black Ice taste like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HQD GO Black Ice is a bold menthol blackcurrant flavor. It combines the deep, tart sweetness of ripe blackcurrants with an intense cooling ice effect. On the inhale you get a strong berry note; on the exhale the menthol intensifies. It is one of the most popular HQD GO flavors for vapers who want a cool, refreshing, slightly sweet experience without fruit juice sweetness.",
      },
    },
    {
      "@type": "Question",
      name: "What does HQD GO Miami Breeze taste like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HQD GO Miami Breeze is a tropical fruit blend with a light cooling finish. The primary notes are mango and passion fruit, with hints of citrus and pineapple in the background. The breeze element adds a mild menthol finish that keeps it refreshing without being overpowering. It is a great all-day vape for fruit lovers who want something exotic but not too sweet.",
      },
    },
    {
      "@type": "Question",
      name: "What does HQD GO Razz Quake taste like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HQD GO Razz Quake is a raspberry-forward flavor with an intense, tangy profile. It tastes like fresh red raspberries with a slightly tart edge - closer to natural raspberry than candy raspberry. The inhale delivers the berry sweetness, while the exhale has a subtle sour finish that mimics the natural acidity of fresh berries. It is less icy than Black Ice and more fruit-forward than Miami Breeze.",
      },
    },
    {
      "@type": "Question",
      name: "How does the HQD GO compare to the HQD Cuvie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HQD GO and HQD Cuvie are both disposable vapes from HQD Tech but target different users. The HQD Cuvie is the classic, smaller device with 300-1,500 puffs depending on the version - designed for occasional use or light vapers. The HQD GO is larger, offers more puffs (around 5,000-6,000), includes a rechargeable battery, and has a more refined coil for better flavor. For everyday vapers, the HQD GO is a better value. For occasional or social use, the Cuvie is more compact and portable.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy HQD GO vapes online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HQD GO vapes are available online at GetSmoke (getsmoke.com/brand/hqd). GetSmoke is a licensed adult nicotine retailer serving customers 21 and older. Orders over $89 receive free shipping. Adult signature is required on delivery. GetSmoke stocks multiple HQD GO flavors with regular restocks.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://getsmoke.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://getsmoke.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "HQD GO Flavors Review 2026",
      item: "https://getsmoke.com/blog/hqd-go-flavors-review",
    },
  ],
};

const HQD_GO_SPECS = [
  { label: "Puff Count", value: "5,000-6,000 puffs" },
  { label: "Nicotine", value: "5% (50mg) salt nicotine" },
  { label: "E-Liquid Capacity", value: "~10mL" },
  { label: "Battery", value: "Rechargeable lithium-ion" },
  { label: "Charging", value: "USB-C" },
  { label: "Coil", value: "Mesh coil" },
  { label: "Design", value: "Slim, pocket-size" },
  { label: "Activation", value: "Draw-activated (no button)" },
];

const ALL_HQD_GO_FLAVORS = [
  { name: "Black Ice", profile: "Blackcurrant + intense menthol" },
  { name: "Miami Breeze", profile: "Mango, passion fruit + light cool finish" },
  { name: "Razz Quake", profile: "Fresh raspberry, tart and sweet" },
  { name: "Watermelon Ice", profile: "Juicy watermelon + strong ice blast" },
  { name: "Blue Razz Ice", profile: "Blue raspberry candy + cooling menthol" },
  { name: "Strawberry Ice Cream", profile: "Creamy strawberry, dessert-style" },
  { name: "Peach Mango", profile: "Ripe peach and tropical mango blend" },
  { name: "Lush Ice", profile: "Watermelon + menthol, light and sweet" },
  { name: "Grape Ice", profile: "Concord grape + icy exhale" },
  { name: "Apple Ice", profile: "Green apple, crisp and cool" },
  { name: "Banana Ice", profile: "Ripe banana + menthol finish" },
  { name: "Tobacco", profile: "Classic light tobacco, no sweetness" },
];

type FlavorRating = {
  name: string;
  rating: number;
  intensity: string;
  sweetness: string;
  cool: string;
  verdict: string;
  detail: string;
};

const FLAVOR_REVIEWS: FlavorRating[] = [
  {
    name: "Black Ice",
    rating: 4.8,
    intensity: "Strong",
    sweetness: "Medium",
    cool: "Very High",
    verdict: "Best-in-class for menthol lovers",
    detail:
      "Black Ice is the standout flavor in the HQD GO lineup. The blackcurrant base is rich and authentic without being syrupy. The ice effect is one of the strongest in any disposable we have tested - expect a significant cooling sensation on every exhale. This flavor works particularly well in the HQD GO because the mesh coil delivers the berry notes clearly before the menthol kicks in. Recommended for: former menthol cigarette smokers, vapers who prefer cool flavors, and anyone looking for a go-to all-day vape that does not get boring.",
  },
  {
    name: "Miami Breeze",
    rating: 4.6,
    intensity: "Medium",
    sweetness: "Medium-High",
    cool: "Low-Medium",
    verdict: "Best tropical option in the lineup",
    detail:
      "Miami Breeze succeeds at capturing a genuine tropical fruit profile that is hard to find in disposables at this price point. The mango note is the star - it is ripe and sweet without being artificial. Passion fruit adds a slight tartness that balances the sweetness. The breeze element is subtle, more of a freshness than a full menthol hit. This makes Miami Breeze a good choice for vapers who want something fruity and interesting but find full ice flavors too harsh. Good for warm-weather use or anyone who liked tropical fruit drinks.",
  },
  {
    name: "Razz Quake",
    rating: 4.5,
    intensity: "Medium-Strong",
    sweetness: "Medium",
    cool: "Low",
    verdict: "Top pick for berry fans, no ice needed",
    detail:
      "Razz Quake is one of the few HQD GO flavors without a prominent cooling element, which makes it unique in the lineup. The raspberry flavor is the focus, and it delivers. It reads as natural raspberry rather than candy - there is a slight tartness on the exhale that mimics biting into a fresh berry. For vapers who are tired of everything being icy, Razz Quake is a refreshing change. Pairs well for vapers who like the sweetness of fruit without the menthol. Note that the lack of cooling means it can feel slightly warmer on the throat than the ice variants.",
  },
];

export default function HqdGoFlavorsReviewPage() {
  return (
    <main className="w-11/12 mx-auto pt-8 pb-16 max-w-4xl font-unbounded">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <span>/</span>
        <span>HQD GO Flavors Review 2026</span>
      </nav>

      {/* H1 */}
      <h1 className="font-bold text-2xl md:text-3xl mb-4 leading-snug">
        HQD GO Flavors Review 2026 - Black Ice, Miami Breeze, Razz Quake and More
      </h1>

      <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
        The HQD GO is a popular compact disposable vape available at GetSmoke in over a dozen flavors. This review covers the three most searched HQD GO flavors in detail - Black Ice, Miami Breeze, and Razz Quake - plus a full flavor list, specs, and a comparison with the HQD Cuvie. All flavors were reviewed on the standard HQD GO device using a mesh coil with 5% nicotine salt e-liquid.
      </p>

      {/* Section 1: HQD GO Overview and Specs */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">HQD GO Overview and Specs</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          HQD is one of the most established disposable vape manufacturers, with devices sold in over 60 countries. The HQD GO is their mid-range everyday carry model - larger than the Cuvie but more compact than their ultra-high-puff devices. It is draw-activated, requires no setup, and charges via USB-C.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-4">
          <table className="w-full text-xs md:text-sm">
            <tbody>
              {HQD_GO_SPECS.map((spec, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="p-3 font-semibold text-gray-700 w-1/3">{spec.label}</td>
                  <td className="p-3 text-gray-600">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Shop HQD GO at{" "}
          <Link href="/brand/hqd" className="underline" style={{ color: "#fe3500" }}>
            getsmoke.com/brand/hqd
          </Link>
          . Free shipping on orders over $89.
        </p>
      </section>

      {/* Section 2-4: Flavor Reviews */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-6">HQD GO Flavor Reviews</h2>
        <div className="space-y-8">
          {FLAVOR_REVIEWS.map((flavor, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-gray-100" style={{ background: i === 0 ? "#fff5f3" : i === 1 ? "#f3fff5" : "#f5f3ff" }}>
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-lg">HQD GO {flavor.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xl" style={{ color: "#fe3500" }}>{flavor.rating}</span>
                    <span className="text-gray-400 text-sm">/5</span>
                  </div>
                </div>
                <p className="text-sm font-semibold" style={{ color: "#fe3500" }}>{flavor.verdict}</p>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Intensity</div>
                    <div className="text-xs font-semibold">{flavor.intensity}</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Sweetness</div>
                    <div className="text-xs font-semibold">{flavor.sweetness}</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-xl">
                    <div className="text-xs text-gray-400 mb-1">Cool / Ice</div>
                    <div className="text-xs font-semibold">{flavor.cool}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{flavor.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: All HQD GO Flavors List */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">All HQD GO Flavors List</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          The full HQD GO flavor lineup available at GetSmoke. Stock varies - check current availability at getsmoke.com/brand/hqd.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {ALL_HQD_GO_FLAVORS.map((flavor, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "#fe3500" }}
              />
              <div>
                <span className="font-semibold text-sm">{flavor.name}</span>
                <span className="text-gray-500 text-xs ml-2">{flavor.profile}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: HQD GO vs HQD Cuvie */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">HQD GO vs HQD Cuvie - Which Should You Choose?</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          HQD makes multiple product lines. The two most commonly compared are the HQD GO and the HQD Cuvie. Here is a direct breakdown:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-3 font-semibold">Feature</th>
                <th className="text-left p-3 font-semibold" style={{ color: "#fe3500" }}>HQD GO</th>
                <th className="text-left p-3 font-semibold">HQD Cuvie</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Puff Count", go: "5,000-6,000", cuvie: "300-1,500 (varies by model)" },
                { feature: "Rechargeable", go: "Yes (USB-C)", cuvie: "No (most models)" },
                { feature: "Coil Type", go: "Mesh coil", cuvie: "Traditional coil (older) or mesh (newer)" },
                { feature: "Size", go: "Mid-size, slim", cuvie: "Very compact, pen-style" },
                { feature: "Best For", go: "Everyday carry, regular vapers", cuvie: "Occasional use, social vaping" },
                { feature: "Price Range", go: "Higher (more puffs)", cuvie: "Lower upfront cost" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="p-3 font-medium text-gray-700">{row.feature}</td>
                  <td className="p-3 text-gray-600 font-medium" style={{ color: "#fe3500" }}>{row.go}</td>
                  <td className="p-3 text-gray-500">{row.cuvie}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-2xl">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Bottom line:</strong> Choose the HQD GO if you vape daily and want good flavor with a long-lasting battery. Choose the Cuvie if you want the smallest possible device for occasional or travel use and do not mind replacing it more often.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-10 rounded-2xl p-6 text-white text-center" style={{ background: "#fe3500" }}>
        <h2 className="font-bold text-lg mb-2">Shop HQD GO at GetSmoke</h2>
        <p className="text-sm mb-4 opacity-90">
          Black Ice, Miami Breeze, Razz Quake, and more. Free shipping on orders $89+. Adults 21+ only.
        </p>
        <Link
          href="/brand/hqd"
          className="inline-block bg-white font-bold text-sm px-6 py-3 rounded-full"
          style={{ color: "#fe3500" }}
        >
          Shop HQD Vapes
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-6">Frequently Asked Questions About HQD GO</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((item, i) => (
            <details key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <summary className="p-4 font-semibold text-sm cursor-pointer hover:bg-gray-50 list-none flex justify-between items-center">
                {item.name}
                <span className="text-gray-400 text-lg">+</span>
              </summary>
              <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                {item.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      <p className="text-xs text-gray-400 text-center mt-8">
        This review is for adults 21 and older. HQD GO contains nicotine, which is addictive. Not for sale to minors. Last updated 2026.
      </p>
    </main>
  );
}
