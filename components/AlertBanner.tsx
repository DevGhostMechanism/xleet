"use client";
import { useState } from "react";

export default function AlertBanner() {
  const [visible, setVisible] = useState(true);
  const onionAddress = "xleetg4krpki4irlaelwacpfhfxnhpizuipxc7f3aztu7265fqvinfad.onion";
  const torUrl = "https://www.torproject.org/download/";

  const copy = (text: string) => navigator.clipboard.writeText(text).catch(() => {});

  if (!visible) return null;

  return (
    <div className="bg-[#d4edda] border border-[#c3e6cb] text-[#155724] text-sm px-4 py-3 relative">
      <button onClick={() => setVisible(false)}
        className="absolute top-2 right-3 text-[#155724] hover:text-black text-xl leading-none font-bold">
        ×
      </button>

      <p className="pr-6">
        📢 <strong>For All Customers</strong> : Due to ongoing issues with domain availability, we recommend using a{" "}
        <strong>Tor</strong> .onion address as an alternative.
      </p>

      <div className="flex items-center gap-2 mt-1 flex-wrap">
        <span id="website_tor_url" className="font-bold break-all">{onionAddress}</span>
        <button onClick={() => copy(onionAddress)}
          className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
          Copy 📋
        </button>
      </div>

      <p className="mt-1">Please install the Tor Browser to access the site via its onion address.</p>

      <div className="flex items-center gap-2 mt-1 flex-wrap">
        <span id="tor_project_url" className="font-bold">{torUrl}</span>
        <button onClick={() => copy(torUrl)}
          className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
          Copy 📋
        </button>
      </div>

      <p className="mt-1 font-bold">Please Save It.</p>
    </div>
  );
}
