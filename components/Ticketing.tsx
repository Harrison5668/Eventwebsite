
import React from 'react';

interface Props {
  t: any;
}

const Ticketing: React.FC<Props> = ({ t }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Redirecting to Stripe Checkout...');
  };

  return (
    <section id="ticketing" className="py-20 px-6 bg-[#030303] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">{t.title}</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              {t.copy}
            </p>
            
            <div className="glass-card p-10 rounded-3xl border-gold/40">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold">{t.ticketTitle}</h3>
                  <p className="text-gray-500 text-sm">{t.ticketTag}</p>
                </div>
                <div className="text-4xl font-black text-gold">{t.ticketPrice}</div>
              </div>
              <ul className="space-y-4 mb-10 text-sm text-gray-300">
                {t.features.map((f: string, idx: number) => (
                  <li key={idx} className="flex items-center"><span className="text-gold mr-3">✓</span> {f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-12 rounded-[3rem]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.name}</label>
                  <input required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.email}</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.company}</label>
                <input required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.linkedin}</label>
                <input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.needs}</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50"></textarea>
              </div>
              
              <button type="submit" className="w-full gold-btn py-5 rounded-full text-lg uppercase tracking-widest mt-8">
                {t.form.submit}
              </button>
              
              <p className="text-[10px] text-gray-500 text-center mt-6 uppercase tracking-wider">
                Secured by Stripe | 256-bit Encryption
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticketing;
