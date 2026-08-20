import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parts of a Vape Explained - Complete Beginner Guide 2026 | GetSmoke",
  description:
    "Learn all the parts of a vape - battery, coil, pod, mouthpiece, airflow sensor, and LED. Plus: what is a Geek Bar, how disposables work, and how to vape without coughing. GetSmoke 2026 guide.",
  alternates: { canonical: "https://getsmoke.com/blog/parts-of-a-vape-explained" },
  keywords: [
    "parts of a vape",
    "how to vape without coughing",
    "what is a geek bar",
    "parts of a disposable vape",
    "how does a vape work",
    "vape for beginners",
  ],
  openGraph: {
    title: "Parts of a Vape Explained - Complete Beginner Guide 2026",
    description:
      "Understand every part of a vape, how disposables work, what a Geek Bar is, and how to vape without coughing. Full beginner guide from GetSmoke.",
    url: "https://getsmoke.com/blog/parts-of-a-vape-explained",
    images: [{ url: "https://getsmoke.com/og-default.jpg", width: 1200, height: 630, alt: "Parts of a Vape Explained" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main parts of a disposable vape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A disposable vape has six main parts: (1) the battery, which powers the device; (2) the coil or atomizer, which heats the e-liquid into vapor; (3) the e-liquid pod or reservoir, which holds the nicotine salt e-liquid; (4) the mouthpiece, which you inhale through; (5) the airflow sensor or air inlet, which detects when you inhale and activates the device; and (6) the LED indicator, which shows battery level and activation status.",
      },
    },
    {
      "@type": "Question",
      name: "How does a disposable vape work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you inhale through the mouthpiece, an airflow sensor detects the change in air pressure and sends power from the battery to the coil. The coil - a small resistive wire or mesh element - heats up rapidly (to around 200-250 degrees Celsius) and vaporizes the e-liquid soaked into the wicking material. The vapor travels through the airflow channel and out through the mouthpiece into your lungs. The whole process happens in under a second.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Geek Bar vape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Geek Bar is a brand of nicotine disposable vape made by Geek Bar (officially Shenzhen iStar Technology Co., Ltd.). The Geek Bar Pulse X is their flagship model with 25,000 puffs, a dual-mode system (regular and pulse mode), a rotating LED display showing battery and e-liquid levels, and USB-C charging. Geek Bar devices are known for strong flavor delivery and long-lasting battery life. They are available at GetSmoke in 40+ flavors.",
      },
    },
    {
      "@type": "Question",
      name: "How do I vape without coughing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To vape without coughing: (1) inhale slowly and gently - do not take hard, fast drags; (2) try a mouth-to-lung (MTL) technique - draw vapor into your mouth first, then inhale to your lungs; (3) choose a lower nicotine strength if 5% feels too harsh - some devices come in 2.5% or 3%; (4) stay hydrated, as vaping can dry out your throat; (5) choose menthol or cool flavors which tend to feel smoother; and (6) let your throat adjust during the first few days if you are new to vaping.",
      },
    },
    {
      "@type": "Question",
      name: "What is a coil in a vape?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The coil is the heating element inside a vape. It is a small piece of resistive wire (or a mesh metal sheet in mesh coil designs) wrapped around a wicking material like cotton. When power from the battery flows through the coil, it heats up and vaporizes the e-liquid absorbed into the wick. Mesh coils cover more surface area than traditional wire coils, which produces more vapor and better flavor - most premium disposables like Geek Bar and RAZ use mesh coils.",
      },
    },
    {
      "@type": "Question",
      name: "What does the LED light on a vape mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The LED on a disposable vape indicates device status. A steady light when you puff means the device is working normally. Rapid flashing (usually 10-15 flashes) typically means the battery is low and needs charging (if rechargeable) or the device is done (if non-rechargeable). Some devices use different LED colors to indicate battery percentage - for example, green for 70-100%, blue for 40-70%, and red for below 40%. Check your device's packaging for the specific LED key.",
      },
    },
    {
      "@type": "Question",
      name: "What is nicotine salt e-liquid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nicotine salt (nic salt) is a form of nicotine that occurs naturally in tobacco leaves. It is chemically different from freebase nicotine used in traditional e-cigarettes. Nicotine salts are smoother at high concentrations (like 5% / 50mg), which makes them ideal for disposable vapes. They deliver nicotine to the bloodstream faster than freebase nicotine, providing quicker satisfaction. Nearly all disposable vapes, including Geek Bar, RAZ, HQD, and Lost Mary, use nicotine salt formulations.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I buy disposable vapes online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Disposable vapes are available online at GetSmoke (getsmoke.com). GetSmoke is a licensed adult nicotine product retailer serving customers 21 and older across the United States. Orders over $89 receive free shipping. Adult signature is required on delivery. GetSmoke carries top brands including Geek Bar, RAZ, HQD, Lost Mary, Elf Bar, Fume, and more.",
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
      name: "Parts of a Vape Explained",
      item: "https://getsmoke.com/blog/parts-of-a-vape-explained",
    },
  ],
};

const VAPE_PARTS = [
  {
    name: "Battery",
    
    description:
      "The battery is the power source of the vape. Disposable vapes use lithium-ion batteries ranging from 400mAh (small devices) to 1000mAh+ (high-puff-count models). Rechargeable disposables include a USB-C port so you can recharge the battery when it dies before the e-liquid runs out.",
  },
  {
    name: "Coil (Atomizer)",
    
    description:
      "The coil is a resistive heating element that converts e-liquid into vapor. Modern disposables use mesh coils, which are flat metal sheets with tiny holes that offer more even heating and better flavor than traditional wire coils. The coil is surrounded by a wicking material (usually cotton) that draws e-liquid from the reservoir.",
  },
  {
    name: "E-Liquid Pod / Reservoir",
    
    description:
      "The e-liquid pod holds the nicotine salt vape juice. In fully disposable vapes, this is sealed at the factory and cannot be refilled. In refillable pod systems (like RAZ DC25000), the pod is a replaceable cartridge. E-liquid capacity ranges from 2mL (small disposables) to 20mL+ (high-capacity models).",
  },
  {
    name: "Mouthpiece",
    
    description:
      "The mouthpiece is the part you place to your lips. It channels the vapor from inside the device into your mouth. Mouthpiece shape affects the draw experience - narrow mouthpieces give a tighter, cigarette-like draw (mouth-to-lung), while wider ones allow more airflow. Most disposables ship with a small silicone cap on the mouthpiece to keep it clean.",
  },
  {
    name: "Airflow Sensor",
    
    description:
      "The airflow sensor detects when you inhale and activates the battery and coil. There are no buttons on most disposables - the sensor does all the work. Some premium devices include an adjustable airflow valve so you can control how tight or loose the draw feels.",
  },
  {
    name: "LED Indicator",
    
    description:
      "The LED light at the base of the device shows device status. It glows during each puff to confirm the device is working. It flashes to signal low battery or empty e-liquid. Some advanced devices like the Geek Bar Pulse X use a full rotating display that shows exact battery percentage and e-liquid level.",
  },
];

const BRANDS_AT_GETSMOKE = [
  { name: "Geek Bar", link: "/brand/geek-bar", note: "Pulse X, Meloso, NeXT - up to 25,000 puffs" },
  { name: "RAZ", link: "/brand/raz", note: "TN9000, DC25000 - refillable options available" },
  { name: "HQD", link: "/brand/hqd", note: "HQD GO, Cuvie, Hbar - wide flavor range" },
  { name: "Lost Mary", link: "/brand/lost-mary", note: "MO20000, MT35000 Turbo - top flavor accuracy" },
  { name: "Elf Bar", link: "/brand/elf-bar", note: "BC5000, TE5000 - compact and popular" },
];

export default function PartsOfAVapePage() {
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
        <span>Parts of a Vape Explained</span>
      </nav>

      {/* H1 */}
      <h1 className="font-bold text-2xl md:text-3xl mb-4 leading-snug">
        Parts of a Vape Explained - Complete Beginner Guide 2026
      </h1>

      {/* Author + Date */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <time dateTime="2026-08-11">Published: 08/11/2026</time>
        <span className="flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          By Angel Rose
        </span>
      </div>

      <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
        If you are new to vaping, understanding how a vape works makes it easier to choose the right device, use it correctly, and avoid common issues like coughing or weak vapor. This guide breaks down every part of a disposable vape, explains how they work together, covers popular brands like Geek Bar, and gives practical tips for beginners.
      </p>

      {/* Section 1: Main Parts */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-6">The 6 Main Parts of a Vape</h2>
        <div className="space-y-5">
          {VAPE_PARTS.map((part, i) => (
            <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-sm mb-1">{part.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{part.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: How Disposables Work */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">How Disposable Vapes Work - Step by Step</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          A disposable vape is a self-contained nicotine delivery device. All the components are factory-assembled and sealed. Here is what happens from the moment you inhale:
        </p>
        <div className="space-y-3">
          {[
            { n: "1", t: "You inhale", d: "Your inhale creates a small drop in air pressure at the airflow inlet at the base of the device." },
            { n: "2", t: "Airflow sensor activates", d: "The sensor detects the pressure change and triggers the battery circuit." },
            { n: "3", t: "Battery powers the coil", d: "The battery sends an electrical current through the coil, heating it from room temperature to 200-250C in milliseconds." },
            { n: "4", t: "E-liquid vaporizes", d: "The hot coil vaporizes the nicotine salt e-liquid soaked into the cotton wick. Vapor forms inside the device body." },
            { n: "5", t: "Vapor travels to mouthpiece", d: "The airflow channel directs vapor upward through the device and out through the mouthpiece." },
            { n: "6", t: "LED confirms activation", d: "The LED indicator lights up to confirm the device activated successfully with each puff." },
          ].map((item) => (
            <div key={item.n} className="flex gap-4 items-start">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                style={{ background: "#fe3500" }}
              >
                {item.n}
              </div>
              <div>
                <span className="font-semibold text-sm">{item.t}: </span>
                <span className="text-gray-600 text-sm">{item.d}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Disposable Types at GetSmoke */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">Types of Disposable Vapes at GetSmoke</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          GetSmoke carries disposable vapes across every major category. Below are the top brands and what makes each one worth knowing about.
        </p>
        <div className="space-y-3">
          {BRANDS_AT_GETSMOKE.map((brand, i) => (
            <div key={i} className="flex items-center gap-3 p-3 border border-gray-100 rounded-xl hover:border-gray-300 transition-colors">
              <Link href={brand.link} className="font-semibold text-sm hover:underline" style={{ color: "#fe3500" }}>
                {brand.name}
              </Link>
              <span className="text-gray-500 text-xs">{brand.note}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-4">
          See all brands at{" "}
          <Link href="/vapes" className="underline" style={{ color: "#fe3500" }}>
            getsmoke.com/vapes
          </Link>
          .
        </p>
      </section>

      {/* Section 4: What Is Geek Bar */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">What Is a Geek Bar?</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          Geek Bar is a brand of nicotine disposable vape. The name refers to the brand, not a place or a type of vape - every Geek Bar product is a nicotine salt disposable vape device. Geek Bar is made by Shenzhen iStar Technology and is one of the best-selling disposable vape brands in the United States and internationally.
        </p>
        <div className="bg-gray-50 rounded-2xl p-5 mb-4">
          <h3 className="font-semibold text-sm mb-3">Popular Geek Bar Models at GetSmoke</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <strong>Geek Bar Pulse X:</strong> Flagship model with 25,000 puffs, rotating LED display, dual-mode (regular and pulse), USB-C charging, mesh coil, 40+ flavors.
            </p>
            <p>
              <strong>Geek Bar Meloso Ultra:</strong> Compact design with 15,000 puffs, simple LED indicator, USB-C charging.
            </p>
            <p>
              <strong>Geek Bar NeXT:</strong> High-capacity device with advanced airflow control and display.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Browse all Geek Bar devices at{" "}
          <Link href="/brand/geek-bar" className="underline" style={{ color: "#fe3500" }}>
            GetSmoke - Geek Bar
          </Link>
          .
        </p>
      </section>

      {/* Section 5: How to Vape Without Coughing */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-4">How to Vape Without Coughing</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          Coughing when vaping is extremely common for beginners, and almost always preventable with the right technique. Here is what causes it and how to fix it:
        </p>

        <div className="mb-5">
          <h3 className="font-semibold text-sm mb-3">Why You Cough When Vaping</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li>Inhaling too hard or too fast - vapor hits the throat at high velocity</li>
            <li>High nicotine concentration causing throat irritation</li>
            <li>Inhaling directly to the lungs (DTL) when the device is designed for mouth-to-lung (MTL)</li>
            <li>Dry throat from dehydration</li>
            <li>Vaping too frequently in a short period, irritating the airways</li>
          </ul>
        </div>

        <div className="mb-5">
          <h3 className="font-semibold text-sm mb-3">Tips to Stop Coughing</h3>
          <div className="space-y-3">
            {[
              { tip: "Use mouth-to-lung technique", detail: "Draw vapor into your mouth first (like sipping through a straw), pause for a moment, then inhale the vapor from your mouth into your lungs. This is how cigarettes work and is the natural technique for most disposable vapes." },
              { tip: "Inhale slowly", detail: "Take gentle, steady 2-3 second draws. Avoid sharp, forceful inhales. Disposable vapes do not need hard pulls - the sensor activates on gentle airflow." },
              { tip: "Try a lower nicotine strength", detail: "If 5% (50mg) feels harsh, look for devices available in 2.5% or 3% nicotine. Some brands offer lower-nic versions of their popular models." },
              { tip: "Choose smooth flavors", detail: "Menthol, mint, and ice flavors tend to soothe the throat. Fruity flavors are also generally smoother than tobacco flavors for beginners." },
              { tip: "Stay hydrated", detail: "Vaping draws moisture from your mouth and throat. Drink water regularly while vaping to prevent dryness and irritation." },
              { tip: "Give it a few days", detail: "If you are transitioning from cigarettes, some initial coughing is normal as your airways adjust. Most people find it significantly better after 3-5 days." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                <span style={{ color: "#fe3500" }} className="font-bold text-sm flex-shrink-0">✓</span>
                <div>
                  <span className="font-semibold text-sm">{item.tip}: </span>
                  <span className="text-gray-600 text-sm">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-10 rounded-2xl p-6 text-white text-center" style={{ background: "#fe3500" }}>
        <h2 className="font-bold text-lg mb-2">Ready to Start Vaping?</h2>
        <p className="text-sm mb-4 opacity-90">
          Shop beginner-friendly disposable vapes at GetSmoke. Free shipping on orders $89+. Adults 21+ only.
        </p>
        <Link
          href="/vapes"
          className="inline-block bg-white font-bold text-sm px-6 py-3 rounded-full"
          style={{ color: "#fe3500" }}
        >
          Shop All Vapes
        </Link>
      </section>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="font-bold text-xl mb-6">Frequently Asked Questions</h2>
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
        This guide is for adults 21 and older. Nicotine products are addictive. Not for sale to minors. Last updated 2026.
      </p>
    </main>
  );
}
