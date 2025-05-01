import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-4">Manoj Kadali</h3>
            <p className="text-gray-300 mb-4">
              Computer Science Engineering student at Lovely Professional University, passionate about web development and problem-solving.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Phagwara, Punjab</p>
            <p className="text-gray-300 mb-2">+91-7702786281</p>
            <p className="text-gray-300 mb-2">kmanoj@lpu.in</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Manoj Kadali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;