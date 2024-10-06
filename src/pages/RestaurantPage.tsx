import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './RestaurantPage.scss';
import { Restaurant, Dish } from '../interfaces';
import { mockRestaurants } from '../mockData';
import DishCard from '../components/Common/DishCard/DishCard';
import FilterBar from '../components/RestaurantPage/FilterBar/FilterBar';
import { BREAKFAST, LUNCH, DINNER, OPEN_NOW } from '../utils/constants';
import DishModal from '../components/RestaurantPage/DishModal/DishModal';

const RestaurantPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('dinner');
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [cart, setCart] = useState<Dish[]>([]); 

  useEffect(() => {
    const foundRestaurant = mockRestaurants.find(r => r.id === id);
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      setFilteredDishes(
        foundRestaurant.dishes.filter(dish =>
          dish.types.includes(selectedFilter)
        )
      );
    }
  }, [id, selectedFilter]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter.toLowerCase());
  };

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish); 
  };

  const handleAddToCart = (dish: Dish) => {
    setCart([...cart, dish]);
  };

  const handleModalClose = () => {
    setSelectedDish(null); 
  };

  if (!restaurant) return null;

  return (
    <div className="restaurant-page">
      <div className="restaurant-page__header">
        <div className="restaurant-page__image">
          <img src={restaurant.photo} alt={restaurant.name} />
        </div>
        <div className="restaurant-page__info">
          <h1 className="restaurant-page__name">{restaurant.name}</h1>
          <p className="restaurant-page__chef">{restaurant.chef}</p>
          <p className="restaurant-page__status">{OPEN_NOW}</p>
        </div>
        <FilterBar 
          filters={[BREAKFAST, LUNCH, DINNER]}
          onFilterChange={handleFilterChange} 
        />
      </div>
      <div className="restaurant-page__dishes">
        {filteredDishes.map(dish => (
          <DishCard 
            key={dish.id} 
            dish={dish} 
            onClick={() => handleDishClick(dish)} 
          />
        ))}
      </div>

      {selectedDish && (
        <DishModal
          dish={selectedDish}
          onClose={handleModalClose}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default RestaurantPage;
