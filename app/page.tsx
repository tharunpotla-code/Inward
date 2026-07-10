"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-white text-gray-800 font-sans">
      
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen flex flex-col">
        
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="HomeRun Logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <h1 className="text-lg font-bold text-gray-900">HomeRun</h1>
        </div>

        <nav className="p-2 space-y-1 flex-1">
          
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-yellow-200 text-gray-900 text-sm font-medium">
            <span className="text-base">🏠</span>
            <span>Home</span>
          </button>

          <Link href="/vendor-locations">
            <div className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 text-sm font-medium cursor-pointer">
              <span className="text-base">📍</span>
              <span>Vendors Locations</span>
            </div>
          </Link>

          <Link href="/printer-problems">
            <div className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-200 text-sm font-medium cursor-pointer">
              <span className="text-base">🖨️</span>
              <span>Printer Problems</span>
            </div>
          </Link>

        </nav>

      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to HomeRun 👋</h1>
        <p className="text-gray-600 text-sm">
          Select an option from the sidebar to get started.
        </p>
      </main>

    </div>
  );
}
