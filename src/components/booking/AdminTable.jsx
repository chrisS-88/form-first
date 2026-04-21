import { useState } from "react";
import bookings from "../../data/bookings";

export default function AdminTable() {
  const [selected, setSelected] = useState(null);

  // Column
  const [sortBy, setSortBy] = useState("date");

  // Ascending or descending
  const [sortDir, setSortDir] = useState("asc");

  function sortData(data) {
    const sorted = [...data].sort((a, b) => {
      let x = a[sortBy];
      let y = b[sortBy];

      // Normalise for case-insensitive sorting
      if (typeof x === "string") x = x.toLowerCase();
      if (typeof y === "string") y = y.toLowerCase();

      if (x < y) return sortDir === "asc" ? -1 : 1;
      if (x > y) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }

  function handleSort(column) {
    console.log("Clicked:", column);

    if (sortBy === column) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortDir("asc");
    }
  }

  return (
    <>
      <table className="w-full text-left text-sm">
        <thead className="bg-brand-800/60 text-brand-300 uppercase text-xs tracking-wide">
          <tr>
            <th className="px-4 py-3 cursor-pointer hover:text-brand-50" onClick={() => handleSort("name")}>
              Name {sortBy === "name" && (sortDir === "asc" ? "▲" : "▼")}
            </th>

            <th className="px-4 py-3 cursor-pointer hover:text-brand-50" onClick={() => handleSort("service")}>
              Service {sortBy === "service" && (sortDir === "asc" ? "▲" : "▼")}
            </th>

            <th className="px-4 py-3 cursor-pointer hover:text-brand-50" onClick={() => handleSort("date")}>
              Date {sortBy === "date" && (sortDir === "asc" ? "▲" : "▼")}
            </th>

            <th className="px-4 py-3 cursor-pointer hover:text-brand-50" onClick={() => handleSort("time")}>
              Time {sortBy === "time" && (sortDir === "asc" ? "▲" : "▼")}
            </th>

            <th className="px-4 py-3 cursor-pointer hover:text-brand-50" onClick={() => handleSort("status")}>
              Status {sortBy === "status" && (sortDir === "asc" ? "▲" : "▼")}
            </th>

            <th className="px-4 py-3"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-brand-900/30">
          {sortData(bookings).map((b) => (
            <tr key={b.id} className="hover:bg-brand-800/30 transition">
              <td className="px-4 py-3 text-brand-50">{b.name}</td>
              <td className="px-4 py-3 text-brand-300">{b.service}</td>
              <td className="px-4 py-3 text-brand-300">{b.date}</td>
              <td className="px-4 py-3 text-brand-300">{b.time}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium
                    ${b.status === "Confirmed" ? "bg-green-600/20 text-green-400" : ""}
                    ${b.status === "Pending" ? "bg-yellow-600/20 text-yellow-400" : ""}
                    ${b.status === "Cancelled" ? "bg-red-600/20 text-red-400" : ""}
                  `}>
                  {b.status}
                </span>
              </td>
              <td className="px-4 py-3 text-right">
                <button onClick={() => setSelected(b)} className="text-primary hover:underline text-sm">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 p-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelected(null)} />

          <div className="fade-in relative bg-brand-900 border border-brand-700 rounded-lg p-6 w-full max-w-md shadow-xl animate-fadeIn">
            <button className="absolute top-3 right-3 text-brand-400 hover:text-brand-200" onClick={() => setSelected(null)}>
              ✕
            </button>

            <div className="space-y-4 text-sm text-brand-200">
              <h2 className="font-heading text-xl text-brand-50 font-semibold mb-2">Booking Details</h2>

              <hr className="border-brand-800 my-3" />

              <div className="space-y-1">
                <p className="text-brand-400 text-xs uppercase tracking-wide">Booking ID</p>
                <p className="text-brand-50">{selected.id}</p>
              </div>

              <div className="space-y-1">
                <p className="text-brand-400 text-xs uppercase tracking-wide">Name</p>
                <p className="text-brand-50">{selected.name}</p>
              </div>

              <div className="space-y-1">
                <p className="text-brand-400 text-xs uppercase tracking-wide">Email</p>
                <p className="text-brand-50">{selected.email}</p>
              </div>

              <div className="space-y-1">
                <p className="text-brand-400 text-xs uppercase tracking-wide">Service</p>
                <p className="text-brand-50">{selected.service}</p>
              </div>

              <div className="space-y-1">
                <p className="text-brand-400 text-xs uppercase tracking-wide">Date</p>
                <p className="text-brand-50">{selected.date}</p>
              </div>

              <div className="space-y-1">
                <p className="text-brand-400 text-xs uppercase tracking-wide">Time</p>
                <p className="text-brand-50">{selected.time}</p>
              </div>

              <div className="space-y-1">
                <p className="text-brand-400 text-xs uppercase tracking-wide">Status</p>
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${selected.status === "Confirmed" ? "bg-green-600/20 text-green-400" : ""}
                    ${selected.status === "Pending" ? "bg-yellow-600/20 text-yellow-400" : ""}
                    ${selected.status === "Cancelled" ? "bg-red-600/20 text-red-400" : ""}`}>
                  {selected.status}
                </span>
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 w-full bg-brand-800 hover:bg-brand-700 text-brand-200 py-2 rounded transition">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
