
import React from 'react';

interface Props {
  t: any;
}

const Photos: React.FC<Props> = ({ t }) => {
  return (
    <section id="photos" className="py-16 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">{t.title}</h2>
          <p className="text-gold text-sm font-medium mb-8 leading-relaxed max-w-4xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-4xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Photo display */}
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10">
            <img 
              src="/images/photo.jpg" 
              alt="Event Photography" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* View Photos Button */}
          <a 
            href="https://g.eramoment.com/album/enqi"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn px-12 py-5 rounded-full text-lg uppercase tracking-widest"
          >
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Photos;

