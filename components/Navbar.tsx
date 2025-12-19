
import React from 'react';

interface Props {
  t: any;
  toggleLang: () => void;
  currentLang: string;
}

const Navbar: React.FC<Props> = ({ t, toggleLang, currentLang }) => {
  const navItems = [
    { label: t.about, href: '#hero' },
    { label: t.agenda, href: '#agenda' },
    { label: t.speakers, href: '#speakers' },
    { label: t.ecosystem, href: '#ecosystem' },
    { label: t.sponsorship, href: '#sponsorship' },
    { label: t.partners, href: '#partners' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-black tracking-tight">
            {currentLang === 'zh' ? (
              <>CES 创新 & <span className="text-gold">变现峰会</span></>
            ) : (
              <>INNOVATION & <span className="text-gold">MONETIZATION</span></>
            )}
          </span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-gray-400 hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#ticketing" className="gold-btn px-6 py-2 rounded-full text-[10px] font-bold">
            {t.register}
          </a>
          <button 
            onClick={toggleLang}
            className="text-[10px] font-bold text-gray-500 border border-white/10 px-3 py-1 rounded hover:border-gold/50 transition-colors uppercase"
          >
            {t.langToggle}
          </button>
        </div>

        <div className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
