// src/components/dashboard/PaginationControls.tsx
import React from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'; // Icons for buttons

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // Don't render controls if there's only one page or fewer
  if (totalPages <= 1) {
    return null;
  }

  const handlePrev = () => {
    if (canGoPrev) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      onPageChange(currentPage + 1);
    }
  };

  // Refined button styling
  const baseButtonClass = "inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-teal-500 transition-all duration-200 transform";
  // Enabled state: Teal accent on hover/focus
  const enabledButtonClass = "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:border-teal-400 dark:hover:border-teal-700 hover:text-teal-700 dark:hover:text-teal-300 hover:scale-105";
  // Disabled state: More visually distinct
  const disabledButtonClass = "bg-gray-100 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-70";

  return (
    // Increased gap between elements using space-x-*
    <nav className="flex items-center justify-center space-x-4 sm:space-x-6" aria-label="Pagination">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={!canGoPrev}
        className={`${baseButtonClass} ${canGoPrev ? enabledButtonClass : disabledButtonClass}`}
        aria-label="Go to previous page"
      >
        <TbChevronLeft className="h-5 w-5 mr-1" />
        Previous
      </button>

      {/* Page Info */}
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"> {/* Added whitespace-nowrap */}
        Page <span className="font-bold text-gray-900 dark:text-white">{currentPage}</span> of <span className="font-bold text-gray-900 dark:text-white">{totalPages}</span>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={!canGoNext}
        className={`${baseButtonClass} ${canGoNext ? enabledButtonClass : disabledButtonClass}`}
        aria-label="Go to next page"
      >
        Next
        <TbChevronRight className="h-5 w-5 ml-1" />
      </button>
    </nav>
  );
};

export default PaginationControls;
