import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vape Shop Tennessee | Buy Disposable Vapes Online | GetSmoke",
  description: "Shop premium disposable vapes online - delivered to Tennessee fast. Top brands: Geek Bar, Lost Mary, Fume, EBCreate. Free shipping on orders $49+. No minimum order.",
  alternates: { canonical: "https://getsmoke.com/vape-shop-tennessee" },
  openGraph: {
    title: "Vape Shop Tennessee | GetSmoke",
    description: "Premium disposable vapes delivered to Tennessee. Free shipping $49+. Shop 500+ flavors from top brands.",
    url: "https://getsmoke.com/vape-shop-tennessee",
    images: [{ url: "https://getsmoke.com/og-default.jpg" }],
  },
};

export const dynamic = "force-static";

const FEATURED_MODELS = [
  {
    name: "Geek Bar Pulse X2",
    puffs: "25,000 puffs",
    slug: "geek-bar-pulse-x2-25000-puffs",
    image: "/model-banners/geek-bar-pulse-x2-hero.jpg",
    price: "from $14.99",
    tag: "Best Seller",
  },
  {
    name: "Lost Mary MO20000",
    puffs: "20,000 puffs",
    slug: "lost-mary-mo20000-puffs",
    image: "/model-banners/lost-mary-mo20000-hero.jpg",
    price: "from $15.99",
    tag: "New",
  },
  {
    name: "EBCreate BC Pro",
    puffs: "40,000 puffs",
    slug: "ebcreate-bc-pro-40000-puffs",
    image: "/model-banners/ebcreate-bc-pro-hero.jpg",
    price: "from $17.99",
    tag: "Top Rated",
  },
  {
    name: "Geek Bar Pulse 2",
    puffs: "25,000 puffs",
    slug: "geek-bar-pulse-2-25000-puffs",
    image: "/model-banners/geek-bar-pulse-2-hero.jpg",
    price: "from $14.99",
    tag: "Popular",
  },
];

const MOQ_TIERS = [
  { qty: "1-9 units", price: "Retail price", note: "No minimum order" },
  { qty: "10-49 units", price: "5% off", note: "Mix brands and flavors" },
  { qty: "50-99 units", price: "10% off", note: "Free priority shipping" },
  { qty: "100+ units", price: "Contact us", note: "Custom pricing available" },
];

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">

      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          Vape Shop Tennessee - Buy Disposable Vapes Online
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl">
          Tennessee&apos;s best online vape store. Shop 500+ disposable vapes from top brands - delivered anywhere in TN in 2-4 business days. No sales tax, free shipping on orders $49+.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/vapes"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Shop All Vapes
          </Link>
          <Link
            href="/vapes?sort=newest"
            className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            New Arrivals
          </Link>
        </div>
      </section>

      {/* Trust badges */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
        {[
          { icon: "🚚", title: "Free Shipping", sub: "Orders $49+" },
          { icon: "⚡", title: "Fast Delivery", sub: "2-4 days to TN" },
          { icon: "✅", title: "500+ Flavors", sub: "Top brands in stock" },
          { icon: "🔒", title: "Age Verified", sub: "21+ only, ID required" },
        ].map((b) => (
          <div key={b.title} className="bg-gray-50 rounded-xl p-4">
            <div className="text-2xl mb-1">{b.icon}</div>
            <div className="font-semibold text-gray-900 text-sm">{b.title}</div>
            <div className="text-gray-500 text-xs">{b.sub}</div>
          </div>
        ))}
      </section>

      {/* Featured Models */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Top Selling Disposable Vapes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURED_MODELS.map((model) => (
            <Link
              key={model.slug}
              href={`/models/${model.slug}`}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <span className="absolute top-2 left-2 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {model.tag}
                </span>
              </div>
              <div className="p-3">
                <div className="font-semibold text-sm text-gray-900 leading-tight mb-1">{model.name}</div>
                <div className="text-xs text-gray-500 mb-1">{model.puffs}</div>
                <div className="text-sm font-bold text-gray-900">{model.price}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/vapes"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Shop All Disposable Vapes →
          </Link>
        </div>
      </section>

      {/* MOQ / Wholesale */}
      <section className="mb-12 bg-gray-900 rounded-2xl p-6 md:p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Wholesale &amp; Bulk Orders - Tennessee</h2>
        <p className="text-gray-400 mb-6">Stock your store or buy in bulk. Mix any brands, models, and flavors. No contracts, no minimums.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {MOQ_TIERS.map((tier) => (
            <div key={tier.qty} className="bg-white/10 rounded-xl p-4 border border-white/20">
              <div className="font-bold text-white mb-1">{tier.qty}</div>
              <div className="text-yellow-400 font-semibold text-lg mb-1">{tier.price}</div>
              <div className="text-gray-400 text-xs">{tier.note}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/vapes"
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Shopping
          </Link>
          <a
            href="mailto:info@getsmoke.com"
            className="inline-block border border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Contact for Bulk Pricing
          </a>
        </div>
      </section>

      {/* SEO Content */}
      <section className="prose prose-gray max-w-none mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Disposable Vapes Delivered Across Tennessee</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          GetSmoke ships premium disposable vapes to every corner of Tennessee - from Memphis and Nashville to Knoxville, Chattanooga, and beyond. As an online vape store, we carry 500+ products from the most trusted brands: Geek Bar, Lost Mary, Fume, EBCreate, HQD, Funky Republic, and more.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Every order ships from our US warehouse with standard 2-4 day delivery to Tennessee. Orders over $49 ship free. No subscription required - order once or anytime you need to restock.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">Why Tennessee Vapers Choose GetSmoke</h3>
        <ul className="space-y-2 text-gray-700 mb-4">
          <li><strong>No sales tax</strong> - we collect only where legally required.</li>
          <li><strong>Age-verified checkout</strong> - compliant with all Tennessee vaping regulations.</li>
          <li><strong>Real product reviews</strong> - shop by ratings and verified purchases.</li>
          <li><strong>Loyalty rewards</strong> - earn points on every order, redeem for discounts.</li>
          <li><strong>Subscription option</strong> - save 10% on repeat orders of your favorites.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">Popular Vape Brands in Tennessee</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Tennessee vapers consistently top our best-seller lists with high-puff devices. The <Link href="/models/geek-bar-pulse-x2-25000-puffs" className="text-blue-600 hover:underline">Geek Bar Pulse X2</Link> (25,000 puffs) and <Link href="/models/ebcreate-bc-pro-40000-puffs" className="text-blue-600 hover:underline">EBCreate BC Pro</Link> (40,000 puffs) are especially popular for their long battery life and wide flavor selection. Fruit and menthol flavors lead sales statewide.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">Tennessee Vaping Laws</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Tennessee law requires purchasers to be 21 or older to buy vaping products. GetSmoke uses a third-party age verification service at checkout to ensure compliance. We ship only to verified adults with a confirmed delivery address in the state.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2 text-gray-900">Ready to order?</h2>
        <p className="text-gray-600 mb-4">Browse 500+ disposable vapes. Free shipping on $49+. Delivered to Tennessee in 2-4 days.</p>
        <Link
          href="/vapes"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
        >
          Shop All Vapes →
        </Link>
      </section>

    </main>
  );
}
