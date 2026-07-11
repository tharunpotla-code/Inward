"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function VendorLocations() {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchVendors() {
      const { data, error } = await supabase.from("Vendors").select("*");
      if (error) console.error(error);
      else setVendors(data || []);
      setLoading(false);
    }
    fetchVendors();
  }, []);

  const filtered = vendors.filter((v) =>
    v.Name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex bg-white text-gray-800 font-sans">
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Image src="/logo.png" alt="HomeRun" width={36} height={36} className="rounded-md" />
          <h1 className="text-lg font-bold text-gray-900">HomeRun</h1>
        </div>
        <nav className="p-2 space-y-1 flex-1">
          <Link href="/">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 text-sm font-medium cursor-pointer">
              <span>🏠</span><span>Home</span>
            </div>
          </Link>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-yellow-200 text-gray-900 text-sm font-medium">
            <span>📍</span><span>Vendors Locations</span>
          </div>
          <Link href="/printer-problems">
            <div className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 text-sm font-medium cursor-pointer">
              <span>🖨️</span><span>Printer Problems</span>
            </div>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2">Vendors Locations 📍</h1>
        <p className="text-gray-600 text-sm mb-6">{filtered.length} of {vendors.length} vendors</p>
        <input
          type="text"
          placeholder="🔍 Search vendors by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
        />
        {loading ? (
          <p>Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="text-gray-500">No vendors found</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v) => (
              <div key={v.id} className="border border-gray-200 rounded-lg p-5">
                <h2 className="text-lg font-bold mb-3">{v.Name}</h2>
                <p className="text-sm text-gray-600 mb-1">📞 {v["Contact number 1"]}</p>
                {v["Contact numer 2"] && <p className="text-sm text-gray-600 mb-3">📞 {v["Contact numer 2"]}</p>}
                {v["Map link"] && (
                  <a href={v["Map link"]} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700">
                    🗺️ Go to Map
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
