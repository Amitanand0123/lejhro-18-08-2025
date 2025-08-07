import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Innovations', href: '#' },
    { name: 'Business Services', href: '#' },
    { name: 'Financial Services', href: '#' },
    { name: 'Bootcamp', href: '#' }
  ];

  const sidebarLinks = [
    { name: 'Innovations', href: '#' },
    { name: 'Bootcamp', href: '#' },
    { name: 'Business Services', href: '#' },
    { name: 'Financial Services', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Blogs', href: '#' }
  ];

  return (
    <>
      <nav className={`bg-[#D6932C] transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 py-6">
          <div className="flex items-center justify-between w-full sm:mt-4">
            <div className="flex items-center">
              <a className="text-white text-xl sm:text-2xl sm:ml-30 font-bold flex items-center" href="/">
                <img src="/lejhro_logo_white.png" alt="LEJHRO" className="h-8 sm:h-10" />
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex flex-row gap-2 xl:gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name}
                    className="text-sm xl:text-xl text-white font-medium hover:text-blue-200 transition-colors px-2" 
                    href={link.href}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white hover:text-gray-200 focus:outline-none bg-white bg-opacity-20 rounded-full p-2"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav className={`bg-white shadow-lg sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center sm:ml-30">
              <a className="text-blue-600 text-lg sm:text-xl font-bold flex items-center" href="/">
                <img src="/lejhro_logo_blue.png" alt="LEJHRO" className="h-6 sm:h-8" />
              </a>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4 sm:mr-30">
              <button className="hidden md:block text-[#2C7FBF] px-3 py-2 rounded-lg text-lg xl:text-xl font-bold transition-colors">
                Let's Talk →
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-white hover:text-blue-600 focus:outline-none bg-black rounded-full p-2"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className="absolute inset-0 bg-gray-100 opacity-40"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className={`absolute top-0 right-0 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out w-5/6 sm:w-96 md:w-[404px] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-4 shadow-sm">
            <div className="flex items-center ml-2 sm:ml-10">
              <a className="text-blue-600 text-lg sm:text-xl font-bold flex items-center" href="/">
                <img src="/lejhro_logo_blue.png" alt="LEJHRO" className="h-6 sm:h-8" />
              </a>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-white border p-2 rounded-full bg-white hover:bg-black"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
          <div className="py-2 text-black font-bold text-lg sm:text-xl ml-2 sm:ml-4">
            {sidebarLinks.map((link) => (
              <a 
                key={link.name}
                className="block px-4 sm:px-6 py-3 hover:text-[#2C7FBF] transition-colors" 
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="absolute bottom-8 sm:relative sm:bottom-auto px-4 sm:px-6 ml-2 sm:ml-4">
            <div className="flex space-x-4 mt-2 text-xl sm:text-2xl">
              <a
                href="https://www.twitter.com/lejhro"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-black hover:text-[#2C7FBF]"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/lejhro"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-black hover:text-[#2C7FBF]"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/lejhro"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-black hover:text-[#2C7FBF]"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-black hover:text-[#2C7FBF]"
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#D6932C] text-white py-16 sm:py-20 lg:py-24 text-left px-4 sm:px-8 lg:pl-56">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">Blogs</h1>
      </div>
    </>
  );
};

export default Navbar;