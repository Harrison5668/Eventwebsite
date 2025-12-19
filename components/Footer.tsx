
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Footer: React.FC<Props> = ({ t, lang }) => {
  return (
    <footer className="py-20 px-6 bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-6">
        {/* Organization Name */}
        <div className="mb-4">
          <h3 className="text-2xl font-black tracking-tight mb-2">
            {lang === 'zh' ? (
              <>世界创新<span className="text-gold">变现联盟</span></>
            ) : (
              <>World Innovation & <span className="text-gold">Monetization</span> Association</>
            )}
          </h3>
          {lang === 'zh' && t.subtitle && (
            <p className="text-gray-500 text-xs uppercase tracking-widest">{t.subtitle}</p>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-2 text-sm text-gray-400">
          <p className="text-gray-300">{t.contactPerson}</p>
          <p>
            <a href={`mailto:${t.email}`} className="text-gold hover:text-gold/80 transition-colors">
              {t.email}
            </a>
          </p>
          <p className="text-gray-400">{t.phone}</p>
          {t.wechat && (
            <p className="text-gray-400">{t.wechat}</p>
          )}
        </div>

        {/* Privacy & Rights */}
        <div className="flex flex-col items-center mt-8 pt-8 border-t border-white/5 w-full">
          <div className="flex items-center space-x-6 mb-4">
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
