import React from 'react';
import './DishCard.scss';
import { Dish, DishCardProps} from '../../../interfaces';
import { stopSwiperScroll } from '../../../utils/constants';



const DishCard: React.FC<DishCardProps> = ({ dish, imageWidth, imageHeight, cardHeight }) => {
  return (
    <div className="dish-card" style={{ width: `${imageWidth}px`, height: `${cardHeight}px` }}>
      <img 
        src={dish.photo} 
        alt={dish.name} 
        className="dish-card__image" 
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
      />
      <div className="dish-card__info">
        <h3 className="dish-card__name" onTouchMove = {stopSwiperScroll} >
          {dish.name}
        </h3>
        <p className="dish-card__ingredients">{dish.ingredients.join(", ")}</p>
        {dish.icon && <img src={dish.icon} alt="icon" className="dish-card__icon" />}
        <p className="dish-card__price">₪{dish.price}</p>
      </div>
    </div>
  );
};

export default DishCard;