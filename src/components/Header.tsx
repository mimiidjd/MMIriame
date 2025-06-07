'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 animate-gradient">
            MMIriame
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/#about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              À propos
            </Link>
            <Link
              href="/#projects"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Mes Projets MMI
            </Link>
            <a
              href="mailto:ab.miriame@gmail.com"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-200 text-blue-800 hover:bg-blue-300 transition-colors"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 px-2 py-3 rounded-md bg-white shadow-lg">
             <Link
              href="/#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/#projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Mes Projets MMI
            </Link>
            <a
              href="mailto:ab.miriame@gmail.com"
              className="block w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-blue-200 text-blue-800 hover:bg-blue-300 text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Me contacter
            </a>
          </div>
        )}
      </nav>
    </header>
  );
} 