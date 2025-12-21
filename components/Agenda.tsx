
import React from 'react';

interface Props {
  t: any;
}

const Agenda: React.FC<Props> = ({ t }) => {
  return (
    <section id="agenda" className="py-16 px-6 bg-[#030303]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-2">{t.title}</h2>
        <p className="text-gold font-bold tracking-widest text-xs uppercase mb-8">{t.subtitle}</p>
        
        <div className="space-y-6">
          {t.events.map((event: any, idx: number) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 pb-6 border-b border-white/5 last:border-0">
              <div className="md:w-1/4 shrink-0">
                <span className="text-gold font-bold font-mono text-base">{event.time}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                {event.items ? (
                  <div className="space-y-3">
                    {event.items.map((s: any, sIdx: number) => (
                      <div key={sIdx} className="pl-3 border-l-2 border-gold/30">
                        <h4 className="font-bold text-gold mb-1 text-sm">{s.title}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 leading-relaxed text-sm">{event.desc}</p>
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
