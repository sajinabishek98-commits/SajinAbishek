import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a0a]/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-xl font-semibold">
              Sajin Abishek
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#7dd3fc]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#7dd3fc]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2026 Sajin Abishek. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:sajinabishek98@gmail.com"
                className="text-gray-400 hover:text-[#7dd3fc] transition-colors"
              >
                Email
              </a>
              <a
                href="tel:6379416577"
                className="text-gray-400 hover:text-[#7dd3fc] transition-colors"
              >
                Phone
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
