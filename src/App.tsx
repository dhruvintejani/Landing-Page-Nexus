import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Add smooth scroll behavior and prevent flash of unstyled content
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Handle anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
