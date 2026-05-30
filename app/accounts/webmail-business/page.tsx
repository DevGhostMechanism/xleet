"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const flagMap: Record<string, string> = {
  FR: "🇫🇷",
  WO: "🌍",
  DE: "🇩🇪",
  US: "🇺🇸",
  GB: "🇬🇧",
  ES: "🇪🇸",
  IT: "🇮🇹",
  CA: "🇨🇦",
  JP: "🇯🇵",
  AU: "🇦🇺",
  BR: "🇧🇷",
  RU: "🇷🇺",
  TW: "🇹🇼",
  MX: "🇲🇽",
  IN: "🇮🇳",
  TR: "🇹🇷",
  BG: "🇧🇬",
  ID: "🇮🇩",
  PL: "🇵🇱",
  NL: "🇳🇱",
  RS: "🇷🇸",
  PS: "🇵🇸",
  TN: "🇹🇳",
  PY: "🇵🇾",
  QA: "🇶🇦",
  SA: "🇸🇦",
  AE: "🇦🇪",
  MA: "🇲🇦",
  DZ: "🇩🇿",
  EG: "🇪🇬",
  NG: "🇳🇬",
  ZA: "🇿🇦",
  GH: "🇬🇭",
  KE: "🇰🇪",
  PK: "🇵🇰",
  BD: "🇧🇩",
  LB: "🇱🇧",
  IQ: "🇮🇶",
  SY: "🇸🇾",
  UY: "🇺🇾",
  CZ: "🇨🇿",
  CO: "🇨🇴",
};

type AccountEntry = {
  id: number;
  websiteDomain: string;
  location: string;
  details: string;
  price: number;
  seller: string;
  source: string;
  dateCreated: string;
};

const accountData: AccountEntry[] = [
  {
    id: 1,
    websiteDomain: "o7sens.com",
    location: "FR",
    details: "Hacked OWA WEBMAIL OVH Corporation 💌 Private server 💌",
    price: 30.00,
    seller: "seller26",
    source: "Pre Owned",
    dateCreated: "2023-02-28 02:32:49",
  },
  {
    id: 2,
    websiteDomain: "medellin.gov.co",
    location: "WO",
    details: "OWA WEBMAIL🌸🌸 Microsoft Corporation 💌 Private server 🔥🔥🔥 Fresh 🌸🌸 100%✅",
    price: 21.00,
    seller: "seller22",
    source: "Pre Owned",
    dateCreated: "2024-06-30 00:45:54",
  },
  {
    id: 3,
    websiteDomain: "broadcastsolutionsdesign.com",
    location: "FR",
    details: "Hacked OWA WEBMAIL OVH Corporation 💌 Private server 💌",
    price: 30.00,
    seller: "seller26",
    source: "Pre Owned",
    dateCreated: "2023-02-28 02:50:23",
  },
  {
    id: 4,
    websiteDomain: "mail.lf.edu.uy",
    location: "UY",
    details: "OWA WEBMAIL Microsoft Corporation 💌 Private server",
    price: 40.00,
    seller: "seller52",
    source: "Pre Owned",
    dateCreated: "2023-06-24 13:19:39",
  },
  {
    id: 5,
    websiteDomain: "derutex.cz",
    location: "WO",
    details: "✅Webmail forpsi 🔥Premium✅SMTP work Inbox🔥✅ Strong Send",
    price: 37.00,
    seller: "seller90",
    source: "Pre Owned",
    dateCreated: "2026-05-11 23:47:40",
  },
  {
    id: 6,
    websiteDomain: "en-solut.com",
    location: "CZ",
    details: "✅Zimbra Webmail ✅Private Server✅",
    price: 100.00,
    seller: "seller6",
    source: "Pre Owned",
    dateCreated: "2023-03-11 17:52:36",
  },
  {
    id: 7,
    websiteDomain: "mail.logisbox.fr",
    location: "FR",
    details: "Hacked OWA WEBMAIL OVH Corporation 💌 Private server 💌",
    price: 30.00,
    seller: "seller26",
    source: "Pre Owned",
    dateCreated: "2023-02-28 02:19:57",
  },
  {
    id: 8,
    websiteDomain: "co-lor.com",
    location: "FR",
    details: "Hacked OWA WEBMAIL OVH Corporation 💌 Private server 💌",
    price: 30.00,
    seller: "seller26",
    source: "Pre Owned",
    dateCreated: "2023-02-28 02:10:29",
  },
];

const SortIcon = () => (
  <span className="inline-flex flex-col leading-[1] ml-0.5 text-gray-400 align-middle" style={{ fontSize: 9 }}>
    <span>↑</span>
    <span>↓</span>
  </span>
);

export default function WebmailBusinessPage() {
  const [details, setDetails] = useState("");
  const [websiteDomain, setWebsiteDomain] = useState("");
  const [country, setCountry] = useState("all");
  const [seller, setSeller] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const filtered = accountData.filter(row => {
    if (details && !row.details.toLowerCase().includes(details.toLowerCase())) return false;
    if (websiteDomain && !row.websiteDomain.toLowerCase().includes(websiteDomain.toLowerCase())) return false;
    if (country !== "all" && row.location !== country) return false;
    if (seller !== "all" && row.seller !== seller) return false;
    if (priceMin && row.price < parseFloat(priceMin)) return false;
    if (priceMax && row.price > parseFloat(priceMax)) return false;
    return true;
  });

  const uniqueCountries = [...new Set(accountData.map(r => r.location))].sort();
  const uniqueSellers = [...new Set(accountData.map(r => r.seller))].sort();

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          Accounts - Webmail Business
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>For Any problem for account after buy just open report and seller will fix it or replace.</li>
            <li>There is 19627 Accounts [Webmail Business] Available .</li>
          </ul>
        </div>

        {/* Filters */}
        <div className="mb-5">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Details :</label>
              <input
                type="text"
                value={details}
                onChange={e => setDetails(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Website Domain:</label>
              <input
                type="text"
                value={websiteDomain}
                onChange={e => setWebsiteDomain(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Country:</label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-40 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All Countries</option>
                {uniqueCountries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Seller:</label>
              <select
                value={seller}
                onChange={e => setSeller(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-40 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">Select Seller</option>
                {uniqueSellers.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Price Min:</label>
              <input
                type="number"
                placeholder="$ Min"
                value={priceMin}
                onChange={e => setPriceMin(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Price Max:</label>
              <input
                type="number"
                placeholder="$ Max"
                value={priceMax}
                onChange={e => setPriceMax(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <button
              onClick={() => {
                setDetails("");
                setWebsiteDomain("");
                setCountry("all");
                setSeller("all");
                setPriceMin("");
                setPriceMax("");
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-1.5 rounded text-sm font-medium flex items-center gap-1.5 self-end"
            >
              Filter
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded border border-gray-200 overflow-x-auto shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Website domain <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Location <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Details <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Price <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Seller <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Source <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Proof <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Buy <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Date Created <SortIcon /></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  <td className="px-3 py-2.5 text-xs text-gray-700 font-medium">{row.websiteDomain}</td>
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <span className="text-base">{flagMap[row.location] ?? "🌍"}</span>
                      <span className="font-medium text-gray-800 text-xs">{row.location}</span>
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[280px] leading-relaxed">{row.details}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">{row.price.toFixed(2)}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-600 whitespace-nowrap">{row.seller}</td>
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-red-600">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                      {row.source}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">
                    <button  onClick={() =>
                        alert("Please deposit money to use service!")
                      } className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium whitespace-nowrap">
                      View Proof
                    </button>
                  </td>
                  <td className="px-3 py-2.5">
                    <button  onClick={() =>
                        alert("Please deposit money to use service!")
                      } className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium">
                      Buy
                    </button>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">{row.dateCreated}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-3 py-8 text-center text-sm text-gray-400">No results found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
