const Terms = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-invert prose-lg text-secondaryText">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-4">Please read these Terms of Service carefully before using the Wekreators website.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Intellectual Property</h2>
        <p className="mb-4">The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.</p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Use License</h2>
        <p className="mb-4">Upon purchase, you are granted a non-exclusive, non-transferable license to use the downloaded assets in your own personal or commercial projects. You may not resell, redistribute, or share these files as standalone products.</p>
      </div>
    </div>
  );
};

export default Terms;
