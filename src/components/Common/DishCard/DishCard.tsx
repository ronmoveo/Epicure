import React from 'react';
import './DishCard.scss';
import { DishCardProps } from '../../../interfaces';
import { CURRENCY_SYMBOL, stopSwiperScroll } from '../../../utils/constants';

const DishCard: React.FC<DishCardProps> = ({ dish, onClick, isDesktop = false }) => {
  return (
    <div className={`dish-card ${isDesktop ? 'dish-card--desktop' : ''}`} onClick={onClick}>
      <img 
        src={dish.photo} 
        alt={dish.name} 
        className="dish-card__image" 
      />
      <div className="dish-card__info">
        <h3 className="dish-card__name" onTouchMove={stopSwiperScroll}>
          {dish.name}
        </h3>
        {isDesktop && dish.icon && (
          <img src={dish.icon} alt="icon" className="dish-card__icon" />
        )}
        <p className="dish-card__ingredients">{dish.ingredients.join(", ")}</p>
        {!isDesktop && dish.icon && (
          <img src={dish.icon} alt="icon" className="dish-card__icon" />
        )}
        <div className="dish-card__bottom-row">
          {isDesktop && <div className="dish-card__divider"></div>}
          <p className="dish-card__price">{CURRENCY_SYMBOL}{dish.price}</p>
          <div className="dish-card__divider"></div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;