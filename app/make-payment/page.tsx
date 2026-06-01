"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";

const WALLETS: Record<string, string> = {
  btc: "bc1qzu77y6g0xwgvrsv7jq9gznyflr5ej23r4w74n8",
  eth: "0x4222CB1B6B6d574c14f2855483B8d80A09f4f0BE",
  usdt_trc: "TSNZ8A9KH4LCv94wTtRSx2EnkMNJJNhMCc",
};

const METHOD_LABELS: Record<string, string> = {
  btc: "Bitcoin",
  eth: "Ethereum",
  usdt_trc: "USDT (TRC20)",
};

const COIN_IDS: Record<string, string> = {
  btc: "bitcoin",
  eth: "ethereum",
  usdt_trc: "tether",
};

const COIN_SYMBOLS: Record<string, string> = {
  btc: "BTC",
  eth: "ETH",
  usdt_trc: "USDT",
};

const QR_IMAGES: Record<string, string> = {
  btc: "/assets/btc.jpeg",
  eth: "/assets/ETH.jpeg",
  usdt_trc: "/assets/USDT.jpeg",
};

function formatDateTime(d: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function PaymentContent() {
  const searchParams = useSearchParams();
  const amountUsd = Number(searchParams.get("amount") || 0);
  const method = searchParams.get("method") || "btc";

  const [copiedAmount, setCopiedAmount] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [rate, setRate] = useState<number | null>(null);
  const [lastChecked, setLastChecked] = useState("");

  const walletAddress = WALLETS[method] ?? WALLETS.btc;
  const methodLabel = METHOD_LABELS[method] ?? "Bitcoin";
  const coinSymbol = COIN_SYMBOLS[method] ?? "BTC";
  const coinId = COIN_IDS[method] ?? "bitcoin";
  const qrImage = QR_IMAGES[method] ?? QR_IMAGES.btc;

  const cryptoAmount =
    rate && amountUsd > 0 ? (amountUsd / rate).toFixed(8) : "0.00000000";

  useEffect(() => {
    let cancelled = false;

    async function fetchRate() {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`,
          { cache: "no-store" }
        );
        const data = await res.json();
        const fetched = data[coinId]?.usd;
        if (!cancelled && fetched) setRate(fetched);
      } catch {
        // keep previous rate on error
      }
      if (!cancelled) setLastChecked(formatDateTime(new Date()));
    }

    fetchRate();
    const id = setInterval(fetchRate, 60_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [coinId]);

  function copyToClipboard(text: string, which: "amount" | "address") {
    navigator.clipboard.writeText(text).then(() => {
      if (which === "amount") {
        setCopiedAmount(true);
        setTimeout(() => setCopiedAmount(false), 1500);
      } else {
        setCopiedAddress(true);
        setTimeout(() => setCopiedAddress(false), 1500);
      }
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 w-full px-6 py-8">
        <h1 className="text-3xl font-normal text-center text-gray-800 mb-10">
          Payment Page
        </h1>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* ── Left panel ── */}
          <div className="flex flex-col gap-6 min-w-[260px]">
            {/* QR code placeholder */}
            <div className="w-48 h-48 border-2 border-gray-300 flex items-center justify-center bg-gray-50 shrink-0">
              <img
                src={qrImage}
                alt="QR Code"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (
                    e.currentTarget.nextSibling as HTMLElement
                  ).style.display = "flex";
                }}
              />
              <span className="text-xs text-gray-400 hidden w-full h-full items-center justify-center">
                QR Code
              </span>
            </div>

            {/* Payment details */}
            <div className="flex flex-col gap-4 text-sm text-gray-700">
              <p>
                <span className="font-medium">Method :</span> {methodLabel}
              </p>

              {/* Amount row */}
              <div className="flex flex-wrap items-center gap-2">
                <span>Send exactly</span>
                <span className="bg-teal-500 text-white text-xs px-2 py-0.5 rounded font-mono">
                  {cryptoAmount}
                </span>
                <button
                  onClick={() => copyToClipboard(cryptoAmount, "amount")}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded flex items-center gap-1"
                >
                  {copiedAmount ? "Copied!" : "Copy"}
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </button>
                <span>{coinSymbol} to:</span>
              </div>

              {/* Address row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded font-mono break-all">
                  {walletAddress}
                </span>
                <button
                  onClick={() => copyToClipboard(walletAddress, "address")}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded flex items-center gap-1 shrink-0"
                >
                  {copiedAddress ? "Copied!" : "Copy"}
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </button>
              </div>

              {/* Status fields */}
              <div className="flex flex-col gap-2 mt-1">
                <div className="flex items-center gap-3">
                  <span className="w-28 text-gray-600">State</span>
                  <span className="text-gray-500">:</span>
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded font-medium">
                    Not Paid
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-28 text-gray-600">Loaded {coinSymbol}</span>
                  <span className="text-gray-500">:</span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded font-mono">
                    0.00000000
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-28 text-gray-600">Last Checked</span>
                  <span className="text-gray-500">:</span>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded font-mono">
                    {lastChecked || "Fetching…"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right panel — instructions ── */}
          <div className="flex-1 border border-gray-200 rounded bg-white px-6 py-5 text-sm text-gray-700 leading-relaxed">
            <ul className="space-y-2 list-disc list-inside">
              <li>DO NOT CLOSE THIS PAGE</li>
              <li>Please wait for at least 1 confirmation</li>
              <li>For high amounts please include high fees</li>
              <li>
                {methodLabel} to USD rate is{" "}
                <strong>{rate ? rate.toLocaleString() : "…"}$</strong>{" "}
                (according to CoinGecko)
              </li>
              <li>Our {methodLabel} addresses are SegWit-enabled</li>
              <li>This page will be only valid for 2 hours</li>
              <li>
                Make sure that you send exactly {cryptoAmount} {coinSymbol}
              </li>
              <li>
                Do Not try to Send Less than {cryptoAmount} {coinSymbol} — it
                will not work and the transaction may fail
              </li>
              <li>
                After payment an amount of{" "}
                <strong>{amountUsd}$</strong> will be added to your account
              </li>
              <li>
                Please double-check the copied {methodLabel} address is{" "}
                <span className="text-orange-500 font-medium break-all">
                  {walletAddress}
                </span>{" "}
                before sending payment!
              </li>
              <li>
                If any error happened or money didn&apos;t show please{" "}
                <a
                  href="#"
                  className="text-blue-500 hover:underline inline-flex items-center gap-1"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Open a Ticket
                </a>{" "}
                Fast
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function MakePaymentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-500 text-sm">
          Loading payment details…
        </div>
      }
    >
      <PaymentContent />
    </Suspense>
  );
}
