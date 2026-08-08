"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

const PRESET_AMOUNTS = [10, 25, 50, 100];
const BANNER_URL = "https://pub-e2c8a53d84f146beb67cf9ee9a8f4961.r2.dev/account-banners/gift-card-banner.webp";

interface VaultCard { lastFour: string; cardType: string }

export default function GiftCardTab() {
  const [amount, setAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [vault, setVault] = useState<VaultCard | null | "loading">("loading");
  const [step, setStep] = useState<"form" | "confirm" | "sending" | "done">("form");
  const [result, setResult] = useState<{ code: string; amount: number } | null>(null);

  useEffect(() => {
    fetch("/api/billing/card")
      .then(r => r.json())
      .then(d => setVault(d.card || null))
      .catch(() => setVault(null));
  }, []);

  const finalAmount = useCustom ? parseFloat(customAmount) : (amount || 0);
  const isValidAmount = finalAmount >= 5 && finalAmount <= 500;
  const canSubmit = isValidAmount && recipientName.trim() && recipientEmail.trim() && recipientEmail.includes("@") && vault && vault !== "loading";

  const handlePurchase = async () => {
    setStep("sending");
    try {
      const res = await fetch("/api/gift-card/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount, recipientName, recipientEmail, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.error === "NO_VAULT") {
          toast.error("No saved payment method. Please make a subscription purchase first to save your card.");
        } else {
          toast.error(data.error || "Purchase failed");
        }
        setStep("form");
        return;
      }
      setResult({ code: data.code, amount: data.amount });
      setStep("done");
    } catch {
      toast.error("Something went wrong");
      setStep("form");
    }
  };

  if (step === "done" && result) {
    return (
      <div style={{ maxWidth: 560, textAlign: "center" }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>&#127873;</div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#111", margin: "0 0 8px" }}>Gift card sent!</h2>
        <p style={{ color: "#6b7280", fontSize: 14, margin: "0 0 24px" }}>
          A ${result.amount.toFixed(2)} gift card has been sent to {recipientEmail}. The code is valid for 2 years.
        </p>
        <div style={{ background: "#1a1a1a", borderRadius: 16, padding: 24, marginBottom: 24 }}>
          <p style={{ margin: "0 0 4px", fontSize: 12, color: "#9ca3af", letterSpacing: 1 }}>GIFT CARD CODE</p>
          <p style={{ margin: 0, fontSize: 26, fontWeight: 900, letterSpacing: 4, color: "#F5A623" }}>{result.code}</p>
        </div>
        <button onClick={() => { setStep("form"); setResult(null); setRecipientName(""); setRecipientEmail(""); setMessage(""); setAmount(25); setUseCustom(false); setCustomAmount(""); }}
          style={{ background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "12px 32px", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720 }}>
      {/* Banner */}
      <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 28 }}>
        <Image src={BANNER_URL} alt="GetSmoke Gift Card" width={720} height={405} style={{ width: "100%", height: "auto", display: "block" }} unoptimized />
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6, color: "#111" }}>Send a Gift Card</h2>
      <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 24px" }}>
        Gift cards are delivered instantly by email. Single-use, valid 2 years. Your saved card will be charged.
      </p>

      {/* Saved card notice */}
      {vault === "loading" ? (
        <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 20 }}>Checking payment method...</div>
      ) : vault ? (
        <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#15803d" }}>
          Will be charged to: {vault.cardType} ending in {vault.lastFour}
        </div>
      ) : (
        <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 12, padding: "12px 16px", marginBottom: 20, fontSize: 13, color: "#dc2626" }}>
          No saved payment method. To save a card, start a subscription order.
        </div>
      )}

      {step === "confirm" ? (
        /* Confirmation screen */
        <div style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb", borderRadius: 16, padding: 24 }}>
          <h3 style={{ margin: "0 0 16px", fontSize: 16, fontWeight: 700 }}>Confirm purchase</h3>
          <div style={{ fontSize: 14, color: "#374151", lineHeight: 2 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>Amount:</span><strong>${finalAmount.toFixed(2)}</strong></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>To:</span><strong>{recipientName} ({recipientEmail})</strong></div>
            {message && <div style={{ display: "flex", justifyContent: "space-between" }}><span>Message:</span><em style={{ maxWidth: 200, textAlign: "right" }}>&ldquo;{message}&rdquo;</em></div>}
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>Valid:</span><strong>2 years</strong></div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button onClick={() => setStep("form")} style={{ flex: 1, background: "#f3f4f6", color: "#374151", border: "none", borderRadius: 50, padding: "12px", fontWeight: 600, cursor: "pointer" }}>Back</button>
            <button onClick={handlePurchase} style={{ flex: 2, background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "12px", fontWeight: 700, cursor: "pointer" }}>
              Confirm &amp; Send
            </button>
          </div>
        </div>
      ) : (
        /* Form */
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Left: amount */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", margin: "0 0 10px" }}>Select amount</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
              {PRESET_AMOUNTS.map(a => (
                <button key={a} onClick={() => { setAmount(a); setUseCustom(false); }}
                  style={{ padding: "12px", borderRadius: 12, border: `2px solid ${!useCustom && amount === a ? "#F5A623" : "#e5e7eb"}`, background: !useCustom && amount === a ? "#fff7ed" : "#fff", fontWeight: 700, fontSize: 15, cursor: "pointer", color: "#111" }}>
                  ${a}
                </button>
              ))}
            </div>
            <button onClick={() => setUseCustom(true)}
              style={{ width: "100%", padding: "10px", borderRadius: 12, border: `2px solid ${useCustom ? "#F5A623" : "#e5e7eb"}`, background: useCustom ? "#fff7ed" : "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", color: "#374151", marginBottom: useCustom ? 8 : 0 }}>
              Custom amount
            </button>
            {useCustom && (
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontWeight: 700, color: "#374151" }}>$</span>
                <input type="number" min="5" max="500" value={customAmount} onChange={e => setCustomAmount(e.target.value)} placeholder="Enter amount"
                  style={{ width: "100%", border: "1.5px solid #F5A623", borderRadius: 12, padding: "10px 14px 10px 28px", fontSize: 15, fontWeight: 700, outline: "none", boxSizing: "border-box", marginTop: 8 }} />
              </div>
            )}
            {useCustom && customAmount && (parseFloat(customAmount) < 5 || parseFloat(customAmount) > 500) && (
              <p style={{ fontSize: 11, color: "#dc2626", margin: "4px 0 0" }}>Amount must be between $5 and $500</p>
            )}
          </div>

          {/* Right: recipient */}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#374151", margin: "0 0 10px" }}>Recipient details</p>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>Recipient name</label>
              <input value={recipientName} onChange={e => setRecipientName(e.target.value)} placeholder="James Roland"
                style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 13, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>Recipient email</label>
              <input type="email" value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)} placeholder="james@example.com"
                style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 13, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, color: "#6b7280", display: "block", marginBottom: 4 }}>Personal message (optional)</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Happy birthday! Enjoy!" rows={3}
                style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 13, outline: "none", boxSizing: "border-box", resize: "vertical" }} />
            </div>
          </div>

          {/* CTA full width */}
          <div style={{ gridColumn: "1 / -1" }}>
            <button onClick={() => setStep("confirm")} disabled={!canSubmit}
              style={{ width: "100%", background: canSubmit ? "linear-gradient(90deg, #F5A623, #FF6B00)" : "#e5e7eb", color: canSubmit ? "#fff" : "#9ca3af", border: "none", borderRadius: 50, padding: "14px", fontWeight: 700, fontSize: 15, cursor: canSubmit ? "pointer" : "not-allowed", transition: "all 0.2s" }}>
              {isValidAmount ? `Send $${finalAmount.toFixed(2)} Gift Card` : "Select an amount to continue"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
