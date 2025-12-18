
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'ABOUT', href: '#about' },
    { label: 'EXHIBITORS', href: '#exhibitors' },
    { label: 'SPEAKERS', href: '#speakers' },
    { label: 'AGENDA', href: '#agenda' },
    { label: 'PITCH', href: '#pitch' },
    { label: 'SPONSORS', href: '#sponsors' },
    { label: 'CONTACT US', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050510]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tighter">
            IMS <span className="text-cyan-400">2026</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="border border-cyan-400/50 px-4 py-1 rounded text-[10px] font-bold text-cyan-400 flex items-center space-x-1 hover:bg-cyan-400/10 transition-all">
            <span>us</span>
            <span className="font-black">EN</span>
          </button>
        </div>

        {/* Mobile menu icon (simplified) */}
        <div className="lg:hidden">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
