import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Calendar, MapPin, Building2, Ruler } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4 text-slate-900">Project Not Found</h1>
          <button onClick={() => navigate(-1)} className="text-amber-600 hover:text-amber-500 underline uppercase tracking-widest text-sm">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white relative">
      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[550px] w-full flex flex-col pt-28 pb-20 md:pb-32">
        <div className="absolute inset-0 bg-slate-900">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col h-full justify-between text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors w-fit">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-amber-500 font-sans tracking-[0.2em] font-medium text-sm md:text-base uppercase mb-4 block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-white/70">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-1 order-2 lg:order-1 lg:sticky lg:top-24">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <h3 className="font-serif text-2xl text-slate-900 mb-8 border-b border-slate-200 pb-4">Project Overview</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Building2 className="text-amber-600 shrink-0" size={24} />
                    <div>
                      <p className="text-sm tracking-widest text-slate-500 uppercase mb-1">Client</p>
                      <p className="font-medium text-slate-900">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <MapPin className="text-amber-600 shrink-0" size={24} />
                    <div>
                      <p className="text-sm tracking-widest text-slate-500 uppercase mb-1">Location</p>
                      <p className="font-medium text-slate-900">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Calendar className="text-amber-600 shrink-0" size={24} />
                    <div>
                      <p className="text-sm tracking-widest text-slate-500 uppercase mb-1">Year</p>
                      <p className="font-medium text-slate-900">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Ruler className="text-amber-600 shrink-0" size={24} />
                    <div>
                      <p className="text-sm tracking-widest text-slate-500 uppercase mb-1">Area</p>
                      <p className="font-medium text-slate-900">{project.area}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-200">
                  <h4 className="font-sans text-sm tracking-widest text-slate-900 uppercase mb-4">Services Provided</h4>
                  <ul className="space-y-3">
                    {project.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600">
                        <Check size={16} className="text-amber-500" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Description & Gallery */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-serif text-slate-900 mb-6">The Challenge & Solution</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-sans mb-12">
                  {project.description}
                </p>
              </motion.div>

              <div className="space-y-8">
                {project.gallery && project.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100"
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
