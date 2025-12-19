
import React from 'react';

interface Props {
  t: any;
}

const Hero: React.FC<Props> = ({ t }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1508] via-[#050505] to-[#050505]"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-gold tracking-[0.5em] font-bold mb-6 text-sm uppercase">{t.tagline}</p>
        
        <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter leading-tight">
          {t.title}
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-2">
          {t.subtitle}
        </h2>
        
        <p className="text-sm md:text-lg font-light text-gray-500 mb-12 italic">
          {t.engSubtitle}
        </p>

        <div className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mb-12 leading-relaxed font-light">
          {t.copy}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#ticketing" className="gold-btn px-12 py-4 rounded-full text-lg w-full sm:w-auto text-center">
            {t.ctaRegister}
          </a>
          <a href="#sponsorship" className="outline-gold-btn px-12 py-4 rounded-full text-lg w-full sm:w-auto text-center">
            {t.ctaSponsor}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
