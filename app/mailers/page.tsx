"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const flagMap: Record<string, string> = {
  HK: "🇭🇰",
  TH: "🇹🇭",
  US: "🇺🇸",
  DE: "🇩🇪",
  SE: "🇸🇪",
  FR: "🇫🇷",
  GB: "🇬🇧",
  IT: "🇮🇹",
  CA: "🇨🇦",
};

type MailerEntry = {
  id: number;
  location: string;
  source: "Pre Owned" | "created";
  ssl: "https" | "http";
  hosting: string;
  price: number;
  seller: string;
  dateCreated: string;
};

const mailerData: MailerEntry[] = [
  {
    id: 19842388,
    location: "HK",
    source: "Pre Owned",
    ssl: "https",
    hosting: "VpsQuan L.L.C",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-26 15:31:00",
  },
  {
    id: 19841339,
    location: "TH",
    source: "Pre Owned",
    ssl: "https",
    hosting: "Profesionalhosting R15",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-29 13:03:26",
  },
  {
    id: 19750808,
    location: "US",
    source: "Pre Owned",
    ssl: "https",
    hosting: "Oracle Corporation",
    price: 9.0,
    seller: "seller100",
    dateCreated: "2026-05-24 04:32:24",
  },
  {
    id: 19842239,
    location: "DE",
    source: "Pre Owned",
    ssl: "https",
    hosting: "webgo GmbH",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-26 15:22:32",
  },
  {
    id: 19842575,
    location: "DE",
    source: "Pre Owned",
    ssl: "https",
    hosting: "AWS EC2 (eu-central-1)",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-29 15:58:07",
  },
  {
    id: 19750976,
    location: "SE",
    source: "Pre Owned",
    ssl: "http",
    hosting: "Ilait AB",
    price: 9.0,
    seller: "seller100",
    dateCreated: "2026-05-24 04:39:31",
  },
  {
    id: 19841216,
    location: "FR",
    source: "Pre Owned",
    ssl: "https",
    hosting: "Contabo GmbH",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-26 12:52:57",
  },
  {
    id: 19842585,
    location: "HK",
    source: "Pre Owned",
    ssl: "https",
    hosting: "Yisu Cloud Ltd",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-26 16:01:16",
  },
  {
    id: 19842484,
    location: "US",
    source: "Pre Owned",
    ssl: "https",
    hosting: "Squarespace, Inc.",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-26 15:45:13",
  },
  {
    id: 19841250,
    location: "US",
    source: "Pre Owned",
    ssl: "https",
    hosting: "Linode",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-26 12:55:30",
  },
  {
    id: 19750989,
    location: "HK",
    source: "Pre Owned",
    ssl: "http",
    hosting: "Alibaba Cloud - HK",
    price: 9.0,
    seller: "seller100",
    dateCreated: "2026-05-24 04:41:48",
  },
  {
    id: 19842561,
    location: "US",
    source: "Pre Owned",
    ssl: "https",
    hosting: "IONOS Inc",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-26 15:55:45",
  },
  {
    id: 19840998,
    location: "US",
    source: "Pre Owned",
    ssl: "https",
    hosting: "Tier.Net Technologies LLC",
    price: 10.0,
    seller: "seller99",
    dateCreated: "2026-05-26 12:37:12",
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

export default function MailersPage() {
  const [hosting, setHosting] = useState("");
  const [country, setCountry] = useState("all");
  const [source, setSource] = useState("all");
  const [seller, setSeller] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [testEmail, setTestEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          Mailers
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              To Check The Mailer ( Deliver or not ) , Click on Send ( For Free
              ) Then Check Your Testing E-mail.
            </li>
            <li>There is 72 Mailers Available.</li>
          </ul>
        </div>

        {/* Filters */}
        <div className="mb-5">
          {/* Row 1 */}
          <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Hosting:</label>
              <input
                type="text"
                value={hosting}
                onChange={(e) => setHosting(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-52 bg-white focus:outline-none focus:border-blue-400"
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
                <option value="HK">Hong Kong</option>
                <option value="TH">Thailand</option>
                <option value="US">United States</option>
                <option value="DE">Germany</option>
                <option value="SE">Sweden</option>
                <option value="FR">France</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Source:</label>
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
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
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">Select Seller</option>
                <option value="seller99">seller99</option>
                <option value="seller100">seller100</option>
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

          {/* Row 2 — Test Email */}
          <div className="flex items-center gap-2 mt-3">
            <label className="text-sm text-gray-700 whitespace-nowrap">
              Test Email:
            </label>
            <input
              type="email"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1.5 text-sm w-52 bg-white focus:outline-none focus:border-blue-400"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm font-medium">
              Save
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded border border-gray-200 overflow-x-auto shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  ID <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  Location <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  Source <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  SSL <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  Hosting <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  Price <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  Seller <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  <span className="flex items-center gap-1.5 flex-wrap">
                    Test Send
                    {testEmail && (
                      <span className="bg-gray-500 text-white text-[10px] px-1.5 py-0.5 rounded font-normal">
                        {testEmail}
                      </span>
                    )}
                    <SortIcon />
                  </span>
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  Buy <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 border-b border-gray-200 whitespace-nowrap">
                  Date Created <SortIcon />
                </th>
              </tr>
            </thead>
            <tbody>
              {mailerData.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  {/* ID */}
                  <td className="px-3 py-2.5 text-xs text-gray-600 whitespace-nowrap">
                    {row.id}
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
                    {row.source === "Pre Owned" ? (
                      <span className="flex items-center gap-1 text-red-600 text-xs whitespace-nowrap">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0 inline-block" />
                        Pre Owned
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-blue-600 text-xs whitespace-nowrap">
                        <span className="w-2.5 h-2.5 rounded-full border-2 border-blue-500 flex-shrink-0 inline-flex items-center justify-center">
                          <span
                            className="text-blue-500 leading-none"
                            style={{ fontSize: 8 }}
                          >
                            +
                          </span>
                        </span>
                        created
                      </span>
                    )}
                  </td>
                  {/* SSL */}
                  <td className="px-3 py-2.5">
                    <span
                      className={`flex items-center gap-0.5 text-xs font-medium ${row.ssl === "https" ? "text-green-600" : "text-gray-600"}`}
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
                  {/* Hosting */}
                  <td className="px-3 py-2.5 text-xs text-gray-700">
                    {row.hosting}
                  </td>
                  {/* Price */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.price.toFixed(2)}
                  </td>
                  {/* Seller */}
                  <td className="px-3 py-2.5 text-xs text-gray-600 whitespace-nowrap">
                    {row.seller}
                  </td>
                  {/* Test Send */}
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium"
                    >
                      Send
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
                  <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">
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
