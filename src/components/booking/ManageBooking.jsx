import { useState } from "react";

export default function ManageBooking() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const MOCK_BOOKINGS = [
    {
      id: "ABC123",
      email: "john@example.com",
      service: "Strength Training",
      date: "18/04/2026",
      time: "16:00",
      name: "John Smith",
    },
    {
      id: "XYZ456",
      email: "sarah@example.com",
      service: "Mobility & Recovery",
      date: "21/04/2026",
      time: "14:00",
      name: "Sarah Harding",
    },
    {
      id: "ABC456",
      email: "chris@example.com",
      service: "Conditioning",
      date: "19/04/2026",
      time: "10:30",
      name: "Chris Smart",
    },
    {
      id: "XYZ123",
      email: "natasha@example.com",
      service: "Conditioning",
      date: "24/04/2026",
      time: "09:00",
      name: "Natasha Forrest",
    },
  ];

  const search = () => {
    setSearched(true);
    setLoading(true);
    setQuery("");

    const cleaned = query.trim().toLowerCase();

    setTimeout(() => {
      const found = MOCK_BOOKINGS.find((b) => b.email.toLowerCase() === cleaned || b.id.toLowerCase() === cleaned);
      setResult(found || null);
      setLoading(false);
    }, [1800]);
  };

  return (
    <div className="max-w-md mx-auto px-6 py-10 space-y-8">
      <a href="/" className="text-brand-50/50 hover:text-brand-50/80 text-sm flex justify-end gap-2 transition">
        ← Back to Home
      </a>

      <div>
        <h1 className="text-2xl font-semibold">Manage your booking</h1>
        <p className="text-brand-50/60 mt-1">Look up an existing booking</p>
      </div>

      <div className="space-y-3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search()}
          placeholder="Enter your booking email or booking ID"
          className="user-input"
        />

        <p className="text-brand-50/60 text-sm leading-relaxed">Try: john@example.com or ABC123 / sarah@example.com or XYZ456</p>

        <button onClick={search} className="w-full px-4 py-2 text-sm rounded-lg bg-brand-50/5 hover:bg-brand-50/10 transition">
          Search
        </button>
      </div>

      <div>
        {!searched && <p className="text-center text-brand-50/60">Enter your email or booking ID to begin</p>}

        {loading && <p className="text-center blink">Searching...</p>}

        {searched && !loading && !result && <p className="text-center">No booking found</p>}

        {result && (
          <div className="fade-in mt-4 rounded-2xl border border-brand-50/10 bg-brand-50/5 backdrop-blur-sm p-6 space-y-5 shadow-lg shadow-black/20">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-brand-50/60">Session</p>
              <p className="text-lg font-semibold text-brand-50">{result.service}</p>
            </div>

            <div className="h-px bg-brand-50/10" />

            <div className="flex justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-brand-50/60">Date</p>
                <p className="text-brand-50 font-medium">{result.date}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-brand-50/60">Time</p>
                <p className="text-brand-50 font-medium">{result.time}</p>
              </div>
            </div>

            <div className="h-px bg-brand-50/10" />

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wide text-brand-50/60">Booked By</p>
              <p className="text-brand-50 font-medium">{result.name}</p>
              <p className="text-brand-50/70 text-sm">{result.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
