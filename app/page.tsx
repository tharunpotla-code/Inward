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
      if (error) setError(error.message);
      else setVendors(data || []);
      setLoading(false);
    }
    fetchVendors();
  }, []);

  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans">
      <aside className="w-72 bg-gray-50 border-r border-gray-200 min-h-screen p-4">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b">
          <Image src="/logo.png" alt="HomeRun" width={40} height={40} className="rounded-md" />
          <h1 className="text-lg font-semibold">HomeRun</h1>
        </div>
        <div className="space-y-3">
          <Link href="/"><div className="border-2 border-l-8 border-yellow-400 bg-yellow-50 hover:bg-yellow-100 rounded-xl px-4 py-3 cursor-pointer font-semibold">Home</div></Link>
          <Link href="/our-locations"><div className="border-2 border-l-8 border-blue-400 bg-blue-50 hover:bg-blue-100 rounded-xl px-4 py-3 cursor-pointer font-semibold">Our Locations</div></Link>
          <div className="border-2 border-l-8 border-green-400 bg-green-100 rounded-xl px-4 py-3 font-semibold">Vendors Locations</div>
          <Link href="/printer-problems"><div className="border-2 border-l-8 border-purple-400 bg-purple-50 hover:bg-purple-100 rounded-xl px-4 py-3 cursor-pointer font-semibold">Printer Problems</div></Link>
        </div>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-semibold mb-2">Vendors Locations</h1>
        <p className="text-gray-500 mb-8">Tap a vendor to call or view location.</p>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {vendors.map((v) => (
            <div key={v.id} className="border-2 border-gray-200 rounded-xl p-6 bg-white shadow-sm">
              <h2 className="text-xl font-bold mb-4">{v.Name}</h2>
              <div className="space-y-2">
                <a href={"tel:" + v["Contact number 1"]} className="block text-center border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 rounded-lg px-4 py-2 font-medium">Call {v["Contact number 1"]}</a>
                <a href={"tel:" + v["Contact numer 2"]} className="block text-center border-2 border-blue-300 bg-blue-50 hover:bg-blue-100 rounded-lg px-4 py-2 font-medium">Call {v["Contact numer 2"]}</a>
                <a href={v["Map link"]} target="_blank" rel="noopener noreferrer" className="block text-center border-2 border-green-300 bg-green-50 hover:bg-green-100 rounded-lg px-4 py-2 font-medium">Open in Maps</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
