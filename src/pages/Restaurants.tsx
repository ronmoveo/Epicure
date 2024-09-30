import React, {useState } from 'react';
import './Restaurants.scss';
import { mockRestaurants } from '../mockData';
import { Restaurant } from '../interfaces';
import FilterBar from '../components/RestaurantPage/FilterBar/FilterBar';
import RestaurantCard from '../components/Common/RestaurantCard/RestaurantCard';
import { filterMostPopular, filterNewRestaurants, filterOpenNow } from '../components/RestaurantPage/restaurantFilters';

const handleFilterRestaurants = (filter: string, restaurants: Restaurant[]): Restaurant[] => {
  switch (filter) {
    case 'All':
      return restaurants;
    case 'Open Now':
      return filterOpenNow(restaurants);
    case 'Most Popular':
      return filterMostPopular(restaurants);
    case 'New':
      return filterNewRestaurants(restaurants);
    default:
      return restaurants;
  }
};

const Restaurants: React.FC = () => {
  const filters = ['All', 'New', 'Most Popular', 'Open Now'];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants);


  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    const filteredRestaurants = handleFilterRestaurants(filter, mockRestaurants);
    setRestaurants(filteredRestaurants);
  };


  return (
    <div className="restaurants">
      <h1 className="restaurants__title">RESTAURANTS</h1>
      <div className="restaurants__filter-bar">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="restaurants__grid">
        {restaurants.map(restaurant => (
          <RestaurantCard 
            key={restaurant.id} 
            restaurant={restaurant} 
            showChef={true}
            imageHeight="207px"
            cardHeight="288px"
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;