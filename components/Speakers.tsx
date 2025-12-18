
import React from 'react';

const Speakers: React.FC = () => {
  const speakers = [
    { id: '1', name: 'Fiona Ma', role: 'CA STATE TREASURER', organization: 'California Government', img: 'https://picsum.photos/seed/fiona/400/400' },
    { id: '2', name: 'Dylan Patel', role: 'FOUNDER', organization: 'SemiAnalysis', img: 'https://picsum.photos/seed/dylan/400/400' },
    { id: '3', name: 'Kayvan Baroumand', role: 'FOUNDER', organization: 'SignalRank', img: 'https://picsum.photos/seed/kayvan/400/400' },
    { id: '4', name: 'Nick Larson', role: 'FOUNDER', organization: 'Silicon Zombies', img: 'https://picsum.photos/seed/nick/400/400' },
    { id: '5', name: 'Liang Zhao', role: 'DIRECTOR', organization: 'UCSF / Ex-FDA', img: 'https://picsum.photos/seed/liang/400/400' },
    { id: '6', name: 'Prof. Scott Rozelle', role: 'DIRECTOR', organization: 'Stanford China Economy', img: 'https://picsum.photos/seed/scott/400/400' },
    { id: '7', name: 'Margaret Koga', role: 'SUPERVISOR', organization: 'Santa Clara County', img: 'https://picsum.photos/seed/margaret/400/400' },
    { id: '8', name: 'Wen Sang', role: 'CO-FOUNDER & COO', organization: 'Genspark.ai', img: 'https://picsum.photos/seed/wen/400/400' },
    { id: '9', name: 'Modar Alaoui', role: 'VENTURES & FOUNDER', organization: 'Humanoids Summit', img: 'https://picsum.photos/seed/modar/400/400' },
    { id: '10', name: 'Michael Noffsinger', role: 'VICE PRESIDENT', organization: 'LotusPetalAI', img: 'https://picsum.photos/seed/michael/400/400' },
  ];

  return (
    <section id="speakers" className="py-32 px-6 bg-[#050510]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-24">Featured Speakers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="glass-card p-6 rounded-3xl flex flex-col items-center text-center hover:bg-white/10 transition-all border border-white/5"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-[#050510] shadow-2xl">
                <img
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-lg font-black mb-2">{speaker.name}</h3>
              <p className="text-[10px] font-black text-cyan-400 uppercase tracking-wider mb-1">
                {speaker.role}
              </p>
              <p className="text-[10px] font-bold text-gray-500 uppercase">
                {speaker.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
