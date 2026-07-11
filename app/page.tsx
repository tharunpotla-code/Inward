"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const [ourLocations, setOurLocations] = useState<any[]>([]);
  const [vendors, setVendors] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const { data: locs } = await supabase.from("Our Locations").select("*");
      const { data: vends } = await supabase.from("Vendors").select("*");
      setOurLocations(locs || []);
      setVendors(vends || []);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans antialiased">
      <aside className="w-72 bg-gray-50 border-r border-gray-200 min-h-screen p-4">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b">
          <Image src="/logo.png" alt="HomeRun" width={40} height={40} className="rounded-md" />
          <h1 className="text-lg font-semibold">HomeRun</h1>
        </div>
        <div className="space-y-3">
          <div className="border-2 border-l-8 border-yellow-400 bg-yellow-100 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
            <span className="text-2xl">🏠</span>
            <span className="text-base font-semibold">Home</span>
          </div>
          <Link href="/vendor-locations">
            <div className="border-2 border-l-8 border-green-400 bg-green-50 hover:bg-green-100 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
              <span className="text-2xl">📍</span>
              <span className="text-base font-semibold">Vendors Locations</span>
            </div>
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-10">
        <h1 className="text-4xl font-semibold mb-2">Welcome to HomeRun 👋</h1>
        <p className="text-gray-600 mb-8">India&apos;s Building Material App</p>

        {!isLoaded ? (
          <div>Loading map...</div>
        ) : (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "600px", borderRadius: "12px" }}
            center={{ lat: 20.5937, lng: 78.9629 }}
            zoom={5}
            mapTypeId="satellite"
          >
            {ourLocations.map((loc, i) => (
              <Marker
                key={`our-${i}`}
                position={{ lat: parseFloat(loc.Latitude), lng: parseFloat(loc.Longitude) }}
                icon={{ url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png" }}
                onClick={() => setSelected({ ...loc, type: "Our Location" })}
              />
            ))}
            {vendors.map((v, i) => (
              <Marker
                key={`vendor-${i}`}
                position={{ lat: parseFloat(v.Latitude), lng: parseFloat(v.Longitude) }}
                icon={{ url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png" }}
                onClick={() => setSelected({ ...v, type: "Vendor" })}
              />
            ))}
            {selected && (
              <InfoWindow
                position={{ lat: parseFloat(selected.Latitude), lng: parseFloat(selected.Longitude) }}
                onCloseClick={() => setSelected(null)}
              >
                <div style={{ color: "black" }}>
                  <strong>{selected.type}</strong>
                  <p>{selected.Name}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}

        <div className="mt-6 flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span>Our Locations ({ourLocations.length})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span>Vendors ({vendors.length})</span>
          </div>
        </div>
      </main>
    </div>
  );
}