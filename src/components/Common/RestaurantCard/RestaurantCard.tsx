// RestaurantCard.tsx
import React from 'react';
import { Restaurant } from '../../../interfaces';
import './RestaurantCard.scss';

interface RestaurantCardProps {
  restaurant: Restaurant;
  showChef?: boolean;
}

export default function RestaurantCard({ restaurant, showChef = false }: RestaurantCardProps) {
  const stopSwiperScroll = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="restaurantCard">
      <img src={restaurant.photo} alt={restaurant.name} className="restaurantImage" />
      <div className="restaurantInfo">
        <h3 className="restaurantName" onTouchMove={stopSwiperScroll}>
          {restaurant.name}
        </h3>
        {showChef && <p className="restaurantChef">{restaurant.chef}</p>}
      </div>
    </div>
  );
}