/**
 * Product page — server-prefetches product via internal API for:
 *  1. Real SEO metadata (title/desc from DB, not slug-derived)
 *  2. JSON-LD schema (Product + BreadcrumbList for Google rich snippets)
 *  3. SSR H1 in initial HTML (passed as initialProduct to client component)
 *
 * Uses fetch() → /api/products/[slug] (same endpoint client uses) to avoid
 * direct Prisma in server component which caused silent failures / notFound().
 */
import ProductPage from "@/components/ProductPage/ProductPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Product } from "@/types/product";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = {
  params: Promise<{ productSlug: string }>;
};

// Fetch product from internal API (proven to work — same source as client uses)
async function getProduct(slug: string): Promise<Product | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://getsmoke.com";
    const res = await fetch(`${baseUrl}/api/products/${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return (await res.json()) as Product;
  } catch (err) {
    console.error(`[ProductPage] fetch failed for slug "${slug}":`, err);
    return null;
  }
}

// Build Product JSON-LD schema
function buildProductSchema(product: Product, slug: string) {
  const reviews = (product.Review ?? []) as Array<{ rating: number }>;
  const ratingCount = reviews.length;
  const ratingValue =
    ratingCount > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / ratingCount).toFixed(1)
      : null;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    url: `https://getsmoke.com/product/${slug}`,
    brand: {
      "@type": "Brand",
      name: product.brand?.name ?? "",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.currentPrice.toFixed(2),
      availability:
        product.stockStatus !== "OUTOFSTOCK"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: `https://getsmoke.com/product/${slug}`,
      seller: { "@type": "Organization", name: "GetSmoke" },
    },
  };

  const img = product.images?.[0]?.url;
  if (img) schema.image = [img];

  if (ratingCount > 0 && ratingValue) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount: ratingCount,
      bestRating: "5",
      worstRating: "1",
    };
  }

  return schema;
}

// Build BreadcrumbList JSON-LD schema
function buildBreadcrumbSchema(product: Product, slug: string) {
  const brandSlug = product.brand?.name
    ?.toLowerCase()
    .replace(/\s+/g, "-") ?? "";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://getsmoke.com" },
      { "@type": "ListItem", position: 2, name: "Vapes", item: "https://getsmoke.com/vapes" },
      {
        "@type": "ListItem",
        position: 3,
        name: product.brand?.name ?? "",
        item: `https://getsmoke.com/brands/${brandSlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `https://getsmoke.com/product/${slug}`,
      },
    ],
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productSlug } = await params;
  const canonicalUrl = `https://getsmoke.com/product/${productSlug}`;
  const product = await getProduct(productSlug);

  if (!product) {
    // Fallback: derive name from slug
    const name = productSlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      title: `${name} | GetSmoke`,
      description: `Buy ${name} at GetSmoke. Fast US shipping, 21+ only.`,
      alternates: { canonical: canonicalUrl },
    };
  }

  const price = product.currentPrice.toFixed(2);
  const image = product.images?.[0]?.url;
  const inStock = product.stockStatus !== "OUTOFSTOCK";
  const title = `${product.name} | GetSmoke`;
  const description = `Buy ${product.name} for $${price} at GetSmoke. ${
    inStock ? "In stock" : "Pre-order"
  }, fast US shipping. 21+ only.`;

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${product.name} | GetSmoke`,
      description,
      url: canonicalUrl,
      images: image ? [{ url: image, width: 800, height: 800, alt: product.name }] : [],
      type: "website",
    },
  };
}

const page = async ({ params }: Props) => {
  const { productSlug } = await params;
  const product = await getProduct(productSlug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildProductSchema(product, productSlug)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(product, productSlug)),
        }}
      />
      <ProductPage productSlug={productSlug} initialProduct={product} />
    </>
  );
};

export default page;
