
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 bg-[#030308] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-3xl font-black tracking-tighter mb-4">
            IMS <span className="text-cyan-400">2026</span>
          </span>
          <p className="text-gray-500 text-sm">© 2026 Innovation & Monetization Summit. All rights reserved.</p>
        </div>
        
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          <div className="flex space-x-4">
            {['twitter', 'linkedin', 'facebook'].map(platform => (
              <div key={platform} className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-cyan-400/20 transition-all cursor-pointer">
                <span className="sr-only">{platform}</span>
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
