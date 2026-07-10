import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Welcome 👋
          </h1>
          <p className="text-xl text-zinc-400">
            Choose an option below
          </p>
        </section>

        {/* Options Section */}
        <section className="grid gap-6 sm:grid-cols-2">
          
          <Link href="/vendor-locations">
            <div className="border border-zinc-800 rounded-lg p-8 hover:border-blue-500 hover:bg-zinc-900 transition cursor-pointer h-full">
              <div className="text-4xl mb-4">📍</div>
              <h2 className="text-2xl font-bold mb-2">Vendor Locations</h2>
              <p className="text-zinc-400">View all vendor locations and details</p>
            </div>
          </Link>

          <Link href="/printer-problems">
            <div className="border border-zinc-800 rounded-lg p-8 hover:border-blue-500 hover:bg-zinc-900 transition cursor-pointer h-full">
              <div className="text-4xl mb-4">🖨️</div>
              <h2 className="text-2xl font-bold mb-2">Printer Problems</h2>
              <p className="text-zinc-400">Report and troubleshoot printer issues</p>
            </div>
          </Link>

        </section>

      </main>
    </div>
  );
}
