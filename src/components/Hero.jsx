import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import myPhoto from '../assets/my_photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted font-medium"
            >
              🚀 Available for new opportunities
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-gradient">[Your Name]</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted font-medium mb-4">
              Web Developer & Designer
            </h2>
            
            <p className="text-base md:text-lg text-muted/80 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
              Creating beautiful and functional websites with modern technologies. I specialize in building premium digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#projects" className="group flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="group flex items-center gap-2 px-8 py-3 bg-card border border-border text-text rounded-full font-medium transition-all hover:scale-105 hover:bg-card/80">
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 hidden md:flex justify-center relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-[400px] h-[400px]">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent rounded-full opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-4 glass-card rounded-3xl flex items-center justify-center border border-border/50 overflow-hidden shadow-2xl">
                 <img src={myPhoto} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
