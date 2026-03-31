import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyShowcase = () => {
  // State for 'How We Build'
  const [activeHowWeBuild, setActiveHowWeBuild] = useState(0);
  // State for 'What We Build'
  const [activeWhatWeBuild, setActiveWhatWeBuild] = useState(0);

  const howWeBuildTabs = [
    {
      title: "Operations Playbook",
      desc: "A reliable set of standards that we've refined over decades of building that informs our approach on every project across the country.",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop",
      linkText: "LEARN MORE"
    },
    {
      title: "Proven Technologies",
      desc: "Digital solutions, tested and scaled on jobsites, that boost efficiency and safety while maintaining our high standards.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      linkText: "LEARN MORE"
    },
    {
      title: "Data & AI",
      desc: "Leveraging predictive models and project data to mitigate risk, optimize schedules, and enhance decision-making in real-time.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      linkText: "LEARN MORE"
    },
    {
      title: "Advanced Expertise",
      desc: "Our specialized teams bring deep sector knowledge to complex builds, ensuring innovative solutions from preconstruction to closeout.",
      img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1000&auto=format&fit=crop",
      linkText: "LEARN MORE"
    }
  ];

  const whatWeBuildTabs = [
    {
      title: "Careers",
      desc: "When you work at our company, you're never at a standstill. Neither is your career.",
      linkText: "JOIN THE TEAM",
      linkUrl: "/contact", // Using contact as placeholder for careers
      img: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1000"
    },
    {
      title: "Projects",
      desc: "We deliver exceptional results across diverse sectors, transforming ambitious visions into enduring realities.",
      linkText: "VIEW PORTFOLIO",
      linkUrl: "/portfolio",
      img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1000"
    },
    {
      title: "Communities",
      desc: "We build more than structures; we build up the communities in which we live and work.",
      linkText: "OUR IMPACT",
      linkUrl: "/about",
      img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1000"
    }
  ];

  return (
    <div className="w-full bg-[#f4f5f6]">
      
      {/* 1. At A Glance (Bento Box Grid) */}
      <section className="container mx-auto px-6 lg:px-12 py-24">
        {/* Responsive Grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-300">
          
          {/* Box 1: Title (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 border-r border-b border-slate-300 p-8 md:p-12 flex items-center bg-[#f4f5f6]">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans text-slate-900 leading-tight tracking-tight">
              Our company <br /> at a glance
            </h2>
          </div>

          {/* Box 2: 16 Locations */}
          <div className="col-span-1 border-r border-b border-slate-300 p-8 md:p-12 flex flex-col justify-between bg-[#f4f5f6] h-64 md:h-auto min-h-[300px]">
            <span className="text-6xl md:text-7xl font-sans text-slate-900 tracking-tight">16</span>
            <div className="flex items-center gap-3 uppercase text-xs font-semibold tracking-wider text-slate-700 mt-auto">
              <span className="w-2.5 h-2.5 bg-red-600 inline-block"></span>
              National Office Locations
            </div>
          </div>

          {/* Box 3: Image (Drone Controller) */}
          <div className="col-span-1 border-r border-b border-slate-300 relative bg-white overflow-hidden h-64 md:h-auto min-h-[300px] group">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" 
              alt="Engineering" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Box 4: $10B Revenue */}
          <div className="col-span-1 border-r border-b border-slate-300 p-8 md:p-12 flex flex-col justify-between bg-[#f4f5f6] h-64 md:h-auto min-h-[300px]">
            <span className="text-6xl md:text-7xl font-sans text-slate-900 tracking-tight">$10B</span>
            <div className="flex items-center gap-3 uppercase text-xs font-semibold tracking-wider text-slate-700 mt-auto">
              <span className="w-2.5 h-2.5 bg-red-600 inline-block"></span>
              Annual Revenue
            </div>
          </div>

          {/* Box 5: Image (Rebar) */}
          <div className="col-span-1 border-r border-b border-slate-300 relative bg-white overflow-hidden h-64 md:h-auto min-h-[300px] group">
            <img 
              src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=800&auto=format&fit=crop" 
              alt="Construction Rebar" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Box 6: Badge Area */}
          <div className="col-span-1 border-r border-b border-slate-300 p-8 md:p-12 flex flex-col justify-between bg-[#f4f5f6] h-64 md:h-auto min-h-[300px]">
            <div className="w-full flex justify-center">
              {/* Dummy badge made of CSS for the "Great Place to Work" */}
              <div className="w-32 h-40 bg-slate-900 flex flex-col items-center justify-center text-center p-4">
                <span className="text-white font-bold text-lg leading-tight mb-2">Great <br/> Place <br/> To <br/> Work</span>
                <span className="text-blue-200 text-xs">Certified</span>
                <span className="text-blue-200 text-[8px] mt-1">JUL 2025-JUL 2026</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 uppercase text-xs font-semibold tracking-wider text-slate-700 mt-auto">
              <span className="w-2.5 h-2.5 bg-red-600 inline-block"></span>
              Great Place To Work
            </div>
          </div>

          {/* Box 7: Image (Worker looking) */}
          <div className="col-span-1 border-r border-b border-slate-300 relative bg-white overflow-hidden h-64 md:h-auto min-h-[300px] group">
            <img 
              src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop" 
              alt="Construction Worker" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </section>

      {/* 2. How We Build (Tabbed Component) */}
      <section className="bg-[#e9ecef] py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex items-center gap-3 uppercase text-xs font-semibold tracking-wider text-slate-700 mb-6">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block"></span>
            The System
          </div>
          <h2 className="text-4xl md:text-5xl font-sans text-slate-900 mb-16 tracking-tight">How we build</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Nav */}
            <div className="lg:col-span-3 flex flex-col gap-0 border-b border-slate-300">
              {howWeBuildTabs.map((tab, idx) => {
                const isActive = activeHowWeBuild === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveHowWeBuild(idx)}
                    onMouseEnter={() => setActiveHowWeBuild(idx)}
                    className={`relative text-left py-4 px-4 flex items-center gap-3 border-t border-slate-300 transition-all duration-300 ${
                      isActive ? "bg-slate-200/50" : "hover:bg-slate-200/30"
                    }`}
                  >
                    {/* Active Navy Border Indicator */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator" 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900"
                      />
                    )}
                    {isActive && (
                      <span className="w-2.5 h-2.5 bg-red-600 inline-block"></span>
                    )}
                    <span className={`font-sans tracking-wide transition-colors ${isActive ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                      {tab.title}
                    </span>
                  </button>
                );
              })}
              <div className="py-8">
                <Link to="/about" className="uppercase text-xs font-semibold tracking-wider text-slate-900 flex items-center gap-2 group">
                  View The System <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Middle Image w/ Crossfade */}
            <div className="lg:col-span-6 relative h-[400px] md:h-[500px] bg-slate-200 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeHowWeBuild}
                  src={howWeBuildTabs[activeHowWeBuild].img}
                  alt={howWeBuildTabs[activeHowWeBuild].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Right Desc */}
            <div className="lg:col-span-3 flex flex-col justify-end h-full lg:h-[500px] pb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHowWeBuild}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-sans">
                    {howWeBuildTabs[activeHowWeBuild].desc}
                  </p>
                  <Link to="/about" className="uppercase text-xs font-semibold tracking-wider text-slate-900 flex items-center gap-2 group">
                    {howWeBuildTabs[activeHowWeBuild].linkText} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section className="bg-slate-100 py-24 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Main Box Area */}
          <div className="bg-[#f8f9fa] border border-slate-300 grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
              
              <div className="flex items-center gap-3 uppercase text-xs font-semibold tracking-wider text-slate-700 mb-12">
                <span className="w-2.5 h-2.5 bg-red-600 inline-block"></span>
                What We Build
              </div>

              {/* Dynamic Categories */}
              <div className="flex flex-col gap-2 mb-16 relative">
                {whatWeBuildTabs.map((tab, idx) => {
                  const isActive = activeWhatWeBuild === idx;
                  return (
                    <div 
                      key={idx}
                      className="relative pl-6 cursor-pointer overflow-visible"
                      onMouseEnter={() => setActiveWhatWeBuild(idx)}
                    >
                      {/* Active Left Border Marker */}
                      {isActive && (
                        <motion.div 
                          layoutId="whatWeBuildActive"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"
                        />
                      )}
                      
                      <h3 className={`text-4xl md:text-5xl font-sans tracking-tight transition-colors duration-300 ${
                        isActive ? "text-slate-900" : "text-slate-400"
                      }`}>
                        {tab.title}
                      </h3>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Description Area */}
              <div className="h-32">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWhatWeBuild}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-slate-700 md:text-lg mb-6 max-w-sm">
                      {whatWeBuildTabs[activeWhatWeBuild].desc}
                    </p>
                    <Link to={whatWeBuildTabs[activeWhatWeBuild].linkUrl} className="uppercase text-xs font-semibold tracking-wider text-slate-900 flex items-center gap-2 group">
                      {whatWeBuildTabs[activeWhatWeBuild].linkText} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Right Image Container */}
            <div className="relative h-[400px] lg:h-auto min-h-[500px] overflow-hidden bg-slate-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeWhatWeBuild}
                  src={whatWeBuildTabs[activeWhatWeBuild].img}
                  alt={whatWeBuildTabs[activeWhatWeBuild].title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default CompanyShowcase;
