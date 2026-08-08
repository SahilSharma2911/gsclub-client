"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface SavedCard {
  vaultId: string;
  lastFour: string;
  cardType: string;
  expiry: string;
}

export default function BillingInformation() {
  const { data: session } = useSession();
  const [savedCard, setSavedCard] = useState<SavedCard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;
    fetch(`/api/billing/card?email=${encodeURIComponent(session.user.email)}`)
      .then(r => r.json())
      .then(data => { setSavedCard(data.card || null); setLoading(false); })
      .catch(() => setLoading(false));
  }, [session?.user?.email]);

  return (
    <div style={{ maxWidth: 600 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24, color: "#111" }}>Billing information</h2>

      {loading ? (
        <div style={{ color: "#6b7280", fontSize: 14 }}>Loading...</div>
      ) : savedCard ? (
        <div style={{ border: "1.5px solid #e5e7eb", borderRadius: 16, padding: 24, marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ margin: 0, fontSize: 13, color: "#6b7280", marginBottom: 4 }}>Saved payment method</p>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#111" }}>
                {savedCard.cardType} ending in {savedCard.lastFour}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: "#6b7280", marginTop: 2 }}>Expires {savedCard.expiry}</p>
            </div>
            <div style={{ fontSize: 32 }}>&#128179;</div>
          </div>
          <button
            onClick={() => toast("To update your card, please contact us at info@getsmoke.com")}
            style={{ marginTop: 16, background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
          >
            Replace card
          </button>
        </div>
      ) : (
        <div style={{ background: "#f9fafb", border: "1.5px dashed #d1d5db", borderRadius: 16, padding: 32, textAlign: "center", marginBottom: 20 }}>
          <p style={{ color: "#6b7280", margin: "0 0 16px", fontSize: 14 }}>No payment method saved</p>
          <button
            onClick={() => toast("To add a card, please go through checkout or contact us at info@getsmoke.com")}
            style={{ background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
          >
            Add payment method
          </button>
        </div>
      )}

      <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 12, padding: "12px 16px" }}>
        <p style={{ margin: 0, fontSize: 12, color: "#92400e" }}>
          For security, card data is stored with our payment processor (NMI), not on GetSmoke servers. We only store the last 4 digits for display purposes.
        </p>
      </div>
    </div>
  );
}
