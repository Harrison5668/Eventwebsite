
import React, { useState } from 'react';

interface Props {
  t: any;
  lang: string;
}

const Ticketing: React.FC<Props> = ({ t, lang }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
    
    // Validate required fields
    if (!name || !email || !company) {
      alert(lang === 'zh' ? '请填写所有必填项！' : 'Please fill in all required fields!');
      return;
    }
    
    setIsSubmitting(true);
    
    // Save data to Google Sheets
    const contactData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      linkedin: linkedin || '',
      needs: needs || '',
      type: 'Contact Request',
      registrationDate: new Date().toLocaleDateString()
    };
    
    // Send to Google Sheets (no-cors mode)
    fetch(GOOGLE_SHEETS_API, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData)
    }).then(() => {
      console.log('Contact request sent to Google Sheets:', contactData);
    }).catch((error) => {
      console.error('Error sending contact request:', error);
    });
    
    // Show success modal after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 500);
  };

  return (
    <section id="ticketing" className="pt-16 pb-8 px-6 bg-[#030303] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              {lang === 'zh' ? '报名购票' : 'Register & Purchase Ticket'}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {lang === 'zh' 
                ? '请点击下方按钮前往 Luma 平台购买门票。门票支付成功后，我们将发送峰会具体位置信息。'
                : 'Click the button below to purchase your ticket on Luma. Once payment is confirmed, we will send you the exact summit location.'}
            </p>
            
            {/* Purchase Ticket Button */}
            <a 
              href="https://luma.com/1btuwmgv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block gold-btn px-12 py-5 rounded-full text-lg uppercase tracking-widest mb-12"
            >
              {lang === 'zh' ? '前往 Luma 购票' : 'Get Tickets on Luma'}
            </a>

            {/* Features List */}
            <div className="glass-card p-8 rounded-2xl border-gold/40">
              <h3 className="text-xl font-bold mb-6 text-gold">
                {lang === 'zh' ? '峰会权益' : 'What\'s Included'}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {(lang === 'zh' ? [
                  '所有主题演讲与闭门分享',
                  '社交晚宴与鸡尾酒会',
                  '峰会资料包与参会者通讯录'
                ] : [
                  'Full keynote sessions',
                  'Networking & cocktail reception',
                  'Summit materials'
                ]).map((f: string, idx: number) => (
                  <li key={idx} className="flex items-center"><span className="text-gold mr-3">✓</span> {f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card p-12 rounded-[3rem]">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {lang === 'zh' ? '联系我们' : 'Contact Us'}
            </h3>
            <p className="text-gray-400 text-sm mb-8 text-center leading-relaxed">
              {lang === 'zh' 
                ? '如有任何问题或特殊需求，请填写下方表单，我们的团队会尽快与您联系。'
                : 'Have questions or special requests? Fill out the form below and our team will reach out to you shortly.'}
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">
                    {lang === 'zh' ? '姓名（必填）' : 'Full Name (Required)'}
                  </label>
                  <input 
                    name="name"
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">
                    {lang === 'zh' ? '邮箱（必填）' : 'Email (Required)'}
                  </label>
                  <input 
                    name="email"
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">
                  {lang === 'zh' ? '公司/职位（必填）' : 'Company / Role (Required)'}
                </label>
                <input 
                  name="company"
                  required 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">
                  {lang === 'zh' ? 'LinkedIn（可选）' : 'LinkedIn (Optional)'}
                </label>
                <input 
                  name="linkedin"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50" 
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase mb-2">
                  {lang === 'zh' ? '参会需求（可选）' : 'What can we help you? (Optional)'}
                </label>
                <textarea 
                  name="needs"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-gold/50"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full gold-btn py-5 rounded-full text-lg uppercase tracking-widest mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting 
                  ? (lang === 'zh' ? '发送中...' : 'Sending...') 
                  : (lang === 'zh' ? '提交咨询' : 'Contact Us')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-[#050505] border border-gold/30 rounded-3xl p-12 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              {lang === 'zh' ? '已收到您的需求' : 'We Received Your Request'}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              {lang === 'zh' 
                ? '感谢您的咨询！我们的团队已收到您的信息，会尽快安排专人与您联系。'
                : 'Thank you for reaching out! Our team has received your information and will contact you shortly.'}
            </p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="gold-btn px-8 py-3 rounded-full text-sm uppercase tracking-widest"
            >
              {lang === 'zh' ? '关闭' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Ticketing;
