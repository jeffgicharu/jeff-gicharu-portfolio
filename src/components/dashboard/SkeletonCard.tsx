// src/components/dashboard/SkeletonCard.tsx
import React from 'react';

const SkeletonCard = () => {
  return (
    // Mimics the structure and styling of CountryCard but with placeholders
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse"> {/* Added animate-pulse */}
      {/* Image Placeholder */}
      <div className="w-full h-40 bg-gray-300 dark:bg-gray-700"></div>

      {/* Content Placeholder */}
      <div className="p-5">
        {/* Title Placeholder */}
        <div className="h-6 w-3/4 mb-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        {/* Text Line Placeholders */}
        <div className="h-4 w-full mb-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-5/6 mb-2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-4/6 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;