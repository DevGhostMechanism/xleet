type Props = { onOpenTicket: () => void };

export default function WelcomeCard({ onOpenTicket }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded p-4 text-sm text-gray-700">
      <p className="mb-2">
        Hello <strong>User</strong>
      </p>
      <p className="mb-3">
        If you have any Question ,Problem, Suggestion or Request Please feel
        free to Open a
      </p>
      <button
        onClick={onOpenTicket}
        className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1.5 rounded inline-flex items-center gap-1.5 mb-3"
      >
        New Ticket
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </button>

      <p className="mb-2">
        if you want to report an order , just go to{" "}
        <a href="#" className="text-blue-600 hover:underline">
          My Orders
        </a>{" "}
        then click on Report #[Order Id] button.
      </p>
      <p className="mb-3">
        Our Domains are xleet.website || xleet.cc || xleet.la || xleet.io ||
        xleet.site || xleet.pw || xleet.sh || xleet.es || xleet.ax || xleet.pro
        - Please Save them!
      </p>
      <a
        href=""
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1.5 rounded inline-flex items-center gap-1.5"
      >
        Terms Of Service
      </a>
    </div>
  );
}
