// src/components/dashboard/CountryGrid.tsx
import React from 'react';
import CountryCard from './CountryCard'; // Import the CountryCard component

// Re-define or import the Country interface
interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    png: string;
    alt?: string;
  };
  population: number;
  region: string;
  capital: string[];
}

interface CountryGridProps {
  countries: Country[]; // Array of countries to display
}

const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  return (
    // Responsive grid layout
    // Adjust columns based on screen size (e.g., 1 on mobile, 2 on sm, 3 on lg, 4 on xl)
    // Adjust gap as needed
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
      {/* Map over the countries array and render a card for each */}
      {countries.map((country) => (
        // Use official name as key if common name might have duplicates (unlikely but possible)
        // Or generate a unique ID if the API provided one
        <CountryCard key={country.name.official} country={country} />
      ))}
    </div>
  );
};

export default CountryGrid;
