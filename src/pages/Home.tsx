import React from 'react';
import DishSwiper from "../components/homepage/DIshSwiper/DishSwiper"
//import RestaurantsSwiper from '../components/restaurantsSwiper';


import {dishes, restaurants } from "../MockData"
import Icons from '../components/homepage/DishIconsList/DishIconsList';


const Home: React.FC = () => {

  return (
    <div className="home">
      {/* <RestaurantsSwiper dishes={dishes} /> */}
      <DishSwiper dishes={dishes} />
      <Icons/>
    </div>
  );
};

export default Home;

