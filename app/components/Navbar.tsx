'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { name: 'Projects', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            PORTFOLIO
          </div>
          
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  pathname === item.href
                    ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;