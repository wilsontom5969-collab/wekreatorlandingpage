import React from 'react';
import { Navbar, Hero } from './components/HeaderHero';
import { WhatsInside, WhyWekreators, WhoItsFor, TheDifference, ContentLibrary, HowItWorks } from './components/Features';
import { Testimonials, Pricing, FAQ, Footer } from './components/Conversion';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatsInside />
      <WhyWekreators />
      <WhoItsFor />
      <TheDifference />
      <ContentLibrary />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
