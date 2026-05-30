"use client";

type Props = { open: boolean; onClose: () => void };

const reasons = ["Payment", "Item Problem", "Report Problem", "Become Seller Request", "Other"];

export default function TicketModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Dialog */}
      <div className="relative bg-white rounded shadow-xl w-full max-w-md mx-4 z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h4 className="font-semibold text-gray-800 text-base flex items-center gap-2">
            Create Support Ticket
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </h4>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl leading-none">&times;</button>
        </div>

        {/* Body */}
        <div className="px-4 py-4">
          <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="Title"
              required
              autoFocus
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <select
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white"
            >
              <option value="">Select Reason</option>
              {reasons.map(r => (
                <option key={r} value={r.toLowerCase().replace(/ /g, "_")}>{r}</option>
              ))}
            </select>
            <textarea
              rows={5}
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-medium"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-gray-200 flex justify-end">
          <button onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
