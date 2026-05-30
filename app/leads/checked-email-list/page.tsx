"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const flagMap: Record<string, string> = {
  DE: "🇩🇪",
  FR: "🇫🇷",
  AU: "🇦🇺",
  CA: "🇨🇦",
  US: "🇺🇸",
  GB: "🇬🇧",
  IT: "🇮🇹",
};

type LeadEntry = {
  id: number;
  location: string;
  description: string;
  niche: string;
  website: string;
  provider: string;
  password: string;
  emailsNumber: string;
  price: number;
  seller: string;
  dateCreated: string;
};

const leadData: LeadEntry[] = [
  {
    id: 1,
    location: "DE",
    description: "6.1 k GMX.de Amazon checked 100% 💥",
    niche: "N/A",
    website: "Amazon",
    provider: "GMX",
    password: "No",
    emailsNumber: "6.1K",
    price: 12.0,
    seller: "seller24",
    dateCreated: "2026-05-30 11:30:39",
  },
  {
    id: 2,
    location: "DE",
    description: "deutch GMX.de 6.2 k Amazon checked 100% 💥",
    niche: "N/A",
    website: "Amazon",
    provider: "GMX.de",
    password: "No",
    emailsNumber: "6.2K",
    price: 12.0,
    seller: "seller24",
    dateCreated: "2026-05-22 12:46:54",
  },
  {
    id: 3,
    location: "US",
    description: "6.1 k yahoo.de Amazon checked 100% leads 🔥",
    niche: "N/A",
    website: "Amazon",
    provider: "yahoo.de",
    password: "No",
    emailsNumber: "6.2K",
    price: 15.0,
    seller: "seller24",
    dateCreated: "2026-05-30 08:19:47",
  },
  {
    id: 4,
    location: "FR",
    description: "5.14 k wanadoo.fr filtered Amazon checked 100% leads 🔥",
    niche: "N/A",
    website: "Amazon",
    provider: "wanadoo.fr",
    password: "No",
    emailsNumber: "5.1K",
    price: 10.0,
    seller: "seller24",
    dateCreated: "2026-05-08 11:21:10",
  },
  {
    id: 5,
    location: "DE",
    description: "Deutsch 6.3 k hotmail.de amazon checked leads 100% 🔥",
    niche: "N/A",
    website: "amazon",
    provider: "hotmail.de",
    password: "No",
    emailsNumber: "6.3K",
    price: 12.0,
    seller: "seller24",
    dateCreated: "2026-05-22 12:45:13",
  },
  {
    id: 6,
    location: "AU",
    description:
      "australian rare Amazon checked 100% domains bigpond.net.au 🔥",
    niche: "N/A",
    website: "Amazon",
    provider: "bigpond.net.au",
    password: "No",
    emailsNumber: "6.2K",
    price: 15.0,
    seller: "seller24",
    dateCreated: "2026-05-25 00:12:50",
  },
  {
    id: 7,
    location: "CA",
    description: "canadian live.ca 6.3 k rare 100% 💥 amazon checked",
    niche: "N/A",
    website: "Amazon",
    provider: "live.ca",
    password: "No",
    emailsNumber: "6.3K",
    price: 12.0,
    seller: "seller24",
    dateCreated: "2026-05-22 12:12:58",
  },
  {
    id: 8,
    location: "AU",
    description:
      "australian rare domains 6.2 k optusnet.com.au amazon checked 100% 🔥",
    niche: "N/A",
    website: "Amazon",
    provider: "optusnet.com.au",
    password: "No",
    emailsNumber: "6.2K",
    price: 15.0,
    seller: "seller24",
    dateCreated: "2026-05-19 08:55:11",
  },
  {
    id: 9,
    location: "CA",
    description: "canadian 6.2 k yahoo.ca Amazon checked fresh 100% 💥",
    niche: "N/A",
    website: "Amazon",
    provider: "yahoo.ca",
    password: "No",
    emailsNumber: "6.2K",
    price: 12.0,
    seller: "seller24",
    dateCreated: "2026-05-22 12:08:20",
  },
  {
    id: 10,
    location: "DE",
    description: "deutch GMX.de 6.2 k Amazon checked 100% 💥",
    niche: "N/A",
    website: "Amazon",
    provider: "GMX.de",
    password: "No",
    emailsNumber: "6.2K",
    price: 12.0,
    seller: "seller24",
    dateCreated: "2026-05-22 12:46:54",
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

export default function CheckedEmailListPage() {
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [type, setType] = useState("checked-email-list");
  const [country, setCountry] = useState("all");
  const [seller, setSeller] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <main className="flex-1 w-full px-4 py-6">
        <h1 className="text-4xl font-light text-center text-gray-800 mb-5">
          Leads - 100% Checked Email list
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>
              We Have Fresh E-mails Lists for Diffrents Countries ( You Can Use
              it for Marketing or anything else ).
            </li>
            <li>
              Our E-mails Lists Guarante for you Good results because most of
              them are from Shops and Big Sites .
            </li>
            <li>
              Combo use for cracking (Brute forcing attack) not use for login to
              email
            </li>
            <li>There is 29 100% Checked Email list Lists Available.</li>
          </ul>
        </div>

        {/* Filters */}
        <div className="mb-5">
          <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Description:</label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Provider:</label>
              <input
                type="text"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">type:</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-52 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="checked-email-list">
                  100% Checked Email list
                </option>
                <option value="email-only">Email Only</option>
                <option value="combo-email-password">
                  Combo Email:Password
                </option>
                <option value="combo-username-password">
                  Combo Username:Password
                </option>
                <option value="email-access">Email Access</option>
                <option value="combo-email-hash">Combo Email:Hash</option>
                <option value="phone-number-only">Phone Number Only</option>
                <option value="combo-phone-password">
                  Combo Phone:Password
                </option>
                <option value="full-data">Full Data</option>
                <option value="social-media-data">Social Media Data</option>
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
                <option value="FR">France</option>
                <option value="AU">Australia</option>
                <option value="CA">Canada</option>
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
                <option value="seller24">seller24</option>
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
                  Description <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Niche <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Website <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Provider <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Password <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 whitespace-pre-line">
                  {"Emails\nNumber"} <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Proof <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Price <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Seller <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">
                  Buy <SortIcon />
                </th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 whitespace-nowrap">
                  Date Created <SortIcon />
                </th>
              </tr>
            </thead>
            <tbody>
              {leadData.map((row, i) => (
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
                  {/* Description */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[220px] leading-relaxed">
                    {row.description}
                  </td>
                  {/* Niche */}
                  <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">
                    {row.niche}
                  </td>
                  {/* Website */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.website}
                  </td>
                  {/* Provider */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.provider}
                  </td>
                  {/* Password */}
                  <td className="px-3 py-2.5 text-xs text-gray-700">
                    {row.password}
                  </td>
                  {/* Emails Number */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.emailsNumber}
                  </td>
                  {/* Proof */}
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
                  {/* Price */}
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">
                    {row.price.toFixed(2)}
                  </td>
                  {/* Seller */}
                  <td className="px-3 py-2.5 text-xs text-gray-600 whitespace-nowrap">
                    {row.seller}
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
