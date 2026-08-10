/**
 * Shared product fetch — used by BOTH server component AND API route.
 * Direct Prisma query — avoids HTTP round-trip through Cloudflare
 * (which blocked server component fetches from Vercel Singapore IPs via CF SG block rule).
 */
import { prisma } from "@/lib/prisma";
import { Product } from "@/types/product";

export async function getProductFromDB(slug: string): Promise<Product | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: {
        Review: true,
        images: { orderBy: { position: "asc" } },
        brand: true,
        flavor: true,
        Nicotine: true,
        productPuffs: {
          include: { puffs: true },
          orderBy: { createdAt: "asc" },
        },
        productFlavors: { include: { flavor: true } },
        ProductContentSection: true,
      },
    });

    if (!product || !product.slug) return null;

    const transformed: Product = {
      ...product,
      slug: product.slug,
      packCount: product.packCount ?? 1,
      puffs: product.productPuffs.map((pp) => ({
        ...pp.puffs,
        description: pp.puffDesc,
      })),
    };

    return transformed;
  } catch (err) {
    console.error(`[getProductFromDB] failed for slug "${slug}":`, err);
    return null;
  }
}
