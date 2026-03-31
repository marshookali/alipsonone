import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    author: 'James T. Harrison',
    company: 'Harrison Logistics',
    role: 'CEO',
    rating: 5,
    text: "AlipsonOne delivered our 500,000 sq ft distribution center two weeks ahead of schedule. Their attention to detail and proactive communication set a new standard for our future developments."
  },
  {
    author: 'Maria Vasquez',
    company: 'Vasquez Development Group',
    role: 'Principal Developer',
    rating: 5,
    text: "The team's ability to navigate complex zoning laws and execute a flawless build for our downtown high-rise was nothing short of extraordinary. The craftsmanship is evident in every corner."
  },
  {
    author: 'Dr. Arthur Penning',
    company: 'Penning Medical Center',
    role: 'Chief Administrator',
    rating: 5,
    text: "Constructing an active medical facility addition requires absolute precision and zero disruption. AlipsonOne proved to be the consummate professionals, delivering perfection under intense constraints."
  }
];

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-24 pb-24 min-h-screen bg-slate-50 relative">
      <Helmet>
        <title>Request a Quote | AlipsonOne Construction - Contact Us</title>
        <meta name="description" content="Request a free construction quote from AlipsonOne. Our project managers will review your requirements and coordinate a comprehensive consultation. Serving New York and beyond." />
        <meta property="og:title" content="Request a Quote | AlipsonOne Construction" />
        <meta property="og:description" content="Get a free consultation for your next commercial or residential construction project." />
        <link rel="canonical" href="https://alipsonone.com/contact" />
      </Helmet>
      
      {/* Background purely for aesthetic split */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[600px] lg:h-full bg-slate-900 -z-10 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden bg-white mt-10">
        
        {/* Left Side: Lead Form */}
        <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 bg-white order-2 lg:order-1">
          <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3 block">Start Your Project</span>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 font-medium">Request a Quote</h1>
          <p className="text-slate-600 font-sans mb-10 leading-relaxed">
            Provide us with the details of your upcoming development. Our dedicated project managers will review your requirements and coordinate a comprehensive consultation.
          </p>

          {formStatus === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 p-8 text-center rounded-sm"
            >
              <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-slate-900 mb-2">Request Received</h3>
              <p className="text-slate-600">
                Thank you. A senior project manager will be in contact within 24 business hours to discuss your development.
              </p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-6 text-green-700 font-medium hover:underline text-sm uppercase tracking-wider"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <AnimatePresence>
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">First Name</label>
                    <input required type="text" id="firstName" className="w-full border-b border-slate-200 bg-transparent py-3 text-slate-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Last Name</label>
                    <input required type="text" id="lastName" className="w-full border-b border-slate-200 bg-transparent py-3 text-slate-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Company</label>
                    <input required type="text" id="company" className="w-full border-b border-slate-200 bg-transparent py-3 text-slate-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Your Organization" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Email Address</label>
                    <input required type="email" id="email" className="w-full border-b border-slate-200 bg-transparent py-3 text-slate-900 focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Estimated Budget</label>
                    <select required id="budget" className="w-full border-b border-slate-200 bg-transparent py-3 text-slate-900 focus:outline-none focus:border-amber-500 transition-colors appearance-none relative">
                      <option value="" disabled selected>Select Budget Range</option>
                      <option value="1M-5M">$1M - $5M</option>
                      <option value="5M-15M">$5M - $15M</option>
                      <option value="15M-50M">$15M - $50M</option>
                      <option value="50M+">$50M+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Project Timeline</label>
                    <select required id="timeline" className="w-full border-b border-slate-200 bg-transparent py-3 text-slate-900 focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                      <option value="" disabled selected>Select Expected Start</option>
                      <option value="immediate">Immediately (0-3 Months)</option>
                      <option value="6months">Within 6 Months</option>
                      <option value="1year">Within 1 Year</option>
                      <option value="planning">Just Planning Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs uppercase tracking-wider text-slate-500 mb-2 font-medium">Project Description</label>
                  <textarea required id="description" rows="4" className="w-full border-b border-slate-200 bg-transparent py-3 text-slate-900 focus:outline-none focus:border-amber-500 transition-colors resize-none" placeholder="Provide a brief overview of your build requirements, location, and key objectives..."></textarea>
                </div>

                <button 
                  disabled={formStatus === 'submitting'}
                  type="submit" 
                  className={`w-full py-4 text-white text-sm font-medium tracking-widest uppercase transition-all flex justify-center items-center ${
                    formStatus === 'submitting' ? 'bg-amber-700 cursor-not-allowed' : 'bg-slate-900 hover:bg-amber-600'
                  }`}
                >
                  {formStatus === 'submitting' ? 'Processing...' : 'Submit Request'}
                </button>
              </motion.form>
            </AnimatePresence>
          )}
        </div>

        {/* Right Side: Reputation Management / Testimonials */}
        <div className="w-full lg:w-1/2 bg-slate-900 text-white p-10 md:p-16 lg:p-20 order-1 lg:order-2 flex flex-col justify-center">
          <div className="mb-12">
            <h2 className="text-3xl font-serif mb-4">A Reputation Built on Trust</h2>
            <p className="text-slate-400 font-sans leading-relaxed">
              We don't just build structures; we build enduring relationships. Our track record is validated by the industry leaders who trust us with their most critical developments.
            </p>
          </div>

          <div className="space-y-12">
            {testimonials.map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <Quote size={40} className="absolute -top-3 -left-4 text-slate-800 rotate-180 z-0" />
                <div className="relative z-10 pl-6 border-l w-full border-amber-600/30">
                  <div className="flex gap-1 mb-3">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-lg italic text-slate-300 mb-4">&ldquo;{test.text}&rdquo;</p>
                  <div>
                    <span className="block font-medium text-white">{test.author}</span>
                    <span className="block text-sm text-slate-400">{test.role}, {test.company}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third-party review badge placeholder (Google) */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="max-w-full" />
            </div>
            <div>
              <span className="block text-sm font-medium">4.9 / 5.0 Rating</span>
              <span className="block text-xs text-slate-400">Based on 124 Verified Reviews</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
