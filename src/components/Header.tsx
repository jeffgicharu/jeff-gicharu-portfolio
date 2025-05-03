// src/components/Header.tsx
import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      {/* Container to center content and add padding */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <div>
          <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors duration-200">
            Jeff Gicharu
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6"> {/* Add space between links */}
          <Link href="/#about" className="hover:text-gray-300 transition-colors duration-200">
            About
          </Link>
          <Link href="/#skills" className="hover:text-gray-300 transition-colors duration-200">
            Skills
          </Link>
          <Link href="/#projects" className="hover:text-gray-300 transition-colors duration-200">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-gray-300 transition-colors duration-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
