import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-white relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-amber-500 font-sans tracking-[0.2em] font-medium text-sm md:text-base uppercase mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
              Featured Works.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-slate-900 hover:text-amber-600 transition-colors pb-1 border-b-2 border-slate-900 hover:border-amber-600"
            >
              View All Projects
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <Link to={`/projects/${project.id}`} className="block overflow-hidden relative aspect-[4/5] md:aspect-[3/4]">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10" />
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-amber-400 text-xs font-sans tracking-widest uppercase mb-3 drop-shadow-md">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-4 drop-shadow-md">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-white/90 font-medium tracking-wide group-hover:text-amber-400 transition-colors">
                    <span>Explore Project</span>
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
