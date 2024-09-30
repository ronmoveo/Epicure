import React, { useState } from 'react';
import './FilterBar.scss';

interface FilterBarProps {
  filters: string[];
  onFilterChange: (selectedFilter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-bar__button ${selectedFilter === filter ? 'filter-bar__button--active' : ''}`}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;