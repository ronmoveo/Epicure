import React from 'react';
import DishSwiper from "../components/homepage/DIshSwiper/DishSwiper"
//import RestaurantsSwiper from '../components/restaurantsSwiper';
import {mockDishes, mockRestaurants } from "../mockData"
import Hero from '../components/homepage/Hero/Hero';
import DishIconsList from '../components/homepage/DishIconsList/DishIconsList';
import AboutUs from '../components/homepage/AboutUs/AboutUs';


const Home: React.FC = () => {

  return (
    <div className="home">
      {/* <RestaurantsSwiper dishes={dishes} /> */}
      <Hero/>
      <DishSwiper dishes={mockDishes} />
      <DishIconsList/>
      <AboutUs/>
    </div>
  );
};

export default Home;

