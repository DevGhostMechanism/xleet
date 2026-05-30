"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const flagMap: Record<string, string> = {
  US: "🇺🇸",
  DE: "🇩🇪",
  HK: "🇭🇰",
  IT: "🇮🇹",
  CA: "🇨🇦",
  GB: "🇬🇧",
  FR: "🇫🇷",
};

type Shell = {
  id: number;
  os: "linux" | "windows";
  phpVersion: string;
  location: string;
  ssl: "https" | "http";
  source: string;
  tld: string;
  seoRank: string;
  hasSeoInfo: boolean;
  hosting: string;
  price: number;
  seller: string;
  dateCreated: string;
};

const shellData: Shell[] = [
  {
    id: 1,
    os: "linux",
    phpVersion: "8.1.34",
    location: "US",
    ssl: "https",
    source: "Pre Owned",
    tld: ".com",
    seoRank: "N/A",
    hasSeoInfo: false,
    hosting: "Private Customer",
    price: 10.0,
    seller: "seller80",
    dateCreated: "2026-04-20 09:36:14",
  },
  {
    id: 2,
    os: "linux",
    phpVersion: "8.3.28",
    location: "DE",
    ssl: "http",
    source: "Pre Owned",
    tld: ".com",
    seoRank: "6",
    hasSeoInfo: false,
    hosting: "Vultr Holdings LLC Frankfurt",
    price: 7.0,
    seller: "seller10",
    dateCreated: "2026-05-19 21:10:02",
  },
  {
    id: 3,
    os: "linux",
    phpVersion: "8.0.30",
    location: "HK",
    ssl: "https",
    source: "Pre Owned",
    tld: ".com",
    seoRank: "13",
    hasSeoInfo: true,
    hosting: "AWS EC2 (ap-east-1)",
    price: 20.0,
    seller: "seller50",
    dateCreated: "2026-05-19 15:59:10",
  },
  {
    id: 4,
    os: "linux",
    phpVersion: "8.2.31",
    location: "US",
    ssl: "https",
    source: "Pre Owned",
    tld: ".br",
    seoRank: "2",
    hasSeoInfo: true,
    hosting: "HostGator.com LLC",
    price: 10.0,
    seller: "seller80",
    dateCreated: "2026-05-26 19:23:15",
  },
  {
    id: 5,
    os: "windows",
    phpVersion: "7.4.13",
    location: "US",
    ssl: "https",
    source: "Pre Owned",
    tld: ".us",
    seoRank: "N/A",
    hasSeoInfo: false,
    hosting: "IONOS Inc",
    price: 20.0,
    seller: "seller172",
    dateCreated: "2025-12-30 21:30:00",
  },
  {
    id: 6,
    os: "windows",
    phpVersion: "7.4.33",
    location: "US",
    ssl: "http",
    source: "Pre Owned",
    tld: ".com",
    seoRank: "N/A",
    hasSeoInfo: true,
    hosting: "HostDime.com",
    price: 10.0,
    seller: "seller185",
    dateCreated: "2026-04-22 14:58:44",
  },
  {
    id: 7,
    os: "linux",
    phpVersion: "8.3.30",
    location: "US",
    ssl: "https",
    source: "Pre Owned",
    tld: ".com",
    seoRank: "N/A",
    hasSeoInfo: false,
    hosting: "AWS Global Accelerator (GLOBAL)",
    price: 7.0,
    seller: "seller10",
    dateCreated: "2026-02-19 21:11:38",
  },
  {
    id: 8,
    os: "linux",
    phpVersion: "8.3.28",
    location: "DE",
    ssl: "http",
    source: "Pre Owned",
    tld: ".com",
    seoRank: "6",
    hasSeoInfo: false,
    hosting: "Vultr Holdings LLC Frankfurt",
    price: 10.0,
    seller: "seller12",
    dateCreated: "2026-03-19 21:10:02",
  },
  {
    id: 9,
    os: "linux",
    phpVersion: "8.2.31",
    location: "US",
    ssl: "https",
    source: "Pre Owned",
    tld: ".br",
    seoRank: "1",
    hasSeoInfo: true,
    hosting: "HostGator.com LLC",
    price: 10.0,
    seller: "seller21",
    dateCreated: "2026-05-20 19:23:15",
  },
];

const LinuxIcon = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 64 64"
  >
    <path d="M32 2C22.06 2 14 10.06 14 20c0 5.88 2.72 11.12 7 14.6V40a2 2 0 002 2h18a2 2 0 002-2v-5.4C47.28 31.12 50 25.88 50 20 50 10.06 41.94 2 32 2zm-6 36v2h-4v-2h4zm12 0v2h-4v-2h4z" />
    <path d="M24 44v8a2 2 0 002 2h12a2 2 0 002-2v-8H24z" />
  </svg>
);

const WindowsIcon = () => (
  <svg
    className="w-3.5 h-3.5 flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M3 5.557L10.257 4.5V11.5H3V5.557zm8.257-1.191L21 3v8.5H11.257V4.366zM3 12.5h7.257V19.5L3 18.443V12.5zm8.257 0H21V21l-9.743-1.366V12.5z" />
  </svg>
);

const SortIcon = () => (
  <span
    className="inline-flex flex-col leading-[1] ml-0.5 text-gray-400 align-middle"
    style={{ fontSize: 9 }}
  >
    <span>↑</span>
    <span>↓</span>
  </span>
);

export default function ShellsPage() {
  const [hosting, setHosting] = useState("");
  const [os, setOs] = useState("");
  const [domainTld, setDomainTld] = useState("");
  const [ssl, setSsl] = useState("all");
  const [country, setCountry] = useState("all");
  const [seller, setSeller] = useState("all");
  const [source, setSource] = useState("all");
  const [seoFilter, setSeoFilter] = useState("default");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          Shells
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Click on check button before buy any Shell to know if its work or
              not.
            </li>
            <li>Password Shell Script login : xleet.</li>
            <li>There is 31871 Shells Available.</li>
          </ul>
        </div>

        {/* Filters — single row */}
        <div className="mb-5">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Hosting:</label>
              <input
                type="text"
                value={hosting}
                onChange={(e) => setHosting(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Os:</label>
              <input
                type="text"
                value={os}
                onChange={(e) => setOs(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-20 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Domain Tld:</label>
              <input
                type="text"
                value={domainTld}
                onChange={(e) => setDomainTld(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-28 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">SSL:</label>
              <select
                value={ssl}
                onChange={(e) => setSsl(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="https">HTTPS</option>
                <option value="http">HTTP</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Country:</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="US">US</option>
                <option value="DE">DE</option>
                <option value="HK">HK</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Seller:</label>
              <select
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-28 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">Select Seller</option>
                <option value="seller10">seller10</option>
                <option value="seller50">seller50</option>
                <option value="seller80">seller80</option>
                <option value="seller172">seller172</option>
                <option value="seller185">seller185</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Source:</label>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-28 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="pre-owned">Pre Owned</option>
                <option value="created">Created</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Seo Filter:</label>
              <select
                value={seoFilter}
                onChange={(e) => setSeoFilter(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-28 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="default">Default</option>
                <option value="da10">DA &gt;= 10</option>
                <option value="da20">DA &gt;= 20</option>
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-1.5 self-end">
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
                {[
                  "Host Info",
                  "Location",
                  "SSL",
                  "Source",
                  "TLD",
                  "Seo\nRank / Da",
                  "#Seo\nInfo",
                  "Hosting",
                  "Check Send",
                  "Price",
                  "Seller",
                  "Check",
                  "Buy",
                  "Date\nCreated",
                ].map((col) => (
                  <th
                    key={col}
                    className="px-3 py-3 text-left text-xs font-semibold text-gray-600 whitespace-pre-line align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200"
                  >
                    {col} <SortIcon />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {shellData.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  {/* Host Info */}
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium text-white whitespace-nowrap ${
                        row.os === "linux"
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      {row.os === "linux" ? <LinuxIcon /> : <WindowsIcon />}
                      {row.os === "linux" ? "Linux" : "WINNT"} - PHP{" "}
                      {row.phpVersion}
                    </button>
                  </td>
                  {/* Location */}
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    <span className="mr-1 text-base">
                      {flagMap[row.location] ?? ""}
                    </span>
                    <span className="font-medium text-gray-800 text-xs">
                      {row.location}
                    </span>
                  </td>
                  {/* SSL */}
                  <td className="px-3 py-2.5">
                    <span
                      className={`flex items-center gap-0.5 text-xs font-medium ${
                        row.ssl === "https" ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {row.ssl}
                    </span>
                  </td>
                  {/* Source */}
                  <td className="px-3 py-2.5">
                    <span className="flex items-center gap-1 text-red-600 text-xs whitespace-nowrap">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0 inline-block" />
                      Pre Owned
                    </span>
                  </td>
                  {/* TLD */}
                  <td className="px-3 py-2.5 text-gray-600 text-xs">
                    {row.tld}
                  </td>
                  {/* Seo Rank */}
                  <td className="px-3 py-2.5 text-xs">
                    <span
                      className={
                        row.seoRank === "N/A"
                          ? "text-gray-500"
                          : "text-red-600 font-semibold"
                      }
                    >
                      {row.seoRank}
                    </span>
                  </td>
                  {/* Seo Info */}
                  <td className="px-3 py-2.5">
                    {row.hasSeoInfo ? (
                      <button
                        onClick={() =>
                          alert("Please deposit money to use service!")
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap"
                      >
                        #Seo Info
                      </button>
                    ) : (
                      <span className="text-gray-500 text-xs">N/A</span>
                    )}
                  </td>
                  {/* Hosting */}
                  <td className="px-3 py-2.5 text-gray-700 text-xs max-w-[150px]">
                    {row.hosting}
                  </td>
                  {/* Check Send */}
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1 whitespace-nowrap"
                    >
                      Check Send
                      <svg
                        className="w-3 h-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </td>
                  {/* Price */}
                  <td className="px-3 py-2.5 text-gray-700 text-xs">
                    {row.price.toFixed(2)}
                  </td>
                  {/* Seller */}
                  <td className="px-3 py-2.5 text-gray-600 text-xs">
                    {row.seller}
                  </td>
                  {/* Check */}
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 py-1 rounded text-xs font-medium"
                    >
                      Check
                    </button>
                  </td>
                  {/* Buy */}
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
                  {/* Date Created */}
                  <td className="px-3 py-2.5 text-gray-500 text-xs whitespace-nowrap">
                    {row.dateCreated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
