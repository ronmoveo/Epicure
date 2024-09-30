import React, {useState } from 'react';
import './Restaurants.scss';
import { mockRestaurants } from '../mockData';
import { Restaurant } from '../interfaces';
import FilterBar from '../components/RestaurantPage/FilterBar/FilterBar';
import RestaurantCard from '../components/Common/RestaurantCard/RestaurantCard';
import { handleFilterRestaurants } from '../components/RestaurantPage/restaurantFilters';
import { ALL, MOST_POPULAR, NEW, OPEN_NOW, RESTAURANTS, RESTAURANTS_CARD_HEIGHT, RESTAURANTS_IMAGE_HEIGHT } from '../utils/constants';



const Restaurants: React.FC = () => {
  const filters = [ALL, NEW, MOST_POPULAR, OPEN_NOW];
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>(mockRestaurants);


  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    const filteredRestaurants = handleFilterRestaurants(filter, mockRestaurants);
    setRestaurants(filteredRestaurants);
  };


  return (
    <div className="restaurants">
      <h1 className="restaurants__title">{RESTAURANTS}</h1>
      <div className="restaurants__filter-bar">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="restaurants__grid">
        {restaurants.map(restaurant => (
          <RestaurantCard 
            key={restaurant.id} 
            restaurant={restaurant} 
            showChef={true}
            imageHeight = {RESTAURANTS_IMAGE_HEIGHT}
            cardHeight = {RESTAURANTS_CARD_HEIGHT}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
