import React from 'react';
import './RestaurantCard.scss';
import { RestaurantCardProps, stopSwiperScroll } from '../../../interfaces';



const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  restaurant, 
  showChef = false, 
  imageHeight = '152px',
  cardHeight = '232.8px'
}) => {
  return (
    <div className="restaurantCard" style={{ height: cardHeight }}>
      <img 
        src={restaurant.photo} 
        alt={restaurant.name} 
        className="restaurantImage" 
        style={{ height: imageHeight }}
      />
      <div className="restaurantInfo">
        <h3 className="restaurantName" onTouchMove={stopSwiperScroll}>
          {restaurant.name}
        </h3>
        {showChef && <p className="restaurantChef">{restaurant.chef}</p>}
      </div>
    </div> 
  );
}

export default RestaurantCard;