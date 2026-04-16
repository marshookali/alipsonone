import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Company', path: '/about' },
    { name: 'Insights', path: '/insights' },
  ];

  const isHome = location.pathname === '/';
  
  // Here we apply the transparent, frosted glass styling exclusively when the user scrolls
  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-[60] transition-all duration-500 py-4',
    isScrolled || mobileMenuOpen 
      ? 'bg-ink/30 backdrop-blur-xl border-b border-white/10 shadow-lg backdrop-saturate-150 py-4' 
      : !isHome ? 'bg-ink py-6' : 'bg-transparent py-6'
  );

  const textClasses = cn(
    'transition-colors font-medium',
    'text-slate-50'
  );

  return (
    <>
      <header className={navbarClasses}>
        <div className="container mx-auto px-6 lg:pl-6 lg:pr-12 flex justify-between items-center">
          <Link 
            to="/" 
            className={cn(
              "text-2xl font-serif tracking-tight font-bold transition-colors duration-300",
              isHome && !isScrolled && !mobileMenuOpen ? "text-slate-950" : "text-slate-50"
            )}
          >
            ALIPSON<span className="text-amber-500"></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className={cn(
                      "text-sm uppercase tracking-widest hover:text-amber-500 transition-colors",
                      textClasses
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              to="/contact" 
              className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2.5 rounded-sm text-sm font-medium uppercase tracking-wider transition-colors"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "md:hidden p-2 z-[60] transition-colors duration-300", 
              isHome && !isScrolled && !mobileMenuOpen ? "text-slate-950" : "text-slate-50"
            )} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={cn(
        "fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={`mobile-${link.name}`}>
              <Link 
                to={link.path}
                className="text-white text-2xl font-serif hover:text-amber-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              to="/contact"
              className="text-white text-2xl font-serif hover:text-amber-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link 
          to="/contact" 
          className="mt-4 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-sm text-lg font-medium tracking-wider transition-colors"
          onClick={() => setMobileMenuOpen(false)}
        >
          Request a Quote
        </Link>
      </div>
    </>
  );
};

export default Navbar;
