
import React from 'react';

interface Props {
  t: any;
}

const Footer: React.FC<Props> = ({ t }) => {
  return (
    <footer className="py-20 px-6 bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div>
          <span className="text-2xl font-black tracking-tighter mb-4 block">
            CES <span className="text-gold">SUMMIT</span>
          </span>
          <p className="text-gray-500 text-sm mb-4">{t.copy}</p>
          <div className="text-xs text-gray-600 space-y-2">
            <p>{t.contact}: <a href="mailto:info@wima.life" className="text-gold">info@wima.life</a></p>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end">
          <div className="flex items-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors text-[10px] uppercase font-bold tracking-widest">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors text-[10px] uppercase font-bold tracking-widest">Terms</a>
          </div>
          <p className="text-[10px] text-gray-700 font-bold uppercase tracking-widest">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
