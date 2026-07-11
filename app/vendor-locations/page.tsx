"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function VendorLocations() {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVendors() {
      const { data } = await supabase.from("Vendors").select("*");
      setVendors(data || []);
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
        <h1 className="text-4xl font-semibold mb-2">Vendors Locations</h1>
        <p className="text-gray-600 mb-8">All our vendor partners</p>

        {loading && <p>Loading vendors...</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vendors.map((vendor, i) => {
            const contact1 = vendor["Contact number 1"];
            const contact2 = vendor["Contact numer 2"];
            const mapLink = vendor["Map link"];
            return (
              <div key={i} className="border-2 border-gray-200 rounded-xl p-5">
                <h2 className="text-xl font-semibold mb-3">{vendor.Name}</h2>
                {contact1 && <p className="text-gray-700 mb-1">Contact: {contact1}</p>}
                {contact2 && <p className="text-gray-700 mb-3">Contact: {contact2}</p>}
                {mapLink && (
                  
                    href={mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Open in Maps
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {!loading && vendors.length === 0 && (
          <p className="text-gray-500">No vendors found.</p>
        )}
      </main>
    </div>
  );
}