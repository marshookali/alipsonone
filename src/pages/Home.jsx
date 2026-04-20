import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight, ShieldCheck, BadgePercent, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import FeaturedProjects from '../components/FeaturedProjects';
import OurCommitments from '../components/OurCommitments';
import CompanyShowcase from '../components/CompanyShowcase';

const stats = [
  { value: "$500M+", label: "Projects Completed" },
  { value: "Top 100", label: "ENR Contractor" },
  { value: "25+", label: "Years of Excellence" },
  { value: "0", label: "Safety Incidents" }
];

const AnimatedStat = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  const match = stat.value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : "";
  const numericValue = match ? parseInt(match[2], 10) : null;
  const suffix = match ? match[3] : stat.value;

  useEffect(() => {
    if (isInView && numericValue !== null) {
      const startValue = numericValue === 0 ? 100 : 0;
      const controls = animate(startValue, numericValue, {
        duration: 2,
        delay: index * 0.1,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(Math.floor(value).toString());
        }
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center text-center px-4 md:px-8 py-10 lg:py-12 bg-ink"
    >
      <span className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-terracotta mb-4 whitespace-nowrap tracking-tight">
        {numericValue !== null ? <>{prefix}{displayValue}{suffix}</> : stat.value}
      </span>
      <span className="text-alabaster/60 font-body text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">{stat.label}</span>
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="w-full bg-alabaster relative overflow-hidden font-body text-ink">
      <Helmet>
        <title>AlipsonOne Construction | Premium Commercial & Residential Builder in New York</title>
        <meta name="description" content="AlipsonOne is a top-rated construction company specializing in premium commercial and residential developments. Over 25 years of excellence, $500M+ projects completed. Request a quote today." />
      </Helmet>

      {/* 1. Bespoke Asymmetrical Hero Section */}
      <header className="relative w-full lg:min-h-screen flex flex-col lg:flex-row pt-16 lg:pt-0">

        {/* Left Column: Typography & Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-start lg:justify-center pl-4 pr-6 lg:pl-10 lg:pr-16 xl:pl-12 xl:pr-24 z-20 bg-alabaster pt-6 pb-8 lg:py-0 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-terracotta font-body font-bold text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
              <span className="w-8 h-px bg-terracotta"></span>
              Pioneering Build
            </span>
            <h1 className="text-[3.5rem] md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[7rem] font-display font-bold leading-[0.95] tracking-tighter mb-8 text-ink uppercase">
              Shaping <br /> The <br /> <span className="text-forest">Future.</span>
            </h1>
            <p className="text-ink/70 text-lg md:text-xl font-body max-w-md leading-relaxed mb-12">
              We leverage decades of expertise and master craftsmanship to deliver uncompromising commercial and residential spaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <Link
                to="/portfolio"
                className="group relative overflow-hidden bg-ink text-alabaster px-6 py-4 rounded-full font-display font-semibold tracking-wide uppercase transition-all duration-300 hover:text-white inline-flex items-center justify-center sm:justify-start w-fit"
              >
                <span className="absolute inset-0 w-full h-full bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0"></span>
                <span className="relative z-10 flex items-center gap-3">
                  View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/about"
                className="group flex items-center justify-center sm:justify-start gap-3 px-2 py-5 font-display font-semibold tracking-wide uppercase text-ink hover:text-terracotta transition-colors"
              >
                Our Manifesto
                <ArrowDownRight size={18} className="group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual & Offset Grid */}
        <div className="w-full lg:w-[55%] h-[60vh] lg:h-screen relative overflow-hidden bg-forest z-10 hidden lg:block">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-ink/30 z-10 mix-blend-multiply" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            >
              <source src="https://www.weitz.com/wp-content/uploads/2025/12/Weitz-August00831767_2.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Overlapping Floating Element at Bottom Center */}
          <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="bg-terracotta px-8 py-4 lg:px-10 lg:py-5 rounded-full text-alabaster shadow-2xl flex items-center justify-center gap-8 w-auto min-w-[300px] whitespace-nowrap"
            >
              <div className="text-center flex flex-col items-center">
                <h3 className="font-display text-2xl lg:text-3xl font-bold">25+</h3>
                <p className="font-body text-[10px] uppercase tracking-widest opacity-80 font-bold mt-1">Years Mastered</p>
              </div>
              <div className="w-px h-10 bg-white/30"></div>
              <div className="text-center flex flex-col items-center">
                <h3 className="font-display text-2xl lg:text-3xl font-bold">100</h3>
                <p className="font-body text-[10px] uppercase tracking-widest opacity-80 font-bold mt-1">ENR Rank</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Visual Video Fallback */}
        <div className="w-full h-[50vh] relative overflow-hidden lg:hidden bg-forest">
          <div className="absolute inset-0 bg-ink/30 z-10 mix-blend-multiply" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://www.weitz.com/wp-content/uploads/2025/12/Weitz-August00831767_2.mp4" type="video/mp4" />
          </video>
        </div>
      </header>

      {/* 2. Concrete Proof Banner (Stats) - Redefined */}
      <section className="bg-ink text-alabaster py-14 md:py-32 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 bg-transparent">
            {stats.map((stat, i) => (
              <AnimatedStat key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <OurCommitments />

      {/* Company Showcase (At a Glance, How We Build, What We Build) */}
      <CompanyShowcase />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* 3. Partner Marquee - Architecturally Styled */}
      <section className="py-16 md:py-32 lg:pt-32 lg:pb-12 bg-ink overflow-hidden relative">
        {/* Background typographic watermark */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-display font-bold text-alabaster/[0.02] whitespace-nowrap select-none pointer-events-none uppercase tracking-tighter">
          Partners
        </h2>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/4 shrink-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="w-12 h-px bg-terracotta inline-block mb-8"></span>
            <h3 className="text-2xl md:text-4xl md:text-5xl font-display font-bold text-alabaster uppercase tracking-tight">Our <br className="hidden lg:block" /> Network.</h3>
            <p className="mt-6 text-alabaster/40 font-body text-sm max-w-xs mx-auto lg:mx-0 font-medium">Collaborating with trusted industry leaders to deliver uncompromising results.</p>
          </div>

          <div className="lg:w-3/4 w-full relative group [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
            <div className="flex flex-nowrap overflow-hidden">
              <ul className="flex w-max shrink-0 items-center justify-start gap-16 md:gap-24 pr-16 md:pr-24 animate-infinite-scroll group-hover:[animation-play-state:paused]">
                {Array.from({ length: 10 }).map((_, i) => (
                  <li key={`logo-1-${i}`} className="inline-flex pointer-events-auto cursor-pointer shrink-0 opacity-20 hover:opacity-100 transition-all duration-500 hover:-translate-y-1">
                    <img src="https://nestogroup.com/wp-content/themes/Netstager_Creative_Suite-3.0/images/nesto-logo.svg" alt="Nesto Group" title="Nesto Group" className="h-10 md:h-12 w-auto max-w-none object-contain brightness-0 invert" />
                  </li>
                ))}
              </ul>
              <ul aria-hidden="true" className="flex w-max shrink-0 items-center justify-start gap-16 md:gap-24 pr-16 md:pr-24 animate-infinite-scroll group-hover:[animation-play-state:paused]">
                {Array.from({ length: 10 }).map((_, i) => (
                  <li key={`logo-2-${i}`} className="inline-flex pointer-events-auto cursor-pointer shrink-0 opacity-20 hover:opacity-100 transition-all duration-500 hover:-translate-y-1">
                    <img src="https://nestogroup.com/wp-content/themes/Netstager_Creative_Suite-3.0/images/nesto-logo.svg" alt="Nesto Group" title="Nesto Group" className="h-10 md:h-12 w-auto max-w-none object-contain brightness-0 invert" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Financing Callout - Breakout Grid Style */}
      <section className="pt-8 pb-2 lg:pt-6 lg:pb-16 bg-ink relative overflow-hidden -mt-px">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ink rounded-full blur-[150px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="bg-alabaster shadow-2xl p-0 flex flex-col md:flex-row transform lg:-rotate-2 lg:hover:rotate-0 transition-transform duration-700 ease-out max-w-6xl mx-auto rounded-[2rem] overflow-hidden">
            <div className="bg-terracotta text-alabaster p-8 lg:p-16 md:w-2/5 flex flex-col items-start justify-center">
              <BadgePercent size={64} className="mb-8 opacity-80" strokeWidth={1} />
              <h2 className="text-3xl lg:text-5xl font-display font-bold mb-3">Capital Solutions.</h2>
            </div>
            <div className="p-8 lg:p-20 md:w-3/5 flex flex-col justify-center">
              <p className="text-ink text-base lg:text-2xl leading-relaxed font-body mb-7 max-w-xl font-medium">
                Remove the friction from your next big project. We partner with top-tier financial institutions to offer tailored financing solutions with competitive rates and flexible terms.
              </p>
              <div>
                <Link
                  to="/contact"
                  className="bg-ink hover:bg-forest text-alabaster px-10 py-5 rounded-full text-sm font-display font-bold tracking-[0.2em] uppercase transition-colors inline-block text-center"
                >
                  Explore Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro to Services / Philosophy */}
      <section className="pt-2 pb-16 md:pt-24 md:pb-56 bg-ink text-alabaster relative -mt-px">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <ShieldCheck size={40} strokeWidth={1} className="text-terracotta mb-6 md:mb-12 md:w-16 md:h-16" />
            <h2 className="text-3xl md:text-7xl lg:text-8xl font-display font-bold mb-6 md:mb-10 leading-[1.1] tracking-tighter uppercase text-forest">
              Uncompromising <br /> <span>Integrity.</span>
            </h2>
            <p className="text-alabaster/60 text-base md:text-2xl font-body leading-relaxed mb-10 md:mb-16 max-w-3xl font-light">
              From initial groundwork to final finishing, our process is defined by meticulous attention to detail. True luxury lies in the foundation of trust we build with every client.
            </p>
            <Link
              to="/portfolio"
              className="group text-terracotta font-display font-bold tracking-[0.2em] uppercase transition-colors flex items-center justify-center relative overflow-hidden text-lg text-center"
            >
              View Our Capability
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
