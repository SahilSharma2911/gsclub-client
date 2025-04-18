import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const productIds = searchParams.getAll("id");
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined;
    const page = searchParams.get("page")
      ? parseInt(searchParams.get("page")!)
      : 1;
    const skip = page && limit ? (page - 1) * limit : undefined;

    // Filter parameters
    const brandId = searchParams.get("brandId");
    const flavorId = searchParams.get("flavorId");
    const puffsId = searchParams.get("puffsId");
    const nicotineId = searchParams.get("nicotineId");
    const search = searchParams.get("search");
    const archived = searchParams.has("archived")
      ? searchParams.get("archived") === "true"
      : false;
    const minPrice = searchParams.get("minPrice");

    const maxPrice = searchParams.get("maxPrice");

    // Build filter object
    const filter: Prisma.ProductWhereInput = {
      isArchived: archived,
    };

    // Filter products by IDs
    if (productIds.length) {
      filter.id = { in: productIds };
    }

    // Add relational filters
    if (brandId) filter.brandId = brandId;
    if (flavorId) filter.flavorId = flavorId;
    if (puffsId) filter.puffsId = puffsId;
    if (nicotineId) filter.nicotineId = nicotineId;

    // Add price range filter
    if (minPrice || maxPrice) {
      filter.currentPrice = {};
      if (minPrice) filter.currentPrice.gte = parseFloat(minPrice);
      if (maxPrice) filter.currentPrice.lte = parseFloat(maxPrice);
    }

    // Add search filter if provided
    if (search) {
      filter.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { eLiquidContent: { contains: search, mode: "insensitive" } },
        { batteryCapacity: { contains: search, mode: "insensitive" } },
        { coil: { contains: search, mode: "insensitive" } },
        { firingMechanism: { contains: search, mode: "insensitive" } },
        { type: { contains: search, mode: "insensitive" } },
      ];
    }

    // Query products with pagination and filters
    const products = await prisma.product.findMany({
      where: filter,
      include: {
        images: true,
        brand: true,
        flavor: true,
        Puffs: true,
        Nicotine: true,
      },
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get total count for pagination
    const totalCount = await prisma.product.count({
      where: filter,
    });

    return NextResponse.json({
      products,
      totalCount,
      page,
      pageSize: limit,
      totalPages: limit ? Math.ceil(totalCount / limit) : 1,
    });
  } catch (error) {
    console.error("[PRODUCTS_GET]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
