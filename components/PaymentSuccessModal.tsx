
import React from 'react';

interface Props {
  onClose: () => void;
  packageName: string | null;
}

const PaymentSuccessModal: React.FC<Props> = ({ onClose, packageName }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-[#050510]/60 backdrop-blur-sm">
      <div className="glass-card max-w-md w-full p-10 rounded-[2.5rem] border-2 border-cyan-400/30 text-center shadow-[0_0_50px_rgba(34,211,238,0.2)]">
        <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
          <svg className="w-10 h-10 text-[#050510]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-black mb-4">Reservation Successful!</h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Your request for <span className="text-white font-bold">{packageName}</span> has been received. A confirmation email with contract details will be sent shortly.
        </p>
        
        <button 
          onClick={onClose}
          className="w-full custom-gradient-btn py-4 rounded-full font-bold text-white uppercase tracking-widest hover:scale-105 transition-transform"
        >
          GREAT, GOT IT!
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessModal;
