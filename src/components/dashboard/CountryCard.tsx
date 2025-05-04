// src/components/dashboard/CountryCard.tsx
import React from 'react';
import Image from 'next/image';

// Re-define or import the Country interface (important for props type safety)
interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    png: string;
    alt?: string; // Optional alt text from API
  };
  population: number;
  region: string; // Continent
  capital: string[]; // API returns an array
}

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  // Helper to format population number with commas
  const formatPopulation = (num: number) => {
    return num.toLocaleString('en-US');
  };

  // Helper to safely get capital city (API might return empty array or undefined)
  const getCapital = (capitalArr: string[] | undefined): string => {
    return capitalArr && capitalArr.length > 0 ? capitalArr[0] : 'N/A';
  };

  return (
    // Mimics the styling of the project cards from the main portfolio page
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:border-teal-300 dark:hover:border-teal-600 transform hover:-translate-y-1">
      {/* Country Flag */}
      <div className="relative w-full h-40 bg-gray-100 dark:bg-gray-700"> {/* Fixed height for flag container */}
        <Image
          src={country.flags.svg || country.flags.png} // Use SVG preferably, fallback to PNG
          alt={country.flags.alt || `Flag of ${country.name.common}`} // Use provided alt text or generate one
          layout="fill"
          objectFit="cover" // Cover the area, might crop slightly but maintains aspect ratio
          className="transition-transform duration-500 group-hover:scale-105" // Subtle zoom on hover
        />
      </div>

      {/* Country Info */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white truncate" title={country.name.common}>
          {country.name.common}
        </h3>
        <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300 flex-grow">
          <p>
            <span className="font-semibold">Population:</span> {formatPopulation(country.population)}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {getCapital(country.capital)}
          </p>
        </div>
        {/* Add padding at the bottom if needed, or rely on flex-grow */}
      </div>
    </div>
  );
};

export default CountryCard;