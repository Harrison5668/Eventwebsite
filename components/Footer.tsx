
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Footer: React.FC<Props> = ({ t, lang }) => {
  return (
    <footer className="py-6 px-6 bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
        {/* Organization Name */}
        <div>
          <h3 className="text-sm font-bold tracking-tight text-gray-300">
            {lang === 'zh' ? (
              <>CES 创新 & <span className="text-gold">变现峰会</span>组委会</>
            ) : (
              <>CES Innovation & <span className="text-gold">Monetization</span> Summit Organizing Committee</>
            )}
          </h3>
        </div>

        {/* Contact Information */}
        <div className="space-y-1 text-sm text-gray-400">
          <p className="text-gray-300">{t.contactPerson}</p>
          <p>
            <a href={`mailto:${t.email}`} className="text-gold hover:text-gold/80 transition-colors">
              {t.email}
            </a>
          </p>
          <p className="text-gray-400">{t.phone}</p>
          {t.wechat && (
            <div className="flex flex-col items-center gap-2">
              <p className="text-gray-400">{t.wechat}</p>
              {lang === 'zh' && (
                <img src="/wechat/QRcode.jpg" alt="WeChat QR Code" className="w-32 h-32 mt-2" />
              )}
            </div>
          )}
        </div>

        {/* Privacy & Rights */}
        <div className="flex flex-col items-center mt-4 pt-4 border-t border-white/5 w-full">
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
