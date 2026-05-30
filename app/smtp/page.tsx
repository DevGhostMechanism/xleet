"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const flagMap: Record<string, string> = {
  DE: "🇩🇪",
  UA: "🇺🇦",
  US: "🇺🇸",
  ES: "🇪🇸",
  MY: "🇲🇾",
  CZ: "🇨🇿",
  FR: "🇫🇷",
  CA: "🇨🇦",
  GB: "🇬🇧",
  IT: "🇮🇹",
};

type SmtpEntry = {
  id: number;
  location: string;
  source: "Pre Owned" | "created";
  hosting: string;
  price: number;
  seller: string;
  webmail: boolean;
  dateCreated: string;
};

const smtpData: SmtpEntry[] = [
  {
    id: 18554473,
    location: "DE",
    source: "Pre Owned",
    hosting: "OVH GmbH",
    price: 2.0,
    seller: "seller10",
    webmail: true,
    dateCreated: "2026-03-18 23:51:46",
  },
  {
    id: 18370630,
    location: "DE",
    source: "Pre Owned",
    hosting: "Leaseweb Deutschland GmbH",
    price: 2.0,
    seller: "seller20",
    webmail: true,
    dateCreated: "2026-04-06 14:49:39",
  },
  {
    id: 19688392,
    location: "UA",
    source: "Pre Owned",
    hosting: "VSYS",
    price: 2.0,
    seller: "seller17",
    webmail: false,
    dateCreated: "2026-05-21 19:21:48",
  },
  {
    id: 19862659,
    location: "US",
    source: "Pre Owned",
    hosting: "HOSTINGER US",
    price: 1.96,
    seller: "seller89",
    webmail: false,
    dateCreated: "2026-05-28 10:03:45",
  },
  {
    id: 18913647,
    location: "US",
    source: "Pre Owned",
    hosting: "Applied Innovations Corporation",
    price: 2.0,
    seller: "seller10",
    webmail: false,
    dateCreated: "2026-05-11 20:11:44",
  },
  {
    id: 18511098,
    location: "ES",
    source: "Pre Owned",
    hosting: "Kumo Networks",
    price: 2.0,
    seller: "seller13",
    webmail: false,
    dateCreated: "2026-03-15 23:45:26",
  },
  {
    id: 19869421,
    location: "MY",
    source: "Pre Owned",
    hosting: "IPSERVERONE",
    price: 2.0,
    seller: "seller199",
    webmail: true,
    dateCreated: "2026-05-29 02:05:30",
  },
  {
    id: 19867036,
    location: "CZ",
    source: "Pre Owned",
    hosting: "Webhosting Services",
    price: 1.96,
    seller: "seller89",
    webmail: false,
    dateCreated: "2026-05-28 20:15:08",
  },
  {
    id: 19867677,
    location: "DE",
    source: "Pre Owned",
    hosting: "1blu AG",
    price: 2.0,
    seller: "seller10",
    webmail: false,
    dateCreated: "2026-05-28 21:31:25",
  },
  {
    id: 19869564,
    location: "MY",
    source: "Pre Owned",
    hosting: "Server Freak",
    price: 2.0,
    seller: "seller199",
    webmail: true,
    dateCreated: "2026-05-29 02:18:03",
  },
  {
    id: 19007713,
    location: "FR",
    source: "Pre Owned",
    hosting: "Astra Associates Ltd.",
    price: 2.0,
    seller: "seller10",
    webmail: false,
    dateCreated: "2026-04-19 21:44:30",
  },
  {
    id: 18863268,
    location: "CA",
    source: "Pre Owned",
    hosting: "UNNO",
    price: 2.0,
    seller: "seller10",
    webmail: true,
    dateCreated: "2026-04-07 22:33:50",
  },
  {
    id: 18072590,
    location: "US",
    source: "Pre Owned",
    hosting: "InMotion Hosting, Inc.",
    price: 2.0,
    seller: "seller10",
    webmail: true,
    dateCreated: "2026-02-20 02:12:36",
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

export default function SmtpPage() {
  const [hosting, setHosting] = useState("");
  const [country, setCountry] = useState("all");
  const [hasWebmail, setHasWebmail] = useState("all");
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
          SMTP
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              To Check The SMTP ( Deliver or not ) , Click on Send ( For Free )
              Then Check Your Testing E-mail.
            </li>
            <li>There is 17006 SMTP Available.</li>
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
                <option value="DE">Germany</option>
                <option value="UA">Ukraine</option>
                <option value="US">United States</option>
                <option value="ES">Spain</option>
                <option value="MY">Malaysia</option>
                <option value="CZ">Czech Republic</option>
                <option value="FR">France</option>
                <option value="CA">Canada</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Has webmail:</label>
              <select
                value={hasWebmail}
                onChange={(e) => setHasWebmail(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
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
              <label className="text-sm text-gray-700">Seller:</label>
              <select
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-28 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="seller10">seller10</option>
                <option value="seller13">seller13</option>
                <option value="seller17">seller17</option>
                <option value="seller20">seller20</option>
                <option value="seller89">seller89</option>
                <option value="seller199">seller199</option>
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
                  Webmail <SortIcon />
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
              {smtpData.map((row, i) => (
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
                  {/* Webmail */}
                  <td className="px-3 py-2.5 text-xs text-gray-700">
                    {row.webmail ? "Yes" : "No"}
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
