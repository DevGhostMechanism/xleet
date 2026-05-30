"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import AlertBanner from "@/components/AlertBanner";
import WelcomeCard from "@/components/WelcomeCard";
import BalanceCard from "@/components/BalanceCard";
import SellerCard from "@/components/SellerCard";
import NewsSection from "@/components/NewsSection";
import TicketModal from "@/components/TicketModal";
import AlertNewUser from "@/components/AlertNewUser";

const StuffChart = dynamic(() => import("@/components/StuffChart"), {
  ssr: false,
});

export default function Home() {
  const [ticketOpen, setTicketOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navbar />
      <br />

      <AlertBanner />
      <AlertNewUser />

      <main className="flex-1 w-full px-3 py-4 flex flex-col gap-4">
        {/* Row 1: col-lg-6 / col-lg-3 / col-lg-3 */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6">
            <WelcomeCard onOpenTicket={() => setTicketOpen(true)} />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <BalanceCard />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <SellerCard />
          </div>
        </div>

        {/* Row 2: col-lg-8 / col-lg-4 */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8">
            <NewsSection />
          </div>
          <div className="col-span-12 lg:col-span-4">
            <StuffChart />
          </div>
        </div>
      </main>

      <TicketModal open={ticketOpen} onClose={() => setTicketOpen(false)} />
    </div>
  );
}
