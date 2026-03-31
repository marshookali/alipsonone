import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Building2, BadgePercent } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import FeaturedProjects from '../components/FeaturedProjects';
import OurCommitments from '../components/OurCommitments';

const stats = [
  { value: "$500M+", label: "Projects Completed" },
  { value: "Top 100", label: "ENR Contractor" },
  { value: "25+", label: "Years of Excellence" },
  { value: "0", label: "Safety Incidents" }
];

const Home = () => {
  return (
    <div className="w-full bg-slate-50 relative overflow-hidden">

      {/* 1. Dynamic Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://www.weitz.com/wp-content/uploads/2025/12/Weitz-August00831767_2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-start justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="text-amber-500 font-sans tracking-[0.2em] font-medium text-sm md:text-base uppercase mb-6 block">
              Building the Future
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-tight mb-8">
              Excellence in <br /> Every Structure.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-10">
              We leverage decades of expertise, master craftsmanship, and innovative strategies to deliver premium commercial and residential developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/portfolio"
                className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore Portfolio
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors inline-flex items-center justify-center"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-slate-300">Scroll</span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-amber-500"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. Concrete Proof Banner (Stats) */}
      <section className="bg-slate-900 text-white py-16 border-t-[6px] border-amber-600 relative z-20 -mt-2">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-800">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center text-center px-4"
              >
                <span className="text-4xl md:text-5xl font-serif font-medium text-white mb-2">{stat.value}</span>
                <span className="text-slate-400 text-sm tracking-wider uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <OurCommitments />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* 3. Partner Marquee (Nesto Logo) */}
      <section className="py-24 bg-white overflow-hidden flex flex-col justify-center border-b border-slate-100">
        <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
          <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase block">Trusted By</span>
        </div>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
          <ul className="flex w-max shrink-0 items-center justify-center md:justify-start gap-16 md:gap-24 pr-16 md:pr-24 animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {Array.from({ length: 8 }).map((_, i) => (
              <li key={`logo-1-${i}`} className="inline-flex pointer-events-auto cursor-pointer shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
                <img src="https://nestogroup.com/wp-content/themes/Netstager_Creative_Suite-3.0/images/nesto-logo.svg" alt="Nesto Group" className="h-10 md:h-12 w-auto max-w-none object-contain invert" />
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="flex w-max shrink-0 items-center justify-center md:justify-start gap-16 md:gap-24 pr-16 md:pr-24 animate-infinite-scroll group-hover:[animation-play-state:paused]">
            {Array.from({ length: 8 }).map((_, i) => (
              <li key={`logo-2-${i}`} className="inline-flex pointer-events-auto cursor-pointer shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-300">
                <img src="https://nestogroup.com/wp-content/themes/Netstager_Creative_Suite-3.0/images/nesto-logo.svg" alt="Nesto Group" className="h-10 md:h-12 w-auto max-w-none object-contain invert" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Financing Callout */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-white p-10 md:p-16 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col md:flex-row items-center gap-10 md:gap-16 border border-slate-100">
            <div className="bg-amber-50 text-amber-600 w-24 h-24 rounded-full flex items-center justify-center shrink-0">
              <BadgePercent size={40} />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h2 className="text-3xl font-serif text-slate-900 mb-4">Flexible Financing Options</h2>
              <p className="text-slate-600 leading-relaxed font-sans md:max-w-2xl">
                Remove the friction from your next big project. We partner with top-tier financial institutions to offer tailored financing solutions with competitive rates and flexible terms.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto mt-6 md:mt-0">
              <Link
                to="/contact"
                className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors inline-block text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro to Services / Philosophy (Optional buffer before footer) */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck size={48} className="text-amber-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Uncompromising Quality & Integrity.</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              From initial groundwork to final finishing, our process is defined by meticulous attention to detail. We believe that true luxury lies in the foundation of trust we build with every client.
            </p>
            <Link
              to="/portfolio"
              className="text-amber-500 hover:text-amber-400 text-sm font-medium tracking-widest uppercase transition-colors inline-flex items-center gap-2 pb-1 border-b border-amber-500 hover:border-amber-400"
            >
              View Our Capability
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
