import React from 'react';

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-lg text-secondaryText">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">At Wekreators, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information you provide directly to us, such as when you make a purchase, sign up for our newsletter, or contact support. This may include your name, email address, and payment information.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to process your orders, communicate with you, and improve our services.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Security</h2>
        <p className="mb-4">We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Contact Us</h2>
        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us via our Support page.</p>
      </div>
    </div>
  );
};

export default Privacy;
