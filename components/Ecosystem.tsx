
import React from 'react';

interface Props {
  t: any;
}

const Ecosystem: React.FC<Props> = ({ t }) => {
  return (
    <section id="ecosystem" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">{t.title}</h2>
          <p className="text-gold font-bold tracking-widest text-xs uppercase mb-6">{t.subtitle}</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.copy}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.highlights.map((m: any, idx: number) => (
            <div key={idx} className="glass-card p-10 rounded-3xl flex flex-col items-start text-left">
              <span className="text-[10px] font-black text-gold border border-gold/30 px-2 py-1 rounded mb-8 tracking-widest">
                {m.tag}
              </span>
              <h3 className="text-xl font-bold mb-6 leading-tight">{m.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{m.desc}</p>
              <div className="mt-auto">
                <div className="w-12 h-1 bg-gold/20 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card p-12 rounded-[3rem] border-gold/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px]"></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6">{t.exhibition.title} <span className="text-gold text-sm font-normal ml-2">{t.exhibition.sub}</span></h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                {t.exhibition.desc}
              </p>
              <ul className="space-y-4">
                {t.exhibition.points.map((item: string, i: number) => (
                  <li key={i} className="flex items-center text-sm text-gray-300">
                    <span className="text-gold mr-3">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 opacity-50 grayscale">
              <div className="aspect-video bg-white/5 rounded-xl border border-white/10"></div>
              <div className="aspect-video bg-white/5 rounded-xl border border-white/10"></div>
              <div className="aspect-video bg-white/5 rounded-xl border border-white/10"></div>
              <div className="aspect-video bg-white/5 rounded-xl border border-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
