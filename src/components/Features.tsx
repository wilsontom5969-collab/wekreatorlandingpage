import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, Download, CheckCircle2, TrendingUp, MonitorPlay, 
  Smartphone, Clock, Layers, Layout, Zap, Video, Star, Users, Briefcase
} from 'lucide-react';

export const WhatsInside = () => {
  const cards = [
    { title: 'Cars Reels', desc: 'High-octane car edits.', img: '/images/Car Reels Cover.png' },
    { title: 'Luxury Reels', desc: 'Premium lifestyle aesthetics.', img: '/images/Luxury Reels .png' },
    { title: 'Mafia Cars', desc: 'Dark and moody cinematic cars.', img: '/images/mafia cars.png' },
    { title: 'Trading', desc: 'Finance and crypto visuals.', img: '/images/Trading reels .png' },
    { title: 'Animation', desc: 'Engaging animated loops.', img: '/images/Anime Reels .png' },
    { title: 'Escape Matrix', desc: 'Motivational deep content.', img: '/images/Escape matrix.png' },
  ];

  return (
    <section id="vault" className="py-[160px] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block text-accent font-bold text-xs tracking-widest mb-4">CONTENT VAULT</div>
          <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white mb-6">
            Everything You Need.<br />Nothing You Don't.
          </h2>
          <p className="text-secondaryText max-w-2xl mx-auto text-lg">
            A curated collection of premium creator assets designed to save hours of content creation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(124,58,237,0.15)' }}
              className="bg-cardSecondary border border-white/5 rounded-[28px] p-6 flex flex-col items-center text-center transition-all"
            >
              <div className="w-full aspect-square mb-6 rounded-[20px] overflow-hidden bg-white/5 relative">
                {/* Fallback styling just in case image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-white/10 -z-10">
                  <Play className="w-12 h-12" />
                </div>
                <img src={card.img} alt={card.title} className="w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-mutedText">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[28px] p-[2px] bg-gradient-to-r from-accent to-[#A855F7]"
        >
          <div className="bg-card rounded-[26px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 max-w-xl">
              <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold mb-4">Included Free</div>
              <h3 className="text-3xl font-black text-white mb-4">Learn How i made $500k in 3 months</h3>
              <p className="text-secondaryText text-lg">Learn how to build a faceless Instagram business from scratch with our step-by-step guide.</p>
            </div>
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 glass-card rounded-[20px] flex items-center justify-center">
                <Star className="w-12 h-12 md:w-20 md:h-20 text-accent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const WhyWekreators = () => {
  const features = [
    { icon: <Download />, title: 'Instant Digital Access', desc: 'Download immediately after purchase.' },
    { icon: <CheckCircle2 />, title: 'Beginner Friendly', desc: 'No experience required.' },
    { icon: <Star />, title: 'Premium Content', desc: 'Curated high-quality assets.' },
    { icon: <Smartphone />, title: 'Made for Short Form', desc: 'Instagram Reels, Shorts, TikTok.' },
    { icon: <Clock />, title: 'Save Hours', desc: 'Stop searching. Start creating.' },
    { icon: <TrendingUp />, title: 'Lifetime Improvements', desc: 'Library continues growing.' },
  ];

  return (
    <section id="features" className="py-[160px] bg-card relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white mb-16 text-center">
          Built For Modern Creators.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-cardSecondary border border-white/5 rounded-[28px] p-[40px]"
            >
              <div className="text-accent mb-6">
                {React.cloneElement(f.icon as React.ReactElement, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-mutedText">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhoItsFor = () => {
  const targets = [
    { icon: <Smartphone />, title: 'Faceless Instagram Pages' },
    { icon: <Layout />, title: 'Theme Pages' },
    { icon: <Video />, title: 'Content Creators' },
    { icon: <Zap />, title: 'Digital Entrepreneurs' },
    { icon: <Users />, title: 'Freelancers' },
    { icon: <Briefcase />, title: 'Agencies' },
  ];

  return (
    <section className="py-[160px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white mb-16 text-center">
          Designed For
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {targets.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-[28px] flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="text-white/80">{React.cloneElement(t.icon as React.ReactElement, { className: 'w-8 h-8' })}</div>
              <div className="font-bold text-white">{t.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TheDifference = () => {
  return (
    <section className="py-[160px] bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white mb-16 text-center">
          Create More.<br />Search Less.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-cardSecondary border border-white/5 rounded-[28px] p-10 md:p-[40px] opacity-70 grayscale">
            <h3 className="text-2xl font-bold text-white mb-8">Old Way</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 text-secondaryText">
                <span className="text-red-400 mt-1">✕</span>
                <span>Searching random videos</span>
              </li>
              <li className="flex items-start space-x-3 text-secondaryText">
                <span className="text-red-400 mt-1">✕</span>
                <span>Downloading poor quality clips</span>
              </li>
              <li className="flex items-start space-x-3 text-secondaryText">
                <span className="text-red-400 mt-1">✕</span>
                <span>Inconsistent content</span>
              </li>
              <li className="flex items-start space-x-3 text-secondaryText">
                <span className="text-red-400 mt-1">✕</span>
                <span>Hours wasted</span>
              </li>
              <li className="flex items-start space-x-3 text-secondaryText">
                <span className="text-red-400 mt-1">✕</span>
                <span>Creative burnout</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-accent/10 border border-accent/20 rounded-[28px] p-10 md:p-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">With Wekreators</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start space-x-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Premium organized content</span>
              </li>
              <li className="flex items-start space-x-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Ready-to-use assets</span>
              </li>
              <li className="flex items-start space-x-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Professional quality</span>
              </li>
              <li className="flex items-start space-x-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>More time creating</span>
              </li>
              <li className="flex items-start space-x-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Scalable workflow</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContentLibrary = () => {
  return (
    <section className="py-[160px] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white mb-16">
          Inside The Content Vault
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {['Cars Reels', 'Luxury Reels', 'Trading', 'Mafia Cars', 'Animation', 'Escape Matrix', 'Playbook', 'Future Updates'].map((item, i) => (
            <div key={i} className="glass-card py-6 rounded-[20px] font-bold text-white">
              {item}
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl font-black text-accent mb-2">6</div>
            <div className="text-sm text-secondaryText font-medium">Collections</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-accent mb-2">5000+</div>
            <div className="text-sm text-secondaryText font-medium">Videos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-accent mb-2">∞</div>
            <div className="text-sm text-secondaryText font-medium">Lifetime Access</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-accent mb-2"><Download className="w-10 h-10 inline" /></div>
            <div className="text-sm text-secondaryText font-medium">Instant Download</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks = () => {
  return (
    <section className="py-[160px] bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white mb-20 text-center">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {[
            { step: 'STEP 1', title: 'Purchase', desc: 'Instantly unlock the vault.' },
            { step: 'STEP 2', title: 'Download', desc: 'Choose your collection.' },
            { step: 'STEP 3', title: 'Create', desc: 'Post consistently and grow.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-cardSecondary border border-white/5 rounded-[28px] p-[40px] text-center relative z-10"
            >
              <div className="text-accent text-xs font-bold tracking-widest mb-6">{item.step}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-secondaryText">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
