"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface SavedCard {
  vaultId: string;
  lastFour: string;
  cardType: string;
}


export default function BillingInformation() {
  const { data: session } = useSession();
  const [savedCard, setSavedCard] = useState<SavedCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [fieldsReady, setFieldsReady] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const collectJsConfigured = useRef(false);

  useEffect(() => {
    if (!session?.user?.email) return;
    fetch(`/api/billing/card?email=${encodeURIComponent(session.user.email)}`)
      .then(r => r.json())
      .then(data => { setSavedCard(data.card || null); setLoading(false); })
      .catch(() => setLoading(false));
  }, [session?.user?.email]);

  const handleToken = useCallback(async (token: string) => {
    setProcessing(true);
    try {
      const res = await fetch("/api/billing/add-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (data.success) {
        setSavedCard({ vaultId: "", lastFour: data.lastFour, cardType: data.cardType });
        setShowForm(false);
        collectJsConfigured.current = false;
        toast.success("Card saved successfully!");
      } else {
        toast.error(data.error || "Failed to save card. Please try again.");
      }
    } catch {
      toast.error("Connection error. Please try again.");
    }
    setProcessing(false);
  }, []);

  const configureCollectJS = useCallback(() => {
    const cjs = (window as { CollectJS?: { configure: (opts: Record<string, unknown>) => void } }).CollectJS;
    if (!cjs) return;
    cjs.configure({
      paymentSelector: "#addCardBtn",
      variant: "inline",
      fields: {
        ccnumber: { selector: "#addcc-number", title: "Card Number", placeholder: "0000 0000 0000 0000" },
        ccexp:    { selector: "#addcc-exp",    title: "Expiration Date", placeholder: "MM / YY" },
        cvv:      { selector: "#addcc-cvv",    title: "CVV", placeholder: "***" },
      },
      customCss: {
        "border-radius": "10px",
        "padding": "12px 14px",
        "font-size": "14px",
        "border": "1.5px solid #e5e7eb",
        "background": "#fafafa",
      },
      fieldsAvailableCallback: () => setFieldsReady(true),
      validationCallback: () => {},
      callback: (response: { token: string }) => handleToken(response.token),
    });
  }, [handleToken]);

  // Load CollectJS script when form opens
  useEffect(() => {
    if (!showForm) return;
    const tokenKey = process.env.NEXT_PUBLIC_NMI_TOKEN_KEY || "Jz9ut2-e7jg2M-6JsJ4d-NRAUrJ";
    if (document.getElementById("collectjs-script")) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "collectjs-script";
    script.src = `https://secure.nmi.com/token/Collect.js`;
    script.setAttribute("data-tokenization-key", tokenKey);
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, [showForm]);

  useEffect(() => {
    if (scriptLoaded && showForm && (window as { CollectJS?: unknown }).CollectJS && !collectJsConfigured.current) {
      configureCollectJS();
      collectJsConfigured.current = true;
    }
  }, [scriptLoaded, showForm, configureCollectJS]);

  const fieldStyle: React.CSSProperties = {
    height: 48,
    border: "1.5px solid #e5e7eb",
    borderRadius: 10,
    background: "#fafafa",
    marginBottom: 12,
  };

  return (
    <div style={{ maxWidth: 500 }}>
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
            </div>
            <div style={{ fontSize: 32 }}>&#128179;</div>
          </div>
          {!showForm && (
            <button
              onClick={() => { setShowForm(true); setFieldsReady(false); collectJsConfigured.current = false; }}
              style={{ marginTop: 16, background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
            >
              Replace card
            </button>
          )}
        </div>
      ) : !showForm ? (
        <div style={{ background: "#f9fafb", border: "1.5px dashed #d1d5db", borderRadius: 16, padding: 32, textAlign: "center", marginBottom: 20 }}>
          <p style={{ color: "#6b7280", margin: "0 0 16px", fontSize: 14 }}>No payment method saved</p>
          <button
            onClick={() => { setShowForm(true); setFieldsReady(false); collectJsConfigured.current = false; }}
            style={{ background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
          >
            Add payment method
          </button>
        </div>
      ) : null}

      {/* CollectJS Card Form */}
      {showForm && (
        <div style={{ border: "1.5px solid #e5e7eb", borderRadius: 16, padding: 24, marginBottom: 20, background: "#fff" }}>
          <p style={{ margin: "0 0 16px", fontSize: 15, fontWeight: 600, color: "#111" }}>
            {savedCard ? "Replace payment method" : "Add payment method"}
          </p>

          <div style={fieldStyle} id="addcc-number" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 4 }}>
            <div style={fieldStyle} id="addcc-exp" />
            <div style={fieldStyle} id="addcc-cvv" />
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <button
              id="addCardBtn"
              disabled={!fieldsReady || processing}
              style={{
                flex: 1,
                background: fieldsReady && !processing ? "linear-gradient(90deg, #F5A623, #FF6B00)" : "#d1d5db",
                color: "#fff",
                border: "none",
                borderRadius: 50,
                padding: "12px 0",
                fontSize: 14,
                fontWeight: 700,
                cursor: fieldsReady && !processing ? "pointer" : "not-allowed",
                transition: "all 0.2s",
              }}
            >
              {processing ? "Saving..." : !fieldsReady ? "Loading..." : "Save card"}
            </button>
            <button
              onClick={() => { setShowForm(false); setFieldsReady(false); collectJsConfigured.current = false; }}
              style={{ background: "#f3f4f6", color: "#374151", border: "none", borderRadius: 50, padding: "12px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 12, padding: "12px 16px" }}>
        <p style={{ margin: 0, fontSize: 12, color: "#92400e" }}>
          For security, card data is stored with our payment processor (NMI), not on GetSmoke servers. We only store the last 4 digits for display.
        </p>
      </div>
    </div>
  );
}
