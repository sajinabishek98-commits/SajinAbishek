import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../../context/ThemeContext';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isHomePage = location.pathname === '/';

  const navLinks = [
    { href: '#home', label: 'Intro' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    setActiveSection(href);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('#contact');
  };

  // Show sidebar only on homepage
  if (isHomePage) {
    return (
      <>
        {/* Desktop Sidebar */}
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-white dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-gray-800 z-50 transition-colors duration-300"
        >
          <div className="flex flex-col h-full p-8">
            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-[#141414] dark:text-white mb-12 text-left transition-colors duration-300"
            >
              SA
            </button>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left py-3 px-4 rounded-xl transition-all text-sm ${
                    activeSection === link.href
                      ? 'text-[#141414] dark:text-[#E4FE52] font-semibold bg-gray-100 dark:bg-gray-800'
                      : 'text-[#737373] dark:text-gray-400 hover:text-[#141414] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {activeSection === link.href && <span className="mr-2">→</span>}
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Bottom Section */}
            <div className="space-y-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 w-full text-left py-3 px-4 rounded-xl text-[#737373] dark:text-gray-400 hover:text-[#141414] dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-sm"
              >
                {theme === 'light' ? (
                  <>
                    <Moon size={18} />
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <Sun size={18} />
                    <span>Light</span>
                  </>
                )}
              </button>

              {/* Get in touch button */}
              <button
                onClick={scrollToContact}
                className="w-full px-6 py-3 bg-[#141414] dark:bg-[#E4FE52] text-white dark:text-[#0a0a0a] rounded-full hover:bg-[#2a2a2a] dark:hover:bg-[#d4ee42] transition-all text-sm font-medium"
              >
                Get in touch
              </button>
            </div>
          </div>
        </motion.aside>

        {/* Mobile Top Nav */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
        >
          <div className="px-6">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => navigate('/')}
                className="text-xl font-bold text-[#141414] dark:text-white transition-colors duration-300"
              >
                SA
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#141414] dark:text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800"
              >
                <div className="px-6 py-4 space-y-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left py-2 text-[#737373] dark:text-gray-400 hover:text-[#141414] dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}

                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-3 w-full text-left py-2 text-[#737373] dark:text-gray-400 hover:text-[#141414] dark:hover:text-white transition-colors"
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon size={18} />
                        <span>Dark Mode</span>
                      </>
                    ) : (
                      <>
                        <Sun size={18} />
                        <span>Light Mode</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={scrollToContact}
                    className="w-full px-6 py-2.5 bg-[#141414] dark:bg-[#E4FE52] text-white dark:text-[#0a0a0a] rounded-full hover:bg-[#2a2a2a] dark:hover:bg-[#d4ee42] transition-all text-sm font-medium mt-2"
                  >
                    Get in touch
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </>
    );
  }

  // Simple top nav for other pages
  return null;
}
