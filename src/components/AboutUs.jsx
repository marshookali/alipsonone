import { motion } from 'framer-motion';

const stats = [
  { value: "120", label: "Years in Operation" },
  { value: "$9.9B+", label: "Annual Construction Volume" },
  { value: "#11", label: "Rank in ENR's Top 400" },
  { value: "100%", label: "Employee Owned" }
];

const AboutUs = () => {
  return (
    <section className="bg-slate-50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Section 1: The Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-24 h-fit"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              When we focus on mutual success, everyone wins.
            </h2>
            <p className="text-xl text-slate-600 mt-6 font-sans">
              The flexibility to mobilize the right people to deliver unique solutions, an unwavering focus to delivering value to your business bottom line; and the capability to leverage innovation to meet emerging challenges and keep you at the fore.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col space-y-4 pt-2 md:pt-0"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-slate-600 font-sans leading-relaxed"
            >
              As a company that is 100 percent employee-owned, we collaborate and innovate to help our partners thrive. Our culture of ownership drives your success.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-slate-600 font-sans leading-relaxed"
            >
              Whether you are in the buildings, civil, or industrial market, partnering with us means you're gaining a proven, reliable and trusted full-service partner with a mobile network of more than 5,200 employees, experts and seasoned professionals. From advanced digital construction technologies to innovative offsite modular manufacturing, to the cutting edge of sustainable construction, we lead the industry as we have for more than 120 years. We leverage the expertise from this vast experience to help our clients and partners build lasting legacies.
            </motion.p>
          </motion.div>
        </div>

        {/* Section 2: Concrete Proof (Statistics Banner) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-200 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col"
            >
              <span className="text-5xl font-bold text-slate-900 font-serif">
                {stat.value}
              </span>
              <span className="text-sm tracking-widest text-slate-500 uppercase mt-2 font-sans">
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
