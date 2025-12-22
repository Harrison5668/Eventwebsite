
import React, { useState } from 'react';

interface Props {
  t: any;
  lang: string;
}

const Ticketing: React.FC<Props> = ({ t, lang }) => {
  const [selectedTicket, setSelectedTicket] = useState<'early' | 'late'>('early');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Valid discount codes (case insensitive)
  const VALID_DISCOUNT_CODES = [
    'RWAWA',
    'GPTDAO',
    'GCSRF',
    'MASTERTV',
    'AI101LAB',
    'APACWTG',
    'AIRA',
    'AIREINVENT',
    'SVUSCCC',
    'MIC',
    'ENTRECONNECT',
    'ONEPIECE',
    'UPHONEST',
    'ADVENTURES',
    'BITSLAB',
    'TARO',
    'SEAMATE',
    'WESHINE'
  ];

  // Stripe payment links - normal and discounted
  const STRIPE_LINKS = {
    early: {
      normal: 'https://buy.stripe.com/5kQ5kw9OS8bVeuBcJrf7i00',
      discounted: 'https://buy.stripe.com/fZu00c3qugIrdqxbFnf7i02'
    },
    late: {
      normal: 'https://buy.stripe.com/cNidR29OScsb0DLdNvf7i01',
      discounted: 'https://buy.stripe.com/5kQfZae582RB86dcJrf7i03'
    }
  };

  // Google Apps Script Web App URL
  const GOOGLE_SHEETS_API = 'https://script.google.com/macros/s/AKfycbx2uJ6uKx92be9JequLuurbjaM0LqFWrRfvdOLtXTdi1GM9ayWT5L7kdYyRlsUrVKg0/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const linkedin = formData.get('linkedin') as string;
    const needs = formData.get('needs') as string;
    const discountCode = (formData.get('discountCode') as string || '').trim().toUpperCase();
    
    // Validate required fields
    if (!name || !email || !company) {
      alert(lang === 'zh' ? '请填写所有必填项！' : 'Please fill in all required fields!');
      return;
    }
    
    // Check if discount code is valid (if provided)
    const hasValidDiscount = discountCode && VALID_DISCOUNT_CODES.includes(discountCode);
    
    // If discount code is provided but invalid, show warning
    if (discountCode && !hasValidDiscount) {
      const proceed = confirm(
        lang === 'zh' 
          ? `折扣码 "${discountCode}" 无效。是否继续以原价购买？` 
          : `Discount code "${discountCode}" is invalid. Proceed with regular price?`
      );
      if (!proceed) return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save data to Google Sheets
      const registrationData = {
        timestamp: new Date().toISOString(),
        name,
        email,
        company,
        linkedin: linkedin || '',
        needs: needs || '',
        ticketType: selectedTicket === 'early' ? 'Early Bird' : 'Standard Ticket',
        discountCode: hasValidDiscount ? discountCode : '',
        paymentStatus: 'Pending',
        registrationDate: new Date().toLocaleDateString()
      };
      
      const response = await fetch(GOOGLE_SHEETS_API, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData)
      });
      
      // Note: no-cors mode doesn't allow reading response, so we proceed anyway
      console.log('Registration data sent to Google Sheets:', registrationData);
      
      // Redirect to appropriate Stripe checkout based on discount code
      const paymentLink = hasValidDiscount 
        ? STRIPE_LINKS[selectedTicket].discounted 
        : STRIPE_LINKS[selectedTicket].normal;
      
      window.location.href = paymentLink;
      
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      // Still redirect to payment even if logging fails
      alert(lang === 'zh' 
        ? '数据保存可能失败，但您仍可继续支付。' 
        : 'Data saving may have failed, but you can still proceed with payment.');
      
      const paymentLink = hasValidDiscount 
        ? STRIPE_LINKS[selectedTicket].discounted 
        : STRIPE_LINKS[selectedTicket].normal;
      
      window.location.href = paymentLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="ticketing" className="pt-16 pb-8 px-6 bg-[#030303] relative">
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
                  <input 
                    name="name"
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.email}</label>
                  <input 
                    name="email"
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.company}</label>
                <input 
                  name="company"
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.linkedin}</label>
                <input 
                  name="linkedin"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">{t.form.needs}</label>
                <input 
                  name="needs"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50"
                />
              </div>
              
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">
                  {lang === 'zh' ? '折扣码（可选）' : 'Discount Code (Optional)'}
                </label>
                <input 
                  name="discountCode"
                  placeholder={lang === 'zh' ? '如有折扣码请输入' : 'Enter discount code if you have one'}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50 placeholder:text-gray-600" 
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full gold-btn py-5 rounded-full text-lg uppercase tracking-widest mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting 
                  ? (lang === 'zh' ? '处理中...' : 'Processing...') 
                  : t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticketing;
