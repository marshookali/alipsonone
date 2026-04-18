import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Facebook = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Twitter = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const Linkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const Instagram = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;

const Footer = () => {
  return (
    <footer className="bg-ink text-alabaster pt-20 pb-10 border-t border-alabaster/10 font-body">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Overview */}
          <div className="space-y-6">
            <Link to="/" aria-label="Alipson Home" className="block w-fit">
              <img
                src="https://alipsonbuliders.com/wp-content/uploads/2025/10/cropped-alipson.png"
                alt="Alipson Builders"
                width={140}
                height={52}
                className="h-12 w-auto object-contain brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <p className="text-alabaster/60 text-sm leading-relaxed">
              Premium commercial and residential construction services in New York. 
              Delivering excellence, integrity, and innovation to every project we build.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-alabaster/60 hover:text-terracotta transition-colors" aria-label="Facebook"><Facebook /></a>
              <a href="#" className="text-alabaster/60 hover:text-terracotta transition-colors" aria-label="Twitter"><Twitter /></a>
              <a href="#" className="text-alabaster/60 hover:text-terracotta transition-colors" aria-label="LinkedIn"><Linkedin /></a>
              <a href="https://www.instagram.com/alipsonbuilders/" target="_blank" rel="noopener noreferrer" className="text-alabaster/60 hover:text-terracotta transition-colors" aria-label="Instagram"><Instagram /></a>
            </div>
          </div>

          {/* Contact (NAP) */}
          <div className="space-y-6">
            <h3 className="text-alabaster font-display text-lg tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-terracotta shrink-0 mt-0.5" />
                <span className="text-alabaster/80">123 Construction Avenue<br/>Suite 400<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-terracotta shrink-0" />
                <span className="text-alabaster/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-terracotta shrink-0" />
                <span className="text-alabaster/80">info@alipsonone.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links & Hours */}
          <div className="space-y-6">
            <h3 className="text-alabaster font-display text-lg tracking-wide uppercase">Quick Links</h3>
            <nav aria-label="Footer navigation">
            <ul className="space-y-3 text-sm flex-col flex">
              <Link to="/portfolio" className="text-alabaster/80 hover:text-terracotta transition-colors inline-block w-fit">Our Portfolio</Link>
              <Link to="/about" className="text-alabaster/80 hover:text-terracotta transition-colors inline-block w-fit">Company Story</Link>
              <Link to="/insights" className="text-alabaster/80 hover:text-terracotta transition-colors inline-block w-fit">Industry Insights</Link>
              <Link to="/contact" className="text-alabaster/80 hover:text-terracotta transition-colors inline-block w-fit">Request a Quote</Link>
            </ul>
            </nav>
            <div className="pt-4 space-y-3 text-sm border-t border-alabaster/10">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-terracotta shrink-0" />
                <div>
                  <p className="text-alabaster mb-1 font-bold">Business Hours</p>
                  <p className="text-alabaster/60">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-alabaster/60">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Map Placeholder */}
          <div className="space-y-6">
            <h3 className="text-alabaster font-display text-lg tracking-wide uppercase">Our Location</h3>
            <div className="w-full h-48 bg-alabaster/5 rounded flex items-center justify-center overflow-hidden relative group border border-alabaster/10">
              <div className="absolute inset-0 bg-ink/70 group-hover:bg-ink/40 transition-colors duration-500 z-10"></div>
              {/* This would be an iframe for Google Maps in production */}
              <div className="z-20 flex flex-col items-center justify-center text-center p-4">
                <MapPin size={32} className="text-terracotta mb-2" />
                <span className="text-sm font-medium text-alabaster">New York Headquarters</span>
                <span className="text-xs text-alabaster/60 mt-1 hover:text-terracotta transition-colors cursor-pointer capitalize">View on Google Maps</span>
              </div>
              {/* Pseudo Map Background */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-luminosity"></div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-alabaster/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-alabaster/40 font-body">
          <p>&copy; {new Date().getFullYear()} AlipsonOne Construction. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-alabaster transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-alabaster transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-alabaster transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
