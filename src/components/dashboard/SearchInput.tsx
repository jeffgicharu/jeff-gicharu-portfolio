// src/components/dashboard/SearchInput.tsx
import React from 'react';
import { TbSearch } from 'react-icons/tb'; // Search Icon

interface SearchInputProps {
  value: string; // Current search term
  onChange: (value: string) => void; // Function to call when input changes
  placeholder?: string; // Optional placeholder text
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search for a country..." // Default placeholder
}) => {
  return (
    <div className="relative w-full max-w-sm"> {/* Limit width on larger screens */}
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <TbSearch className="w-5 h-5 text-gray-400" />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)} // Call onChange prop with new value
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
      />
    </div>
  );
};

export default SearchInput;