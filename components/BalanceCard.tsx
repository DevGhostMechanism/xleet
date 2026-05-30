export default function BalanceCard() {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 text-sm">
      <ul className="space-y-2">
        <li className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-600">Balance :</span>
          <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
            <span id="buyer_balance">0</span>
          </span>
          <a
            href="/add-balance"
            className="text-blue-600 hover:underline text-xs"
          >
            [Add Funds]
          </a>
        </li>
        <li className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-600">Orders :</span>
          <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
            0
          </span>
          <a href="#" className="text-blue-600 hover:underline text-xs">
            [ Show ]
          </a>
        </li>
        <li className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-600">Tickets :</span>
          <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
            0
          </span>
          <a href="#" className="text-blue-600 hover:underline text-xs">
            [ Show ]
          </a>
        </li>
        <li className="flex items-center gap-2 flex-wrap">
          <span className="text-gray-600">Reports :</span>
          <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
            0
          </span>
          <a href="#" className="text-blue-600 hover:underline text-xs">
            [ Show ]
          </a>
        </li>
      </ul>
    </div>
  );
}
