
export interface Dish {
    id: string;
    name: string;
    photo: string;
    ingredients: string[];
    price: number;
    icon: string;
    type: string;
    isSignature: boolean;
  }

  export interface OpeningHours {
    day: string;
    open: string; // "09:00" format for opening time
    close: string; // "22:00" format for closing time
  }
  
  export interface Restaurant {
    id: string;
    chef: string;
    name: string;
    rating: number;
    photo: string;
    openedDate: Date;
    openingHours: OpeningHours[]; // Array of opening hours for each day
  }

export interface Chef {
  id: string;
  name: string;
  restaurants: Restaurant[];
  photo: string;
  about: string;
}

export interface  DishSwiperProps {
    dishes: Dish[];  
  }


export interface IconData {
  symbol: string;
  label: string;
}

export interface RestaurantsSwiperProps {
  restaurants: Restaurant[];
  title: string;
  showChef?: boolean;
}


export interface DownloadButton {
  name: string;
  image: string;
}



export interface CommonSwiperProps {
  items: any[];
  renderItem: (item: any) => React.ReactNode;
  title: string;
  allLink?: string;
}

export interface DishCardProps {
  dish: Dish;
}

export const stopSwiperScroll = (e: React.TouchEvent) => {
  e.stopPropagation();
};

export interface RestaurantCardProps {
  restaurant: Restaurant;
  showChef?: boolean;
  imageHeight?: string;
  cardHeight?: string;
}

export interface SearchBarProps {
  placeholder: string;
}

export interface ChefOfTheWeekProps {
  chef: Chef;
}