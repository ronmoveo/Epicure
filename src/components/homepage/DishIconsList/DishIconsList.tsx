import React from 'react';
import { mockDishIconData } from "../../../mockData";
import { IconData } from "../../../interfaces";

import './DishIconsList.scss';

const DishIconsList: React.FC = () => {
  return (
    <div className="dish-icons-list">
      <h2 className="dish-icons-list__title">THE MEANING OF OUR ICONS:</h2>
      <div className="dish-icons-list__list">
        {mockDishIconData.map((icon: IconData, index: number) => (
          <div key={index} className="dish-icons-list__item">
            <img src={icon.symbol} alt={icon.label} className="dish-icons-list__icon" />
            <span className="dish-icons-list__label">{icon.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishIconsList;