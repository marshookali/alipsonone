import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Building, Home as HomeIcon, Factory } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'The Vertex Tower',
    category: 'Commercial',
    duration: '24 Months',
    value: '$120M',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A 45-story Class A office building featuring LEED Gold certification, a striking glass facade, and state-of-the-art intelligent building systems.',
    problem: 'The client required a highly sustainable, premium office space within a constricted urban footprint that could attract top-tier tech and finance tenants.',
    solution: 'We implemented advanced modular construction techniques for the core structure and a high-performance curtain wall system, finishing 2 months ahead of schedule.',
    results: 'Achieved 95% occupancy within 6 months of opening, won the AIA Design award, and reduced projected energy consumption by 30%.'
  },
  {
    id: 2,
    title: 'Oakridge Estates',
    category: 'Residential',
    duration: '18 Months',
    value: '$45M',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A sprawling 50-acre luxury residential community comprising 120 custom smart-homes with premium natural finishes.',
    problem: 'Balancing the preservation of old-growth oak trees on site while integrating extensive modern smart-home infrastructure.',
    solution: 'Our team utilized specialized ground-radar to map root systems and adapted the foundation layouts dynamically during the excavation phase.',
    results: 'Complete preservation of targeted historic trees and a 100% pre-sale rate before final completion.'
  },
  {
    id: 3,
    title: 'Nexus Data Center',
    category: 'Industrial',
    duration: '14 Months',
    value: '$85M',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A Tier IV hyperscale data center facility built to withstand extreme weather events while maintaining zero downtime.',
    problem: 'The location was prone to severe seismic activity and required uninterrupted power infrastructure.',
    solution: 'Engineered a base-isolated foundation system and installed redundant triple-backup power arrays with integrated rapid-switching.',
    results: 'The facility successfully withstood a 6.8 magnitude earthquake with zero structural damage and 100% uptime.'
  },
  {
    id: 4,
    title: 'Lumina Corporate HQ',
    category: 'Commercial',
    duration: '20 Months',
    value: '$95M',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A modern, ultra-minimalist corporate headquarters focusing on open spaces and natural light.',
    problem: 'Creating seamless large indoor spans without obtrusive support columns.',
    solution: 'Used specialized post-tensioned concrete slabs to achieve massive 60-foot clear spans.',
    results: 'A breathtaking, airy workspace that increased employee satisfaction metrics by 40% post-move.'
  },
  {
    id: 5,
    title: 'The Foundry',
    category: 'Industrial',
    duration: '16 Months',
    value: '$65M',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Adaptive reuse of a 19th-century steel foundry into a modern robotics manufacturing facility.',
    problem: 'Integrating heavy load-bearing requirements into a degraded historical masonry structure.',
    solution: 'Installed a completely independent internal steel exoskeleton that preserved the historic facade while supporting modern cranes.',
    results: 'Award-winning historic preservation paired with cutting-edge industrial capability.'
  },
  {
    id: 6,
    title: 'Aura Condominiums',
    category: 'Residential',
    duration: '22 Months',
    value: '$110M',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'A 30-story luxury waterfront residential tower featuring panoramic views and exclusive amenities.',
    problem: 'Constructing a deep foundation adjacent to an active waterway with shifting sediment.',
    solution: 'Employed specialized deep-soil mixing and underwater concrete placement techniques.',
    results: 'Delivered a completely watertight substructure and secured record-breaking price-per-square-foot sales.'
  }
];

const categories = ['All', 'Commercial', 'Residential', 'Industrial'];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Disable body scroll when modal is open
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

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
                onClick={() => setSelectedProject(project)}
                className="group relative h-[450px] overflow-hidden bg-slate-200 cursor-pointer rounded-sm"
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
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500">
                  <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-white text-3xl font-serif mb-2 group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                    {project.title}
                  </h3>
                  
                  {/* Hover Reveal Stats */}
                  <div className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out absolute bottom-8 left-8 right-8 flex justify-between border-t border-white/20 pt-4">
                    <div>
                      <span className="text-white/60 text-xs uppercase tracking-widest block mb-1">Duration</span>
                      <span className="text-white font-sans font-medium">{project.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white/60 text-xs uppercase tracking-widest block mb-1">Overall Value</span>
                      <span className="text-white font-sans font-medium">{project.value}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-12 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white w-full max-w-5xl rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Hero Side */}
              <div 
                className="w-full md:w-2/5 h-64 md:h-auto bg-cover bg-center relative"
                style={{ backgroundImage: `url(${selectedProject.image})` }}
              >
                <div className="absolute inset-0 bg-slate-900/20" />
              </div>
              
              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto relative">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
                >
                  <X size={20} />
                </button>
                
                <div className="mb-8">
                  <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3 block">
                    Case Study • {selectedProject.category}
                  </span>
                  <h2 className="text-4xl font-serif text-slate-900 mb-6">{selectedProject.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                  </p>
                  
                  {/* Stats Row */}
                  <div className="flex gap-12 border-y border-slate-100 py-6 mb-10">
                    <div>
                      <span className="text-slate-400 text-xs uppercase tracking-widest block mb-1">Project Value</span>
                      <span className="text-slate-900 font-medium text-xl">{selectedProject.value}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-xs uppercase tracking-widest block mb-1">Timeline</span>
                      <span className="text-slate-900 font-medium text-xl">{selectedProject.duration}</span>
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-slate-900 font-serif text-2xl mb-3 flex items-center gap-3">
                        <span className="w-8 h-px bg-amber-500 inline-block"></span>
                        The Challenge
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-serif text-2xl mb-3 flex items-center gap-3">
                        <span className="w-8 h-px bg-amber-500 inline-block"></span>
                        Our Solution
                      </h4>
                      <p className="text-slate-600 leading-relaxed">{selectedProject.solution}</p>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-sm border border-amber-100">
                      <h4 className="text-amber-900 font-serif text-xl mb-2">The Results</h4>
                      <p className="text-amber-800/80 leading-relaxed">{selectedProject.results}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button onClick={() => setSelectedProject(null)} className="w-full py-4 text-center text-slate-500 hover:text-slate-900 font-medium tracking-wide uppercase text-sm transition-colors">
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Portfolio;
