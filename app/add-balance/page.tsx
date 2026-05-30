"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import AlertBanner from "@/components/AlertBanner";

export default function AddBalancePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"addBalance" | "deposits">(
    "addBalance",
  );
  const [method, setMethod] = useState("btc");
  const [amount, setAmount] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const numeric = Number(amount);
    if (!amount || numeric < 50) {
      alert("Please deposit at least $50");
      return;
    }
    router.push(`/make-payment?amount=${numeric}&method=${method}`);
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <AlertBanner />

      <main className="flex-1 w-full px-4 py-6">
        {/* Page title */}
        <div className="text-center mb-5">
          <h1 className="text-2xl font-semibold text-gray-800">Add Balance</h1>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab("addBalance")}
            className={`px-4 py-1.5 rounded text-sm font-medium border transition-colors ${
              activeTab === "addBalance"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            Add balance
          </button>
          <button
            onClick={() => setActiveTab("deposits")}
            className={`px-4 py-1.5 rounded text-sm font-medium border transition-colors ${
              activeTab === "deposits"
                ? "bg-gray-600 text-white border-gray-600"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            All Deposits History
          </button>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Tab: Deposits History */}
        {activeTab === "deposits" && (
          <div className="text-center text-gray-500 py-12 text-sm">
            No deposit history available.
          </div>
        )}

        {/* Tab: Add Balance */}
        {activeTab === "addBalance" && (
          <div className="max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Form */}
              <div className="bg-white border border-gray-200 rounded p-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Method */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1 font-medium">
                      Method
                    </label>
                    <select
                      name="method"
                      value={method}
                      onChange={(e) => setMethod(e.target.value)}
                      size={3}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white"
                    >
                      <option value="btc">Bitcoin ₿</option>
                      <option value="eth">ETH </option>

                      <option value="usdt_trc">USDT [Trc20]</option>
                    </select>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1 font-medium">
                      Amount
                    </label>
                    <input
                      type="number"
                      placeholder="50"
                      name="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      min="50"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium w-fit"
                  >
                    Add Balance
                  </button>
                </form>
              </div>

              {/* Right: Info panel */}
              <div className="bg-white border border-gray-200 rounded p-4">
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mb-4">
                  <li>
                    After payment funds will be added automatically to your
                    account <strong>INSTANTLY</strong>.
                  </li>
                  <li>
                    <strong>Bitcoin</strong>/<strong>USDT</strong> is a secure
                    way to fund your account.
                  </li>
                  <li>Min/Max is 50 USD/5000 USD for BTC &amp; ETH</li>
                  <li>Min/Max is 50 USD/5000 USD for USDT</li>
                </ul>

                <p className="text-sm text-gray-700 mb-2">
                  Available Payment Methods
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <Link href="/add-balance">
                    <Image
                      src="/assets/img/BTC_Logo.png"
                      alt="Bitcoin"
                      title="Bitcoin"
                      width={48}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                   <Link href="/add-balance">
                    <Image
                      src="/assets/img/eth.png"
                      alt="Ethereum"
                      title="Ethereum"
                      width={48}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                  <Link href="/add-balance">
                    <Image
                      src="/assets/img/usdt_trc20_logo.png"
                      alt="USDT Trc20"
                      title="USDT Trc20"
                      width={48}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                </div>
              </div>
              {/* the other side for wallet */}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
