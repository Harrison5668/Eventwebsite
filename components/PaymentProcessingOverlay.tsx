
import React from 'react';

const PaymentProcessingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050510]/90 backdrop-blur-xl">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-cyan-400/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-cyan-400 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.976 9.15c-2.172-.112-3.387.69-3.387 1.993 0 2.873 5.432 2.373 5.432 5.56 0 1.638-1.42 2.758-3.731 2.758-2.671 0-4.015-.895-4.153-2.343h1.861c.172 1.034 1.138 1.482 2.344 1.482 1.55 0 2.24-.655 2.24-1.55 0-2.907-5.43-2.378-5.43-5.525 0-1.482 1.258-2.689 3.525-2.689 2.223 0 3.732.965 3.87 2.314h-1.871zm5.127-4.008l-2.016 14.156h-2.137l2.016-14.156h2.137zm-8.89 0l-2.016 14.156h-2.137l2.016-14.156h2.137zm-3.567 0l-2.016 14.156h-2.137l2.016-14.156h2.137z"/>
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-black mb-2 text-white">Connecting to Stripe</h3>
        <p className="text-gray-500 font-medium animate-pulse uppercase tracking-[0.2em] text-xs">Preparing your secure checkout...</p>
      </div>
    </div>
  );
};

export default PaymentProcessingOverlay;
