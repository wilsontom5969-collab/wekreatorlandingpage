import React from 'react';

const Support = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Support</h1>
      <div className="prose prose-invert prose-lg text-secondaryText">
        <p className="mb-4">Need help? We're here for you.</p>
        <div className="bg-cardSecondary border border-white/5 rounded-[24px] p-8 mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <p className="mb-6">The fastest way to reach us is by sending a direct message on Instagram.</p>
          <a 
            href="https://www.instagram.com/wekreators/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accentHover text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            Message on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
