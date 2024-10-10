import React from 'react';
import './RestaurantCard.scss';
import { RestaurantCardProps } from '../../../interfaces';
import { stopSwiperScroll } from '../../../utils/constants';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../utils/enum';

const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  restaurant, 
  showChef = false, 
}) => {
  return (
    <Link 
      to={`${RoutePaths.RESTAURANT}/${restaurant.id}`} // Use Link for navigation
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
    </Link> 
  );
}

export default RestaurantCard;