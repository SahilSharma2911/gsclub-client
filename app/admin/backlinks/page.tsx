"use client";
import { useState } from "react";

const PASSWORD = "smoke2026";

const PROVIDERS: Record<string, { name: string; email: string }> = {
  P1: { name: "建冯 (Feng Jian)", email: "fengjian025@gmail.com" },
  P2: { name: "Javbes", email: "javbesinfo@gmail.com" },
  P3: { name: "Mochen Nabei", email: "mochennabei@gmail.com" },
};

const LINKS = [
  { id: 1, site: "kongotech.org", da: 53, url: "https://kongotech.org/how-disposable-vapes-became-tech-devices/", target: "/brands/geek-bar", price: 40, provider: "P1", month: "Aug 2026", status: "live" },
  { id: 2, site: "programminginsider.com", da: 60, url: "https://programminginsider.com/inside-the-tech-engineering-of-the-best-disposable-vapes-in-2026/", target: "/brands/geek-bar", price: 40, provider: "P1", month: "Aug 2026", status: "live" },
  { id: 3, site: "theactionelite.com", da: 40, url: "https://theactionelite.com/best-disposable-vapes-for-action-movie-night-in-2026-full-comparison/", target: "/models/geek-bar-pulse-2-25000-puffs", price: 50, provider: "P1", month: "Aug 2026", status: "live" },
  { id: 4, site: "ocnjdaily.com", da: 35, url: "https://ocnjdaily.com/news-from-our-partners/best-disposable-vapes-for-the-jersey-shore-in-2026-a-complete-buyers-guide/", target: "/brands/geek-bar", price: 50, provider: "P2", month: "Sep 2026", status: "live" },
  { id: 5, site: "saturdaydownsouth.com", da: 50, url: "", target: "/brands/geek-bar", price: 50, provider: "P2", month: "Sep 2026", status: "pending" },
];

const totalPaid = LINKS.filter((l) => l.status === "live").reduce((s, l) => s + l.price, 0);
const totalPending = LINKS.filter((l) => l.status === "pending").reduce((s, l) => s + l.price, 0);

export default function BacklinksAdmin() {
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  if (!auth) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center font-mono px-4">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 w-full max-w-xs text-center">
          <div className="text-2xl font-bold text-white mb-2">🔗 Backlinks</div>
          <div className="text-gray-400 text-sm mb-6">GetSmoke.com admin</div>
          <input
            type="password"
            placeholder="Password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setErr(false); }}
            onKeyDown={(e) => { if (e.key === "Enter") { if (pw === PASSWORD) setAuth(true); else setErr(true); } }}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white text-center focus:outline-none focus:border-purple-500 mb-3"
            autoFocus
          />
          {err && <div className="text-red-400 text-sm mb-3">Wrong password</div>}
          <button
            onClick={() => { if (pw === PASSWORD) setAuth(true); else setErr(true); }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 font-bold transition"
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="max-w-3xl mx-auto px-4 py-6">

        {/* Header */}
        <h1 className="text-xl font-bold mb-1">🔗 Backlink Tracker</h1>
        <p className="text-gray-500 text-xs mb-5">GetSmoke.com — SEO Link Building</p>

        {/* Budget summary */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-green-900/40 border border-green-700 rounded-xl px-3 py-3 text-center">
            <div className="text-xl font-bold text-green-400">${totalPaid}</div>
            <div className="text-xs text-green-300 mt-0.5">Paid</div>
          </div>
          <div className="bg-yellow-900/40 border border-yellow-700 rounded-xl px-3 py-3 text-center">
            <div className="text-xl font-bold text-yellow-400">${totalPending}</div>
            <div className="text-xs text-yellow-300 mt-0.5">Pending</div>
          </div>
          <div className="bg-purple-900/40 border border-purple-700 rounded-xl px-3 py-3 text-center">
            <div className="text-xl font-bold text-purple-400">${totalPaid + totalPending}</div>
            <div className="text-xs text-purple-300 mt-0.5">Total</div>
          </div>
        </div>

        {/* Link cards */}
        <div className="flex flex-col gap-3 mb-8">
          {LINKS.map((link) => (
            <div key={link.id} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-gray-500 text-xs mr-2">#{link.id}</span>
                  <span className="font-bold text-white">{link.site}</span>
                  <span className="text-gray-500 text-xs ml-2">DA {link.da}</span>
                </div>
                {link.status === "live"
                  ? <span className="shrink-0 bg-green-900/60 text-green-400 border border-green-700 rounded-full px-2 py-0.5 text-xs font-bold">✅ Live</span>
                  : <span className="shrink-0 bg-yellow-900/60 text-yellow-400 border border-yellow-700 rounded-full px-2 py-0.5 text-xs font-bold">⏳ Pending</span>
                }
              </div>

              <div className="flex flex-col gap-1 text-sm">
                {link.url
                  ? <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline break-all">
                      {link.url}
                    </a>
                  : <span className="text-gray-600 italic">Not published yet</span>
                }
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-400">
                <span>💰 <span className="text-green-400 font-bold">${link.price}</span></span>
                <span>📅 {link.month}</span>
                <span>👤 {PROVIDERS[link.provider]?.name}</span>
                <span className="text-purple-400">→ getsmoke.com{link.target}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Providers */}
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Providers</h2>
        <div className="flex flex-col gap-3">
          {Object.entries(PROVIDERS).map(([id, p]) => (
            <div key={id} className="bg-gray-900 border border-gray-700 rounded-xl p-4 flex items-center gap-4">
              <span className="text-gray-500 text-xs font-mono w-6">{id}</span>
              <div>
                <div className="font-bold text-white text-sm">{p.name}</div>
                <a href={`mailto:${p.email}`} className="text-blue-400 text-xs hover:underline">{p.email}</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
