import React from 'react';
import './RestaurantCard.scss';
import { RestaurantCardProps} from '../../../interfaces';
import { stopSwiperScroll } from '../../../utils/constants';

const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  restaurant, 
  showChef = false, 
}) => {
  return (
    <div 
      className="restaurantCard" 
    >
      <img 
        src={restaurant.photo} 
        alt={restaurant.name} 
        className="restaurantImage" 
      />
      <div className="restaurantInfo">
        <h3 className="restaurantName" onTouchMove={stopSwiperScroll}>
          {restaurant.name}
        </h3>
        {showChef && <p className="restaurantChef" onTouchMove={stopSwiperScroll}>{restaurant.chef}</p>}
      </div>
    </div> 
  );
}

export default RestaurantCard;
