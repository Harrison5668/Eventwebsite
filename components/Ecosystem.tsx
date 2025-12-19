
import React from 'react';

interface Props {
  t: any;
}

const Ecosystem: React.FC<Props> = ({ t }) => {
  const regions = [
    { name: 'NORTH AMERICA', img: '🌎' },
    { name: 'LATIN AMERICA', img: '🌍' },
    { name: 'EUROPE', img: '🌍' },
    { name: 'AFRICA & THE MIDDLE EAST', img: '🌍' },
    { name: 'ASIA & THE PACIFIC', img: '🌏', active: true }
  ];

  const cities = [
    "AMTZ", "Amaravati", "Anyang", "Bengaluru", "Bhubaneswar", "Binh Duong New City", "Changsha Wanjiali", "Chennai", "China (Beijing)", "Chittagong", "Chongqing", "Coimbatore", "Colombo", "Daejeon", "Dandong", "Delhi-Gurgaon", "Devanahalli", "Dhaka", "Future City", "Fuzhou", "Guangzhou", "Guiyang", "Haikou", "Hangzhou", "Hinjawadi", "Hong Kong", "Hosur", "Hyderabad", "Indore", "Islamabad", "Jaipur", "Jakarta", "Jeju", "Jinzhong", "Karachi", "Kochi", "Kolkata", "Kuala Lumpur", "Kunming", "Macau", "Melbourne", "Metro Manila", "Mumbai", "Nagpur", "Nanjing", "Nanning", "Nansha", "Nashik", "New Delhi", "Ningbo", "Osaka", "Penang", "Perth", "Qingdao", "Quanzhou", "Seoul", "Shanghai", "Shenzhen", "Singapore", "Sydney", "Taipei", "Tokyo", "Wuhan", "Xi'an", "Xiamen", "Yangon", "Zhengzhou"
  ];

  const influencers = [
    { name: 'Nathan Davis JR', fans: '16.7M Followers', img: 'https://picsum.photos/seed/nathan/100/100' },
    { name: 'Michael Dimuccio', fans: '9.4M Followers', img: 'https://picsum.photos/seed/michael/100/100' },
    { name: 'Shane Nagy', fans: '10.6M Followers', img: 'https://picsum.photos/seed/shane/100/100' },
    { name: 'Swaggy Wolfdog', fans: '10.7M Followers', img: 'https://picsum.photos/seed/dog/100/100' },
    { name: 'Fabio Farati', fans: '19M Followers', img: 'https://picsum.photos/seed/fabio/100/100' },
    { name: 'Emmy', fans: '16M Followers', img: 'https://picsum.photos/seed/emmy/100/100' }
  ];

  return (
    <section id="ecosystem" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Core Title Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black mb-6">{t.title}</h2>
          <p className="text-gold font-bold tracking-[0.4em] text-xs uppercase mb-8">{t.subtitle}</p>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {t.copy}
          </p>
        </div>

        {/* WTC Location Grid (Ref Image 2) */}
        <div className="mb-32">
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {regions.map((r, i) => (
              <div key={i} className={`flex flex-col items-center cursor-pointer transition-all ${r.active ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-60'}`}>
                <div className="text-4xl mb-4">{r.img}</div>
                <span className="text-[10px] font-black tracking-widest text-center">{r.name}</span>
                {r.active && <div className="h-0.5 w-full bg-gold mt-2"></div>}
              </div>
            ))}
          </div>

          <div className="bg-gold rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="bg-black/10 p-4 border-b border-black/5">
              <span className="text-xs font-black text-black/60 tracking-widest uppercase">LOCATIONS IN ASIA & THE PACIFIC</span>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
                {cities.map((city, idx) => (
                  <div key={idx} className="text-black text-[11px] font-bold hover:text-white transition-colors cursor-default truncate">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global CSR & Resources (Ref Image 3) */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {['SDGs', 'CSR', 'UN'].map((item) => (
            <div key={item} className="flex flex-col">
              <h4 className="text-center text-xl font-black mb-8 border-b border-gold/30 pb-4 inline-block mx-auto min-w-[120px]">{item}</h4>
              <div className="glass-card aspect-[4/3] rounded-3xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">[RESOURCE IMAGE {item}]</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Influencer Network (Ref Image 5) */}
        <div className="glass-card rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-2">Master TV MCN</h3>
            <p className="text-gold text-[10px] font-bold tracking-widest uppercase mb-12">Partial list of influencers who attend our events</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {influencers.map((inf, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gold/20 mb-4 group-hover:border-gold transition-all ring-4 ring-gold/0 group-hover:ring-gold/20">
                    <img src={inf.img} alt={inf.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0" />
                  </div>
                  <h5 className="text-[11px] font-bold text-white mb-1">{inf.name}</h5>
                  <p className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">{inf.fans}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exhibition Expertise (Ref Image 7 lower) */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
             <div className="inline-block px-4 py-1 border border-gold/50 rounded text-gold text-[10px] font-black tracking-[0.3em]">NEW ERA EXHIBITION</div>
             <h3 className="text-4xl font-black leading-tight">
               {t.exhibition.title}
               <br/>
               <span className="text-gold">{t.exhibition.sub}</span>
             </h3>
             <p className="text-gray-400 text-lg leading-relaxed">
               {t.exhibition.desc}
             </p>
             <div className="grid grid-cols-3 gap-4">
                {t.exhibition.points.map((p: string, i: number) => (
                  <div key={i} className="text-center p-4 glass-card rounded-2xl">
                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-gold text-xs">●</span>
                    </div>
                    <p className="text-[10px] font-bold text-gray-300 leading-tight uppercase tracking-tighter">{p}</p>
                  </div>
                ))}
             </div>
           </div>
           <div className="grid grid-cols-2 grid-rows-2 gap-4 aspect-square">
              <div className="bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="bg-white/5 rounded-3xl border border-white/10 mt-12"></div>
              <div className="bg-white/5 rounded-3xl border border-white/10 -mt-12"></div>
              <div className="bg-white/5 rounded-3xl border border-white/10"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
