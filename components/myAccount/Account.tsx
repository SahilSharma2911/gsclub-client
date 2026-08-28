"use client";

import React, { useEffect, useState } from "react";
import OrderHistory from "./OrderHistory";
import TrackOrderTab from "./TrackOrderTab";
import GiftCardTab from "./GiftCardTab";
import Settings from "./Settings";
import ShippingAddress from "./ShippingAddress";
import SubscriptionsTab from "./SubscriptionsTab";
import BillingInformation from "./BillingInformation";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { Order } from "@/types/order";
import toast from "react-hot-toast";

// ---------- Send-to-friend modal ----------
function SendFriendModal({ referralLink, onClose }: { referralLink: string; onClose: () => void }) {
  const [step, setStep] = useState<"name" | "preview" | "sending" | "done">("name");
  const [myName, setMyName] = useState("");
  const [friendFirstName, setFriendFirstName] = useState("");
  const [friendLastName, setFriendLastName] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const friendFullName = [friendFirstName, friendLastName].filter(Boolean).join(" ");

  const handleSend = async () => {
    if (!myName.trim() || !friendFirstName.trim() || !friendEmail.trim()) { toast.error("Fill in all required fields"); return; }
    setStep("sending");
    try {
      const res = await fetch("/api/referral/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ friendName: friendFullName, friendEmail, senderName: myName, referralLink }),
      });
      if (res.ok) { setStep("done"); } else { toast.error("Failed to send"); setStep("preview"); }
    } catch { toast.error("Something went wrong"); setStep("preview"); }
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 20, padding: 28, maxWidth: 440, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800 }}>
            {step === "done" ? "Sent!" : step === "name" ? "Invite a friend" : "Preview email"}
          </h3>
          <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#9ca3af" }}>&#10005;</button>
        </div>

        {step === "done" && (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>&#127881;</div>
            <p style={{ color: "#111", fontWeight: 600, marginBottom: 8 }}>Invitation sent to {friendFullName || friendFirstName}!</p>
            <p style={{ color: "#6b7280", fontSize: 13 }}>When they make their first purchase, you will earn 3% in bonus points.</p>
            <button onClick={onClose} style={{ marginTop: 20, background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 28px", fontWeight: 700, cursor: "pointer" }}>Done</button>
          </div>
        )}

        {step === "name" && (
          <>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", display: "block", marginBottom: 4 }}>Your name *</label>
              <input value={myName} onChange={e => setMyName(e.target.value)} placeholder="Jessica" style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", display: "block", marginBottom: 4 }}>Friend&apos;s first name *</label>
                <input value={friendFirstName} onChange={e => setFriendFirstName(e.target.value)} placeholder="James" style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", display: "block", marginBottom: 4 }}>Last name (optional)</label>
                <input value={friendLastName} onChange={e => setFriendLastName(e.target.value)} placeholder="Roland" style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", display: "block", marginBottom: 4 }}>Friend&apos;s email *</label>
              <input value={friendEmail} onChange={e => setFriendEmail(e.target.value)} placeholder="james@example.com" type="email" style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 10, padding: "10px 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
            </div>
            <button onClick={() => { if (!myName.trim() || !friendFirstName.trim() || !friendEmail.trim()) { toast.error("Fill in all required fields"); return; } setStep("preview"); }} style={{ width: "100%", background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "12px", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
              Preview email
            </button>
          </>
        )}

        {(step === "preview" || step === "sending") && (
          <>
            <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 14, padding: 18, marginBottom: 18, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
              <p style={{ margin: "0 0 8px", color: "#6b7280", fontSize: 11, fontWeight: 600 }}>TO: {friendEmail}</p>
              <p style={{ margin: "0 0 12px" }}>Hey {friendFullName || friendFirstName},</p>
              <p style={{ margin: "0 0 12px" }}>
                It&apos;s {myName}! I wanted to share this with you - I&apos;ve been getting my vapes from GetSmoke.com and they&apos;re great. Here&apos;s my referral link for you:
              </p>
              <a href={referralLink} style={{ color: "#FF6B00", fontWeight: 700, wordBreak: "break-all" }}>{referralLink}</a>
              <p style={{ margin: "12px 0 0", color: "#6b7280", fontSize: 12 }}>Free shipping on orders over $89. Wide selection, fast delivery.</p>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setStep("name")} style={{ flex: 1, background: "#f3f4f6", color: "#374151", border: "none", borderRadius: 50, padding: "11px", fontWeight: 600, cursor: "pointer" }}>Edit</button>
              <button onClick={handleSend} disabled={step === "sending"} style={{ flex: 2, background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "11px", fontWeight: 700, cursor: "pointer", opacity: step === "sending" ? 0.7 : 1 }}>
                {step === "sending" ? "Sending..." : "Send invitation"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ---------- Account details + referral side by side (desktop) ----------
function AccountDetailsWithReferral({ isMobile, referralLink }: { isMobile: boolean; referralLink: string }) {
  const [showSendFriend, setShowSendFriend] = useState(false);

  const handleCopyLink = () => {
    const link = referralLink || `https://getsmoke.com/?ref=FRIEND`;
    navigator.clipboard.writeText(link);
    toast.success("Referral link copied!");
  };

  const ReferralBanner = () => (
    <div style={{ background: "#1a1a1a", borderRadius: 20, padding: isMobile ? 22 : 24, color: "#fff", height: "100%", boxSizing: "border-box" }}>
      <div style={{ fontSize: 11, color: "#F5A623", fontWeight: 700, marginBottom: 6, letterSpacing: 1 }}>REFERRAL PROGRAM</div>
      <h3 style={{ fontSize: isMobile ? 17 : 18, fontWeight: 900, margin: "0 0 8px", lineHeight: 1.3 }}>GET FREE VAPES FOR A REFERRAL</h3>
      <p style={{ fontSize: 12, color: "#9ca3af", margin: "0 0 18px", lineHeight: 1.6 }}>
        Invite a friend and earn 3% bonus points on their first order. Use points for discounts.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={handleCopyLink} style={{ background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 18px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
          Copy link
        </button>
        <button onClick={() => setShowSendFriend(true)} style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 50, padding: "10px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
          Send to friend
        </button>
      </div>
    </div>
  );

  return (
    <>
      {showSendFriend && (
        <SendFriendModal
          referralLink={referralLink || "https://getsmoke.com/?ref=FRIEND"}
          onClose={() => setShowSendFriend(false)}
        />
      )}
      {isMobile ? (
        <>
          <Settings />
          <div style={{ marginTop: 24 }}><ReferralBanner /></div>
        </>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "stretch" }}>
          <Settings />
          <ReferralBanner />
        </div>
      )}
    </>
  );
}

interface AccountProps {
  orders: Order[];
}

const tabs = [
  { full: "Account details",    short: "Details" },
  { full: "Purchase history",   short: "Orders" },
  { full: "Subscriptions",      short: "Subscriptions" },
  { full: "Billing information", short: "Billing" },
  { full: "Shipping address",   short: "Shipping" },
  { full: "Track order",        short: "Track" },
  { full: "Gift card",          short: "Gift" },
];

const Account: React.FC<AccountProps> = ({ orders }) => {
  const [selectOpt, setSelectOpt] = useState<string>("Account details");
  const [isMobile, setIsMobile] = useState(false);
  const [bonusBalance, setBonusBalance] = useState<number | null>(null);
  const [canRedeem, setCanRedeem] = useState(false);
  const [referralLink, setReferralLink] = useState("");
  const [showBonusInfo, setShowBonusInfo] = useState(false);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [redeemResult, setRedeemResult] = useState<{ code: string; discountAmount: number } | null>(null);
  const [redeemLoading, setRedeemLoading] = useState(false);
  const { status, data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const email = session?.user?.email;

  useEffect(() => {
    if (!email) return;
    fetch("/api/bonus/info")
      .then(r => r.json())
      .then(data => {
        if (data.bonusBalance !== undefined) setBonusBalance(data.bonusBalance);
        if (data.canRedeem !== undefined) setCanRedeem(data.canRedeem);
        if (data.referralLink) setReferralLink(data.referralLink);
      })
      .catch(() => {});
  }, [email]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (status === "unauthenticated") {
      const callbackUrl = pathname ? encodeURIComponent(pathname) : "";
      router.replace(`/login?callbackUrl=${callbackUrl}`);
    }
  }, [status, router, pathname]);

  // Don't render anything while session is resolving - prevents flash/blink
  if (status === "loading") return null;

  return (
    <>
      {/* hide scrollbar globally for this page's tab bar */}
      <style>{`
        .account-tab-bar::-webkit-scrollbar { display: none; }
        .account-tab-bar { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
      `}</style>

      {/* Platform notice */}
      <div
        style={{
          background: "#f0f9ff",
          borderBottom: "1px solid #bae6fd",
          padding: "12px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "13px", color: "#0369a1", margin: 0 }}>
          We are still working on your account dashboard - a full update is coming soon. Thank you for your patience!
        </p>
      </div>

      <div
        style={{ padding: isMobile ? "24px 16px" : undefined }}
        className={isMobile ? "font-unbounded min-h-[80vh] bg-white text-black" : "w-11/12 mx-auto py-8 font-unbounded min-h-[80vh] bg-white text-black"}
      >
        {/* Title */}
        <h1
          style={{
            textAlign: "center",
            fontSize: isMobile ? "20px" : "28px",
            fontWeight: 900,
            letterSpacing: "3px",
            marginBottom: "16px",
            color: "#111",
          }}
        >
          ACCOUNT
        </h1>

        {/* Bonus balance - bigger, plain text + info icon */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginBottom: 20 }}>
          <span style={{ fontSize: 18, color: "#F5A623" }}>&#11088;</span>
          <span style={{ fontSize: 20, fontWeight: 800, color: "#111" }}>
            {bonusBalance !== null ? bonusBalance : "—"} pts
            {bonusBalance !== null && bonusBalance > 0 && (
              <span style={{ fontSize: 15, fontWeight: 500, color: "#6b7280", marginLeft: 6 }}>
                (${(bonusBalance / 100).toFixed(2)})
              </span>
            )}
          </span>
          <button
            onClick={() => setShowBonusInfo(true)}
            title="How bonus points work"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "#9ca3af", fontSize: 15, lineHeight: 1, display: "flex", alignItems: "center" }}
          >
            &#9432;
          </button>
          <button
            onClick={() => canRedeem && setShowRedeemModal(true)}
            disabled={!canRedeem}
            title={canRedeem ? "Convert points to promo code" : "Minimum $10.00 required to redeem"}
            style={{
              background: canRedeem ? "linear-gradient(90deg, #F5A623, #FF6B00)" : "#e5e7eb",
              color: canRedeem ? "#fff" : "#9ca3af",
              border: "none", borderRadius: 50, padding: "5px 14px", fontSize: 12, fontWeight: 700,
              cursor: canRedeem ? "pointer" : "not-allowed", transition: "all 0.2s",
            }}
          >
            Redeem
          </button>
        </div>

        {/* Redeem modal */}
        {showRedeemModal && (
          <div onClick={() => { if (!redeemLoading) setShowRedeemModal(false); }} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
            <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 20, padding: 28, maxWidth: 400, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.2)", textAlign: "center" }}>
              {!redeemResult ? (
                <>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>&#127873;</div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 800 }}>Redeem bonus points</h3>
                  <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 8px" }}>
                    You have <strong>{bonusBalance} pts (${((bonusBalance || 0) / 100).toFixed(2)})</strong>
                  </p>
                  <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 20px" }}>
                    This will convert your full balance into a promo code you can use at checkout.
                  </p>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button onClick={() => setShowRedeemModal(false)} style={{ flex: 1, background: "#f3f4f6", color: "#374151", border: "none", borderRadius: 50, padding: "11px", fontWeight: 600, cursor: "pointer" }}>Cancel</button>
                    <button
                      onClick={async () => {
                        setRedeemLoading(true);
                        try {
                          const res = await fetch("/api/bonus/redeem", { method: "POST" });
                          const data = await res.json();
                          if (res.ok) { setRedeemResult(data); setBonusBalance(0); setCanRedeem(false); }
                          else { toast.error(data.error || "Failed to redeem"); }
                        } catch { toast.error("Something went wrong"); }
                        setRedeemLoading(false);
                      }}
                      disabled={redeemLoading}
                      style={{ flex: 2, background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "11px", fontWeight: 700, cursor: "pointer", opacity: redeemLoading ? 0.7 : 1 }}
                    >
                      {redeemLoading ? "Processing..." : "Confirm redeem"}
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>&#10003;</div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 800, color: "#15803d" }}>Promo code created!</h3>
                  <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 16px" }}>Use this code at checkout for ${redeemResult.discountAmount.toFixed(2)} off:</p>
                  <div style={{ background: "#f0fdf4", border: "2px dashed #86efac", borderRadius: 12, padding: "16px 24px", marginBottom: 20 }}>
                    <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: 3, color: "#15803d" }}>{redeemResult.code}</span>
                  </div>
                  <button onClick={() => { navigator.clipboard.writeText(redeemResult.code); toast.success("Code copied!"); }} style={{ background: "linear-gradient(90deg, #F5A623, #FF6B00)", color: "#fff", border: "none", borderRadius: 50, padding: "10px 28px", fontWeight: 700, cursor: "pointer", marginRight: 8 }}>Copy code</button>
                  <button onClick={() => { setShowRedeemModal(false); setRedeemResult(null); }} style={{ background: "none", color: "#6b7280", border: "none", cursor: "pointer", fontSize: 13 }}>Close</button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Bonus info modal */}
        {showBonusInfo && (
          <div
            onClick={() => setShowBonusInfo(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{ background: "#fff", borderRadius: 20, padding: 28, maxWidth: 420, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#111" }}>&#11088; Bonus Points</h3>
                <button onClick={() => setShowBonusInfo(false)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20, color: "#9ca3af" }}>&#10005;</button>
              </div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
                <p style={{ margin: "0 0 10px", fontWeight: 600 }}>How to earn:</p>
                <ul style={{ margin: "0 0 14px", paddingLeft: 20 }}>
                  <li>+1% of every purchase you make</li>
                  <li>+3% of your friend&apos;s first order (via your referral link)</li>
                  <li>More ways to earn points are coming soon!</li>
                </ul>
                <p style={{ margin: "0 0 10px", fontWeight: 600 }}>How to redeem:</p>
                <ul style={{ margin: "0 0 14px", paddingLeft: 20 }}>
                  <li>1 point = $0.01</li>
                  <li>Minimum balance to redeem: $10.00 (1,000 pts)</li>
                  <li>Once you reach the threshold, create a promo code from your account page and use it at checkout</li>
                </ul>
                <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>
                  We are expanding the bonus program - stay tuned for more earning opportunities!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab bar */}
        <div
          className="account-tab-bar"
          style={{
            background: "#F5C518",
            borderRadius: "50px",
            padding: "6px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            marginBottom: "32px",
            overflowX: "auto",
          }}
        >
          {tabs.map((tab) => {
            const isActive = selectOpt === tab.full;
            const label = isMobile ? tab.short : tab.full;
            return (
              <button
                key={tab.full}
                onClick={() => setSelectOpt(tab.full)}
                style={{
                  flexShrink: 0,
                  padding: isMobile ? "9px 14px" : "10px 20px",
                  borderRadius: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: isMobile ? "11px" : "13px",
                  background: isActive
                    ? "linear-gradient(90deg, #F5A623, #FF6B00)"
                    : "transparent",
                  color: isActive ? "#fff" : "#1a1a1a",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </button>
            );
          })}
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            style={{
              flexShrink: 0,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
            }}
            title="Logout"
          >
            <LogOut size={isMobile ? 16 : 18} color="#1a1a1a" />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: isMobile ? "0" : undefined }}>
          {selectOpt === "Account details" && (
            <AccountDetailsWithReferral isMobile={isMobile} referralLink={referralLink} />
          )}
          {selectOpt === "Purchase history" && (
            <OrderHistory selectOpt="Purchase history" orders={orders} />
          )}
          {selectOpt === "Subscriptions" && (
            <SubscriptionsTab email={email || ""} />
          )}
          {selectOpt === "Billing information" && (
            <BillingInformation />
          )}
          {selectOpt === "Shipping address" && (
            <ShippingAddress ischeckoutPage={false} />
          )}
          {selectOpt === "Track order" && (
            <TrackOrderTab />
          )}
          {selectOpt === "Gift card" && (
            <GiftCardTab />
          )}
        </div>
      </div>
    </>
  );
};

export default Account;
