import Link from "next/link";
import Image from "next/image";

export default function SellerCard() {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 text-sm text-gray-700">
      <p className="mb-3">
        Interested in becoming a <strong>Seller ₿</strong> at xleet Shop ?
      </p>
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded inline-flex items-center gap-1.5 mb-4"
      >
        <strong>Become a Seller ₿</strong>
      </a>

      <p className="mb-2">Available Payment Methods</p>
      <div className="flex items-center gap-2 flex-wrap">
        <Link href="/add-balance">
          <Image
            src="/assets/img/BTC_Logo.png"
            alt="Bitcoin"
            title="Bitcoin"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <Link href="/add-balance">
          <Image
            src="/assets/img/eth.png"
            alt="Ethereum"
            title="Ethereum"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <Link href="/add-balance">
          <Image
            src="/assets/img/usdt_trc20_logo.png"
            alt="USDT Trc20"
            title="USDT Trc20"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>
      </div>
    </div>
  );
}
