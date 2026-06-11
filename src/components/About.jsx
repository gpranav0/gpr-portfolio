import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Briefcase, Users, User, Terminal, Layout } from 'lucide-react';

const StatCounter = ({ end, suffix, label, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <h3 className="text-3xl font-bold mb-1">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {end}
          </motion.span>
        ) : "0"}
        <span className="text-primary">{suffix}</span>
      </h3>
      <p className="text-muted text-sm font-medium uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

const TimelineItem = ({ year, title, company, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-8 border-l border-border last:pb-0"
    >
      <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background"></div>
      <span className="text-sm text-primary font-bold mb-1 block">{year}</span>
      <h4 className="text-lg font-bold text-text mb-1">{title}</h4>
      <span className="text-sm text-muted font-medium mb-2 block">{company}</span>
      <p className="text-muted/80 text-sm">{description}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Professional Summary</h3>
                  <p className="text-primary font-medium">Web Developer</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none text-muted/90 space-y-4">
                <p>
                  I am a passionate web developer with expertise in creating responsive and user-friendly websites. I love turning ideas into reality through clean code and creative design.
                </p>
                <p>
                  With a strong foundation in modern web technologies, I focus on building accessible, performant, and scalable applications that provide excellent user experiences while meeting business objectives.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="text-primary" size={20} />
                  Experience Timeline
                </h4>
                <div className="ml-2">
                  <TimelineItem 
                    year="2022 - Present"
                    title="Frontend Developer"
                    company="Tech Solutions Inc."
                    description="Lead the development of modern React applications, improved performance by 40%, and mentored junior developers."
                    delay={0.1}
                  />
                  <TimelineItem 
                    year="2020 - 2022"
                    title="Web Designer"
                    company="Creative Agency"
                    description="Designed and built responsive websites for various clients using HTML, CSS, and vanilla JavaScript."
                    delay={0.2}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCounter end={10} suffix="+" label="Projects Completed" icon={Code2} />
              <StatCounter end={2} suffix="+" label="Years Experience" icon={Terminal} />
              <StatCounter end={5} suffix="+" label="Happy Clients" icon={Users} />
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border-primary/20 bg-primary/5">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                  <Layout size={24} />
                </div>
                <h3 className="text-lg font-bold mb-1">UI/UX Focus</h3>
                <p className="text-muted text-sm font-medium">Pixel Perfect Design</p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-bl-full filter blur-xl"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Let's build something amazing together</h3>
              <p className="text-muted mb-6 relative z-10">I'm currently available for freelance projects and full-time opportunities.</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors relative z-10">
                Send a message &rarr;
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
