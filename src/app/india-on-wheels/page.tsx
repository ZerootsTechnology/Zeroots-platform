export default function IndiaOnWheels() {
  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-accent text-primary font-bold px-4 py-1 rounded-full mb-6 text-sm tracking-wide">
            Launching Mid-November 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            India <span className="text-accent">on Wheels</span>
          </h1>
          <p className="text-xl text-textSecondary max-w-2xl mx-auto">
            A national expedition across 780+ districts to document local stories and gather real-time vehicle telemetry for Project Bharat.
          </p>
        </div>

        {/* 2. Interactive Route Map Placeholder */}
        <section className="mb-16">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
            <div className="bg-surface w-full h-[500px] rounded-xl flex flex-col items-center justify-center border-2 border-dashed border-lightblue">
              <span className="text-4xl mb-4">🗺️</span>
              <h3 className="text-2xl font-bold text-primary mb-2">Live Expedition Tracker</h3>
              <p className="text-textSecondary max-w-md text-center">
                Mapbox GL JS integration will activate here upon launch, tracking the real-time route transitioning from Yamunanagar through Uttarakhand and Himachal Pradesh.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Official Certifications */}
        <section className="mb-16 bg-primary text-white p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-accent mb-6">Official Record Attempts</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div>
              <h3 className="text-xl font-bold mb-2">India Book of Records (IBR)</h3>
              <p className="text-lightblue text-sm">Approved National Expedition Record</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Asia Book of Records (ABR)</h3>
              <p className="text-lightblue text-sm">Approved Continental Expedition Record</p>
            </div>
          </div>
        </section>

        {/* 4. The Compass Crew */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">The Compass Crew</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Umesh Chandra Sahu', 'Abhisek Kandulna', 'Swarup Prakash Panda', 'Prince Sahu', 'Ashish Pandey', 'Kishan Behera', 'Udit Mahakul', 'Sarthak Sahoo'].map((name, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-lightblue rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold text-lg">
                  {name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <h3 className="font-bold text-primary text-sm">{name}</h3>
                <p className="text-xs text-textSecondary mt-1">
                  {index === 0 ? 'Team Lead / CEO' : index === 1 ? 'Logistics / COO' : 'Expedition Crew'}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}