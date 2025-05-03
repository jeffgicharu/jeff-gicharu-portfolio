// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    // Adjusted background, added subtle bottom border, slightly reduced vertical padding
    <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      {/* Container remains the same */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center"> {/* Adjusted padding */}
        {/* Logo/Name - Increased font size slightly */}
        <div>
          <Link href="/" className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Jeff Gicharu
          </Link>
        </div>

        {/* Navigation Links - Adjusted spacing and hover effect */}
        <div className="space-x-4 sm:space-x-6 text-sm sm:text-base"> {/* Adjusted spacing */}
          <Link href="/#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            About
          </Link>
          <Link href="/#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Skills
          </Link>
          <Link href="/#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Projects
          </Link>
          <Link href="/#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
