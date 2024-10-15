import React, { useEffect, useState } from 'react';
import './Chefs.scss';
import { ALL, CHEFS, MOST_VIEWED, NEW } from '../../utils/constants';
import { mockChefs } from '../../mockData';
import { Chef } from '../../interfaces';
import FilterBar from '../../components/RestaurantPage/FilterBar/FilterBar';
import ChefCard from '../../components/Common/ChefCard/ChefCard';
import Pagination from '../../components/Common/Pagination/Pagination';



const Chefs: React.FC = () => {
  const filters = [ALL, NEW, MOST_VIEWED];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [chefs, setChefs] = useState<Chef[]>(mockChefs);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filterChefs = (filter: string) => {
    switch (filter) {
      case NEW:
        const twoYearsAgo = new Date();
        twoYearsAgo.setFullYear(twoYearsAgo.getFullYear() - 2);
        return mockChefs.filter(chef => {
          const [day, month, year] = chef.createAt.split('/').map(Number);
          const chefDate = new Date(year, month - 1, day);
          return chefDate >= twoYearsAgo;
        });
      case MOST_VIEWED:
        return [...mockChefs].sort((a, b) => b.view - a.view).slice(0, 3);
      default:
        return mockChefs;
    }
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    const filteredChefs = filterChefs(filter);
    setChefs(filteredChefs);
    setCurrentPage(1);
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedChefs = chefs.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(chefs.length / itemsPerPage);

  useEffect(() => {
    handleFilterChange(ALL);
  }, []);

  return (
    <div className="chefs">
      <h1 className="chefs__title">{CHEFS}</h1>
      <div className="chefs__filter-bar">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="chefs__grid">
        {paginatedChefs.map((chef) => (
          <ChefCard key={chef.id} photo={chef.photo} name={chef.name} />
        ))}
      </div>
      <Pagination 
        pageCount={pageCount} 
        onPageChange={handlePageChange} 
        currentPage={currentPage} 
      />
    </div>
  );
};

export default Chefs;