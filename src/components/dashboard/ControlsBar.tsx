// src/components/dashboard/ControlsBar.tsx
import React from 'react';
import SearchInput from './SearchInput';
import RegionFilter from './RegionFilter';

interface ControlsBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedRegion: string;
  onRegionChange: (value: string) => void;
  regions: string[];
}

const ControlsBar: React.FC<ControlsBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedRegion,
  onRegionChange,
  regions
}) => {
  return (
    // Flex container to arrange items
    // Stacks vertically on small screens, row on medium+ screens
    // Adds space between items and aligns them center vertically on larger screens
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-8 mb-8">
      {/* Search Input takes available space on larger screens */}
      <div className="flex-grow md:max-w-md lg:max-w-lg">
        <SearchInput
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Search for a country..."
        />
      </div>

      {/* Region Filter */}
      <div> {/* No flex-grow needed here, uses intrinsic width */}
        <RegionFilter
          value={selectedRegion}
          onChange={onRegionChange}
          regions={regions}
        />
      </div>
    </div>
  );
};

export default ControlsBar;