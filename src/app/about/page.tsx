export default function About() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Our Story</h1>
          <p className="text-lg text-textSecondary">From concept to a DPIIT-recognised vehicle intelligence platform.</p>
        </div>

        {/* Mission Section */}
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">The Mission</h2>
          <p className="text-textPrimary leading-relaxed">
            Zeroots Technology is driven by the mission to map real-time vehicle telemetry across India's diverse terrains. Through our Vahan Vitals platform and the India on Wheels expedition, we are building the next generation of diagnostic intelligence.
          </p>
        </section>

        {/* Founders */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Umesh */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 bg-lightblue rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold text-xl">US</div>
              <h3 className="text-xl font-bold text-primary">Umesh Chandra Sahu</h3>
              <p className="text-accent font-medium mb-2">Director & CEO</p>
              <p className="text-sm text-textSecondary">Visionary behind Project Bharat and the Vahan Vitals architecture.</p>
            </div>
            
            {/* Abhisek */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 bg-lightblue rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold text-xl">AK</div>
              <h3 className="text-xl font-bold text-primary">Abhisek Kandulna</h3>
              <p className="text-accent font-medium mb-2">Director & COO</p>
              <p className="text-sm text-textSecondary">Leading operations, strategic execution, and expedition logistics.</p>
            </div>
          </div>
        </section>

        {/* Timeline & Milestones */}
        <section className="bg-primary text-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-accent mb-6">Key Milestones</h2>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="font-mono text-lightblue font-bold w-12">2026</span>
              <span>Secured official DPIIT Certificate of Recognition as a Startup from the Govt. of India.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-lightblue font-bold w-12">2026</span>
              <span>Initiated research collaboration and MOU drafting with IIT Kanpur & FITT.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-lightblue font-bold w-12">2025</span>
              <span>Conceptualised the India on Wheels national expedition spanning 700+ districts.</span>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}