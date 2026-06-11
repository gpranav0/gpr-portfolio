import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, MessageSquare, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-t-full filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-border/50 pb-12">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-gradient inline-block mb-4">
              Portfolio.
            </a>
            <p className="text-muted/80 max-w-sm">
              Building modern, beautiful, and performant web experiences with cutting-edge technologies.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20" aria-label="GitHub">
              <Code size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20" aria-label="LinkedIn">
              <Briefcase size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20" aria-label="Twitter">
              <MessageSquare size={20} />
            </a>
          </div>

        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-muted/60 text-sm">
            &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-primary transition-colors group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
