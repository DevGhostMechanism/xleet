"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const flagMap: Record<string, string> = {
  DE: "🇩🇪",
  BD: "🇧🇩",
  AL: "🇦🇱",
  HU: "🇭🇺",
  US: "🇺🇸",
  FR: "🇫🇷",
  GB: "🇬🇧",
};

type SshEntry = {
  id: number;
  hostInfo: string;
  location: string;
  source: string;
  ram: string;
  hosting: string;
  price: number;
  seller: string;
  hasWhm: boolean;
  dateCreated: string;
};

const sshData: SshEntry[] = [
  {
    id: 1,
    hostInfo:
      "Linux v18400.1blu.de 6.8.0 #1 SMP Mon Sep 30 15:36:27 MSK 2024 x86_64 x86_64 x86_64 GNU/Linux",
    location: "DE",
    source: "Pre Owned",
    ram: "18Gi",
    hosting: "1blu AG",
    price: 25.0,
    seller: "seller42",
    hasWhm: false,
    dateCreated: "2026-05-28 14:23:13",
  },
  {
    id: 2,
    hostInfo:
      "Linux 24fire 6.1.0-44-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.164-1 (2026-03-09) x86_64 GNU/Linux",
    location: "DE",
    source: "Pre Owned",
    ram: "15Gi",
    hosting: "24fire",
    price: 25.0,
    seller: "seller42",
    hasWhm: false,
    dateCreated: "2026-05-28 14:43:34",
  },
  {
    id: 3,
    hostInfo:
      "Linux mail.impressivegrp.com 3.10.0-1062.el7.x86_64 #1 SMP Wed Aug 7 18:08:02 UTC 2019 x86_64 x86_64 x86_64 GNU/Linux",
    location: "BD",
    source: "Pre Owned",
    ram: "7.6G",
    hosting: "29Communication",
    price: 20.0,
    seller: "seller90",
    hasWhm: false,
    dateCreated: "2026-02-06 00:57:05",
  },

  {
    id: 5,
    hostInfo:
      "Linux NAS542 3.2.54 #1 SMP Mon Jun 17 20:12:56 CST 2024 armv7l GNU/Linux",
    location: "HU",
    source: "Pre Owned",
    ram: "1011636",
    hosting: "Activcom Kft.",
    price: 100.0,
    seller: "seller50",
    hasWhm: false,
    dateCreated: "2024-10-18 20:41:04",
  },
  {
    id: 6,
    hostInfo:
      "Linux 24fire 6.1.0-44-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.164-1 (2026-03-09) x86_64 GNU/Linux",
    location: "US",
    source: "Pre Owned",
    ram: "15Gi",
    hosting: "24fire",
    price: 25.0,
    seller: "seller42",
    hasWhm: false,
    dateCreated: "2026-05-28 14:43:34",
  },
  {
    id: 7,
    hostInfo: "sshd listensocks[15]",
    location: "AL",
    source: "Pre Owned",
    ram: "sshd listensocks[15]",
    hosting: "ABCom",
    price: 20.0,
    seller: "seller21",
    hasWhm: false,
    dateCreated: "2026-05-29 14:13:51",
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

export default function SshPage() {
  const [hosting, setHosting] = useState("");
  const [ram, setRam] = useState("");
  const [hasWhm, setHasWhm] = useState("all");
  const [country, setCountry] = useState("all");
  const [type, setType] = useState("all");
  const [seller, setSeller] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          SSH\WHM
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Click on check button before buy any SSH\WHM to know if its work
              or not.
            </li>
            <li>There is 1165 SSH/WHM Available.</li>
          </ul>
        </div>

        {/* Filters */}
        <div className="mb-5">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Hosting:</label>
              <input
                type="text"
                value={hosting}
                onChange={(e) => setHosting(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-40 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Ram:</label>
              <input
                type="text"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-40 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Has Whm:</label>
              <select
                value={hasWhm}
                onChange={(e) => setHasWhm(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Country:</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All Countries</option>
                <option value="DE">Germany</option>
                <option value="BD">Bangladesh</option>
                <option value="AL">Albania</option>
                <option value="HU">Hungary</option>
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
                <option value="ssh">SSH</option>
                <option value="whm">WHM</option>
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
                <option value="seller42">seller42</option>
                <option value="seller50">seller50</option>
                <option value="seller90">seller90</option>
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
                  { label: "Host Info", width: "w-52" },
                  { label: "Location", width: "" },
                  { label: "Source", width: "" },
                  { label: "Ram", width: "" },
                  { label: "Hosting", width: "", sortUp: true },
                  { label: "Price", width: "" },
                  { label: "Seller", width: "" },
                  { label: "Check", width: "" },
                  { label: "Has WHM", width: "" },
                  { label: "Buy", width: "" },
                  { label: "Date\nCreated", width: "" },
                ].map((col) => (
                  <th
                    key={col.label}
                    className={`px-3 py-3 text-left text-xs font-semibold text-gray-600 whitespace-pre-line align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200 ${col.width}`}
                  >
                    {col.label}{" "}
                    {col.sortUp ? (
                      <span className="text-gray-500 text-[11px]">↑</span>
                    ) : (
                      <SortIcon />
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sshData.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  {/* Host Info */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[210px] break-words leading-relaxed">
                    {row.hostInfo}
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
                  {/* Source */}
                  <td className="px-3 py-2.5">
                    <span className="flex items-center gap-1 text-red-600 text-xs whitespace-nowrap">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0 inline-block" />
                      Pre Owned
                    </span>
                  </td>
                  {/* Ram */}
                  <td className="px-3 py-2.5 text-gray-700 text-xs">
                    {row.ram}
                  </td>
                  {/* Hosting */}
                  <td className="px-3 py-2.5 text-gray-700 text-xs">
                    {row.hosting}
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
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium"
                    >
                      Check
                    </button>
                  </td>
                  {/* Has WHM */}
                  <td className="px-3 py-2.5 text-gray-700 text-xs">
                    {row.hasWhm ? "Yes" : "No"}
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
