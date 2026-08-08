"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { r2src } from "@/lib/r2-image";

interface Subscription {
  id: string;
  status: string;
  frequency: string;
  price: number;
  quantity: number;
  discountPct: number;
  nextBillingDate: string;
  lastBilledAt?: string;
  product: {
    id: string;
    name: string;
    images: { url: string }[];
  };
}

const FREQ_LABELS: Record<string, string> = {
  "1_week": "Weekly",
  "2_week": "Every 2 weeks",
  "4_week": "Monthly",
};

interface SubscriptionsTabProps {
  email: string;
}

export default function SubscriptionsTab({ email: _email }: SubscriptionsTabProps) {
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/subscriptions")
      .then(r => r.json())
      .then(data => { setSubs(data.subscriptions || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const handleAction = async (id: string, action: "pause" | "resume" | "cancel") => {
    if (action === "cancel" && !confirm("Are you sure you want to cancel this subscription?")) return;
    setActionLoading(id + action);
    try {
      const res = await fetch("/api/subscriptions/manage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscriptionId: id, action }),
      });
      const data = await res.json();
      if (!res.ok) { toast.error(data.error || "Failed"); return; }
      setSubs(prev => prev.map(s => s.id === id ? { ...s, status: data.status } : s));
      const msg = action === "pause" ? "Subscription paused" : action === "resume" ? "Subscription resumed" : "Subscription cancelled";
      toast.success(msg);
    } catch { toast.error("Something went wrong"); }
    finally { setActionLoading(null); }
  };

  if (loading) return <div style={{ color: "#6b7280", fontSize: 14, padding: 32, textAlign: "center" }}>Loading subscriptions...</div>;

  if (subs.length === 0) return (
    <div style={{ textAlign: "center", padding: "48px 16px", color: "#6b7280" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>📦</div>
      <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "#111" }}>No active subscriptions</p>
      <p style={{ fontSize: 13 }}>Subscribe to your favorite products and save up to 10%.</p>
    </div>
  );

  const activeSubs = subs.filter(s => s.status !== "cancelled");
  const cancelledSubs = subs.filter(s => s.status === "cancelled");

  const SubCard = ({ sub }: { sub: Subscription }) => {
    const img = sub.product.images?.[0]?.url;
    const total = (sub.price * sub.quantity).toFixed(2);
    const nextDate = new Date(sub.nextBillingDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const isBusy = (a: string) => actionLoading === sub.id + a;

    return (
      <div style={{ border: "1.5px solid #e5e7eb", borderRadius: 16, padding: 20, marginBottom: 16, background: sub.status === "cancelled" ? "#f9fafb" : "#fff" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            {img && (
              <Image src={r2src(img)} alt={sub.product.name} width={56} height={56} style={{ objectFit: "contain", borderRadius: 10, border: "1px solid #f3f4f6" }} unoptimized />
            )}
            <div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 2 }}>{sub.product.name}</p>
              <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>{FREQ_LABELS[sub.frequency] || sub.frequency} - Qty: {sub.quantity}</p>
              <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>{sub.discountPct}% discount applied</p>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{
              fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 50,
              background: sub.status === "active" ? "#dcfce7" : sub.status === "paused" ? "#fef9c3" : "#fee2e2",
              color: sub.status === "active" ? "#15803d" : sub.status === "paused" ? "#854d0e" : "#dc2626",
            }}>
              {sub.status.toUpperCase()}
            </span>
            <p style={{ margin: "6px 0 0", fontSize: 15, fontWeight: 700, color: "#111" }}>${total}/cycle</p>
          </div>
        </div>

        {/* Next billing */}
        {sub.status !== "cancelled" && (
          <p style={{ margin: "0 0 14px", fontSize: 13, color: "#374151" }}>
            Next charge: <strong>{nextDate}</strong>
          </p>
        )}

        {/* Actions */}
        {sub.status !== "cancelled" && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {sub.status === "active" && (
              <button
                onClick={() => handleAction(sub.id, "pause")}
                disabled={!!actionLoading}
                style={{ background: "#f3f4f6", color: "#374151", border: "none", borderRadius: 50, padding: "8px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer", opacity: isBusy("pause") ? 0.6 : 1 }}
              >
                {isBusy("pause") ? "..." : "Pause"}
              </button>
            )}
            {sub.status === "paused" && (
              <button
                onClick={() => handleAction(sub.id, "resume")}
                disabled={!!actionLoading}
                style={{ background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "8px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer", opacity: isBusy("resume") ? 0.6 : 1 }}
              >
                {isBusy("resume") ? "..." : "Resume"}
              </button>
            )}
            <button
              onClick={() => handleAction(sub.id, "cancel")}
              disabled={!!actionLoading}
              style={{ background: "none", color: "#dc2626", border: "1px solid #dc2626", borderRadius: 50, padding: "8px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer", opacity: isBusy("cancel") ? 0.6 : 1 }}
            >
              {isBusy("cancel") ? "..." : "Cancel"}
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 640 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#111" }}>My Subscriptions</h2>

      {activeSubs.map(sub => <SubCard key={sub.id} sub={sub} />)}

      {cancelledSubs.length > 0 && (
        <>
          <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 24, marginBottom: 12, fontWeight: 600 }}>CANCELLED</p>
          {cancelledSubs.map(sub => <SubCard key={sub.id} sub={sub} />)}
        </>
      )}
    </div>
  );
}
