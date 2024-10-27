import React from 'react';
import './RestaurantCard.scss';
import { RestaurantCardProps } from '../../../interfaces';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../utils/enum';

const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  restaurant, 
  showChef = false,
  isStars = false,  
}) => {
  const flooredRating = Math.floor(restaurant.rating);

  return (
    <Link 
      to={`${RoutePaths.RESTAURANT}/${restaurant.id}`} 
      className="restaurantCard"
    >
      <img 
        src={restaurant.photo} 
        alt={restaurant.name} 
        className="restaurantImage" 
      />
      <div className="restaurantInfo">
        <h3 className="restaurantName">
          {restaurant.name}
        </h3>
        {showChef && <p className="restaurantChef">{restaurant.chef}</p>}

        {isStars && (
          <div className="restaurantRating">
            {Array(flooredRating).fill(0).map((_, index) => (
              <span key={index} className="star">&#9733;</span> 
            ))}
            {Array(5 - flooredRating).fill(0).map((_, index) => (
              <span key={index} className="star empty">&#9734;</span> 
            ))}
          </div>
        )}
      </div>
    </Link> 
  );
}

export default RestaurantCard;
