"use client";
import { useState } from "react";

const PASSWORD = "smoke2026";

const PROVIDERS: Record<string, { name: string; email: string }> = {
  P1: { name: "建冯 (Feng Jian)", email: "fengjian025@gmail.com" },
  P2: { name: "Javbes", email: "javbesinfo@gmail.com" },
  P3: { name: "Mochen Nabei", email: "mochennabei@gmail.com" },
};

const LINKS = [
  {
    id: 1,
    site: "kongotech.org",
    da: 53,
    url: "https://kongotech.org/how-disposable-vapes-became-tech-devices/",
    target: "/brands/geek-bar",
    price: 40,
    provider: "P1",
    month: "2026-08",
    status: "live",
  },
  {
    id: 2,
    site: "programminginsider.com",
    da: 60,
    url: "https://programminginsider.com/inside-the-tech-engineering-of-the-best-disposable-vapes-in-2026/",
    target: "/brands/geek-bar",
    price: 40,
    provider: "P1",
    month: "2026-08",
    status: "live",
  },
  {
    id: 3,
    site: "theactionelite.com",
    da: 40,
    url: "https://theactionelite.com/best-disposable-vapes-for-action-movie-night-in-2026-full-comparison/",
    target: "/models/geek-bar-pulse-2-25000-puffs",
    price: 50,
    provider: "P1",
    month: "2026-08",
    status: "live",
  },
  {
    id: 4,
    site: "ocnjdaily.com",
    da: 35,
    url: "https://ocnjdaily.com/news-from-our-partners/best-disposable-vapes-for-the-jersey-shore-in-2026-a-complete-buyers-guide/",
    target: "/brands/geek-bar",
    price: 50,
    provider: "P2",
    month: "2026-09",
    status: "live",
  },
  {
    id: 5,
    site: "saturdaydownsouth.com",
    da: 50,
    url: "",
    target: "/brands/geek-bar",
    price: 50,
    provider: "P2",
    month: "2026-09",
    status: "pending",
  },
];

const totalPaid = LINKS.filter((l) => l.status === "live").reduce((s, l) => s + l.price, 0);
const totalPending = LINKS.filter((l) => l.status === "pending").reduce((s, l) => s + l.price, 0);

export default function BacklinksAdmin() {
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  if (!auth) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center font-mono">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 w-80 text-center">
          <div className="text-2xl font-bold text-white mb-2">🔗 Backlinks</div>
          <div className="text-gray-400 text-sm mb-6">GetSmoke.com admin</div>
          <input
            type="password"
            placeholder="Password"
            value={pw}
            onChange={(e) => { setPw(e.target.value); setErr(false); }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (pw === PASSWORD) setAuth(true);
                else setErr(true);
              }
            }}
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
    <div className="min-h-screen bg-gray-950 text-white font-sans p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">🔗 Backlink Tracker</h1>
            <p className="text-gray-400 text-sm mt-1">GetSmoke.com — SEO Link Building</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-green-900/40 border border-green-700 rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-green-400">${totalPaid}</div>
              <div className="text-xs text-green-300 mt-1">Paid (live)</div>
            </div>
            <div className="bg-yellow-900/40 border border-yellow-700 rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-yellow-400">${totalPending}</div>
              <div className="text-xs text-yellow-300 mt-1">Pending</div>
            </div>
            <div className="bg-purple-900/40 border border-purple-700 rounded-xl px-5 py-3 text-center">
              <div className="text-2xl font-bold text-purple-400">${totalPaid + totalPending}</div>
              <div className="text-xs text-purple-300 mt-1">Total</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800 text-gray-400 text-xs uppercase">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Site</th>
                <th className="px-4 py-3 text-left">DA</th>
                <th className="px-4 py-3 text-left">Article</th>
                <th className="px-4 py-3 text-left">Target</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Provider</th>
                <th className="px-4 py-3 text-left">Month</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {LINKS.map((link) => (
                <tr key={link.id} className="border-t border-gray-800 hover:bg-gray-800/40 transition">
                  <td className="px-4 py-3 text-gray-500">{link.id}</td>
                  <td className="px-4 py-3 font-medium text-white">{link.site}</td>
                  <td className="px-4 py-3 text-gray-300">{link.da}</td>
                  <td className="px-4 py-3">
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline truncate block max-w-[220px]"
                        title={link.url}
                      >
                        Open article ↗
                      </a>
                    ) : (
                      <span className="text-gray-600 italic">Not published yet</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`https://getsmoke.com${link.target}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 text-xs"
                    >
                      {link.target}
                    </a>
                  </td>
                  <td className="px-4 py-3 font-bold text-green-400">${link.price}</td>
                  <td className="px-4 py-3">
                    <div className="text-white text-xs">{PROVIDERS[link.provider]?.name}</div>
                    <div className="text-gray-500 text-xs">{PROVIDERS[link.provider]?.email}</div>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs">{link.month}</td>
                  <td className="px-4 py-3">
                    {link.status === "live" ? (
                      <span className="bg-green-900/60 text-green-400 border border-green-700 rounded-full px-2 py-0.5 text-xs font-bold">✅ Live</span>
                    ) : (
                      <span className="bg-yellow-900/60 text-yellow-400 border border-yellow-700 rounded-full px-2 py-0.5 text-xs font-bold">⏳ Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Providers */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gray-300">Providers</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(PROVIDERS).map(([id, p]) => (
              <div key={id} className="bg-gray-900 border border-gray-700 rounded-xl p-4">
                <div className="text-xs text-gray-500 mb-1">{id}</div>
                <div className="font-bold text-white">{p.name}</div>
                <a href={`mailto:${p.email}`} className="text-blue-400 text-xs hover:underline">{p.email}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
