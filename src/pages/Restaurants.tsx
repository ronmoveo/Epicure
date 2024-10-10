import React, { useState } from 'react';
import './Restaurants.scss';
import { mockRestaurants } from '../mockData';
import { Restaurant } from '../interfaces';
import FilterBar from '../components/RestaurantPage/FilterBar/FilterBar';
import RestaurantCard from '../components/Common/RestaurantCard/RestaurantCard';
import { handleFilterRestaurants } from '../components/RestaurantPage/restaurantFilters';
import { ALL, MOST_POPULAR, NEW, OPEN_NOW, RESTAURANTS } from '../utils/constants';
import { Link } from 'react-router-dom';
import Pagination from '../components/Common/Pagination/Pagination';

const Restaurants: React.FC = () => {
  const filters = [ALL, NEW, MOST_POPULAR, OPEN_NOW];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    const filteredRestaurants = handleFilterRestaurants(filter, mockRestaurants);
    setRestaurants(filteredRestaurants);
    setCurrentPage(1); 
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRestaurants = restaurants.slice(startIndex, startIndex + itemsPerPage);
  const pageCount = Math.ceil(restaurants.length / itemsPerPage);

  return (
    <div className="restaurants">
      <h1 className="restaurants__title">{RESTAURANTS}</h1>
      <div className="restaurants__filter-bar">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="restaurants__grid">
        {paginatedRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            <RestaurantCard restaurant={restaurant} showChef={true} />
          </Link>
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

export default Restaurants;
