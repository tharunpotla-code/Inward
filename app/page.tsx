"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex bg-white text-gray-800 font-sans">
      <aside className="w-72 bg-gray-50 border-r border-gray-200 min-h-screen flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Image src="/logo.png" alt="HomeRun Logo" width={40} height={40} className="rounded-md" />
          <h1 className="text-xl font-bold text-gray-900">HomeRun</h1>
        </div>
        <nav className="p-4 space-y-3 flex-1">
          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-xl bg-yellow-100 border-2 border-yellow-400 text-gray-900 text-base font-semibold">
            <span className="text-2xl">🏠</span>
            <span>Home</span>
          </button>

          <Link href="/our-locations">
            <div className="w-full flex items-center gap-3 px-4 py-4 rounded-xl bg-blue-50 border-2 border-blue-300 text-gray-900 text-base font-semibold cursor-pointer hover:bg-blue-100">
              <span className="text-2xl">🏢</span>
              <span>Our Locations</span>
            </div>
          </Link>

          <Link href="/vendor-locations">
            <div className="w-full flex items-center gap-3 px-4 py-4 rounded-xl bg-green-50 border-2 border-green-300 text-gray-900 text-base font-semibold cursor-pointer hover:bg-green-100">
              <span className="text-2xl">📍</span>
              <span>Vendors Locations</span>
            </div>
          </Link>

          <Link href="/printer-problems">
            <div className="w-full flex items-center gap-3 px-4 py-4 rounded-xl bg-purple-50 border-2 border-purple-300 text-gray-900 text-base font-semibold cursor-pointer hover:bg-purple-100">
              <span className="text-2xl">🖨️</span>
              <span>Printer Problems</span>
            </div>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-12">
        <h1 className="text-4xl font-bold mb-2">Welcome to HomeRun 👋</h1>
        <p className="text-gray-600 text-base mb-6">
          India&apos;s Building Material App
        </p>
        <p className="text-gray-600 text-base">
          Select an option from the sidebar to get started.
        </p>
      </main>
    </div>
  );
}
