"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const flagMap: Record<string, string> = {
  IT: "🇮🇹",
  US: "🇺🇸",
  CL: "🇨🇱",
  ID: "🇮🇩",
  CA: "🇨🇦",
};

const cpanelData = [
  {
    id: 18583694,
    location: "IT",
    ssl: "https",
    source: "Pre Owned",
    tld: ".it",
    seoRank: "1",
    hosting: "Supernova Network",
    price: 15.99,
    seller: "seller152",
    dateCreated: "2026-03-21 19:14:34",
  },
  {
    id: 19799337,
    location: "IT",
    ssl: "https",
    source: "created",
    tld: ".co",
    seoRank: "N/A",
    hosting: "AWS EC2 (eu-south-1)",
    price: 4.5,
    seller: "seller65",
    dateCreated: "2026-05-25 04:02:05",
  },
  {
    id: 18589657,
    location: "US",
    ssl: "https",
    source: "Pre Owned",
    tld: ".br",
    seoRank: "1",
    hosting: "PureVoltage Hosting Inc",
    price: 14.99,
    seller: "seller42",
    dateCreated: "2026-05-22 08:37:07",
  },
  {
    id: 17954239,
    location: "CL",
    ssl: "https",
    source: "Pre Owned",
    tld: ".cl",
    seoRank: "N/A",
    hosting: "SOC. COMERCIAL WIRENET CHILE LTDA",
    price: 14.0,
    seller: "seller190",
    dateCreated: "2026-02-10 10:44:00",
  },
  {
    id: 17469104,
    location: "ID",
    ssl: "https",
    source: "Pre Owned",
    tld: ".id",
    seoRank: "1",
    hosting: "Fajar Informasi Globalnet Jaya",
    price: 17.0,
    seller: "seller152",
    dateCreated: "2026-03-03 22:04:32",
  },
  {
    id: 18854577,
    location: "CA",
    ssl: "https",
    source: "Pre Owned",
    tld: ".com",
    seoRank: "N/A",
    hosting: "RABIH, EL ZUBAIDI",
    price: 17.0,
    seller: "seller152",
    dateCreated: "2026-04-07 11:21:35",
  },
  {
    id: 18985811,
    location: "CA",
    ssl: "https",
    source: "Pre Owned",
    tld: ".tn",
    seoRank: "N/A",
    hosting: "Mediafusion Inc.",
    price: 14.0,
    seller: "seller190",
    dateCreated: "2026-04-17 22:31:09",
  },
  {
    id: 13799337,
    location: "IT",
    ssl: "https",
    source: "Pre Owned",
    tld: ".co",
    seoRank: "N/A",
    hosting: "AWS EC2 (eu-south-1)",
    price: 4.5,
    seller: "seller65",
    dateCreated: "2026-05-25 04:02:05",
  },
  {
    id: 18954577,
    location: "US",
    ssl: "https",
    source: "Created",
    tld: ".com",
    seoRank: "N/A",
    hosting: "RABIH, EL ZUBAIDI",
    price: 17.0,
    seller: "seller152",
    dateCreated: "2026-04-07 11:21:35",
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

const columns = [
  "Location",
  "SSL",
  "Source",
  "TLD",
  "Seo\nRank / Da",
  "#Seo Info",
  "Hosting",
  "Check Send",
  "Price",
  "Seller",
  "Check",
  "Buy",
  "Date\nCreated",
  "ID",
];

export default function CpanelsPage() {
  const [hosting, setHosting] = useState("");
  const [domainTld, setDomainTld] = useState("");
  const [country, setCountry] = useState("all");
  const [type, setType] = useState("all");
  const [seller, setSeller] = useState("all");
  const [ssl, setSsl] = useState("all");
  const [seoFilter, setSeoFilter] = useState("default");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          Cpanels
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Click on check button before buy any cPanel to know if it&apos;s
              work or not.
            </li>
            <li>There is 99282 cPanel Available.</li>
          </ul>
        </div>

        {/* Filters */}
        <div className="mb-5">
          <div className="flex flex-wrap items-end gap-x-5 gap-y-3">
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
              <label className="text-sm text-gray-700">Domain Tld:</label>
              <input
                type="text"
                value={domainTld}
                onChange={(e) => setDomainTld(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Country:</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All Countries</option>
                <option value="IT">Italy</option>
                <option value="US">United States</option>
                <option value="CL">Chile</option>
                <option value="ID">Indonesia</option>
                <option value="CA">Canada</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Type:</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="pre-owned">Pre Owned</option>
                <option value="created">Created</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Seller:</label>
              <select
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
              </select>
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
              <label className="text-sm text-gray-700">Seo Filter:</label>
              <select
                value={seoFilter}
                onChange={(e) => setSeoFilter(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-40 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="default">Default</option>
                <option value="da10">DA &gt;= 10</option>
                <option value="da20">DA &gt;= 20</option>
              </select>
            </div>
            {/* price */}
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Price:</span>
                <div className="flex gap-1">
                  <input
                    type="number"
                    placeholder="$ Min"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
                  />
                  <input
                    type="number"
                    placeholder="$ Max"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-1.5 self-end mb-0.5">
                Filter
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded border border-gray-200 overflow-x-auto shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                {[
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
                  "ID",
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
              {cpanelData.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
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
                    <span className="flex items-center gap-0.5 text-green-600 text-xs font-medium">
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
                    {row.source === "Pre Owned" ? (
                      <span className="flex items-center gap-1 text-red-600 text-xs whitespace-nowrap">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0 inline-block" />
                        Pre Owned
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-blue-600 text-xs whitespace-nowrap">
                        <span className="w-2.5 h-2.5 rounded-full border-2 border-blue-500 flex-shrink-0 inline-flex items-center justify-center">
                          <span
                            className="text-blue-500"
                            style={{ fontSize: 8, lineHeight: 1 }}
                          >
                            +
                          </span>
                        </span>
                        created
                      </span>
                    )}
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
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap"
                    >
                      #Seo Info
                    </button>
                  </td>
                  {/* Hosting */}
                  <td className="px-3 py-2.5 text-gray-700 text-xs max-w-[170px]">
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
                  {/* ID */}
                  <td className="px-3 py-2.5 text-gray-500 text-xs">
                    {row.id}
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
