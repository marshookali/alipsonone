import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Truck, Wrench, Shield } from 'lucide-react';

const timeline = [
  { year: '1998', title: 'Foundation', description: 'Established as a boutique commercial general contractor with a single $2M project.' },
  { year: '2005', title: 'Expansion', description: 'Crossed the $50M revenue mark, moved headquarters, and expanded into complex industrial sectors.' },
  { year: '2015', title: 'Sustainability Focus', description: 'Committed to LEED standards across all commercial developments, setting a new industry benchmark.' },
  { year: '2025', title: 'National Leader', description: 'Recognized as a Top 100 ENR contractor and an industry innovator in smart building technology.' },
];

const team = [
  { name: 'Robert Alipson', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Sarah Jenkins', role: 'Chief Operating Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'David Chen', role: 'Head of Engineering', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { name: 'Elena Rodriguez', role: 'VP of Commercial Development', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      <Helmet>
        <title>About Us | AlipsonOne Construction - Our Story & Heritage</title>
        <meta name="description" content="Learn about AlipsonOne's 25+ year legacy in premium construction. Meet our leadership team, explore our heritage timeline, and discover our strategic partnerships." />
        <meta property="og:title" content="About Us | AlipsonOne Construction" />
        <meta property="og:description" content="25+ years of construction excellence. Meet the visionaries behind AlipsonOne's landmark builds." />
        <link rel="canonical" href="https://alipsonone.com/about" />
      </Helmet>
      
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Static Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          role="img"
          aria-label="Aerial view of a modern construction site"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
        <div className="absolute inset-0 bg-slate-950/70 z-0"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center max-w-4xl pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 font-medium tracking-tight">Our Story</h1>
            <p className="text-lg md:text-xl text-slate-300 font-sans leading-relaxed">
              For over 25 years, AlipsonOne has redefined the construction landscape through an unwavering commitment to quality, transparent practices, and deep-rooted industry partnerships.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Visual Storytelling Timeline */}
      <section className="bg-white py-24 border-y border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3 block">Our Heritage</span>
            <h2 className="text-4xl font-serif text-slate-900">A Legacy of Excellence</h2>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-amber-500 md:-translate-x-1/2 flex items-center justify-center shadow-lg z-10" />
                  
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="relative">
                      <span className="text-2xl font-serif font-medium text-slate-900 block mb-2">{item.title}</span>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-ink text-alabaster">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-3 block">Leadership</span>
          <h2 className="text-4xl font-serif mb-16 text-alabaster">The Visionaries Behind the Builds</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group text-left"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-4" role="img" aria-label={`Portrait of ${member.name}, ${member.role}`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-500" />
                </div>
                <h3 className="text-lg md:text-2xl font-serif text-alabaster mb-1 group-hover:text-amber-500 transition-colors">{member.name}</h3>
                <p className="text-alabaster/60 text-xs md:text-sm tracking-wide lowercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif text-slate-900 mb-6">Strategic Partnerships & Trade Relations</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our capability is amplified by deep-rooted, long-term relationships with premium subcontractors, material suppliers, and architectural firms. This ensures priority allocation, elite build quality, and steadfast reliability on every project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 text-center rounded-sm border border-slate-200 shadow-sm flex flex-col items-center">
              <Users className="text-amber-600 mb-4" size={32} />
              <h4 className="font-medium text-slate-900 mb-2">Architectural</h4>
              <span className="text-xs text-slate-500 uppercase tracking-widest">35+ Firm Network</span>
            </div>
            <div className="bg-white p-8 text-center rounded-sm border border-slate-200 shadow-sm flex flex-col items-center">
              <Truck className="text-amber-600 mb-4" size={32} />
              <h4 className="font-medium text-slate-900 mb-2">Logistics</h4>
              <span className="text-xs text-slate-500 uppercase tracking-widest">Global Supply</span>
            </div>
            <div className="bg-white p-8 text-center rounded-sm border border-slate-200 shadow-sm flex flex-col items-center">
              <Wrench className="text-amber-600 mb-4" size={32} />
              <h4 className="font-medium text-slate-900 mb-2">Subcontractors</h4>
              <span className="text-xs text-slate-500 uppercase tracking-widest">Vetted 500+</span>
            </div>
            <div className="bg-white p-8 text-center rounded-sm border border-slate-200 shadow-sm flex flex-col items-center">
              <Shield className="text-amber-600 mb-4" size={32} />
              <h4 className="font-medium text-slate-900 mb-2">Insured</h4>
              <span className="text-xs text-slate-500 uppercase tracking-widest">$500M+ Coverage</span>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
