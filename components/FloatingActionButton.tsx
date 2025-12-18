
import React from 'react';

const FloatingActionButton: React.FC = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button className="custom-gradient-btn px-6 py-3 rounded-full flex items-center space-x-3 shadow-2xl hover:scale-105 transition-transform group">
        <div className="bg-white/20 p-2 rounded-lg">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        </div>
        <span className="font-bold text-white whitespace-nowrap">Get Tickets</span>
      </button>
    </div>
  );
};

export default FloatingActionButton;
