import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Hero } from './components/HeaderHero';
import { WhatsInside, WhyWekreators, WhoItsFor, TheDifference, ContentLibrary, HowItWorks } from './components/Features';
import { Testimonials, Pricing, FAQ, Footer } from './components/Conversion';

import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Support from './pages/Support';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LandingPage = () => (
  <>
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
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
