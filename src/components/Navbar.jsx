import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Innovations', href: '#home1' },
    { name: 'Business Services', href: '#home3' },
    { name: 'Financial Services', href: '#home5' },
    { name: 'Bootcamp', href: '#home4' }
  ];

  const sidebarLinks = [
    { name: 'Innovations', href: '#home1' },
    { name: 'Empowering The Zoomers', href: '#home2' },
    { name: 'Accelerate Your Business', href: '#home3' },
    { name: 'Build Your Future Workforce', href: '#home4' },
    { name: 'Our Purpose', href: '#home5' },
    { name: 'Contact Us', href: '#footer-talk' },
  ];

  // Determine logo based on scroll and active section
  const logoSrc = isScrolled && activeSection === 'home5' ? '/lejhro_logo_blue.png' : '/lejhro_logo_white.png';

  // Determine menu button style
  const menuButtonStyle = activeSection === 'home5' && isScrolled
    ? 'bg-gray-800 text-white hover:bg-gray-700'
    : 'bg-white bg-opacity-80 text-gray-800 hover:bg-gray-200';

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 md:top-10 left-0 right-0 z-50 transition-all duration-500 bg-transparent`}
      >
        <div className="container mx-auto px-6 lg:px-40">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 z-10">
              <img
                src={logoSrc}
                alt="LEJHRO Logo"
                className="h-8 sm:h-9 transition-all duration-500"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className={`flex space-x-8 transition-all duration-500 ${
                isScrolled ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'
              }`}>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-blue-200 px-3 py-2 text-base font-medium transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                className={`p-2 rounded-full transition-all duration-300 shadow-md ${menuButtonStyle}`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar (Off-canvas Menu) */}
      <div
        className={`fixed inset-0 z-[60] transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Sidebar Content */}
        <div className="absolute top-0 right-0 h-full bg-white w-full sm:w-80 shadow-xl">
          <div className="p-6">
            <div className="flex items-center justify-between pb-6 border-b border-gray-200">
              <img src="/lejhro_logo_blue.png" alt="LEJHRO Logo" className="h-8" />
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <nav className="mt-8">
              {sidebarLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 px-4 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;