import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, CheckCircle2, Shield, Zap } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    { name: "Rohan S.", role: "Theme Page Owner", text: "Saved me literally hundreds of hours searching for good car clips. Quality is insane." },
    { name: "Priya M.", role: "Content Creator", text: "The luxury reels collection is perfectly curated. My engagement doubled." },
    { name: "Arjun T.", role: "Agency Founder", text: "We use these assets for our clients. Instant ROI. The playbook is a nice bonus." },
    { name: "Kavya R.", role: "Trader", text: "Finally high quality trading backgrounds that don't look cheesy." },
    { name: "Vikram B.", role: "Freelancer", text: "The escape matrix collection fits my brand perfectly. Highly recommend!" },
    { name: "Neha K.", role: "Entrepreneur", text: "Worth every penny. The time saved alone pays for it 10x over." },
    { name: "Aditya D.", role: "Digital Marketer", text: "I've tried many packs, but this one has the best variety and crisp quality." },
    { name: "Sneha P.", role: "Content Strategist", text: "I can finally post consistently without worrying about finding the right b-roll." },
    { name: "Rahul V.", role: "Agency Owner", text: "Incredible value. It has completely streamlined our agency's short-form workflow." }
  ];

  return (
    <section className="py-[160px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white">
          Loved by Modern Creators
        </h2>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden mask-edges group py-4">
        <div className="flex space-x-6 animate-scroll group-hover:pause">
          {[...reviews, ...reviews].map((r, i) => (
            <div key={i} className="glass-card w-[300px] shrink-0 p-6 rounded-[24px] border border-white/5">
              <div className="flex text-accent mb-4">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-white text-sm leading-relaxed mb-6">"{r.text}"</p>
              <div className="mt-auto">
                <div className="text-white font-bold text-xs">{r.name}</div>
                <div className="text-mutedText text-[11px]">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-[160px] bg-card relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-block text-accent font-bold text-xs tracking-widest mb-4">LIFETIME ACCESS</div>
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white mb-16">
          One Purchase.<br />Lifetime Access.
        </h2>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-cardSecondary border border-white/10 rounded-[28px] p-10 md:p-[56px] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 blur-[100px]" />
          
          <div className="flex justify-center items-end space-x-4 mb-10">
            <span className="text-2xl text-mutedText line-through decoration-red-500/50 mb-2">₹5999</span>
            <span className="text-[64px] font-black text-white leading-none">₹299</span>
          </div>
          
          <ul className="space-y-6 text-left mb-12 max-w-sm mx-auto">
            {[
              '6 Premium Reels Collections',
              'Wekreators Playbook',
              'Lifetime Updates',
              'Instant Download',
              'Future Collections'
            ].map((f, i) => (
              <li key={i} className="flex items-center space-x-4 text-white">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <span className="text-lg font-medium">{f}</span>
              </li>
            ))}
          </ul>
          
          <a 
            href="https://superprofile.bio/vp/wekreators-content-vault"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center bg-accent hover:bg-accentHover text-white py-5 rounded-full text-lg font-bold transition-all shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]"
          >
            Get Instant Access
          </a>
          
          <div className="flex justify-center items-center space-x-6 mt-8 text-sm text-mutedText">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Safe Payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Instant Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const faqs = [
    { q: "How do I receive my purchase?", a: "You'll receive instant access immediately after payment." },
    { q: "Is this beginner friendly?", a: "Yes. Our assets are ready to use and the playbook explains everything from scratch." },
    { q: "Can I download everything?", a: "Yes. You have full access to download all assets to your devices." },
    { q: "Will new content be added?", a: "Yes. We continuously update our vault with new premium content." },
    { q: "Do I get lifetime access?", a: "Yes. One single payment gives you lifetime access and all future updates." }
  ];

  return (
    <section id="faq" className="py-[160px]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-[56px] leading-[1.1] font-black text-white mb-16 text-center">
          FAQ
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const [open, setOpen] = useState(false);
            return (
              <div key={i} className="bg-cardSecondary border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpen(!open)}
                >
                  <span className="font-bold text-lg text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-mutedText transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {open && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-secondaryText"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-[64px] font-black font-satoshi text-white leading-none mb-6">
              Build.<br />Create.<br />Scale.
            </h2>
            <p className="text-secondaryText max-w-sm">
              Wekreators creates premium digital resources for modern creators.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-end space-y-4">
            <div className="flex space-x-6 text-sm font-medium text-secondaryText">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
              <Link to="/support" className="hover:text-white transition-colors">Support</Link>
            </div>
            <div className="flex space-x-6 text-sm font-medium text-secondaryText">
              <a href="https://www.instagram.com/wekreators/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-sm text-mutedText">
          © 2026 Wekreators. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
