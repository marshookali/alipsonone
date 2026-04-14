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
      title: "Project Planning",
      desc: "From blueprints to timelines, our meticulous planning process ensures every project is delivered on time, within budget, and to the highest quality standards.",
      img: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1000",
      linkText: "LEARN MORE"
    },
    {
      title: "Structural Engineering",
      desc: "Our expert engineers design and reinforce foundations, frameworks, and load-bearing structures that stand the test of time with uncompromising safety.",
      img: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1000",
      linkText: "LEARN MORE"
    },
    {
      title: "Site Management",
      desc: "Real-time coordination of crews, materials, and equipment on-site, ensuring seamless execution from groundbreaking to final inspection.",
      img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1000",
      linkText: "LEARN MORE"
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous inspection protocols and compliance checks at every stage guarantee that our builds exceed industry standards and client expectations.",
      img: "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1000",
      linkText: "LEARN MORE"
    }
  ];

  const whatWeBuildTabs = [
    {
      title: "Careers",
      desc: "When you work at our company, you're never at a standstill. Neither is your career.",
      linkText: "JOIN THE TEAM",
      linkUrl: "/contact",
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
    <div className="w-full bg-alabaster">
      
      {/* 1. At A Glance (Bento Box Grid) */}
      <section className="container mx-auto px-6 lg:px-12 py-12 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-ink/10 rounded-[2rem] overflow-hidden">
          
          <div className="lg:col-span-2 border-r border-b border-ink/10 p-12 lg:p-20 flex items-center bg-alabaster">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-ink leading-[1.05] tracking-tighter uppercase">
              Company <br /> At a Glance.
            </h2>
          </div>

          <div className="col-span-1 border-r border-b border-ink/10 p-10 lg:p-14 flex flex-col justify-between bg-white h-72 md:h-auto group hover:bg-forest transition-colors duration-500">
            <span className="text-7xl font-display font-bold text-terracotta tracking-tight group-hover:text-alabaster transition-colors">16</span>
            <div className="flex items-center gap-4 uppercase text-[10px] font-body font-bold tracking-[0.2em] text-ink/70 mt-auto group-hover:text-alabaster/70 transition-colors">
              <span className="w-8 h-px bg-terracotta group-hover:bg-alabaster transition-colors inline-block"></span>
              National Offices
            </div>
          </div>

          <div className="col-span-1 border-r border-b border-ink/10 relative bg-ink overflow-hidden h-72 md:h-auto min-h-[300px] group">
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" 
              alt="Construction engineer" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
            />
          </div>

          <div className="col-span-1 border-r border-b border-ink/10 p-10 lg:p-14 flex flex-col justify-between bg-ink h-72 md:h-auto min-h-[300px] group hover:bg-terracotta transition-colors duration-500">
            <span className="text-7xl font-display font-bold text-alabaster tracking-tight">$10B</span>
            <div className="flex items-center gap-4 uppercase text-[10px] font-body font-bold tracking-[0.2em] text-alabaster/60 mt-auto">
              <span className="w-8 h-px bg-alabaster/60 inline-block"></span>
              Annual Revenue
            </div>
          </div>

          <div className="col-span-1 border-r border-b border-ink/10 relative bg-ink overflow-hidden h-72 md:h-auto min-h-[300px] group">
            <img 
              src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1000" 
              alt="Modern construction building" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
            />
          </div>

          <div className="col-span-1 border-r border-b border-ink/10 p-10 lg:p-14 flex flex-col justify-between bg-alabaster h-72 md:h-auto min-h-[300px]">
            <div className="w-full h-full flex items-center justify-center -mt-4">
              <div className="w-40 h-48 bg-forest flex flex-col items-center justify-center text-center p-6 shadow-2xl">
                <span className="text-alabaster font-display font-bold text-2xl leading-[1.1] mb-4 uppercase">Great <br/> Place <br/> To <br/> Work</span>
                <span className="text-terracotta font-body text-xs font-bold tracking-widest uppercase">Certified</span>
              </div>
            </div>
          </div>

          <div className="col-span-1 border-r border-b border-ink/10 relative bg-ink overflow-hidden h-72 md:h-auto min-h-[300px] group">
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1000" 
              alt="Construction workers" 
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100"
            />
          </div>

        </div>
      </section>

      {/* 2. How We Build */}
      <section className="bg-alabaster py-12 md:py-24 pb-16 md:pb-48">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="bg-white rounded-[2rem] border border-ink/5 p-10 md:p-16 lg:p-20 shadow-xl relative mt-10">

            <div className="flex items-center gap-4 uppercase text-[10px] font-body font-bold tracking-[0.3em] text-terracotta mb-8">
              <span className="w-8 h-px bg-terracotta inline-block"></span>
              The System
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-ink mb-10 md:mb-20 tracking-tighter uppercase">How we build.</h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
              
              {/* Left Nav */}
              <div className="lg:col-span-4 flex flex-col gap-0 border-l px-6 border-ink/10">
                {howWeBuildTabs.map((tab, idx) => {
                  const isActive = activeHowWeBuild === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveHowWeBuild(idx)}
                      onMouseEnter={() => setActiveHowWeBuild(idx)}
                      className={`relative text-left py-6 flex flex-col gap-2 transition-all duration-500`}
                    >
                      <span className={`font-display font-bold text-2xl tracking-wide uppercase transition-colors ${isActive ? 'text-ink' : 'text-ink/30'}`}>
                        {tab.title}
                      </span>
                      {isActive && (
                        <motion.div
                           layoutId="activeTabUnderline"
                           className="w-12 h-1 bg-terracotta mt-2"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Right Side: Image + Desc */}
              <div className="lg:col-span-8 flex flex-col md:flex-row gap-10 items-center bg-alabaster rounded-3xl p-8 border border-ink/5 relative lg:-translate-y-10 shadow-2xl">
                <div className="relative w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-2xl bg-ink shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeHowWeBuild}
                      src={howWeBuildTabs[activeHowWeBuild].img}
                      alt={howWeBuildTabs[activeHowWeBuild].title}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-90"
                    />
                  </AnimatePresence>
                </div>

                <div className="flex flex-col justify-center max-w-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeHowWeBuild}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <p className="text-lg text-ink/80 leading-relaxed mb-10 font-body font-medium">
                        {howWeBuildTabs[activeHowWeBuild].desc}
                      </p>
                      <Link to="/about" className="uppercase text-[11px] font-bold font-body tracking-[0.2em] text-ink flex items-center gap-4 group hover:text-terracotta transition-colors">
                        {howWeBuildTabs[activeHowWeBuild].linkText} 
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section className="bg-forest py-14 md:py-32 border-t border-ink/5 relative overflow-hidden">
        {/* Background abstract element */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-ink mix-blend-overlay opacity-20 blur-[150px]"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[2rem] overflow-hidden">
            
            <div className="p-10 lg:p-24 flex flex-col justify-center bg-ink border border-ink/20 z-20">
              <div className="flex items-center gap-4 uppercase text-[10px] font-body font-bold tracking-[0.3em] text-terracotta mb-16">
                <span className="w-8 h-px bg-terracotta inline-block"></span>
                What We Build
              </div>

              <div className="flex flex-col gap-6 mb-20 relative">
                {whatWeBuildTabs.map((tab, idx) => {
                  const isActive = activeWhatWeBuild === idx;
                  return (
                    <div 
                      key={idx}
                      className="relative pl-8 cursor-pointer overflow-visible"
                      onMouseEnter={() => setActiveWhatWeBuild(idx)}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="whatWeBuildActiveMarker"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-terracotta rounded-full"
                        />
                      )}
                      
                      <h3 className={`text-2xl md:text-4xl lg:text-[3.2rem] font-display font-bold uppercase transition-colors duration-500 tracking-tighter break-words ${
                        isActive ? "text-alabaster" : "text-alabaster/20"
                      }`}>
                        {tab.title}
                      </h3>
                    </div>
                  );
                })}
              </div>

              <div className="h-40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeWhatWeBuild}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-alabaster/70 text-lg lg:text-xl font-body font-medium mb-8 max-w-md leading-relaxed">
                      {whatWeBuildTabs[activeWhatWeBuild].desc}
                    </p>
                    <Link to={whatWeBuildTabs[activeWhatWeBuild].linkUrl} className="uppercase text-[11px] font-bold font-body tracking-[0.2em] text-alabaster flex items-center gap-4 group hover:text-terracotta transition-colors">
                      {whatWeBuildTabs[activeWhatWeBuild].linkText} 
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="relative h-[500px] lg:h-auto w-full overflow-hidden z-10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeWhatWeBuild}
                  src={whatWeBuildTabs[activeWhatWeBuild].img}
                  alt={whatWeBuildTabs[activeWhatWeBuild].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-ink/20"></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CompanyShowcase;
