
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden network-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full"></div>
      
      {/* Network Lines SVG Placeholder Representation */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="pattern-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
             <circle cx="2" cy="2" r="1" fill="#00F5FF" fillOpacity="0.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-dots)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none">
          INNOVATION & <span className="text-cyan-400">MONETIZATION SUMMIT 2026</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-bold text-cyan-400 mb-8 neon-glow">
          AI Hardware Summit & Expo
        </p>
        
        <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 uppercase tracking-widest">
          Jan 10, 2026 | Computer History Museum
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="custom-gradient-btn px-10 py-4 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-transform w-full sm:w-auto uppercase tracking-wider">
            GET TICKETS
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-full font-bold hover:bg-cyan-400/10 transition-all w-full sm:w-auto uppercase tracking-wider">
            SPONSORSHIP
          </button>
        </div>

        <div className="mt-24">
          <p className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase mb-4">CO-HOSTS</p>
          <div className="flex items-center justify-center space-x-12">
            <span className="text-xl font-black text-white/80 tracking-tighter">USCCCSV</span>
            <span className="text-xl font-black text-white/80 tracking-tighter">Deep Horizon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
