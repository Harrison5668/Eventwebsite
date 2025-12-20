
import React from 'react';

interface Props {
  t: any;
}

const ValueProposition: React.FC<Props> = ({ t }) => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-relaxed">
          {t.question}
        </h2>
        
        <div className="mb-12">
          <p className="text-2xl md:text-3xl font-bold text-gold mb-8">
            {t.solution}
          </p>
        </div>
        
        <div className="space-y-6 text-left max-w-2xl mx-auto">
          {t.benefits.map((benefit: string, idx: number) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="text-gold text-xl mt-1">•</span>
              <p className="text-lg text-gray-300 flex-1">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <p className="text-xl font-bold text-gold">
            {t.cta}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

