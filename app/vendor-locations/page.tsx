import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
          <Link href="/our-locations">
            <div className="border-2 border-l-8 border-blue-400 bg-blue-50 hover:bg-blue-100 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
              <span className="text-2xl">🏢</span>
              <span className="text-base font-semibold">Our Locations</span>
            </div>
          </Link>
          <Link href="/vendor-locations">
            <div className="border-2 border-l-8 border-green-400 bg-green-50 hover:bg-green-100 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
              <span className="text-2xl">📍</span>
              <span className="text-base font-semibold">Vendors Locations</span>
            </div>
          </Link>
          <Link href="/printer-problems">
            <div className="border-2 border-l-8 border-purple-400 bg-purple-50 hover:bg-purple-100 rounded-xl px-4 py-3 flex items-center gap-3 cursor-pointer">
              <span className="text-2xl">🖨️</span>
              <span className="text-base font-semibold">Printer Problems</span>
            </div>
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-4xl font-semibold mb-2">Welcome to HomeRun 👋</h1>
        <p className="text-gray-500 text-base">India's Building Material App</p>
        <p className="text-gray-400 text-sm mt-6">Select an option from the sidebar to get started.</p>
      </main>
    </div>
  );
}
