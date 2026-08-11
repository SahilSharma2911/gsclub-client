import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vape Shop Virginia | Buy Disposable Vapes Online | GetSmoke",
  description:
    "Buy disposable vapes online - delivered to Richmond, Virginia Beach, Norfolk, Arlington, Chesapeake and all Virginia. Free shipping on orders $89+. Top brands: Geek Bar, Lost Mary, RAZ, Fume.",
  alternates: { canonical: "https://getsmoke.com/vape-shop-virginia" },
  openGraph: {
    title: "Vape Shop Virginia | GetSmoke",
    description:
      "Buy disposable vapes online - delivered to Richmond, Virginia Beach, Norfolk and all Virginia. Free shipping $89+.",
    url: "https://getsmoke.com/vape-shop-virginia",
    images: [{ url: "https://getsmoke.com/og-default.jpg" }],
  },
  keywords:
    "vape shop Virginia, vape shop Richmond VA, vape shop Virginia Beach, vape shop Norfolk, buy disposable vapes Virginia, online vape store Virginia, Geek Bar Virginia, Lost Mary Virginia",
};

export const dynamic = "force-static";

const PRODUCTS = [
  {
    slug: "geek-bar-pulse-x2-50000-puffs",
    name: "Geek Bar Pulse X2",
    image: "/model-banners/geek-bar-pulse-x2-hero.jpg",
    price: "from $14.99",
    tag: "Best Seller",
  },
  {
    slug: "lost-mary-mo20000-20000-puffs",
    name: "Lost Mary MO20000",
    image: "/model-banners/lost-mary-mo20000-hero.jpg",
    price: "from $13.99",
    tag: "Top Rated",
  },
  {
    slug: "ebcreate-bc-pro-40000-puffs",
    name: "EBCreate BC Pro",
    image: "/model-banners/ebcreate-bc-pro-hero.jpg",
    price: "from $15.99",
    tag: "New",
  },
  {
    slug: "geek-bar-pulse-2-25000-puffs",
    name: "Geek Bar Pulse 2",
    image: "/model-banners/geek-bar-pulse-2-hero.jpg",
    price: "from $14.99",
    tag: "Popular",
  },
];

const CITIES = [
  {
    name: "Richmond, VA",
    slug: "richmond",
    desc:
      "Richmond vapers can order the latest disposable vapes online and receive fast delivery in 2-4 business days. No need to drive across town - shop Geek Bar, Lost Mary, RAZ, HQD and 30+ brands from home and get them delivered straight to your door. Free shipping on orders $89+.",
  },
  {
    name: "Virginia Beach, VA",
    slug: "virginia-beach",
    desc:
      "Virginia Beach is one of the most popular destinations in Virginia, and GetSmoke makes it easy to keep your favorite vapes stocked. Order online and receive delivery anywhere in Virginia Beach. We carry 700+ disposable vape products from all the top brands with no minimum order required.",
  },
  {
    name: "Norfolk, VA",
    slug: "norfolk",
    desc:
      "Norfolk residents can enjoy fast online vape delivery without the hassle of finding a local shop. GetSmoke ships to all Norfolk zip codes including 23501, 23502, 23503, 23504, 23505 and more. Browse our full selection of disposable vapes and enjoy free shipping when your order exceeds $89.",
  },
  {
    name: "Arlington, VA",
    slug: "arlington",
    desc:
      "Arlington is one of the most connected areas in Virginia, right next to Washington DC. GetSmoke delivers premium disposable vapes to Arlington fast. Whether you are near Crystal City, Ballston, or Rosslyn - your order arrives in 2-4 days with tracking provided.",
  },
  {
    name: "Chesapeake, VA",
    slug: "chesapeake",
    desc:
      "GetSmoke delivers disposable vapes to Chesapeake with the same speed and reliability as to any major Virginia city. Shop our full catalog of 700+ products online and get free shipping when you spend $89 or more.",
  },
  {
    name: "Alexandria, VA",
    slug: "alexandria",
    desc:
      "Alexandria shoppers can browse our full lineup of Geek Bar, Lost Mary, Fume, and RAZ disposable vapes online and get fast delivery to any Alexandria address. No membership needed. Adults 21+ only.",
  },
];

const FAQ = [
  {
    q: "Do you deliver disposable vapes to Virginia?",
    a: "Yes. We ship to all Virginia addresses including Richmond, Virginia Beach, Norfolk, Arlington, Chesapeake, Alexandria, Newport News, Hampton, Roanoke, and all rural areas. Standard delivery takes 2-4 business days.",
  },
  {
    q: "Can I order vapes online in Richmond, VA?",
    a: "Yes. GetSmoke ships disposable vapes to all Richmond, VA addresses. Simply place your order online, choose your preferred shipping method, and receive your vapes in 2-4 business days. Age verification is required at checkout.",
  },
  {
    q: "What is the minimum order for Virginia delivery?",
    a: "There is no minimum order. You can order a single disposable vape and we will ship it to you anywhere in Virginia. Free shipping applies automatically on orders over $89.",
  },
  {
    q: "Are disposable vapes legal in Virginia?",
    a: "Yes. Disposable nicotine vapes are legal for adults 21+ in Virginia. All products comply with federal PACT Act regulations and Virginia state law. We verify age at checkout.",
  },
  {
    q: "How long does shipping to Virginia Beach or Norfolk take?",
    a: "Standard shipping to all Virginia cities including Virginia Beach, Norfolk, and Hampton Roads takes 2-4 business days. Priority and express shipping options are available at checkout.",
  },
  {
    q: "What brands do you carry for Virginia customers?",
    a: "We carry all major brands including Geek Bar, Lost Mary, RAZ, HQD, Fume, EBCreate, Oxbar, Viho, Juice Head, and 30+ more. New models are added weekly.",
  },
  {
    q: "Do you ship to Northern Virginia and the DC area?",
    a: "Yes. We ship to all Northern Virginia cities including Arlington, Alexandria, Fairfax, Reston, Sterling, Leesburg, Manassas, and all other NOVA zip codes.",
  },
  {
    q: "Is online vape delivery cheaper than a local shop in Virginia?",
    a: "In most cases, yes. Shopping online at GetSmoke gives you access to lower prices, a much wider selection, and free shipping over $89 - advantages that local brick-and-mortar shops cannot match.",
  },
];

export default function VapeShopVirginiaPage() {
  return (
    <main className="font-unbounded bg-white text-black">
      {/* Hero */}
      <section className="bg-black text-white py-14 px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Vape Shop Virginia
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-2">
          Buy disposable vapes online - delivered to Richmond, Virginia Beach, Norfolk, Arlington and all of Virginia.
        </p>
        <p className="text-gray-400 text-xs md:text-sm max-w-xl mx-auto mb-6">
          Free shipping on orders $89+. 700+ products. No minimum order. Adults 21+ only.
        </p>
        <Link
          href="/vapes"
          className="inline-block bg-[#fe3500] text-white px-8 py-3 rounded-full font-bold hover:bg-red-600 transition"
        >
          Shop All Vapes
        </Link>
      </section>

      {/* Trust badges */}
      <section className="border-b border-gray-100 py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs md:text-sm">
          {[
            { icon: "", text: "Free shipping $89+" },
            { icon: "✅", text: "Adults 21+ only" },
            { icon: "", text: "2-4 day delivery" },
            { icon: "", text: "Secure checkout" },
          ].map((b) => (
            <div key={b.text} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-gray-600">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Top products */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">
          Top Disposable Vapes Delivered to Virginia
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PRODUCTS.map((p) => (
            <Link
              key={p.slug}
              href={`/models/${p.slug}`}
              className="border border-gray-200 rounded-xl p-3 hover:shadow-md transition flex flex-col"
            >
              <div className="relative w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-2"
                />
                <span className="absolute top-2 left-2 bg-[#fe3500] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {p.tag}
                </span>
              </div>
              <p className="font-bold text-sm">{p.name}</p>
              <p className="text-[#fe3500] text-sm mt-1">{p.price}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/vapes"
            className="inline-block border-2 border-black text-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition"
          >
            View All 700+ Products
          </Link>
        </div>
      </section>

      {/* About Virginia */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">
            Online Vape Shop Delivering Across Virginia
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            GetSmoke is a US-based online vape store that ships premium disposable vapes to every corner of Virginia. From the busy streets of Richmond and the beaches of Virginia Beach to the suburbs of Northern Virginia and the rural communities of Southwest Virginia - we deliver anywhere in the state.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We carry the latest models from all the top brands including Geek Bar, Lost Mary, RAZ, HQD, Fume, EBCreate, Oxbar, and 30+ more. Our catalog is updated weekly so Virginia vapers always have access to the newest releases before local shops get them.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Shopping online with GetSmoke gives you a significant price advantage over local vape shops. We source directly and pass the savings to you. Free shipping on all orders $89 and above - no subscription, no membership, no hidden fees.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            All products contain nicotine, an addictive chemical. For use by adults 21 and over only. Age verification is required at checkout.
          </p>
        </div>
      </section>

      {/* City sections */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-8 text-center">
          Vape Delivery to Virginia Cities
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CITIES.map((city) => (
            <div
              key={city.slug}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-bold text-base mb-2">{city.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {city.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why GetSmoke */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6">
            Why Virginia Vapers Buy Online Instead of Local
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Better prices",
                body: "Online vape stores like GetSmoke can offer lower prices than local shops because we have no retail overhead. The savings go directly to you.",
              },
              {
                title: "Wider selection",
                body: "Local vape shops in Virginia typically carry 50-200 products. GetSmoke carries 700+ products including the newest models that local shops may not stock yet.",
              },
              {
                title: "New models first",
                body: "We add new disposable vape models weekly. Virginia vapers get access to the latest Geek Bar, Lost Mary, and RAZ releases as soon as they are available.",
              },
              {
                title: "Delivered to your door",
                body: "No need to drive to a vape shop. Order from your phone or computer and receive your vapes in 2-4 business days anywhere in Virginia.",
              },
              {
                title: "Free shipping over $89",
                body: "Orders over $89 ship free to any Virginia address. No subscription required. One-time orders welcome.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-[#fe3500] font-bold mt-0.5">✓</span>
                <div>
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular brands in Virginia */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-4 text-center">
          Popular Vape Brands Available in Virginia
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed text-center max-w-2xl mx-auto mb-8">
          Virginia vapers can shop all major brands online at GetSmoke. Browse by brand and find the exact flavor and model you are looking for.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { name: "Geek Bar", slug: "geek-bar" },
            { name: "Lost Mary", slug: "lost-mary" },
            { name: "RAZ", slug: "raz" },
            { name: "HQD", slug: "hqd" },
            { name: "Fume", slug: "fume" },
            { name: "EBCreate", slug: "ebcreate" },
            { name: "Oxbar", slug: "oxbar" },
            { name: "Viho", slug: "viho" },
            { name: "Juice Head", slug: "juice-head" },
            { name: "Elf Bar", slug: "elf-bar" },
          ].map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="border border-gray-300 rounded-full px-5 py-2 text-sm font-bold hover:bg-black hover:text-white hover:border-black transition"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold mb-6 text-center">
          Frequently Asked Questions - Vape Shop Virginia
        </h2>
        <div className="space-y-4">
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="border border-gray-200 rounded-xl p-5"
            >
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
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-10 px-4 text-center">
        <p className="font-bold text-lg mb-2">
          Ready to order? We deliver to all of Virginia.
        </p>
        <p className="text-gray-400 text-sm mb-6">
          Free shipping on orders $89+. Richmond, Virginia Beach, Norfolk, Arlington and everywhere in between.
        </p>
        <Link
          href="/vapes"
          className="inline-block bg-[#fe3500] text-white px-10 py-3 rounded-full font-bold hover:bg-red-600 transition"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}
