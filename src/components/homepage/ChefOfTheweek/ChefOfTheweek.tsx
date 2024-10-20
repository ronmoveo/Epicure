import React from 'react';
import {ChefOfTheWeekProps } from '../../../interfaces';

import './ChefOfTheWeek.scss';
import { CHEF_OF_THE_WEEK, YOSSIS_RESTAURANTS } from '../../../utils/constants';
import ChefCard from '../../Common/ChefCard/ChefCard';

import IsDesktopRestaurantsHome from '../IsDesktopRestaurantsHome';



const ChefOfTheWeek: React.FC <ChefOfTheWeekProps> = ({ chef }) => {

  return (
    <section className="chef-of-the-week">
      <h2 className="section-title">{CHEF_OF_THE_WEEK}</h2>
      <div className="chef-content">
        <div className="chef-info">
          <ChefCard photo={chef.photo} name={chef.name} />
        </div>
        <p className="chef-about">{chef.about}</p>
      </div>

      <IsDesktopRestaurantsHome 
        restaurants={chef.restaurants} 
        title1={YOSSIS_RESTAURANTS} 
        title2={`${chef.name.toUpperCase()}'S RESTAURANTS`}  
      />
    </section>
  );
};

export default ChefOfTheWeek;
