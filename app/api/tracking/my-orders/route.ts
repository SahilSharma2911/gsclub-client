import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY || "";

async function getShippoTracking(carrier: string, trackingNumber: string) {
  try {
    // Map carrier name to Shippo carrier token
    const carrierMap: Record<string, string> = {
      "USPS": "usps",
      "UPS": "ups",
      "FedEx": "fedex",
      "DHL": "dhl_express",
      "FEDEX": "fedex",
    };
    const carrierToken = carrierMap[carrier] || carrier.toLowerCase();

    const res = await fetch(
      `https://api.goshippo.com/tracks/${carrierToken}/${trackingNumber}`,
      {
        headers: { Authorization: `ShippoToken ${SHIPPO_API_KEY}` },
        next: { revalidate: 300 }, // cache 5 min
      }
    );

    if (!res.ok) return null;
    const data = await res.json();

    const events = (data.tracking_history || []).map((ev: {
      status: string;
      status_details: string;
      status_date: string;
      location?: { city?: string; state?: string; country?: string };
    }) => ({
      status: ev.status,
      statusDetails: ev.status_details || ev.status,
      statusDate: ev.status_date,
      location: [ev.location?.city, ev.location?.state, ev.location?.country].filter(Boolean).join(", "),
    }));

    return {
      status: data.tracking_status?.status || "UNKNOWN",
      eta: data.eta || null,
      events,
      lastUpdated: data.tracking_status?.status_date || null,
    };
  } catch {
    return null;
  }
}

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ shipments: [] });

  // Get user's orders that have shipments with tracking numbers
  const orders = await prisma.order.findMany({
    where: { userEmail: user.email, isPaid: true },
    include: { Shipment: true },
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  const tracked = orders.filter(o => o.Shipment?.trackingNumber);

  const shipments = await Promise.all(
    tracked.map(async (order) => {
      const s = order.Shipment!;
      let trackingData = null;

      if (s.trackingNumber) {
        trackingData = await getShippoTracking(s.carrier, s.trackingNumber);
      }

      return {
        orderId: order.id,
        orderNumber: order.orderNumber,
        trackingNumber: s.trackingNumber || "",
        carrier: s.carrier,
        trackingUrl: s.trackingUrl || null,
        status: trackingData?.status || s.status.toUpperCase(),
        eta: trackingData?.eta || null,
        events: trackingData?.events || [],
        lastUpdated: trackingData?.lastUpdated || null,
      };
    })
  );

  return NextResponse.json({ shipments });
}
