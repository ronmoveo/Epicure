import React from 'react';
import {ChefOfTheWeekProps } from '../../../interfaces';
import RestaurantsSwiper from '../ResaurantsSwiper/RestaurantsSwiper';
import './ChefOfTheWeek.scss';
import { CHEF_OF_THE_WEEK, YOSSIS_RESTAURANTS } from '../../../utils/constants';
import ChefCard from '../../Common/ChefCard/ChefCard';
import RestaurantsHome from '../RestaurantsHome/RestaurantsHome';
import useIsDesktop from '../../Common/useIsDesktop';



const ChefOfTheWeek: React.FC <ChefOfTheWeekProps> = ({ chef }) => {
  const IsDesktopScreen = useIsDesktop();
  return (
    <section className="chef-of-the-week">
      <h2 className="section-title">{CHEF_OF_THE_WEEK}</h2>
      <div className="chef-content">
        <div className="chef-info">
          <ChefCard photo={chef.photo} name={chef.name} />
        </div>
        <p className="chef-about">{chef.about}</p>
      </div>

      {IsDesktopScreen ? (
        <RestaurantsHome
          restaurants={chef.restaurants} 
          title={YOSSIS_RESTAURANTS} 
        />
      ) : (
        <RestaurantsSwiper 
        restaurants={chef.restaurants} 
        title={`${chef.name.toUpperCase()}'S RESTAURANTS`} 
      />
      )}
    </section>
  );
};

export default ChefOfTheWeek;