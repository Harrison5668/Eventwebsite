
import React from 'react';

interface Props {
  t: any;
}

interface AgendaItem {
  title: string;
  subtitle?: string;
  items?: string[];
  color: string;
}

const Agenda: React.FC<Props> = ({ t }) => {
  const agendaItems: AgendaItem[] = t.items;

  return (
    <section id="agenda" className="py-16 px-6 bg-[#030303]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-black mb-4">{t.title}</h2>
          <p className="text-gold text-sm font-medium mb-6 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <p className="text-gray-400 text-base font-bold mb-16">
            {t.date}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line - more prominent */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-gold"></div>

          {/* Timeline items */}
          <div className="space-y-1">
            {agendaItems.map((item, idx) => (
              <div key={idx} className="relative pl-12 md:pl-16 py-4">
                {/* Timeline dot - larger and more visible */}
                <div 
                  className="absolute left-0 md:left-0.5 top-6 w-7 h-7 rounded-full border-4 border-[#030303] shadow-lg"
                  style={{ backgroundColor: item.color }}
                ></div>

                {/* Content - no card */}
                <div className="pb-2">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  
                  {item.subtitle && (
                    <p className="text-gold text-sm font-medium mb-3">{item.subtitle}</p>
                  )}
                  
                  {item.items && (
                    <div className="space-y-2 mt-3">
                      {item.items.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <span className="text-gold mt-1.5">•</span>
                          <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
