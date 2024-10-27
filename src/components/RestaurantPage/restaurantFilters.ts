import { Restaurant } from "../../interfaces";
import { ALL, MOST_POPULAR, NEW, OPEN_NOW } from "../../utils/constants";

export const filterOpenNow = (restaurants: Restaurant[]): Restaurant[] => {
  const now = new Date();
  const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
  const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

  return restaurants.filter(restaurant => {
    const todayHours = restaurant.openingHours.find(hours => hours.day === currentDay);
    return todayHours && todayHours.open !== 'Closed' && currentTime >= todayHours.open && currentTime < todayHours.close;
  });
};

export const filterMostPopular = (restaurants: Restaurant[]): Restaurant[] => {
  return restaurants
    .sort((a, b) => b.rating - a.rating)
};

export const filterNewRestaurants = (restaurants: Restaurant[]): Restaurant[] => {
  return restaurants
    .sort((a, b) => new Date(b.openedDate).getTime() - new Date(a.openedDate).getTime())

};


export const  handleFilterRestaurants = (filter: string, restaurants: Restaurant[]): Restaurant[] => {
  switch (filter) {
    case ALL:
      return restaurants;
    case OPEN_NOW:
      return filterOpenNow(restaurants);
    case MOST_POPULAR:
      return filterMostPopular(restaurants);
    case NEW:
      return filterNewRestaurants(restaurants);
    default:
      return restaurants;
  }
};