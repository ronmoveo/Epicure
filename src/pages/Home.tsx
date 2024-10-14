import React from 'react';
import DishSwiper from '../components/homepage/DIshSwiper/DishSwiper';
import { mockDishes, mockRestaurants, mockChefs } from "../mockData"
import Hero from '../components/homepage/Hero/Hero';
import DishIconsList from '../components/homepage/DishIconsList/DishIconsList';
import AboutUs from '../components/homepage/AboutUs/AboutUs';
import ChefOfTheWeek from '../components/homepage/ChefOfTheweek/ChefOfTheweek';
import { POPULAR_RESTAURANTS_IN_EPICURE } from '../utils/constants';
import { RoutePaths } from '../utils/enum';
import IsDesktopRestaurantsHome from '../components/homepage/IsDesktopRestaurantsHome';


const Home: React.FC = () => {


  const yossiShitrit = mockChefs.find(chef => chef.name === "Yossi Shitrit");

  const signatureDishes = mockDishes.filter(dish => dish.isSignature);


  return (
    <div className="home">
      <Hero/>

      <IsDesktopRestaurantsHome 
        restaurants={mockRestaurants} 
        title1={POPULAR_RESTAURANTS_IN_EPICURE} 
        allLink = {RoutePaths.RESTAURANTS}
        showChef
        isStars
      />
  
      <DishSwiper dishes={signatureDishes} />
      <DishIconsList/>
      {yossiShitrit && <ChefOfTheWeek chef={yossiShitrit} />}
      <AboutUs />
    </div>
  );
};

export default Home;

