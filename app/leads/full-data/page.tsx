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
  TV: "🇹🇻",
  MY: "🇲🇾",
  GE: "🇬🇪",
  IN: "🇮🇳",
  NG: "🇳🇬",
  PK: "🇵🇰",
  TR: "🇹🇷",
  SA: "🇸🇦",
  PL: "🇵🇱",
  NL: "🇳🇱",
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
    location: "ES",
    description: "✅🔥13.3K Super HQ Dumbing Combo List Full Data (Spain) - Private And High Quality[with SQL injection Link - not checked] $🔥",
    niche: "N\\A",
    website: "Fresh Combo Full Data✅🔥",
    provider: "✅🔥Combo Full Date $🔥",
    password: "No",
    emailsNumber: "13.3K",
    price: 36.00,
    seller: "seller71",
    dateCreated: "2022-09-27 12:32:57",
  },
  {
    id: 2,
    location: "ES",
    description: "✅🔥13.3K Super HQ Dumbing Combo List Full Data - Private And High Quality((New And Freshly)) [with SQL injection Link - not checked] $🔥",
    niche: "N\\A",
    website: "Fresh Combo List Full Data✅🔥",
    provider: "🔥Combo Full Date🔥",
    password: "No",
    emailsNumber: "13.3K",
    price: 33.00,
    seller: "seller71",
    dateCreated: "2022-11-05 11:12:35",
  },
  {
    id: 3,
    location: "WO",
    description: "Full information for Finance Director finance service Bank✔",
    niche: "Bank finance service",
    website: "mix",
    provider: "Mix",
    password: "No",
    emailsNumber: "52.0K",
    price: 800.00,
    seller: "seller30",
    dateCreated: "2020-11-17 23:07:39",
  },
  {
    id: 4,
    location: "WO",
    description: "full name , phone , job title , email address (extracted from InsideView)",
    niche: "InsideView",
    website: "InsideView",
    provider: "InsideView",
    password: "No",
    emailsNumber: "100K",
    price: 155.00,
    seller: "seller30",
    dateCreated: "2022-10-15 12:12:38",
  },
  {
    id: 5,
    location: "ES",
    description: "✅🔥13.3K Super HQ Dumbing Combo List Full Data - Private And High Quality [Fresh 2023][with SQL injection Link - not checked] $🔥",
    niche: "N\\A",
    website: "Fresh Combo Full Data✅🔥",
    provider: "✅🔥Combo Full Date $🔥",
    password: "No",
    emailsNumber: "13.3K",
    price: 33.00,
    seller: "seller71",
    dateCreated: "2023-02-05 09:35:20",
  },
  {
    id: 6,
    location: "PL",
    description: "✅🔥8K Super HQ Combo Full Data Poland - Private And High Quality [with SQL injection Link - not checked] $🔥",
    niche: "N\\A",
    website: "Fresh Combo Full Data✅🔥",
    provider: "🔥Combo Full Date🔥",
    password: "No",
    emailsNumber: "8.0K",
    price: 28.00,
    seller: "seller71",
    dateCreated: "2022-12-18 15:47:03",
  },
  {
    id: 7,
    location: "NL",
    description: "✅🔥5K Super HQ Combo Full Data Netherlands - Private And High Quality [with SQL injection Link - not checked] $🔥",
    niche: "N\\A",
    website: "Fresh Combo List Full Data✅🔥",
    provider: "✅🔥Combo Full Date $🔥",
    password: "No",
    emailsNumber: "5.0K",
    price: 22.00,
    seller: "seller71",
    dateCreated: "2023-01-11 10:20:44",
  },
];

const SortIcon = () => (
  <span className="inline-flex flex-col leading-[1] ml-0.5 text-gray-400 align-middle" style={{ fontSize: 9 }}>
    <span>↑</span>
    <span>↓</span>
  </span>
);

export default function FullDataPage() {
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [type, setType] = useState("full-data");
  const [country, setCountry] = useState("all");
  const [seller, setSeller] = useState("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const filtered = leadData.filter(row => {
    if (description && !row.description.toLowerCase().includes(description.toLowerCase())) return false;
    if (provider && !row.provider.toLowerCase().includes(provider.toLowerCase())) return false;
    if (country !== "all" && row.location !== country) return false;
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
          Leads - Full Data
        </h1>

        {/* Info box */}
        <div className="bg-[#d1ecf1] border border-[#bee5eb] text-[#0c5460] rounded px-4 py-3 mb-5 text-sm">
          <ul className="list-disc list-inside space-y-1">
            <li>We Have Fresh E-mails Lists for Diffrents Countries ( You Can Use it for Marketing or anything else ).</li>
            <li>Our E-mails Lists Guarante for you Good results because most of them are from Shops and Big Sites .</li>
            <li>Combo use for cracking (Brute forcing attack) not use for login to email</li>
            <li>There is 33 Full Data Lists Available.</li>
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
                onChange={e => setDescription(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Provider:</label>
              <input
                type="text"
                value={provider}
                onChange={e => setProvider(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-36 bg-white focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">type:</label>
              <select
                value={type}
                onChange={e => setType(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-52 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="checked-email-list">100% Checked Email list</option>
                <option value="email-only">Email Only</option>
                <option value="combo-email-password">Combo Email:Password</option>
                <option value="combo-username-password">Combo Username:Password</option>
                <option value="email-access">Email Access</option>
                <option value="combo-email-hash">Combo Email:Hash</option>
                <option value="phone-number-only">Phone Number Only</option>
                <option value="combo-phone-password">Combo Phone:Password</option>
                <option value="full-data">Full Data</option>
                <option value="social-media-data">Social Media Data</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Country:</label>
              <select
                value={country}
                onChange={e => setCountry(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-44 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All Countries</option>
                <option value="ES">Spain</option>
                <option value="WO">Worldwide</option>
                <option value="PL">Poland</option>
                <option value="NL">Netherlands</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Seller:</label>
              <select
                value={seller}
                onChange={e => setSeller(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1.5 text-sm w-24 bg-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All</option>
                <option value="seller71">seller71</option>
                <option value="seller30">seller30</option>
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded text-sm font-medium flex items-center gap-1.5 self-end">
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
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Location <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Description <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Niche <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Website <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Provider <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Password <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 whitespace-pre-line">{"Emails\nNumber"} <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Proof <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Price <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Seller <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50">Buy <SortIcon /></th>
                <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 align-bottom cursor-pointer hover:bg-gray-50 whitespace-pre-line">{"Date\nCreated"} <SortIcon /></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr
                  key={row.id}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                >
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    <span className="mr-1 text-base">{flagMap[row.location] ?? "🌍"}</span>
                    <span className="font-medium text-gray-800 text-xs">{row.location}</span>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 max-w-[220px] leading-relaxed">{row.description}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-500 whitespace-nowrap">{row.niche}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-700">{row.website}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-700">{row.provider}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">{row.password}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">{row.emailsNumber}</td>
                  <td className="px-3 py-2.5">
                    <button  onClick={() =>
                        alert("Please deposit money to use service!")
                      }  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium whitespace-nowrap">
                      View Proof
                    </button>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-gray-700 whitespace-nowrap">{row.price.toFixed(2)}</td>
                  <td className="px-3 py-2.5 text-xs text-gray-600 whitespace-nowrap">{row.seller}</td>
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
                  <td colSpan={12} className="px-3 py-8 text-center text-sm text-gray-400">No results found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
