// src/app/dashboard/page.tsx
'use client'; // Needed for useState, useEffect, and event handlers

import React, { useState, useEffect, useMemo } from 'react';
import ControlsBar from '@/components/dashboard/ControlsBar';
import CountryGrid from '@/components/dashboard/CountryGrid';
import SkeletonCard from '@/components/dashboard/SkeletonCard';

// Define the structure of a Country object
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
  region: string; // Continent
  capital: string[];
}

// --- Dashboard Page Component ---
export default function DashboardPage() {
  // --- State Variables ---
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- Constants ---
  const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags';
  const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const SKELETON_COUNT = 8; // Number of skeleton cards to show while loading

  // --- Data Fetching ---
  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      setError(null);
      let response; // Define response outside try block to access in catch
      try {
        response = await fetch(API_URL); // Assign to outer response variable
        if (!response.ok) {
          let errorMsg = `HTTP error! status: ${response.status}`;
          // Check if response exists before trying to parse
          if (response) {
            try {
              const errorData = await response.json();
              errorMsg = errorData.message || errorMsg;
            // *** FIXED: Changed catch(_) to catch(parseError) ***
            } catch (parseError) {
              /* Ignore if error response isn't JSON, use status code error */
            }
          }
          throw new Error(errorMsg);
        }
        const data: Country[] = await response.json();
        // Sort countries alphabetically by common name before setting state
        data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setAllCountries(data);
      } catch (err) {
        console.error("Failed to fetch countries:", err);
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // --- Filtering and Searching Logic ---
  const filteredCountries = useMemo(() => {
    let countries = allCountries;
    if (selectedRegion) {
        countries = countries.filter(country => country.region === selectedRegion);
    }
    if (searchTerm) {
        countries = countries.filter(country =>
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    return countries;
  }, [allCountries, searchTerm, selectedRegion]);

  // --- Render Logic ---
  return (
    // Added pt-8 to give space below the sticky header
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-8 pt-8">
      <div className="container mx-auto">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Country Explorer
        </h1>

        {/* Controls Bar */}
        <ControlsBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          regions={REGIONS}
        />

        {/* Results Area */}
        <div className="mt-8">
          {isLoading && (
            // Render skeleton grid while loading
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}
          {error && (
            // Render error message
            <div className="text-center py-10 px-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
              <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">Oops! Something went wrong.</h3>
              <p className="text-red-600 dark:text-red-300">Error fetching country data: {error}</p>
              <p className="text-red-600 dark:text-red-300 mt-2">Please try refreshing the page later.</p>
            </div>
          )}
          {!isLoading && !error && filteredCountries.length === 0 && (
             // Render no results message
             <div className="text-center py-10 px-4 bg-yellow-50 dark:bg-gray-800 border border-yellow-200 dark:border-gray-700 rounded-lg">
               <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">No Countries Found</h3>
               <p className="text-yellow-700 dark:text-yellow-300">No countries matched your current search or filter criteria.</p>
             </div>
          )}
          {!isLoading && !error && filteredCountries.length > 0 && (
            // Render the actual country grid
            <CountryGrid countries={filteredCountries} />
          )}
        </div>

      </div>
    </div>
  );
}
