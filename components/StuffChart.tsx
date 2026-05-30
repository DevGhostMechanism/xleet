"use client";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Cpanels", value: 99287, color: "#007bff" },
  { name: "Leads", value: 34179, color: "#dc3545" },
  { name: "SSH", value: 1165, color: "#ffc107" },
  { name: "RDP", value: 4003, color: "#28a745" },
  { name: "SMTP", value: 17001, color: "#e1297d" },
  { name: "Accounts", value: 32808, color: "#551a8b" },
  { name: "Shells", value: 31858, color: "#2F323C" },
  { name: "Mailers", value: 72, color: "#FF8DB6" },
  { name: "Webmail", value: 714828, color: "#FF8D11" },
];


export default function StuffChart() {
  const lastUpdated = new Date()
    .toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(",", "");

  return (
    <div className="bg-white border border-gray-200 rounded flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-gray-50">
        <svg
          className="w-4 h-4 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
        <span className="font-semibold text-gray-700 text-sm">Our Stuff</span>
      </div>

      {/* Legend */}
      <div className="px-4 pt-3 grid grid-cols-2 gap-x-3 gap-y-1">
        {data.map((d) => (
          <div
            key={d.name}
            className="flex items-center gap-1.5 text-xs text-gray-700"
          >
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ backgroundColor: d.color }}
            />
            <span>
              {d.name} [{d.value.toLocaleString()}]
            </span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ height: 240 }} className="px-2 mt-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="35%"
              outerRadius="65%"
              dataKey="value"
              labelLine={false}
            >
              {data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.color}
                  stroke="white"
                  strokeWidth={1}
                />
              ))}
            </Pie>
            <Tooltip formatter={(v) => [Number(v).toLocaleString()]} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-gray-100 text-xs text-gray-400 text-right mt-auto">
        Last Updated at {lastUpdated}
      </div>
    </div>
  );
}
