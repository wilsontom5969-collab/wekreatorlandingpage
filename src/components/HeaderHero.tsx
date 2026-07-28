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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Wekreators" className="h-8 md:h-10 object-contain" />
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-secondaryText">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <a href="/#vault" className="hover:text-white transition-colors">Vault</a>
          <a href="/#features" className="hover:text-white transition-colors">Features</a>
          <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="/#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <div>
          <a 
            href="https://superprofile.bio/vp/wekreators-content-vault" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-accent hover:bg-accentHover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
          >
            Get Access
          </a>
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
    </section>
  );
};
