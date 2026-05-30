"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const flagMap: Record<string, string> = {
  RU: "🇷🇺",
  IN: "🇮🇳",
  DE: "🇩🇪",
  HK: "🇭🇰",
  SE: "🇸🇪",
  ZA: "🇿🇦",
  US: "🇺🇸",
  LK: "🇱🇰",
};

type RdpEntry = {
  id: number;
  countryCode: string;
  region: string;
  city: string;
  hosting: string;
  username: string;
  ip: string;
  source: "Pre Owned" | "created";
  ram: string;
  cpu: number;
  windows: string;
  access: string;
  price: number;
  seller: string;
  dateCreated: string;
};

const rdpData: RdpEntry[] = [
  {
    id: 1,
    countryCode: "RU",
    region: "Moscow",
    city: "Moscow",
    hosting: "RTCOMM",
    username: "ad******",
    ip: "217.107.**",
    source: "Pre Owned",
    ram: "8 GB",
    cpu: 4,
    windows: "Win Server 2022",
    access: "Admin",
    price: 20.0,
    seller: "seller87",
    dateCreated: "2026-04-28 19:27:01",
  },
  {
    id: 2,
    countryCode: "IN",
    region: "Maharashtra",
    city: "Mumbai",
    hosting: "Linode, LLC",
    username: "ad******",
    ip: "194.195.**",
    source: "Pre Owned",
    ram: "8 GB",
    cpu: 4,
    windows: "Win Server 2022",
    access: "Admin",
    price: 20.0,
    seller: "seller87",
    dateCreated: "2026-05-21 17:23:08",
  },
  {
    id: 3,
    countryCode: "DE",
    region: "Bavaria",
    city: "Nuremberg",
    hosting: "netcup GmbH",
    username: "ad******",
    ip: "195.128.**",
    source: "Pre Owned",
    ram: "8 GB",
    cpu: 4,
    windows: "Win Server 2022",
    access: "Admin",
    price: 20.0,
    seller: "seller87",
    dateCreated: "2026-05-28 10:19:38",
  },
  {
    id: 4,
    countryCode: "HK",
    region: "Kwun Tong District",
    city: "Kowloon Bay",
    hosting: "HKBNES",
    username: "ad******",
    ip: "218.253.**",
    source: "Pre Owned",
    ram: "8 GB",
    cpu: 4,
    windows: "Win Server 2022",
    access: "Admin",
    price: 20.0,
    seller: "seller87",
    dateCreated: "2026-04-28 19:33:46",
  },
  {
    id: 5,
    countryCode: "SE",
    region: "Stockholm",
    city: "Stockholm",
    hosting: "Google Cloud",
    username: "sy******",
    ip: "34.51.**.*",
    source: "created",
    ram: "16 GB",
    cpu: 2,
    windows: "Win Server 2022",
    access: "Admin",
    price: 6.0,
    seller: "seller187",
    dateCreated: "2026-05-09 02:22:13",
  },
  {
    id: 6,
    countryCode: "ZA",
    region: "Gauteng",
    city: "Isando",
    hosting: "The Constant Company, LLC",
    username: "Ad******",
    ip: "139.84.**.*",
    source: "created",
    ram: "8 GB",
    cpu: 4,
    windows: "Win Server 2022",
    access: "Admin",
    price: 11.0,
    seller: "seller150",
    dateCreated: "2026-04-01 06:01:32",
  },
  {
    id: 7,
    countryCode: "US",
    region: "New York",
    city: "New York",
    hosting: "Us Pil Ionos Cloud Ewr",
    username: "Ad******",
    ip: "82.165.**.*",
    source: "created",
    ram: "16 GB",
    cpu: 8,
    windows: "Win Server 2022",
    access: "Admin",
    price: 12.0,
    seller: "seller64",
    dateCreated: "2026-05-21 10:49:15",
  },
  {
    id: 8,
    countryCode: "LK",
    region: "North Western Province",
    city: "Kuliyapitiya",
    hosting: "Lanka Education and Research Network",
    username: "ad******",
    ip: "192.248.**",
    source: "Pre Owned",
    ram: "8 GB",
    cpu: 4,
    windows: "Win Server 2022",
    access: "Admin",
    price: 20.0,
    seller: "seller87",
    dateCreated: "2026-04-28 22:43:07",
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

export default function RdpPage() {
  const [hosting, setHosting] = useState("");
  const [ram, setRam] = useState("");
  const [windows, setWindows] = useState("all");
  const [country, setCountry] = useState("all");
  const [type, setType] = useState("all");
  const [access, setAccess] = useState("all");
  const [seller, setSeller] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          Rdp
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Click on check button before buy any RDP to know if it&apos;s work
              or not.
            </li>
            <li>There is 3983 RDP Available.</li>
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
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Ram:</label>
              <input
                type="text"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">windows:</label>
              <select
                value={windows}
                onChange={(e) => setWindows(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-28 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="2022">Win Server 2022</option>
                <option value="2019">Win Server 2019</option>
                <option value="2016">Win Server 2016</option>
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
                <option value="RU">Russia</option>
                <option value="IN">India</option>
                <option value="DE">Germany</option>
                <option value="HK">Hong Kong</option>
                <option value="SE">Sweden</option>
                <option value="ZA">South Africa</option>
                <option value="US">United States</option>
                <option value="LK">Sri Lanka</option>
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
              <label className="text-sm text-gray-700">Access :</label>
              <select
                value={access}
                onChange={(e) => setAccess(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
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
                <option value="seller64">seller64</option>
                <option value="seller87">seller87</option>
                <option value="seller150">seller150</option>
                <option value="seller187">seller187</option>
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
                  "Location",
                  "Hosting",
                  "Username",
                  "Ip",
                  "Source",
                  "Ram",
                  "Cpu",
                  "Windows",
                  "Access",
                  "Price",
                  "Ip Blacklist",
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
              {rdpData.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  {/* Location */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[120px] leading-relaxed">
                    <span className="mr-1 text-base">
                      {flagMap[row.countryCode] ?? ""}
                    </span>
                    <span className="font-medium">{row.countryCode}</span>
                    {" - "}
                    {row.region}
                    {" - "}
                    {row.city}
                  </td>
                  {/* Hosting */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[130px] leading-relaxed">
                    {row.hosting}
                  </td>
                  {/* Username */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.username}
                  </td>
                  {/* Ip */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.ip}
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
                  {/* Ram */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.ram}
                  </td>
                  {/* Cpu */}
                  <td className="px-3 py-2.5 text-xs text-gray-700">
                    {row.cpu}
                  </td>
                  {/* Windows */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.windows}
                  </td>
                  {/* Access */}
                  <td className="px-3 py-2.5 text-xs text-gray-700">
                    {row.access}
                  </td>
                  {/* Price */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.price.toFixed(2)}
                  </td>
                  {/* Ip Blacklist */}
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap"
                    >
                      Check Blacklist
                    </button>
                  </td>
                  {/* Seller */}
                  <td className="px-3 py-2.5 text-xs text-gray-600 whitespace-nowrap">
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
