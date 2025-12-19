
import React from 'react';

interface Props {
  t: any;
}

const Hero: React.FC<Props> = ({ t }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Image 1 Concept: Gold flowing lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505] z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop")', // Placeholder for Image 1: Golden abstract lines
            filter: 'sepia(50%) brightness(40%) contrast(120%)'
          }}
        ></div>
        {/* Animated accent to simulate the light flow in Image 1 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <p className="text-gold tracking-[0.5em] font-bold mb-6 text-xs md:text-sm uppercase animate-pulse">{t.tagline}</p>
        
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight text-white">
          {t.title}
        </h1>
        
        <div className="h-px w-24 bg-gold mx-auto mb-8 opacity-50"></div>

        <h2 className="text-xl md:text-3xl font-medium text-gray-200 mb-2">
          {t.subtitle}
        </h2>
        
        <p className="text-sm md:text-lg font-light text-gray-500 mb-12 italic">
          {t.engSubtitle}
        </p>

        <div className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg mb-12 leading-relaxed font-light">
          {t.copy}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#ticketing" className="gold-btn px-12 py-4 rounded-full text-lg w-full sm:w-auto text-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
            {t.ctaRegister}
          </a>
          <a href="#sponsorship" className="outline-gold-btn px-12 py-4 rounded-full text-lg w-full sm:w-auto text-center backdrop-blur-sm">
            {t.ctaSponsor}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
