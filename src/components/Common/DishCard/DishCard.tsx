// DishCard.tsx
import React from 'react';
import { Dish } from '../../../interfaces';
import './DishCard.scss';

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  const stopSwiperScroll = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="dishCard">
      <img src={dish.photo} alt={dish.name} className="dishImage" />
      <div className="dishInfo">
        <h3 className="dishName" onTouchMove={stopSwiperScroll}>
          {dish.name}
        </h3>
        <p className="dishIngredients">{dish.ingredients.join(", ")}</p>
        {dish.icon && <img src={dish.icon} alt="icon" className="dishIcon" />}
        <p className="dishPrice">₪{dish.price}</p>
      </div>
    </div>
  );
}