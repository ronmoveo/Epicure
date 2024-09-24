import React from 'react';
import DishSwiper from "../components/DishSwiper"
import RestaurantsSwiper from '../components/restaurantsSwiper';

import {dishes, restaurants } from "../MockData"


const Home: React.FC = () => {

  return (
    <div className="home">
      <RestaurantsSwiper dishes={dishes} />
      <DishSwiper dishes={dishes} />
    </div>
  );
};

export default Home;