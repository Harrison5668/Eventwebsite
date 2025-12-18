
import React, { useState } from 'react';
import PaymentProcessingOverlay from './PaymentProcessingOverlay';
import PaymentSuccessModal from './PaymentSuccessModal';

const ExhibitorPackages: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'price_booth_a',
      name: 'Type A Booth',
      price: '$2,000',
      tag: 'EARLY BIRD',
      features: [
        '10 x 10 feet Space',
        '2 Event Passes',
        'One Table & Chairs',
        'Wi-Fi & Power'
      ],
      borderColor: 'border-cyan-500/50',
      titleColor: 'text-white'
    },
    {
      id: 'price_booth_b',
      name: 'Type B Booth',
      price: '$3,200',
      tag: 'EARLY BIRD (POPULAR)',
      features: [
        '20 x 10 feet (Double)',
        '4 Event Passes',
        'Two Tables & Chairs',
        'Priority Location'
      ],
      borderColor: 'border-purple-500/50',
      titleColor: 'text-purple-400'
    }
  ];

  const handleBookNow = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsProcessing(true);
    
    // Simulate Stripe Checkout Redirect
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2500);
  };

  return (
    <section id="exhibitors" className="relative py-32 px-6 bg-[#050510]">
      {isProcessing && <PaymentProcessingOverlay />}
      {showSuccess && <PaymentSuccessModal onClose={() => setShowSuccess(false)} packageName={selectedPackage} />}
      
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-20">Exhibitor Packages</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`glass-card p-12 rounded-[2rem] border-2 ${pkg.borderColor} transition-transform hover:scale-[1.02] flex flex-col items-center`}
            >
              <h3 className={`text-4xl font-black mb-6 ${pkg.titleColor}`}>
                {pkg.name}
              </h3>
              <div className="text-5xl font-black text-cyan-400 mb-2">
                {pkg.price}
              </div>
              <div className="text-xs font-black text-yellow-400 mb-12 tracking-wider">
                {pkg.tag}
              </div>
              
              <ul className="space-y-6 text-left w-full mb-16">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-gray-300 font-medium">
                    <svg className="w-5 h-5 text-cyan-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleBookNow(pkg.name)}
                className="w-full border-2 border-cyan-400 text-cyan-400 py-4 rounded-full font-bold hover:bg-cyan-400/10 transition-all uppercase tracking-widest active:scale-95"
              >
                BOOK NOW
              </button>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="max-w-3xl mx-auto text-left glass-card p-10 rounded-2xl border border-white/5">
          <p className="text-[10px] tracking-[0.2em] font-black text-gray-500 uppercase mb-6">ADD-ON SERVICES</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-white/5">
              <span className="font-medium">Presentation Slot (5 mins)</span>
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-bold">$300</span>
                <button onClick={() => handleBookNow('Presentation Slot')} className="text-[10px] font-black bg-white/10 hover:bg-white/20 px-3 py-1 rounded">ADD</button>
              </div>
            </div>
            <div className="flex justify-between items-center py-4">
              <span className="font-medium">Screen Ad (30s)</span>
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-bold">$300</span>
                <button onClick={() => handleBookNow('Screen Ad')} className="text-[10px] font-black bg-white/10 hover:bg-white/20 px-3 py-1 rounded">ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExhibitorPackages;
