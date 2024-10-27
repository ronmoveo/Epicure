import React from 'react';
import {ChefOfTheWeekProps } from '../../../interfaces';
import RestaurantsSwiper from '../ResaurantsSwiper/RestaurantsSwiper';
import './ChefOfTheWeek.scss';
import { CHEF_OF_THE_WEEK } from '../../../utils/constants';
import ChefCard from '../../Common/ChefCard/ChefCard';



const ChefOfTheWeek: React.FC <ChefOfTheWeekProps> = ({ chef }) => {
  return (
    <section className="chef-of-the-week">
      <h2 className="section-title">{CHEF_OF_THE_WEEK}</h2>
      <div className="chef-info">
      <ChefCard photo={chef.photo} name={chef.name} />
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