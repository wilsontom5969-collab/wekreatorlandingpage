import React from 'react';

const Refund = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
      <div className="prose prose-invert prose-lg text-secondaryText">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">Because our products are digital and instantly delivered, all sales are final.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">No Refunds</h2>
        <p className="mb-4">Due to the nature of digital goods, we cannot offer refunds, returns, or exchanges once the digital files have been downloaded or accessed.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Exceptions</h2>
        <p className="mb-4">If you experience technical issues accessing or downloading the files, please contact our support team. We will ensure you receive the files you purchased.</p>
      </div>
    </div>
  );
};

export default Refund;
