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
  PH: "🇵🇭",
  AR: "🇦🇷",
  ZA: "🇿🇦",
  NG: "🇳🇬",
  GH: "🇬🇭",
  EG: "🇪🇬",
  TH: "🇹🇭",
  VN: "🇻🇳",
  MY: "🇲🇾",
  NZ: "🇳🇿",
  IE: "🇮🇪",
  SE: "🇸🇪",
  NO: "🇳🇴",
  DK: "🇩🇰",
  CH: "🇨🇭",
  AT: "🇦🇹",
  PT: "🇵🇹",
  BE: "🇧🇪",
  CZ: "🇨🇿",
  HU: "🇭🇺",
  RO: "🇷🇴",
  FI: "🇫🇮",
};

type WebmailEntry = {
  id: number;
  location: string;
  source: string;
  website: string;
  hosting: string;
  price: number;
  seller: string;
  type: string;
  niche: string;
  dateCreated: string;
};

const webmailData: WebmailEntry[] = [
  {
    id: 1,
    location: "GH",
    source: "Pre Owned",
    website: "central.edu.gh",
    hosting: "Central University College",
    price: 27.5,
    seller: "seller51",
    type: "Office365 Webmail",
    niche: "Real State",
    dateCreated: "2025-12-07 19:52:22",
  },
  {
    id: 2,
    location: "GB",
    source: "Pre Owned",
    website: "iamaworld.com",
    hosting: "Kimcell",
    price: 25.5,
    seller: "seller51",
    type: "Office365 Webmail",
    niche: "Real State",
    dateCreated: "2026-04-16 15:25:19",
  },
  {
    id: 3,
    location: "NL",
    source: "Pre Owned",
    website: "sportstudiosilver.nl",
    hosting: "Wemex",
    price: 19.17,
    seller: "seller126",
    type: "Office365 Webmail",
    niche: "Other",
    dateCreated: "2026-01-03 12:31:10",
  },
  {
    id: 4,
    location: "DE",
    source: "Pre Owned",
    website: "bosse-consulting.de",
    hosting: "eXtro-media GbR",
    price: 29.5,
    seller: "seller51",
    type: "Office365 Webmail",
    niche: "Real State",
    dateCreated: "2026-05-31 04:48:17",
  },
  {
    id: 5,
    location: "DE",
    source: "Pre Owned",
    website: "brm-am.com",
    hosting: "Huerter IT UG",
    price: 20.98,
    seller: "seller126",
    type: "Office365 Webmail",
    niche: "Other",
    dateCreated: "2026-05-05 02:04:49",
  },
  {
    id: 6,
    location: "GB",
    source: "Pre Owned",
    website: "1stchoicememorials.co.uk",
    hosting: "Ukfast Dlc03",
    price: 26.5,
    seller: "seller51",
    type: "Office365 Webmail",
    niche: "Real State",
    dateCreated: "2025-11-23 19:10:20",
  },
  {
    id: 7,
    location: "DE",
    source: "Pre Owned",
    website: "preising.net",
    hosting: "media-ecom GmbH",
    price: 20.5,
    seller: "seller151",
    type: "Office365 Webmail",
    niche: "Real State",
    dateCreated: "2026-05-10 21:09:10",
  },
  {
    id: 8,
    location: "AT",
    source: "Pre Owned",
    website: "viennaoffice.at",
    hosting: "A1 Telekom Austria AG",
    price: 22.0,
    seller: "seller51",
    type: "Office365 Webmail",
    niche: "Real State",
    dateCreated: "2026-01-18 10:33:44",
  },
  {
    id: 9,
    location: "BE",
    source: "Pre Owned",
    website: "bruxellescorp.be",
    hosting: "Proximus NV",
    price: 21.5,
    seller: "seller126",
    type: "Office365 Webmail",
    niche: "Other",
    dateCreated: "2026-02-14 08:19:07",
  },
  {
    id: 10,
    location: "SE",
    source: "Pre Owned",
    website: "stockholmbiz.se",
    hosting: "Telia Company AB",
    price: 24.0,
    seller: "seller151",
    type: "Office365 Webmail",
    niche: "Real State",
    dateCreated: "2026-03-29 15:55:31",
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

export default function Office365WebmailPage() {
  const [hosting, setHosting] = useState("");
  const [website, setWebsite] = useState("");
  const [country, setCountry] = useState("all");
  const [type, setType] = useState("Office365 Webmail");
  const [niche, setNiche] = useState("all");
  const [source, setSource] = useState("all");
  const [seller, setSeller] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const filtered = webmailData.filter((row) => {
    if (hosting && !row.hosting.toLowerCase().includes(hosting.toLowerCase()))
      return false;
    if (website && !row.website.toLowerCase().includes(website.toLowerCase()))
      return false;
    if (country !== "all" && row.location !== country) return false;
    if (type !== "all" && row.type !== type) return false;
    if (niche !== "all" && row.niche !== niche) return false;
    if (source !== "all" && row.source !== source) return false;
    if (seller !== "all" && row.seller !== seller) return false;
    if (priceMin && row.price < parseFloat(priceMin)) return false;
    if (priceMax && row.price > parseFloat(priceMax)) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          Webmail
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Webmail is used for Social engineering, It&apos;s not used for
              mass send.
            </li>
            <li>
              Click on check button before buy any Webmail to know if it&apos;s
              work or not.
            </li>
            <li>There is 715306 Webmail Available.</li>
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
              <label className="text-sm text-gray-700">Website:</label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Country:</label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-32 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="GH">Ghana</option>
                <option value="GB">United Kingdom</option>
                <option value="NL">Netherlands</option>
                <option value="DE">Germany</option>
                <option value="AT">Austria</option>
                <option value="BE">Belgium</option>
                <option value="SE">Sweden</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Type:</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="Cpanel Webmail">Cpanel Webmail</option>
                <option value="Godaddy Webmail">Godaddy Webmail</option>
                <option value="Office Godaddy Webmail">
                  Office Godaddy Webmail
                </option>
                <option value="Office365 Webmail">Office365 Webmail</option>
                <option value="Rackspace Webmail">Rackspace Webmail</option>
                <option value="Ionos Webmail">Ionos Webmail</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Niche:</label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="Other">Other</option>
                <option value="Real State">Real State</option>
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
                <option value="Pre Owned">Pre Owned</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Seller:</label>
              <select
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-28 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="seller51">seller51</option>
                <option value="seller126">seller126</option>
                <option value="seller151">seller151</option>
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
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Location <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Source <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Website <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Hosting <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Price <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Seller <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Type <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Niche <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Check <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Date Created <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Buy <SortIcon />
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    <span className="mr-1 text-base">
                      {flagMap[row.location] ?? "🌍"}
                    </span>
                    <span className="font-medium text-gray-800 text-xs">
                      {row.location}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-red-600">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                      {row.source}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700">
                    {row.website}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[200px]">
                    {row.hosting}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.price.toFixed(2)}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-600 whitespace-nowrap">
                    {row.seller}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.type}
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">
                    {row.niche}
                  </td>
                  <td className="px-3 py-2.5">
                    <button
                      onClick={() =>
                        alert("Please deposit money to use service!")
                      }
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium whitespace-nowrap"
                    >
                      Check
                    </button>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">
                    {row.dateCreated}
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
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={11}
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
