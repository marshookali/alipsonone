import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const INITIAL_COUNT = 3;

const ProjectCard = ({ project, index }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative"
  >
    <Link to={`/projects/${project.id}`} className="block overflow-hidden relative aspect-[3/4] bg-ink rounded-3xl">
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
);

const FeaturedProjects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_COUNT);
  const hiddenCount = projectsData.length - INITIAL_COUNT;

  return (
    <section className="py-14 md:py-32 bg-alabaster relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-6 md:gap-8">
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
            <h2 className="text-3xl md:text-7xl font-display font-bold text-ink leading-none uppercase">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* First 3 always rendered */}
          {projectsData.slice(0, INITIAL_COUNT).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* Remaining cards - animated in/out */}
          <AnimatePresence>
            {showAll && projectsData.slice(INITIAL_COUNT).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center mt-16 md:mt-24 gap-4"
        >
          <button
            id="featured-works-view-more"
            onClick={() => setShowAll(prev => !prev)}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-ink text-alabaster font-display font-bold text-xs tracking-[0.25em] uppercase rounded-full overflow-hidden transition-all duration-300 hover:text-white"
          >
            <span className="absolute inset-0 w-full h-full bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
            <span className="relative z-10 flex items-center gap-3">
              {showAll ? (
                <>Show Less <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" /></>
              ) : (
                <>View More <span className="opacity-50">+{hiddenCount}</span> <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></>
              )}
            </span>
          </button>
          {!showAll && (
            <p className="text-ink/40 text-xs font-body tracking-widest uppercase">
              {hiddenCount} more projects available
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
