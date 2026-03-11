import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import useScrollSpy from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';

const navLinks = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navLinks.map(link => link.id), 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass border-b border-white/20 shadow-lg shadow-primary-500/5'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-secondary-400 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Nexus
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  'relative px-4 py-2 text-sm cursor-pointer font-medium rounded-lg transition-colors',
                  activeSection === link.id
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                )}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-50 rounded-lg -z-10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors"
            >
              Sign In
            </motion.button> */}
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 10px 40px -10px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg shadow-primary-500/30 hover:from-primary-500 hover:to-primary-400 transition-all"
            >
              Get Started Free
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className={cn(
                    'block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-colors',
                    activeSection === link.id
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-700 hover:bg-slate-100'
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                {/* <button className="w-full py-3 text-base font-semibold text-slate-700 hover:text-primary-600 transition-colors">
                  Sign In
                </button> */}
                <button className="w-full py-3 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg shadow-primary-500/30">
                  Get Started Free
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
