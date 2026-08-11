import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAZ Vape Complete Guide 2026 - Instructions, Charging and Flavors | GetSmoke",
  description:
    "Complete RAZ vape guide for 2026. Learn how to use a RAZ vape, how to charge it, the best RAZ refillable vape models, top flavors, and step-by-step instructions. Shop at GetSmoke.",
  alternates: { canonical: "https://getsmoke.com/blog/raz-vape-complete-guide-2026" },
  keywords: [
    "raz vape",
    "raz refillable vape",
    "raz vape instructions",
    "how to charge raz vape",
    "raz vape flavors",
    "raz disposable vape",
  ],
  openGraph: {
    title: "RAZ Vape Complete Guide 2026 - Instructions, Charging and Flavors",
    description:
      "Everything you need to know about RAZ vapes in 2026 - models, instructions, charging, and the best flavors available at GetSmoke.",
    url: "https://getsmoke.com/blog/raz-vape-complete-guide-2026",
    images: [{ url: "https://getsmoke.com/og-default.jpg", width: 1200, height: 630, alt: "RAZ Vape Complete Guide 2026" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a RAZ vape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A RAZ vape is a nicotine disposable vape made by the RAZ brand. RAZ offers both fully disposable devices and refillable pod systems under the RAZ name. They are known for high puff counts, smooth nicotine salt delivery, and a wide range of flavors. RAZ devices are popular because they combine large capacity with a compact, portable design.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use a RAZ vape for the first time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To use a RAZ disposable vape for the first time: remove it from the packaging, pull off any silicone cap on the mouthpiece, and inhale gently through the mouthpiece. RAZ disposables are draw-activated - there are no buttons. Take slow, steady puffs of 2-3 seconds each for the best flavor and vapor production.",
      },
    },
    {
      "@type": "Question",
      name: "How do I charge a RAZ vape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most RAZ rechargeable disposable vapes charge via USB-C. To charge your RAZ vape, plug a USB-C cable into the charging port on the bottom of the device and connect it to a standard USB power adapter. The LED indicator will typically light up or change color while charging and turn off or change again when fully charged. Charging usually takes 30-60 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between RAZ disposable and RAZ refillable vape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The RAZ disposable vape comes pre-filled with e-liquid and is designed to be used until the e-liquid or battery runs out. The RAZ refillable vape (such as the RAZ DC25000) uses replaceable pods that you swap out when empty rather than replacing the whole device. The refillable model is more economical over time and creates less waste, while the disposable is more convenient for travel.",
      },
    },
    {
      "@type": "Question",
      name: "How many puffs does a RAZ vape last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAZ vape models vary by capacity. The RAZ TN9000 lasts approximately 9,000 puffs, the RAZ CA6000 offers around 6,000 puffs, and the RAZ DC25000 delivers up to 25,000 puffs using refillable pods. For an average user taking 200-300 puffs per day, a 9,000-puff model lasts roughly 3-4 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my RAZ vape not hitting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common reasons a RAZ vape is not hitting: the battery is dead (charge it via USB-C), the e-liquid is empty (LED may flash), a silicone seal was not removed from the mouthpiece or air inlet, or the airflow is blocked. For refillable RAZ models, check that the pod is properly seated. If the device still does not work after charging, contact the retailer where you purchased it.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best RAZ vape flavors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top-rated RAZ vape flavors include Watermelon Ice, Blue Razz Ice, Strawberry Mango, Clear (unflavored), Peach Ice, and Tropical Punch. GetSmoke carries a curated selection of RAZ flavors with new arrivals updated regularly. Visit getsmoke.com/brand/raz to see current stock.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy RAZ vapes online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RAZ vapes are available online at GetSmoke (getsmoke.com). GetSmoke is a licensed online vape retailer serving adults 21 and older. Orders over $89 qualify for free shipping. Adult signature is required on delivery. Browse all RAZ models at getsmoke.com/brand/raz.",
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
    { "@type": "ListItem", position: 3, name: "RAZ Vape Complete Guide 2026", item: "https://getsmoke.com/blog/raz-vape-complete-guide-2026" },
  ],
};

const RAZ_MODELS = [
  { name: "RAZ TN9000", puffs: "9,000", nicotine: "5% (50mg)", battery: "650mAh rechargeable", capacity: "12mL", charging: "USB-C", type: "Disposable" },
  { name: "RAZ CA6000", puffs: "6,000", nicotine: "5% (50mg)", battery: "550mAh rechargeable", capacity: "10mL", charging: "USB-C", type: "Disposable" },
  { name: "RAZ DC25000", puffs: "Up to 25,000", nicotine: "5% (50mg)", battery: "1000mAh rechargeable", capacity: "Refillable pods", charging: "USB-C", type: "Refillable pod system" },
];

const RAZ_FLAVORS = [
  "Watermelon Ice",
  "Blue Razz Ice",
  "Strawberry Mango",
  "Peach Ice",
  "Tropical Punch",
  "Clear (Unflavored)",
  "Lemon Mint",
  "Grape Ice",
  "Black Ice",
  "Berry Blast",
];

export default function RazVapeGuidePage() {
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
        <span>RAZ Vape Guide 2026</span>
      </nav>

      {/* H1 */}
      <h1 className="font-bold text-2xl md:text-3xl mb-4 leading-snug">
        RAZ Vape Complete Guide 2026 - Instructions, Charging and Flavors
      </h1>

      <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
        RAZ vapes have become one of the most searched disposable vape brands in the US. Whether you just picked up your first RAZ device or you are comparing models before buying, this guide covers everything: what RAZ vapes are, how to use them, how to charge them, which models are available, and where to buy them. All information is current for 2026.
      </p>

      {/* Section 1: What is a RAZ Vape */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-3">What Is a RAZ Vape?</h2>
        <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
          RAZ is a nicotine vape brand that produces disposable and refillable pod devices. RAZ vapes deliver nicotine via salt nicotine e-liquid (typically 5% / 50mg), which provides a smooth throat hit similar to a cigarette. RAZ is manufactured under strict quality controls and is one of the most popular disposable vape brands available at online retailers like GetSmoke.
        </p>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          RAZ devices come in two main categories: fully disposable vapes (pre-filled, use once and dispose) and refillable pod systems (reusable device body with swappable pods). Both categories use the same salt nicotine formulations and are available in the same flavor profiles.
        </p>
      </section>

      {/* Section 2: RAZ Models Overview */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">RAZ Models Overview (2026)</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          The table below shows the main RAZ vape models currently available at GetSmoke.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-xs md:text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left p-3 font-semibold">Model</th>
                <th className="text-left p-3 font-semibold">Type</th>
                <th className="text-left p-3 font-semibold">Puffs</th>
                <th className="text-left p-3 font-semibold">Battery</th>
                <th className="text-left p-3 font-semibold">Charging</th>
              </tr>
            </thead>
            <tbody>
              {RAZ_MODELS.map((m, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="p-3 font-medium">{m.name}</td>
                  <td className="p-3 text-gray-500">{m.type}</td>
                  <td className="p-3 text-gray-600">{m.puffs}</td>
                  <td className="p-3 text-gray-600">{m.battery}</td>
                  <td className="p-3 text-gray-600">{m.charging}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          Browse all RAZ models at{" "}
          <Link href="/brand/raz" className="underline hover:text-gray-600">
            GetSmoke - RAZ vapes
          </Link>
          .
        </p>
      </section>

      {/* Section 3: How to Use RAZ Vape - Step by Step */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">RAZ Vape Instructions - Step by Step</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          RAZ disposables are designed for simplicity. No buttons, no settings, no refilling for the disposable models. Follow these steps for the best experience.
        </p>
        <ol className="space-y-4">
          {[
            { step: "1", title: "Remove from packaging", desc: "Unbox your RAZ vape and remove any plastic wrap or stickers. Check the bottom for a silicone port cover over the USB-C port - leave it in place until you need to charge." },
            { step: "2", title: "Check the mouthpiece", desc: "Some RAZ models ship with a small silicone cap on the mouthpiece. Remove it before vaping. Leaving it on will block airflow." },
            { step: "3", title: "Inhale gently", desc: "RAZ disposables are draw-activated - just place the mouthpiece to your lips and inhale slowly. No button to press. Take a 2-3 second draw for the best flavor and vapor production." },
            { step: "4", title: "Monitor the LED indicator", desc: "The LED near the bottom of the device lights up with each puff. If it flashes rapidly (usually 10-15 times), the battery is low and you need to charge. If it flashes a different pattern, the e-liquid may be empty." },
            { step: "5", title: "Charge when needed (rechargeable models)", desc: "RAZ TN9000 and DC25000 models are rechargeable. Plug in via USB-C when the LED flashes low. See the charging section below for full details." },
            { step: "6", title: "For RAZ refillable pod models", desc: "Snap a pre-filled pod into the device body. The RAZ DC25000 accepts RAZ-brand pods. When a pod is empty, simply pull it out and snap in a fresh pod - no need to replace the whole device." },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                style={{ background: "#fe3500" }}
              >
                {item.step}
              </div>
              <div>
                <div className="font-semibold text-sm mb-1">{item.title}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{item.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 4: How to Charge RAZ Vape */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">How to Charge a RAZ Vape</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          RAZ rechargeable disposable vapes (TN9000, DC25000, and other rechargeable models) charge via USB-C. Here is the full charging process:
        </p>
        <div className="bg-gray-50 rounded-2xl p-5 mb-4 space-y-3">
          <div className="flex gap-3 items-start">
            <span className="text-lg">1.</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Locate the USB-C port</strong> on the bottom of the device. Remove the silicone port cover if present.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg">2.</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Connect a USB-C cable</strong> from the device to a wall adapter, laptop, or power bank. Standard 5V USB output is sufficient - no fast charging adapter required.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg">3.</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Watch the LED indicator</strong>. On most RAZ models, the LED will pulse or stay lit while charging. When charging is complete, the LED changes or turns off.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg">4.</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Charging time</strong>: Expect 30-60 minutes for a full charge depending on the model. The RAZ TN9000 typically charges in about 45 minutes.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-lg">5.</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Do not over-charge</strong>. Disconnect the device once charging is complete. Leaving disposables plugged in overnight is not recommended.
            </p>
          </div>
        </div>
        <div className="border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50 rounded-r-xl">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Not all RAZ disposables are rechargeable. The RAZ CA6000 (older version) may come as a non-rechargeable single-use device. Check the packaging or product listing for the USB-C port before attempting to charge.
          </p>
        </div>
      </section>

      {/* Section 5: Top RAZ Flavors at GetSmoke */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">Top RAZ Vape Flavors at GetSmoke</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          GetSmoke stocks a rotating selection of RAZ vape flavors. Below are the most popular options based on customer orders. All flavors use salt nicotine at 5% strength.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {RAZ_FLAVORS.map((flavor, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 text-sm text-center font-medium text-gray-700 border border-gray-100">
              {flavor}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          See the full list of in-stock RAZ flavors at{" "}
          <Link href="/brand/raz" className="underline" style={{ color: "#fe3500" }}>
            getsmoke.com/brand/raz
          </Link>
          . New flavors are added regularly.
        </p>
      </section>

      {/* CTA */}
      <section className="mb-10 rounded-2xl p-6 text-white text-center" style={{ background: "#fe3500" }}>
        <h2 className="font-bold text-lg mb-2">Shop RAZ Vapes at GetSmoke</h2>
        <p className="text-sm mb-4 opacity-90">
          Free shipping on orders $89+. Adults 21+ only. Adult signature required on delivery.
        </p>
        <Link
          href="/brand/raz"
          className="inline-block bg-white font-bold text-sm px-6 py-3 rounded-full"
          style={{ color: "#fe3500" }}
        >
          Browse RAZ Vapes
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-6">Frequently Asked Questions About RAZ Vapes</h2>
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

      {/* Footer note */}
      <p className="text-xs text-gray-400 text-center mt-8">
        This guide is for adults 21 and older. RAZ vapes contain nicotine, which is addictive. Not for sale to minors.
        Last updated 2026.
      </p>
    </main>
  );
}
