// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link'; // Optional: if you want links in the footer

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    // Matched background/text colors with Header, added top border
    <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-6 mt-auto border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Jeff Gicharu. All Rights Reserved.
        </p>
        {/* Optional: Add links here if needed, styled consistently */}
        {/* <div className="mt-2 space-x-4">
          <Link href="/#about" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">About</Link>
          <Link href="/#projects" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Projects</Link>
          <Link href="/#contact" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">Contact</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
