import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Music } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Line-up', href: '#lineup' },
    { name: 'Info', href: '#info' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'O Bigboši', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-black/50 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold tracking-tighter flex items-center gap-2 text-orange-600">
          <Music className="h-8 w-8" />
          <span>Bigboš Křinice</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[...navLinks, { name: 'Kontakt', href: '#footer' }].map((link) => (
            <a
              key={link.name}
              href={`/${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                // Navigate to home first if not already there
                if (window.location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    const element = link.href === '#footer'
                      ? document.querySelector('footer')
                      : document.querySelector(link.href);
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }, 100);
                } else {
                  const element = link.href === '#footer'
                    ? document.querySelector('footer')
                    : document.querySelector(link.href);
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }
              }}
              className={`text-sm font-medium hover:text-orange-600 transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button
            onClick={() => {
              if (window.location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  const element = document.querySelector('#tickets');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }, 100);
              } else {
                const element = document.querySelector('#tickets');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }
            }}
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6"
          >
            Vstupenky
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-slate-800' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/${link.href}`}
                  className="text-lg font-medium text-slate-800 py-2 border-b border-slate-200"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    if (window.location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top;
                          const offsetPosition = elementPosition + window.scrollY - offset;
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                          });
                        }
                      }, 100);
                    } else {
                      const element = document.querySelector(link.href);
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - offset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (window.location.pathname !== '/') {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.querySelector('#tickets');
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - offset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth"
                        });
                      }
                    }, 100);
                  } else {
                    const element = document.querySelector('#tickets');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - offset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }
                }}
              >
                Vstupenky
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
