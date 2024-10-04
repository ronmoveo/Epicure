import React, {useState } from 'react';
import './Restaurants.scss';
import { mockRestaurants } from '../mockData';
import { Restaurant } from '../interfaces';
import FilterBar from '../components/RestaurantPage/FilterBar/FilterBar';
import RestaurantCard from '../components/Common/RestaurantCard/RestaurantCard';
import { handleFilterRestaurants } from '../components/RestaurantPage/restaurantFilters';
import { ALL, MOST_POPULAR, NEW, OPEN_NOW, RESTAURANTS} from '../utils/constants';
import { Link } from 'react-router-dom';



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
          <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}>
            <RestaurantCard 
              restaurant={restaurant} 
              showChef={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
