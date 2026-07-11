"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

export default function HomeMap({ ourLocations, vendors }: any) {
  useEffect(() => {
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
    <div style={{ height: "600px", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "100%", width: "100%" }}>
        <TileLayer attribution="© OpenStreetMap" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {ourLocations.map((loc: any, i: number) => (
          <Marker key={`our-${i}`} position={[parseFloat(loc.Latitude), parseFloat(loc.Longitude)]}>
            <Popup><strong>Our Location</strong><br />{loc.Name}</Popup>
          </Marker>
        ))}
        {vendors.map((v: any, i: number) => (
          <Marker key={`vendor-${i}`} position={[parseFloat(v.Latitude), parseFloat(v.Longitude)]}>
            <Popup><strong>Vendor</strong><br />{v.Name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}