'use client';

import React, { useState } from 'react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { name: 'Projects', href: '#projects' },
  { name: 'About Me', href: '#about' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              PORTFOLIO
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="focus:outline-none"
                >
                  <span className="px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-cyan-400 transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`block h-0.5 w-6 bg-cyan-400 transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`} />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          <div className="fixed right-0 top-0 h-full w-full bg-gray-900/95 backdrop-blur-lg transform transition-transform duration-300">
            <div className="flex flex-col pt-20 px-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="focus:outline-none"
                >
                  <span className="block px-4 py-3 text-center transition-all duration-300 cursor-pointer text-gray-300 hover:text-cyan-400">
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;