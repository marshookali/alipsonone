import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  // Dynamically extract categories from projectsData
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50">
      <Helmet>
        <title>Portfolio | AlipsonOne Construction - Our Landmark Projects</title>
        <meta name="description" content="Explore AlipsonOne's portfolio of landmark construction projects including commercial towers, luxury residences, and industrial facilities. $500M+ in completed developments." />
        <meta property="og:title" content="Portfolio | AlipsonOne Construction" />
        <meta property="og:description" content="View our landmark achievements in commercial, residential, and industrial construction." />
        <link rel="canonical" href="https://alipsonone.com/portfolio" />
      </Helmet>
      
      {/* Header & Filters */}
      <section className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-slate-200 pb-8">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 font-medium">Our Portfolio</h1>
            <p className="text-slate-600 font-sans text-lg leading-relaxed">
              Explore our landmark achievements. Each project is a testament to our commitment to excellence, precision, and architectural integrity.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-sm text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Grid */}
      <section className="container mx-auto px-6 lg:px-12">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link 
                  to={`/projects/${project.id}`}
                  className="group relative h-[450px] overflow-hidden bg-slate-200 cursor-pointer rounded-3xl block"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                    role="img"
                    aria-label={`${project.title} - ${project.category} project`}
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  
                  {/* Persistent Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80" />
                  
                  {/* Project Title and Category */}
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end transition-all duration-500">
                    <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-3xl font-serif mb-2 group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
