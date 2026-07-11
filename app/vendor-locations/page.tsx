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
    supabase.from("Vendors").select("*").then(({ data }) => {
      setVendors(data || []);
      setLoading(false);
    });
  }, []);

  const filtered = vendors.filter((v) => v.Name?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans antialiased">
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen p-3">
        <div className="p-3 mb-4 border-b flex items-center gap-3">
          <Image src="/logo.png" alt="HomeRun" width={36} height={36} className="rounded-md" />
          <h1 className="text-lg font-semibold">HomeRun</h1>
        </div>
        <div className="space-y-2">
          <Link href="/">
            <div className="border-l-4 border-yellow-400 bg-yellow-50 hover:bg-yellow-100 rounded-md px-3 py-2.5 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">🏠</span>
              <span className="text-sm font-semibold">Home</span>
            </div>
          </Link>
          <Link href="/our-locations">
            <div className="border-l-4 border-blue-400 bg-blue-50 hover:bg-blue-100 rounded-md px-3 py-2.5 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">🏢</span>
              <span className="text-sm font-semibold">Our Locations</span>
            </div>
          </Link>
          <div className="border-l-4 border-green-500 bg-green-100 rounded-md px-3 py-2.5 flex items-center gap-3 cursor-pointer ring-2 ring-green-300">
            <span className="text-xl">📍</span>
            <span className="text-sm font-semibold">Vendors Locations</span>
          </div>
          <Link href="/printer-problems">
            <div className="border-l-4 border-purple-400 bg-purple-50 hover:bg-purple-100 rounded-md px-3 py-2.5 flex items-center gap-3 cursor-pointer">
              <span className="text-xl">🖨️</span>
              <span className="text-sm font-semibold">Printer Problems</span>
            </div>
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-2">Vendors Locations</h1>
        <p className="text-gray-500 text-sm mb-6">{filtered.length} of {vendors.length} vendors</p>
        <input type="text" placeholder="Search vendors..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full max-w-md mb-6 px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-green-500" />
        {loading ? <p>Loading...</p> : filtered.length === 0 ? <p className="text-gray-500">No vendors found</p> : (
          <div className="space-y-3">
            {filtered.map((v) => (
              <div key={v.id} className="border rounded-xl p-5 flex items-center justify-between gap-4 hover:shadow-sm">
                <h2 className="text-base font-semibold flex-1 truncate">{v.Name}</h2>
                <div className="flex-1 text-sm text-gray-600">
                  <div>{v["Contact number 1"]}</div>
                  {v["Contact numer 2"] && <div>{v["Contact numer 2"]}</div>}
                </div>
                {v["Map link"] && <a href={v["Map link"]} target="_blank" className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg">📍 Go to Map</a>}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
