import React from 'react';
import { motion } from 'framer-motion';

const OurCommitments = () => {
  const cards = [
    {
      title: "Safety",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-105">
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
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-105">
          <rect x="10" y="16" width="22" height="22" rx="2" />
          <path d="M16 27l5 5 17-17" strokeWidth="2" />
          <path d="M16 22h-6" />
        </svg>
      ),
      text: "Consistency ensures success. We see projects through and proactively develop solutions to exceed expectations."
    },
    {
      title: "Sustainability",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-105">
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
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:scale-105">
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
    <section className="bg-[#f7f7f7] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 mb-20 items-start">
          {/* Left Column (60%) */}
          <div className="w-full md:w-[60%] flex flex-col items-start gap-8">
            <div className="flex items-center gap-4">
              <div className="w-[40px] h-[1.5px] bg-[#1a1a1a]"></div>
              <span className="text-[12px] tracking-[2px] text-[#4a4a4a] uppercase font-bold font-sans">
                Our Commitments
              </span>
            </div>
            <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#1a1a1a] font-serif leading-[1.15]">
              We know that every<br className="hidden lg:block"/> decision has an impact
            </h2>
          </div>
          
          {/* Right Column (40%) */}
          <div className="w-full md:w-[40%] md:pt-14 mt-4 md:mt-0">
            <p className="text-[16px] text-[#4a4a4a] leading-[1.6] font-sans">
              Our commitments to safety, quality, sustainability and community stewardship ensure your lasting success.
            </p>
          </div>
        </div>

        {/* Bottom Section (Cards Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group items-start h-full"
            >
              <div className="mb-6 h-[50px] flex items-center justify-start text-[#1a1a1a] group-hover:text-amber-500 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-[20px] font-bold text-[#1a1a1a] font-sans mb-4">
                {card.title}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#4a4a4a] font-sans mb-8 flex-grow">
                {card.text}
              </p>
              
              <a href="#" className="flex items-center gap-3 text-[11px] tracking-[1.5px] text-[#2d5a3d] font-bold uppercase transition-colors mt-auto group-hover:opacity-80">
                Read More
                <span className="w-[40px] h-[1.5px] bg-[#2d5a3d] transition-all duration-300 group-hover:w-[60px]"></span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default OurCommitments;
