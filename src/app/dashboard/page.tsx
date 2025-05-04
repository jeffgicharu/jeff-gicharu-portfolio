// src/app/dashboard/page.tsx
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import ControlsBar from '@/components/dashboard/ControlsBar';
import CountryGrid from '@/components/dashboard/CountryGrid';
import SkeletonCard from '@/components/dashboard/SkeletonCard';
import PaginationControls from '@/components/dashboard/PaginationControls'; // Import PaginationControls

// Country interface remains the same
interface Country {
  name: { common: string; official: string; };
  flags: { svg: string; png: string; alt?: string; };
  population: number;
  region: string;
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Keep itemsPerPage constant for now

  // --- Constants ---
  const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags';
  const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const SKELETON_COUNT = itemsPerPage;

  // --- Data Fetching ---
  useEffect(() => {
    const fetchCountries = async () => {
      setIsLoading(true);
      setError(null);
      setCurrentPage(1);

      let response;
      try {
        response = await fetch(API_URL);
        if (!response.ok) {
          let errorMsg = `HTTP error! status: ${response.status}`;
          if (response) {
            try {
              const errorData = await response.json();
              errorMsg = errorData.message || errorMsg;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (_) { /* Ignore parse error */ }
          }
          throw new Error(errorMsg);
        }
        const data: Country[] = await response.json();
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

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const countriesOnCurrentPage = useMemo(() => {
      // No need to reset page here, handled by useEffect below
      return filteredCountries.slice(startIndex, endIndex);
  }, [filteredCountries, startIndex, endIndex]); // Removed currentPage/totalPages/itemsPerPage as dependencies

  // Handler for page changes from PaginationControls
  const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
          // Optional: Scroll to top when page changes
          // window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

   // Reset page to 1 whenever filters change the total number of items
   useEffect(() => {
    if (currentPage !== 1) { // Only reset if not already on page 1
        setCurrentPage(1);
    }
  }, [searchTerm, selectedRegion, filteredCountries.length]); // Watch length too


  // --- Render Logic ---
  return (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
              {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}
          {error && (
             <div className="text-center py-10 px-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
               <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-2">Oops! Something went wrong.</h3>
               <p className="text-red-600 dark:text-red-300">Error fetching country data: {error}</p>
               <p className="text-red-600 dark:text-red-300 mt-2">Please try refreshing the page later.</p>
             </div>
          )}
          {!isLoading && !error && filteredCountries.length === 0 && (
             <div className="text-center py-10 px-4 bg-yellow-50 dark:bg-gray-800 border border-yellow-200 dark:border-gray-700 rounded-lg">
               <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">No Countries Found</h3>
               <p className="text-yellow-700 dark:text-yellow-300">No countries matched your current search or filter criteria.</p>
             </div>
          )}
          {!isLoading && !error && filteredCountries.length > 0 && (
            <> {/* Use Fragment to wrap Grid and Pagination */}
              <CountryGrid countries={countriesOnCurrentPage} />

              {/* *** Integrate PaginationControls Component *** */}
              <div className="mt-12 flex justify-center">
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
