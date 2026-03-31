import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Future of Predictive Analytics in Megaproject Risk Management',
    category: 'Innovation',
    date: 'March 15, 2026',
    author: 'Robert Alipson',
    readingTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'An executive overview of how AI-driven predictive models are mitigating unforeseen delays and budget expansions in billion-dollar commercial develops.'
  },
  {
    id: 2,
    title: 'Navigating Supply Chain Volatility in Premium Material Sourcing',
    category: 'Supply Chain',
    date: 'February 28, 2026',
    author: 'Sarah Jenkins',
    readingTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'Strategic frameworks for securing high-end finishes and structural components amidst ongoing global logistical constraints.'
  },
  {
    id: 3,
    title: 'Beyond LEED: The Next Wave of Commercial Sustainability Standards',
    category: 'Sustainability',
    date: 'January 10, 2026',
    author: 'David Chen',
    readingTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'How leading developers are pushing past traditional benchmarking to achieve true net-zero operational footprints in high-rise structures.'
  },
  {
    id: 4,
    title: 'Demographic Shifts and the Reshaping of Multi-Family Residential Layouts',
    category: 'Market Trends',
    date: 'December 05, 2025',
    author: 'Elena Rodriguez',
    readingTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'Analysis on how remote work and shifting generational priorities are forcing a total redesign of luxury multi-family amenity spaces.'
  },
  {
    id: 5,
    title: 'Pre-Construction Triage: Identifying Fatal Flaws Before Groundbreaking',
    category: 'Operations',
    date: 'November 22, 2025',
    author: 'Robert Alipson',
    readingTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'A look into the rigorous three-phase pre-construction audit utilized by Top 100 ENR firms to ensure project viability.'
  },
  {
    id: 6,
    title: 'The Rise of Mass Timber in Urban Commercial Zones',
    category: 'Materials',
    date: 'October 14, 2025',
    author: 'David Chen',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'Examining the structural, aesthetic, and environmental benefits driving the adoption of cross-laminated timber in modern mid-rises.'
  }
];

const Insights = () => {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <Helmet>
        <title>Industry Insights | AlipsonOne Construction - Thought Leadership</title>
        <meta name="description" content="Executive-level perspectives on construction methodology, sustainability standards, supply chain logistics, and project management from AlipsonOne's industry experts." />
        <meta property="og:title" content="Industry Insights | AlipsonOne Construction" />
        <meta property="og:description" content="Thought leadership on construction innovation, sustainability, and market trends." />
        <link rel="canonical" href="https://alipsonone.com/insights" />
      </Helmet>
      
      {/* Header */}
      <section className="container mx-auto px-6 lg:px-12 mb-16 text-center">
        <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3 block">Thought Leadership</span>
        <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 font-medium">Industry Insights</h1>
        <p className="max-w-3xl mx-auto text-slate-600 font-sans text-lg leading-relaxed">
          Executive-level perspectives on construction methodology, architectural forecasting, supply chain logistics, and project management.
        </p>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col cursor-pointer"
              role="article"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm mb-6 bg-slate-100">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  role="img"
                  aria-label={article.title}
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-slate-900 rounded-sm shadow-sm">
                  {article.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 uppercase tracking-wider mb-4 font-medium">
                  <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.readingTime}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-slate-900 mb-4 leading-snug group-hover:text-amber-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {article.summary}
                </p>
                
                <div className="mt-auto">
                  <span className="text-sm font-medium tracking-wide uppercase text-slate-900 group-hover:text-amber-600 transition-colors inline-flex items-center gap-2">
                    Read Article <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Newsletter / CTA */}
      <section className="mt-24 border-t border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 pt-16">
          <div className="bg-slate-900 p-10 md:p-16 rounded-sm text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif text-white mb-4">The Executive Briefing</h2>
              <p className="text-slate-400 mb-8">Join 5,000+ industry professionals who receive our monthly research briefing on construction and development trends.</p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Corporate Email Address" 
                  className="px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/50 w-full sm:w-96 focus:outline-none focus:border-amber-500 rounded-sm"
                  required
                />
                <button type="button" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-colors rounded-sm">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Insights;
