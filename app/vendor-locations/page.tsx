"use client";
import Link from "next/link";
import Image from "next/image";

export default function OurLocations() {
  return (
    <div className="min-h-screen flex bg-white text-gray-900 font-sans antialiased">
      <aside className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b flex items-center gap-3">
          <Image src="/logo.png" alt="HomeRun" width={36} height={36} className="rounded-md" />
          <h1 className="text-lg font-semibold">HomeRun</h1>
        </div>
        <nav className="p-2 space-y-1">
          <Link href="/"><div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 text-sm cursor-pointer">🏠 Home</div></Link>
          <Link href="/vendor-locations"><div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 text-sm cursor-pointer">📍 Vendors Locations</div></Link>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md bg-yellow-200 text-sm">🏢 Our Locations</div>
          <Link href="/printer-problems"><div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200 text-sm cursor-pointer">🖨️ Printer Problems</div></Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-2">Our Locations</h1>
        <p className="text-gray-500 text-sm mb-6">Coming soon...</p>
      </main>
    </div>
  );
}
