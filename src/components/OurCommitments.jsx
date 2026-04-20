import React from 'react';
import { motion } from 'framer-motion';

const OurCommitments = () => {
  const cards = [
    {
      title: "Safety",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
          <path d="M24 8c-8.8 0-16 7-16 16v2h32v-2c0-9-7.2-16-16-16z" />
          <path d="M4 26h40v4H4z" />
          <path d="M24 8v10" />
          <path d="M14 12v6" />
          <path d="M34 12v6" />
          <path d="M16 26v4" />
          <path d="M32 26v4" />
          <path d="M24 30v8" />
        </svg>
      ),
      text: "We will never compromise the safety of our people. Our goal is zero incidents and our lost time frequency rate is industry leading."
    },
    {
      title: "Quality",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
          <rect x="10" y="16" width="22" height="22" rx="2" />
          <path d="M16 27l5 5 17-17" strokeWidth="1.5" />
          <path d="M16 22h-6" />
        </svg>
      ),
      text: "Consistency ensures success. We see projects through and proactively develop solutions to exceed expectations."
    },
    {
      title: "Sustainability",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
          <path d="M24 42v-22" />
          <path d="M24 32c-6 0-10-4-10-10 0 6 4 10 10 10z" />
          <path d="M24 24c5 0 9-3 9-9 0 4-4 9-9 9z" />
          <path d="M30 13c4 0 6-2 6-6 0 2-2 6-6 6z" />
          <path d="M16 42h16" />
        </svg>
      ),
      text: "We don't just build sustainably—we lead with purpose, driving impact across every project, every partner, and every place we work."
    },
    {
      title: "Stewardship",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:scale-110">
          <path d="M9 25l8 11 16-16-6-6" />
          <path d="M22 18l6 6" />
          <path d="M39 25l-8 11-16-16 6-6" />
          <path d="M16 16l6 6" />
          <path d="M17 36l3 5" />
          <path d="M31 36l-3 5" />
        </svg>
      ),
      text: "Our culture of giving empowers employees to support communities—driving meaningful change through shared purpose and generosity."
    }
  ];

  return (
    <section className="bg-alabaster py-14 md:pt-24 md:pb-16 relative overflow-hidden -mt-px">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-12 md:mb-32 items-start">
          {/* Left Column (60%) */}
          <div className="w-full md:w-[60%] flex flex-col items-start gap-8">
            <div className="flex items-center gap-5">
              <div className="w-[50px] h-[1px] bg-terracotta"></div>
              <span className="text-[11px] tracking-[0.3em] text-terracotta uppercase font-bold font-body">
                Core Ethos
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-ink font-display leading-[1.05] uppercase">
              Decisions <br className="hidden lg:block"/> With <span className="text-forest">Impact.</span>
            </h2>
          </div>
          
          {/* Right Column (40%) */}
          <div className="w-full md:w-[40%] md:pt-16 mt-4 md:mt-0">
            <p className="text-xl text-ink/70 leading-relaxed font-body max-w-md font-medium">
              Our commitments to safety, quality, sustainability and community stewardship ensure your lasting success.
            </p>
          </div>
        </div>

        {/* Bottom Section (Cards Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col group items-start h-full border-t border-ink/10 pt-10 hover:border-terracotta transition-colors duration-500"
            >
              <div className="mb-8 h-[60px] flex items-center justify-start text-ink group-hover:text-terracotta transition-colors duration-500">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-ink font-display mb-6">
                {card.title}
              </h3>
              <p className="text-base leading-relaxed text-ink/70 font-body mb-10 flex-grow font-medium">
                {card.text}
              </p>
              
              <a href="#" className="flex items-center gap-4 text-xs tracking-[0.2em] text-ink font-bold uppercase transition-colors mt-auto group-hover:text-terracotta">
                Discover
                <span className="w-[30px] h-[1px] bg-ink transition-all duration-500 group-hover:bg-terracotta group-hover:w-[50px]"></span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default OurCommitments;
