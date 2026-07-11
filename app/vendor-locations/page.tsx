"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Vendor = {
  id: number;
  Name: string;
  "Contact number 1": string;
  "Contact numer 2": string;
  "Map link": string;
};

export default function VendorLocations() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVendors() {
      const { data, error } = await supabase.from("Vendors").select("*");
      if (error) {
        setError(error.message);
      } else {
        setVendors(data || []);
      }
      setLoading(false);
    }
    fetchVendors();
  }, []);

  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans antialiased">
      <aside className="w-72 bg-gray-50 border-r border-gray-200 min-h-screen p-4">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b">
          <Image src="/logo.png" alt="HomeRun" width={40} height={40} className="rounded-md" />
          <h1 className="text-lg font-semibold">HomeRun</h1>
        </div>
        <div className="space-y-3">
          <Link href="/">
            <div className="border-2 border-l-8 border-yellow-400 bg-yellow-50 hover:bg-yellow-100 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
              <span className="text-2xl">🏠</span>
              <span className="text-base font-semibold">Home</span>
            </div>
          </Link>
          <div className="border-2 border-l-8 border-green-400 bg-green-100 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
            <span className="text-2xl">📍</span>
            <span className="text-base font-semibold">Vendors Locations</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-semibold mb-2">Vendors Locations 📍</h1>
        <p className="text-gray-600 mb-8">All our vendor partners</p>

        {loading && <p>Loading vendors...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="border-2 border-gray-200 rounded-xl p-5 hover:border-green-400 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-3">{vendor.Name}</h2>
              {vendor["Contact number 1"] && (
                <p className="text-gray-700 mb-1">📞 {vendor["Contact number 1"]}</p>
              )}
              {vendor["Contact numer 2"] && (
                <p className="text-gray-700 mb-3">📞 {vendor["Contact numer 2"]}</p>
              )}
              {vendor["Map link"] && (
                
                  href={vendor["Map link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:underline text-sm"
                >
                  📍 Open in Maps
                </a>
              )}
            </div>
          ))}
        </div>

        {!loading && vendors.length === 0 && !error && (
          <p className="text-gray-500">No vendors found.</p>
        )}
      </main>
    </div>
  );
}