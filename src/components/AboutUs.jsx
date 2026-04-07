import { motion } from 'framer-motion';

const stats = [
  { value: "120", label: "Years in Operation" },
  { value: "$9.9B+", label: "Annual Construction Volume" },
  { value: "#11", label: "Rank in ENR's Top 400" },
  { value: "100%", label: "Employee Owned" }
];

const AboutUs = () => {
  return (
    <section className="bg-alabaster relative z-20 border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {/* Section 1: The Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:sticky md:top-32 h-fit"
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[1.05] uppercase tracking-tighter">
              When we focus <br/> on mutual success, <br/> everyone <span className="text-terracotta">wins.</span>
            </h2>
            <p className="text-xl text-ink/70 mt-10 font-body max-w-lg leading-relaxed font-medium">
              The flexibility to mobilize the right people to deliver unique solutions, an unwavering focus to delivering value to your business bottom line; and the capability to leverage innovation to meet emerging challenges and keep you at the fore.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col space-y-8 pt-4 md:pt-0"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-ink/80 font-body leading-relaxed font-medium"
            >
              As a company that is 100 percent employee-owned, we collaborate and innovate to help our partners thrive. Our culture of ownership drives your success.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-ink/80 font-body leading-relaxed font-medium"
            >
              Whether you are in the buildings, civil, or industrial market, partnering with us means you're gaining a proven, reliable and trusted full-service partner with a mobile network of more than 5,200 employees, experts and seasoned professionals. From advanced digital construction technologies to innovative offsite modular manufacturing, to the cutting edge of sustainable construction, we lead the industry as we have for more than 120 years. We leverage the expertise from this vast experience to help our clients and partners build lasting legacies.
            </motion.p>
          </motion.div>
        </div>

        {/* Section 2: Concrete Proof (Statistics Banner) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-ink/10 mt-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 * index, ease: "easeOut" }}
              className="flex flex-col"
            >
              <span className="text-6xl font-bold text-forest font-display mb-4">
                {stat.value}
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold text-ink/60 uppercase mt-2 font-body">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
