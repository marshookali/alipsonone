import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const FeaturedProjects = () => {
  return (
    <section className="py-32 bg-alabaster relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="text-terracotta font-body tracking-[0.3em] font-bold text-xs uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-terracotta"></span>
              Our Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-ink leading-none uppercase">
              Featured <span className="text-forest">Works.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-ink hover:text-terracotta transition-colors pb-2 border-b-2 border-ink hover:border-terracotta"
            >
              View All Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projectsData.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <Link to={`/projects/${project.id}`} className="block overflow-hidden relative aspect-[3/4] bg-ink">
                <div className="absolute inset-0 bg-ink/40 group-hover:bg-ink/10 transition-colors duration-700 z-10 mix-blend-multiply" />
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-ink via-ink/40 to-transparent z-10" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-x-0 bottom-0 p-10 z-20 flex flex-col justify-end transition-transform duration-700 group-hover:-translate-y-4">
                  <span className="text-terracotta text-xs font-body tracking-[0.2em] font-bold uppercase mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-alabaster mb-6 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-alabaster/80 font-bold tracking-widest uppercase group-hover:text-terracotta transition-colors">
                    <span>Explore</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
