// src/components/dashboard/RegionFilter.tsx
import React from 'react';

interface RegionFilterProps {
  value: string; // Current selected region
  onChange: (value: string) => void; // Function to call when selection changes
  regions: string[]; // Array of available regions
}

const RegionFilter: React.FC<RegionFilterProps> = ({
  value,
  onChange,
  regions
}) => {
  return (
    <div className="relative w-full max-w-xs"> {/* Limit width */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        // *** Updated Padding: Changed px-4 to pl-4 pr-10 ***
        className="w-full appearance-none py-2 pl-4 pr-10 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        aria-label="Filter by region" // Accessibility label
      >
        {/* Default option */}
        <option value="">Filter by Region (All)</option>

        {/* Map over regions to create options */}
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      {/* Custom dropdown arrow styling */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default RegionFilter;
