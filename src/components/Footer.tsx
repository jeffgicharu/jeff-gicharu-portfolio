// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link'; // Optional: if you want links in the footer

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gray-800 text-gray-400 py-6 mt-auto"> {/* mt-auto helps push footer down if content is short */}
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {currentYear} Jeff Gicharu. All Rights Reserved.
        </p>
        {/* Optional: Add links here if needed */}
        {/* <div className="mt-2 space-x-4">
          <Link href="/#about" className="text-sm hover:text-white">About</Link>
          <Link href="/#projects" className="text-sm hover:text-white">Projects</Link>
          <Link href="/#contact" className="text-sm hover:text-white">Contact</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
