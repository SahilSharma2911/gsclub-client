"use client";
import React, { useEffect, useState } from "react";

interface TrackingEvent {
  status: string;
  statusDetails: string;
  statusDate: string;
  location: string;
}

interface TrackingInfo {
  orderId: string;
  orderNumber: string | number | null;
  trackingNumber: string;
  carrier: string;
  trackingUrl: string | null;
  status: string;
  eta: string | null;
  events: TrackingEvent[];
  lastUpdated: string | null;
}

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  DELIVERED: { bg: "#dcfce7", color: "#15803d" },
  IN_TRANSIT: { bg: "#dbeafe", color: "#1d4ed8" },
  OUT_FOR_DELIVERY: { bg: "#fef9c3", color: "#854d0e" },
  FAILURE: { bg: "#fee2e2", color: "#dc2626" },
  RETURNED: { bg: "#fee2e2", color: "#dc2626" },
  UNKNOWN: { bg: "#f3f4f6", color: "#6b7280" },
};

function StatusBadge({ status }: { status: string }) {
  const style = STATUS_COLORS[status] || STATUS_COLORS.UNKNOWN;
  return (
    <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50, background: style.bg, color: style.color }}>
      {status.replace(/_/g, " ")}
    </span>
  );
}

export default function TrackOrderTab() {
  const [shipments, setShipments] = useState<TrackingInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/tracking/my-orders")
      .then(r => r.json())
      .then(data => { setShipments(data.shipments || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ color: "#6b7280", fontSize: 14, padding: 32, textAlign: "center" }}>Loading tracking info...</div>;

  if (shipments.length === 0) return (
    <div style={{ textAlign: "center", padding: "48px 16px", color: "#6b7280" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>&#128230;</div>
      <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "#111" }}>No tracked shipments</p>
      <p style={{ fontSize: 13 }}>Once your order ships, tracking details will appear here.</p>
    </div>
  );

  return (
    <div style={{ maxWidth: 680 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#111" }}>Track Your Orders</h2>
      {shipments.map(s => (
        <div key={s.orderId} style={{ border: "1.5px solid #e5e7eb", borderRadius: 16, padding: 20, marginBottom: 16, background: "#fff" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
            <div>
              <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#111" }}>
                Order #{s.orderNumber ?? s.orderId.slice(-8).toUpperCase()}
              </p>
              <p style={{ margin: "2px 0 0", fontSize: 12, color: "#6b7280" }}>
                {s.carrier} - {s.trackingNumber}
              </p>
            </div>
            <StatusBadge status={s.status} />
          </div>

          {/* ETA */}
          {s.eta && (
            <p style={{ margin: "0 0 10px", fontSize: 13, color: "#374151" }}>
              Estimated delivery: <strong>{new Date(s.eta).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</strong>
            </p>
          )}

          {/* Last update */}
          {s.events.length > 0 && (
            <p style={{ margin: "0 0 12px", fontSize: 12, color: "#6b7280" }}>
              Last update: {s.events[0].statusDetails} - {s.events[0].location}
            </p>
          )}

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {s.trackingUrl && (
              <a href={s.trackingUrl} target="_blank" rel="noopener noreferrer"
                style={{ background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", textDecoration: "none", borderRadius: 50, padding: "8px 18px", fontSize: 12, fontWeight: 700 }}>
                Track on carrier site
              </a>
            )}
            {s.events.length > 1 && (
              <button onClick={() => setExpandedId(expandedId === s.orderId ? null : s.orderId)}
                style={{ background: "#f3f4f6", color: "#374151", border: "none", borderRadius: 50, padding: "8px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                {expandedId === s.orderId ? "Hide history" : `View ${s.events.length} events`}
              </button>
            )}
          </div>

          {/* Events timeline */}
          {expandedId === s.orderId && s.events.length > 0 && (
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #f3f4f6" }}>
              {s.events.map((ev, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: i === 0 ? "#FF6B00" : "#d1d5db", flexShrink: 0, marginTop: 3 }} />
                    {i < s.events.length - 1 && <div style={{ width: 2, flex: 1, background: "#e5e7eb", marginTop: 2 }} />}
                  </div>
                  <div style={{ paddingBottom: 8 }}>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: "#111" }}>{ev.statusDetails}</p>
                    <p style={{ margin: "2px 0 0", fontSize: 11, color: "#9ca3af" }}>
                      {ev.location && `${ev.location} - `}{new Date(ev.statusDate).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
