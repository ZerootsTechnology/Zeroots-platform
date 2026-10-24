export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SECTION (Dark Navy) */}
      <section className="bg-primary pt-24 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* DPIIT Badge */}
          <div className="inline-block bg-accent text-primary font-bold px-4 py-1 rounded-full mb-8 text-sm tracking-wide">
            Recognised by DPIIT, Govt. of India
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white leading-tight">
            Next-Generation <br />
            <span className="text-accent">Vehicle Intelligence</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-lightblue mb-10 max-w-2xl mx-auto">
            Real-time OBD-II diagnostics, environmental telemetry, and the official platform for the India on Wheels national expedition.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
              Explore Vahan Vitals
            </button>
            <button className="bg-secondary text-white font-bold px-8 py-3 rounded-lg border border-lightblue hover:bg-lightblue hover:text-primary transition-colors">
              Sponsor the Expedition
            </button>
          </div>
          
        </div>
      </section>

      {/* 2. QUICK STATS SECTION (Light Surface) */}
      <section className="-mt-16 px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          {/* Stat 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-5xl font-mono font-bold text-primary mb-2">700+</h3>
            <p className="text-textSecondary font-medium">Districts to Map</p>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-5xl font-mono font-bold text-primary mb-2">400M+</h3>
            <p className="text-textSecondary font-medium">Vehicle TAM</p>
          </div>
          
          {/* Stat 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-5xl font-mono font-bold text-primary mb-2">26 Nov</h3>
            <p className="text-textSecondary font-medium">Expedition Launch</p>
          </div>
          
        </div>
      </section>

    </main>
  );
}