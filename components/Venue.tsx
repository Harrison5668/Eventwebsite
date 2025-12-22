
import React from 'react';

interface Props {
  t: any;
}

const Venue: React.FC<Props> = ({ t }) => {
  const hotelImages = [
    '/site/图片2.png',
    '/site/图片3.jpg',
    '/site/图片4.png'
  ];

  return (
    <section id="venue" className="pt-4 pb-8 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-2 text-center">{t.title}</h2>
        
        {/* Single unified card with everything inside */}
        <div className="bg-black/30 border border-white/5 rounded-lg">
          {/* Distance info */}
          <div className="text-gold text-sm font-medium text-center py-4 border-b border-white/5">
            {t.distance}
          </div>
          
          {/* Hotel info */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gold mb-4">{t.name}</h3>
            <div className="text-gray-300 mb-6">
              <p className="text-lg">{t.address}</p>
            </div>
            
            {/* Description - no gap */}
            {t.description && (
              <div className="text-gray-400 leading-relaxed text-base">
                <p>{t.description}</p>
              </div>
            )}
          </div>

          {/* Hotel images grid */}
          <div className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {hotelImages.map((img, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-lg border border-white/10 aspect-[4/3]">
                  <img 
                    src={img} 
                    alt={`${t.name} ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;

