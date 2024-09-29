import React from 'react';
import {ChefOfTheWeekProps } from '../../../interfaces';
import RestaurantsSwiper from '../ResaurantsSwiper/RestaurantsSwiper';
import './ChefOfTheWeek.scss';
import { CHEF_OF_THE_WEEK } from '../../../utils/constants';



const ChefOfTheWeek: React.FC <ChefOfTheWeekProps> = ({ chef }) => {
  return (
    <section className="chef-of-the-week">
      <h2 className="section-title">{CHEF_OF_THE_WEEK}</h2>
      <div className="chef-info">
        <div className="chef-photo-container">
          <img src={chef.photo} alt={chef.name} className="chef-photo" />
          <div className="chef-name-label">{chef.name}</div>
        </div>
      </div>
      <p className="chef-about">{chef.about}</p>
      <RestaurantsSwiper 
        restaurants={chef.restaurants} 
        title={`${chef.name.toUpperCase()}'S RESTAURANTS`} 
      />
    </section>
  );
};

export default ChefOfTheWeek;