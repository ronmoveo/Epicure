import { Restaurant } from "../../interfaces";

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
    .slice(0, 3);
};

export const filterNewRestaurants = (restaurants: Restaurant[]): Restaurant[] => {
  return restaurants
    .sort((a, b) => new Date(b.openedDate).getTime() - new Date(a.openedDate).getTime())
    .slice(0, 3);
};
