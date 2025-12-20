
import React from 'react';

interface Props {
  t: any;
  lang: string;
}

const Partners: React.FC<Props> = ({ t, lang }) => {
  return (
    <section id="partners" className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-white">{t.title}</h2>
        </div>

        {/* Organizer Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-40">
          {/* Left side - host1.png */}
          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase text-center">{t.organizers}</h4>
            <div className="flex items-center justify-center">
              <img src="/host/host1.png" alt="Host Organizations 1" className="w-full h-auto object-contain" />
            </div>
          </div>
          
          {/* Right side - host2.png */}
          <div>
            <h4 className="text-[10px] font-black text-gray-500 mb-8 tracking-[0.3em] uppercase text-center">{t.communityPartners}</h4>
            <div className="flex items-center justify-center">
              <img src="/host/host2.png" alt="Host Organizations 2" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">{t.mediaTitle}</h2>
          <p className="text-gold text-sm font-medium max-w-3xl mx-auto">{t.mediaSubtitle}</p>
        </div>

        {/* Single Media Image */}
        <div className="flex items-center justify-center">
          <img src="/media/media.png" alt="Media Partners" className="w-full max-w-6xl h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
