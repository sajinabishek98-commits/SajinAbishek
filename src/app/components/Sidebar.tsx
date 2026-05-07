import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Sidebar() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 bg-white border border-gray-200 rounded-lg shadow-lg"
      >
        <svg
          className="size-6 text-[#141414]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-8 flex flex-col transition-transform duration-300 z-40 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo/Name */}
        <button
          onClick={() => {
            navigate('/');
            setMobileMenuOpen(false);
          }}
          className="mb-12 text-left group"
        >
          <h1 className="text-2xl font-bold text-[#141414] group-hover:text-blue-600 transition-colors">
            SA
          </h1>
          <p className="text-sm text-[#737373] mt-1">Product Designer</p>
        </button>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left py-2.5 px-3 text-[#737373] hover:text-[#141414] hover:bg-gray-50 rounded-lg transition-all text-sm"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resume Button */}
        <button
          onClick={() => setShowResumeModal(true)}
          className="w-full bg-[#141414] text-white py-3 px-4 rounded-lg hover:bg-[#2a2a2a] transition-all font-medium text-sm"
        >
          Resume
        </button>
      </aside>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResumeModal(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full p-6"
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-[#737373]" />
              </button>

              <h3 className="text-xl font-semibold text-[#141414] mb-4">
                Resume
              </h3>

              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-left">
                  <Download size={20} className="text-[#737373]" />
                  <div>
                    <p className="font-medium text-[#141414]">Download Resume</p>
                    <p className="text-sm text-[#737373]">PDF format</p>
                  </div>
                </button>

                <button className="w-full flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all text-left">
                  <ExternalLink size={20} className="text-[#737373]" />
                  <div>
                    <p className="font-medium text-[#141414]">Open in New Tab</p>
                    <p className="text-sm text-[#737373]">View online</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
