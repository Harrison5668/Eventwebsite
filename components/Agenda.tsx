
import React from 'react';

interface Props {
  t: any;
}

const Agenda: React.FC<Props> = ({ t }) => {
  return (
    <section id="agenda" className="py-16 px-6 bg-[#030303]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-4">{t.title}</h2>
        <p className="text-gold font-bold tracking-widest text-xs uppercase mb-16">{t.subtitle}</p>
        
        <div className="space-y-12">
          {t.events.map((event: any, idx: number) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-white/5 last:border-0">
              <div className="md:w-1/4 shrink-0">
                <span className="text-gold font-bold font-mono text-lg">{event.time}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6">{event.title}</h3>
                {event.items ? (
                  <div className="space-y-6">
                    {event.items.map((s: any, sIdx: number) => (
                      <div key={sIdx} className="pl-4 border-l-2 border-gold/30">
                        <h4 className="font-bold text-gold mb-2">{s.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 leading-relaxed">{event.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
