import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import ecommerceSite from '../assets/ecommerce_site.png';
import restaurantSite from '../assets/restaurant_site.png';
import portfolioDashboard from '../assets/portfolio_dashboard.png';
import blogPlatform from '../assets/blog_platform.png';

const projectsData = [
  {
    title: 'E-Commerce Website',
    description: 'A fully responsive online shopping platform with modern UI design and smooth animations.',
    image: ecommerceSite,
    tags: ['React', 'Tailwind', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Restaurant Website',
    description: 'Beautiful landing page for a local restaurant with menu showcase and contact form.',
    image: restaurantSite,
    tags: ['HTML', 'CSS Grid', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Creative portfolio template with CSS animations and modern layout techniques.',
    image: portfolioDashboard,
    tags: ['React', 'Next.js', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Blog Platform',
    description: 'Clean and minimal blog layout with semantic HTML and accessibility features.',
    image: blogPlatform,
    tags: ['TypeScript', 'Tailwind', 'MDX'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Landing Page',
    description: 'High-converting landing page with smooth scrolling and CSS transitions.',
    image: ecommerceSite, // Reusing due to asset availability
    tags: ['React', 'Tailwind', 'Animations'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Corporate Website',
    description: 'Professional business website with multiple pages and contact functionality.',
    image: portfolioDashboard, // Reusing due to asset availability
    tags: ['React', 'Framer Motion', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.article 
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col border border-border/50 hover:border-primary/50 relative"
            >
              {/* Subtle Animated Border Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500 pointer-events-none"></div>

              <div className="relative h-56 overflow-hidden bg-background">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4 backdrop-blur-sm">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.liveUrl} className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform shadow-lg shadow-primary/30" aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="p-3 bg-card border border-border text-text rounded-full hover:scale-110 transition-transform shadow-lg" aria-label="GitHub Repository">
                      <Code size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col relative z-10">
                <h3 className="text-xl font-bold mb-2 text-text group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted/90 text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-background border border-border/50 text-muted text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
