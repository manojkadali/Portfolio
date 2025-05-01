import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:kmanoj@lpu.in' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-primary-600">MK</span>
            <span className="font-medium hidden sm:inline">Manoj Kadali</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="container-custom py-4 space-y-4 px-4 bg-white shadow-inner">
              <nav className="flex flex-col space-y-2">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => 
                      isActive 
                      ? 'nav-link nav-link-active px-4 py-2 rounded-md bg-gray-50' 
                      : 'nav-link px-4 py-2 rounded-md hover:bg-gray-50'
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-600 transition-colors p-2"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;