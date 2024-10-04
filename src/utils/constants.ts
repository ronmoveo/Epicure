
import { SwiperOptions } from "swiper/types";
import { Mousewheel, FreeMode } from "swiper/modules";
import { RoutePaths } from "./enum";

export const RESTAURANTS = "Restaurants";
export const ALL_RESTAURANTS = "All Restaurants";
export const YOUR_BAG_IS_EMPTY = "YOUR BAG IS EMPTY";
export const SEARCH = "Search";
export const SEARCH_FOR_RESTAURANT_CUISINE_CHEF = "Search for restaurant, cuisine, chef";
export const ABOUT_US = "About Us:";
export const CHEF_OF_THE_WEEK = "CHEF OF THE WEEK:";
export const THE_MEANING_OF_OUR_ICONS = "THE MEANING OF OUR ICONS:";
export const EPICURE_WORKS_WITH_THE_TOP_CHEF_RESTAURANTS_IN_TEL_AVIV = "Epicure works with the top chef restaurants in Tel Aviv";
export const SIGNATURE_DISH_OF = "SIGNATURE DISH OF:";
export const POPULAR_RESTAURANTS_IN_EPICURE = "Popular Restaurants in Epicure";



export const ALL = 'All';
export const NEW = 'New';
export const MOST_POPULAR = 'Most Popular';
export const OPEN_NOW  = 'Open Now';


export const DOWNLOAD_BUTTONS = [
  { name: 'Google Play', image: '/googlePlay.svg' },
  { name: 'App Store', image: '/appStore.svg' },
  
];

export const ABOUT_US_TEXT = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  In a lacus vel justo fermentum bibendum non eu ipsum. 
  Cras porta malesuada eros, eget blandit turpis suscipit at. 
  Vestibulum sed massa in magna sodales porta. Vivamus elit urna, 
  dignissim a vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  In a lacus vel justo fermentum bibendum non eu ipsum. 
  Cras porta malesuada eros, eget blandit turpis suscipit at. 
  Vestibulum sed massa in magna sodales porta. Vivamus elit urna, 
  dignissim a vestibulum.
`;

export const SWIPER_PROPS: SwiperOptions = {
  spaceBetween: 24,
  slidesPerView: 'auto',
  allowTouchMove: true,
  simulateTouch: true,
  grabCursor: true,
  freeMode: {
    enabled: true,
    momentumBounce: false,
  },
  mousewheel: true,
  modules: [Mousewheel, FreeMode],
  centeredSlides: false,
};

export const footerLinks = [
  { to: RoutePaths.RESTAURANTS, label: "Contact Us" }, 
  { to: RoutePaths.RESTAURANTS, label: "Term Of Use" },
  { to: RoutePaths.RESTAURANTS, label: "Privacy Policy" },
];

export const navLinks = [
  { label: 'Restaurants', path: RoutePaths.RESTAURANTS },  
  { label: 'Chefs', path: RoutePaths.RESTAURANTS },
  { label: 'Contact Us', path: RoutePaths.RESTAURANTS },
  { label: 'Term of Use', path: RoutePaths.RESTAURANTS },
  { label: 'Privacy Policy', path: RoutePaths.RESTAURANTS },
  
];

export const stopSwiperScroll = (e: React.TouchEvent) => {
  e.stopPropagation();
};