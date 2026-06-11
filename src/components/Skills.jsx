import React from 'react';
import { motion } from 'framer-motion';
import { FileCode2, Palette, Smartphone, Accessibility, GitBranch, LayoutTemplate } from 'lucide-react';

const skillsData = [
  {
    title: 'HTML5',
    icon: FileCode2,
    description: 'Semantic markup and accessible web structure.',
    progress: 90,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'CSS3',
    icon: Palette,
    description: 'Modern styling with Flexbox, Grid, and Tailwind.',
    progress: 85,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Responsive Design',
    icon: Smartphone,
    description: 'Mobile-first and adaptive layouts for all devices.',
    progress: 95,
    color: 'from-green-400 to-emerald-600'
  },
  {
    title: 'UI/UX Design',
    icon: LayoutTemplate,
    description: 'User-centered design principles and prototyping.',
    progress: 75,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Accessibility',
    icon: Accessibility,
    description: 'WCAG compliant web development practices.',
    progress: 80,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    description: 'Git, GitHub, and collaborative development workflows.',
    progress: 85,
    color: 'from-slate-500 to-gray-700'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted mt-6 max-w-2xl mx-auto"
          >
            My toolkit for building high-performance, beautiful, and accessible web applications.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <skill.icon size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-muted/80 text-sm mb-6 h-10">{skill.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-muted">Proficiency</span>
                    <span className="text-text">{skill.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border/50">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
