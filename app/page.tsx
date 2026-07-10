export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Hi, I'm Tharun 👋
          </h1>
          <p className="text-xl text-zinc-400">
            Welcome to my personal website.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            I'm learning to build websites and love creating things on the internet. 
            This is my first portfolio, built with Next.js and deployed on Vercel.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="space-y-4">
            <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
              <h3 className="text-xl font-semibold mb-2">My Portfolio</h3>
              <p className="text-zinc-400">The website you're on right now! Built with Next.js.</p>
            </div>
            <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-600 transition">
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-zinc-400">More projects on the way — stay tuned!</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-zinc-300">
            Want to say hi? Drop me an email at{" "}
            <a href="mailto:your-email@example.com" className="text-blue-400 hover:underline">
              your-email@example.com
            </a>
          </p>
        </section>

      </main>
    </div>
  );
}
