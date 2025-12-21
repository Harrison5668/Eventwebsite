
import React, { useState } from 'react';

interface Props {
  t: any;
  lang: string;
}

const Ticketing: React.FC<Props> = ({ t, lang }) => {
  const [selectedTicket, setSelectedTicket] = useState<'early' | 'late'>('early');

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
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">{t.title}</h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              {lang === 'zh' 
                ? '门票支付成功将发送峰会具体位置信息。欢迎带着挑战来，带着落地方案走。'
                : 'Once your ticket payment is confirmed, the exact location of the summit will be sent to you. Come with your challenges, and leave with actionable solutions!'}
            </p>
            
            {/* Unified Ticket Card */}
            <div className="glass-card p-8 rounded-2xl border-gold/40">
              {/* Radio Selection */}
              <div className="flex gap-6 mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="ticket"
                    value="early"
                    checked={selectedTicket === 'early'}
                    onChange={() => setSelectedTicket('early')}
                    className="w-5 h-5 text-gold focus:ring-gold"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{t.earlyBird}</h3>
                    <p className="text-gray-500 text-xs">{t.earlyBirdDate}</p>
                  </div>
                  <div className="text-2xl font-black text-gold ml-auto">{t.earlyBirdPrice}</div>
                </label>
              </div>
              
              <div className="flex gap-6 mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="ticket"
                    value="late"
                    checked={selectedTicket === 'late'}
                    onChange={() => setSelectedTicket('late')}
                    className="w-5 h-5 text-gold focus:ring-gold"
                  />
                  <div>
                    <h3 className="text-lg font-bold">{t.lateBird}</h3>
                    <p className="text-gray-500 text-xs">{t.lateBirdDate}</p>
                  </div>
                  <div className="text-2xl font-black text-gold ml-auto">{t.lateBirdPrice}</div>
                </label>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-sm text-gray-300">
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticketing;
