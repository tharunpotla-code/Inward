"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });

export default function Home() {
  const [ourLocations, setOurLocations] = useState<any[]>([]);
  const [vendors, setVendors] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    (async () => {
      const { data: locs } = await supabase.from("Our Locations").select("*");
      const { data: vends } = await supabase.from("Vendors").select("*");
      setOurLocations(locs || []);
      setVendors(vends || []);
    })();
    (async () => {
      const L = (await import("leaflet")).default;
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans antialiased">
      <aside className="w-72 bg-gray-50 border-r border-gray-200 min-h-screen p-4">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b">
          <Image src="/logo.png" alt="HomeRun" width={40} height={40} className="rounded-md" />
          <h1 className="text-lg font-semibold">HomeRun</h1>
        </div>
        <div className="space-y-3">
          <div className="border-2 border-l-8 border-yellow-400 bg-yellow-100 rounded-xl px-4 py-3 cursor-pointer"><span className="text-base font-semibold">🏠 Home</span></div>
          <Link href="/vendor-locations"><div className="border-2 border-l-8 border-green-400 bg-green-50 hover:bg-green-100 rounded-xl px-4 py-3 cursor-pointer"><span className="text-base font-semibold">📍 Vendors Locations</span></div></Link>
        </div>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-semibold mb-2">Welcome to HomeRun 👋</h1>
        <p className="text-gray-600 mb-8">India&apos;s Building Material App</p>
        {mounted && (
          <div style={{ height: "600px", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
            <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
              <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {ourLocations.map((loc, i) => (
                <Marker key={`our-${i}`} position={[parseFloat(loc.Latitude), parseFloat(loc.Longitude)]}>
                  <Popup><strong>Our Location</strong><br />{loc.Name}</Popup>
                </Marker>
              ))}
              {vendors.map((v, i) => (
                <Marker key={`vendor-${i}`} position={[parseFloat(v.Latitude), parseFloat(v.Longitude)]}>
                  <Popup><strong>Vendor</strong><br />{v.Name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}
        <div className="mt-6 flex gap-6 text-sm">
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span><span>Our Locations ({ourLocations.length})</span></div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-500"></span><span>Vendors ({vendors.length})</span></div>
        </div>
      </main>
    </div>
  );
}