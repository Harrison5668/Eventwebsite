
import React from 'react';

const About: React.FC = () => {
  const stats = [
    { value: '21,398', label: 'SQ. FT.', suffix: '' },
    { value: '1,000+', label: 'ATTENDEES', suffix: '' },
    { value: '50+', label: 'BOOTHS', suffix: '' },
  ];

  const features = [
    { title: 'Strategic Timing', desc: 'Post-CES momentum debut.' },
    { title: 'Global Connections', desc: 'Connecting SV capital & markets.' },
    { title: 'Procurement', desc: 'Gov, schools, & hospitals.' },
    { title: 'Supply Chain', desc: 'US-China consultation.' },
    { title: 'Investment Access', desc: '100+ VCs & Family Offices.' },
    { title: 'Innovation Awards', desc: '2026 SV Power List.' },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-[#050510]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Embracing the AI Era
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
              Following CES 2026, making a major debut in Silicon Valley. We connect innovative enterprises with Silicon Valley capital, North American markets, and international supply chains.
            </p>
            
            <div className="flex flex-wrap gap-8 md:gap-16 border-t border-white/10 pt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <span className="text-4xl md:text-5xl font-black text-cyan-400 mb-2">
                    {stat.value}
                  </span>
                  <span className="text-[10px] tracking-widest font-bold text-gray-500 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
