
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Partners: React.FC<Props> = ({ t, lang }) => {
  return (
    <section id="partners" className="py-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Organizer Section - Changed to vertical layout */}
        <div className="space-y-12 mb-8">
          {/* Top - host3 (EN) or host4 (ZH) */}
          <div>
            <h4 className="text-2xl font-black text-white mb-4 text-center">{t.organizers}</h4>
            <p className="text-gold text-sm font-medium mb-8 text-center leading-relaxed">
              {lang === 'zh' 
                ? '连接企业与国际资源，推动合作与发展。'
                : 'Bridging businesses with global resources to foster cooperation and development.'}
            </p>
            <div className="flex items-center justify-center">
              <img 
                src={lang === 'zh' ? '/host/host4.png' : '/host/host3.png'} 
                alt="Host Organizations" 
                className="w-4/5 h-auto object-contain" 
              />
            </div>
          </div>
          
          {/* Bottom - host2 (EN) or host5 (ZH) */}
          <div>
            <h4 className="text-2xl font-black text-white mb-4 text-center">{t.communityPartners}</h4>
            <p className="text-gold text-sm font-medium mb-8 text-center leading-relaxed">
              {lang === 'zh' 
                ? '感谢各行业领袖的大力支持：'
                : 'backed by the best：'}
            </p>
            <div className="flex items-center justify-center">
              <img 
                src={lang === 'zh' ? '/host/host5.png' : '/host/host2.png'} 
                alt="Strategic Partners" 
                className="w-4/5 h-auto object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black mb-4 text-white">{t.mediaTitle}</h2>
          <p className="text-gold text-sm font-medium">{t.mediaSubtitle}</p>
        </div>

        {/* Single Media Image */}
        <div className="flex items-center justify-center">
          <img src="/media/media.png" alt="Media Partners" className="w-2/5 h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
