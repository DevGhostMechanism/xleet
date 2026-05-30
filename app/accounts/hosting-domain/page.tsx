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
  SE: "🇸🇪",
};

type AccountEntry = {
  id: number;
  websiteDomain: string;
  location: string;
  details: string;
  price: number;
  seller: string;
  source: "Pre Owned" | "created";
  dateCreated: string;
};

const accountData: AccountEntry[] = [
  {
    id: 1,
    websiteDomain: "103.11.103.176",
    location: "WO",
    details: "✅✅✅DirectAdmin panel good and fresh one✅✅✅",
    price: 14.0,
    seller: "seller90",
    source: "Pre Owned",
    dateCreated: "2026-05-12 02:10:51",
  },
  {
    id: 2,
    websiteDomain: "tmdhosting.com",
    location: "WO",
    details: "✅Fresh Cracked Hosting Site🔥 Manual[1]",
    price: 10.5,
    seller: "seller32",
    source: "Pre Owned",
    dateCreated: "2026-05-08 11:43:09",
  },
  {
    id: 3,
    websiteDomain: "newdomain.com.au",
    location: "WO",
    details: "✅Fresh Cracked Hosting Site🔥 Domain Names[1]",
    price: 10.5,
    seller: "seller32",
    source: "Pre Owned",
    dateCreated: "2026-05-08 11:43:13",
  },
  {
    id: 4,
    websiteDomain: "delmersdinadiawan.com",
    location: "WO",
    details: "✅✅✅Word Press Admin panel good and fresh one✅✅✅",
    price: 19.0,
    seller: "seller90",
    source: "Pre Owned",
    dateCreated: "2026-05-12 02:08:19",
  },
  {
    id: 5,
    websiteDomain: "www.one.com",
    location: "WO",
    details:
      "Plan: Beginner 0 of 50 email accounts active Storage: 0.2 of 50 GB used",
    price: 30.0,
    seller: "seller63",
    source: "Pre Owned",
    dateCreated: "2022-03-08 19:59:24",
  },
  {
    id: 6,
    websiteDomain: "cafe24.com",
    location: "WO",
    details: "✅✅✅Word Press Admin panel good and fresh one✅✅✅",
    price: 28.0,
    seller: "seller90",
    source: "Pre Owned",
    dateCreated: "2026-05-12 02:09:40",
  },
  {
    id: 7,
    websiteDomain: "domainz.net.nz",
    location: "WO",
    details: "HIT[Domain Services[1]",
    price: 15.0,
    seller: "seller35",
    source: "Pre Owned",
    dateCreated: "2026-05-06 13:01:35",
  },
  {
    id: 8,
    websiteDomain: "my.enhance.com",
    location: "WO",
    details: "✅Fresh Cracked Hosting Site🔥 Enhance[1]",
    price: 15.5,
    seller: "seller32",
    source: "Pre Owned",
    dateCreated: "2026-05-08 11:43:05",
  },
  {
    id: 9,
    websiteDomain: "hostforweb.com",
    location: "WO",
    details: "✅Fresh Cracked Hosting Site🔥 Web Hosting[1]",
    price: 9.5,
    seller: "seller32",
    source: "Pre Owned",
    dateCreated: "2026-05-08 11:43:07",
  },
  {
    id: 10,
    websiteDomain: "aws.amazon.com",
    location: "WO",
    details: "Best Fresh AWS AMAZON PANEL Very Cheap ALL WORKING",
    price: 40.0,
    seller: "seller18",
    source: "created",
    dateCreated: "2023-10-19 13:59:47",
  },
  {
    id: 11,
    websiteDomain: "portal.azure.com",
    location: "WO",
    details: "Panel azure ✅ Best price! ✅ Fresh Panel🔵",
    price: 49.99,
    seller: "seller49",
    source: "created",
    dateCreated: "2022-09-28 06:15:57",
  },
];

const SortIcon = () => (
  <span
    className="inline-flex flex-col leading-[1] ml-0.5 text-gray-400 align-middle"
    style={{ fontSize: 9 }}
  >
    <span>↑</span>
    <span>↓</span>
  </span>
);

const SourceBadge = ({ source }: { source: "Pre Owned" | "created" }) =>
  source === "created" ? (
    <span className="flex items-center gap-1.5 text-xs font-medium text-blue-600">
      <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px] shrink-0 font-bold">
        +
      </span>
      created
    </span>
  ) : (
    <span className="flex items-center gap-1.5 text-xs font-medium text-red-600">
      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
      Pre Owned
    </span>
  );

export default function HostingDomainPage() {
  const [details, setDetails] = useState("");
  const [websiteDomain, setWebsiteDomain] = useState("");
  const [country, setCountry] = useState("all");
  const [seller, setSeller] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const filtered = accountData.filter((row) => {
    if (details && !row.details.toLowerCase().includes(details.toLowerCase()))
      return false;
    if (
      websiteDomain &&
      !row.websiteDomain.toLowerCase().includes(websiteDomain.toLowerCase())
    )
      return false;
    if (country !== "all" && row.location !== country) return false;
    if (seller !== "all" && row.seller !== seller) return false;
    if (priceMin && row.price < parseFloat(priceMin)) return false;
    if (priceMax && row.price > parseFloat(priceMax)) return false;
    return true;
  });

  const uniqueCountries = [
    ...new Set(accountData.map((r) => r.location)),
  ].sort();
  const uniqueSellers = [...new Set(accountData.map((r) => r.seller))].sort();

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          Accounts - Hosting/Domain
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              For Any problem for account after buy just open report and seller
              will fix it or replace.
            </li>
            <li>There is 479 Accounts [Hosting/Domain] Available .</li>
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
                onChange={(e) => setDetails(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Website Domain:</label>
              <input
                type="text"
                value={websiteDomain}
                onChange={(e) => setWebsiteDomain(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Country:</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-40 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All Countries</option>
                {uniqueCountries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Seller:</label>
              <select
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-40 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">Select Seller</option>
                {uniqueSellers.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Price Min:</label>
              <input
                type="number"
                placeholder="$ Min"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Price Max:</label>
              <input
                type="number"
                placeholder="$ Max"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-1.5 rounded text-sm font-medium flex items-center gap-1.5 self-end">
              Filter
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded border border-gray-200 overflow-x-auto shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Website domain <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Location <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Details <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Price <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Seller <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Source <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Proof <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Buy <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Date Created <SortIcon />
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  <td className="px-3 py-2.5 text-xs text-gray-700 font-medium">
                    {row.websiteDomain}
                  </td>
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <span className="text-base">
                        {flagMap[row.location] ?? "🌍"}
                      </span>
                      <span className="font-medium text-gray-800 text-xs">
                        {row.location}
                      </span>
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[280px] leading-relaxed">
                    {row.details}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.price.toFixed(2)}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-600 whitespace-nowrap">
                    {row.seller}
                  </td>
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    <SourceBadge source={row.source} />
                  </td>
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium whitespace-nowrap"
                    >
                      View Proof
                    </button>
                  </td>
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs font-medium"
                    >
                      Buy
                    </button>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">
                    {row.dateCreated}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className="px-3 py-8 text-center text-sm text-gray-400"
                  >
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
