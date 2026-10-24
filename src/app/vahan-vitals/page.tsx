export default function VahanVitals() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* 1. Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Vahan <span className="text-accent">Vitals</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            The next-generation vehicle intelligence platform. We process OBD-II sensor streams and environmental telemetry to generate your real-time Vehicle Health Score (VH-Score).
          </p>
        </div>

        {/* 2. How VH-Score Works (Methodology) */}
        <section className="bg-primary text-white p-10 rounded-2xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-accent mb-8 text-center">How the VH-Score Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center font-bold text-2xl mb-4 border border-lightblue">1</div>
              <h3 className="font-bold mb-2">Data Capture</h3>
              <p className="text-sm text-lightblue">Real-time OBD-II logging and SAE J1939 fault code scanning from your vehicle.</p>
            </div>
            <div>
              <div className="bg-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center font-bold text-2xl mb-4 border border-lightblue">2</div>
              <h3 className="font-bold mb-2">Cloud Analysis</h3>
              <p className="text-sm text-lightblue">Processing telemetry across diverse terrains using our proprietary ML models.</p>
            </div>
            <div>
              <div className="bg-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center font-bold text-2xl mb-4 border border-lightblue">3</div>
              <h3 className="font-bold mb-2">Health Score</h3>
              <p className="text-sm text-lightblue">A simple 0-100 gauge visualising your exact vehicle health and required maintenance.</p>
            </div>
          </div>
        </section>

        {/* 3. Use Cases (D2C vs B2B) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Platform Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* D2C Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-primary mb-3">For Vehicle Owners (D2C)</h3>
              <ul className="space-y-3 text-textSecondary mb-6">
                <li className="flex gap-2"><span>✓</span> View real-time VH-Score gauge</li>
                <li className="flex gap-2"><span>✓</span> Track historical telemetry data</li>
                <li className="flex gap-2"><span>✓</span> Instant alerts for engine fault codes</li>
              </ul>
            </div>
            
            {/* B2B Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-accent">
              <h3 className="text-xl font-bold text-primary mb-3">For Enterprise (B2B)</h3>
              <ul className="space-y-3 text-textSecondary mb-6">
                <li className="flex gap-2"><span>✓</span> Batch vehicle query interface via API</li>
                <li className="flex gap-2"><span>✓</span> Garage partner management portal</li>
                <li className="flex gap-2"><span>✓</span> Fleet usage analytics dashboard</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Pricing Tiers */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">API Pricing</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-primary mb-2">Enterprise Telemetry Access</h3>
            <p className="text-textSecondary mb-6">Full API access to sensor streams and scoring algorithms.</p>
            <p className="text-4xl font-mono font-bold text-primary mb-6">₹4,999 <span className="text-lg text-textSecondary font-sans">/ month</span></p>
            <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-secondary transition-colors">
              Request API Access
            </button>
            <p className="text-xs text-textSecondary mt-4">*Pricing plans will be fully activated post-launch on 26 Nov.</p>
          </div>
        </section>

      </div>
    </main>
  );
}