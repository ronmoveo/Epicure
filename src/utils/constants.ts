
import { SwiperOptions } from "swiper/types";
import { Mousewheel, FreeMode } from "swiper/modules";
import { RoutePaths } from "./enum";

export const RESTAURANTS = "Restaurants";
export const ALL_RESTAURANTS = "All Restaurants";
export const YOUR_BAG_IS_EMPTY = "YOUR BAG IS EMPTY";
export const SEARCH = "Search";
export const SEARCH_FOR_RESTAURANT_CUISINE_CHEF = "Search for restaurant, cuisine, chef";
export const ABOUT_US = "ABOUT US:";
export const CHEF_OF_THE_WEEK = "CHEF OF THE WEEK:";
export const THE_MEANING_OF_OUR_ICONS = "THE MEANING OF OUR ICONS:";
export const EPICURE_WORKS_WITH_THE_TOP_CHEF_RESTAURANTS_IN_TEL_AVIV = "Epicure works with the top chef restaurants in Tel Aviv";
export const SIGNATURE_DISH_OF = "SIGNATURE DISH OF:";
export const POPULAR_RESTAURANTS_IN_EPICURE = "POPULAR RESTAURANTS IN EPICURE:";
export const YOSSIS_RESTAURANTS = "Yossi’s Restaurants";
export const MY_ORDER = "MY ORDER";
export const CHECKOUT = "CHECKOUT";
export const TOTAL = "TOTAL -"
export const CHANGES= "Changes";
export const ADD_TO_BAG = "Add to bag";
export const QUANTITY = "Quantity";
export const CLOSED = "Closed";
export const EPICURE = "EPICURE";
export const CHEFS = "Chefs"

export const CURRENCY_SYMBOL = "₪";
export const SCREEN_XL_MIN = "1280";


export const BREAKFAST = "Breakfast";
export const LUNCH = "Lunch";
export const DINNER = "Dinner";

export const ALL = 'All';
export const NEW = 'New';
export const MOST_POPULAR = 'Most Popular';
export const OPEN_NOW  = 'Open Now';


export const DOWNLOAD_BUTTONS = [
  { name: 'Google Play', image: '/googlePlay.svg' },
  { name: 'App Store', image: '/appStore.svg' },
  
];

export const ABOUT_US_TEXT1 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
eu ipsum. Cras porta malesuada eros, eget blandit
turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
dignissim a vestibulum. 
`;

export const ABOUT_US_TEXT2 = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
eu ipsum. Cras porta malesuada eros.

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
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
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