import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Star, Crown, ChevronRight } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Wekreators" className="h-8 md:h-10 object-contain" />
        </div>
      </div>
    </motion.nav>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 text-xs font-medium text-secondaryText">
            <Star className="w-3.5 h-3.5 text-accent" />
            <span>Trusted by creators, theme pages & agencies</span>
          </div>
          
          <h1 className="text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] font-satoshi font-black tracking-[-0.06em] mb-6 text-white max-w-3xl mx-auto">
            Build Your <br className="hidden md:block" />
            <span className="text-gradient">Faceless Creator</span> <br className="hidden md:block" />
            Business.
          </h1>
          
          <p className="text-lg text-secondaryText leading-relaxed mb-10 max-w-2xl mx-auto">
            Premium digital resources to help you create faster, post consistently, and build a modern creator business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 w-full">
            <a 
              href="https://superprofile.bio/vp/wekreators-content-vault" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Wekreators Content Vault</span>
              <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#vault" className="w-full sm:w-auto glass-card hover:bg-white/5 text-white px-8 py-4 rounded-full font-semibold transition-colors border border-white/10 text-center inline-block">
              View What's Inside
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-mutedText font-medium">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Instant Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-accent" />
              <span>Lifetime Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Beginner Friendly</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 mt-16 w-full relative z-10"
      >
        <a 
          href="https://superprofile.bio/vp/wekreators-content-vault" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.25)] hover:shadow-[0_0_100px_rgba(124,58,237,0.45)] transition-all duration-500 border border-white/10 relative group"
        >
          <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
          <img 
            src="/images/Super profile cover wekreators product.png" 
            alt="Wekreators Content Vault" 
            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
          />
        </a>
      </motion.div>
    </section>
  );
};
