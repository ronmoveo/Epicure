
export interface Dish {
    id: string;
    name: string;
    photo: string;
    ingredients: string[];
    price: number;
    icon: string;
    types: string[];
    isSignature: boolean;
    sideDish: string[];
    changes: string[];
    quantity: number;
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
    dishes: Dish[];
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

export interface RestaurantCardProps {
  restaurant: Restaurant;
  showChef?: boolean;
}

export interface SearchBarProps {
  placeholder: string;
}

export interface ChefOfTheWeekProps {
  chef: Chef;
}

export interface FilterBarProps {
  filters: string[];
  onFilterChange: (selectedFilter: string) => void;
}

export interface DishCardProps {
  dish: Dish;
  onClick?: () => void;
}



export interface DishModalProps {
  dish: Dish;
  onClose: () => void;
  onAddToCart: (dish: Dish) => void;
}

export interface CartItem extends Dish {
  restaurantId: string;
  restaurantName: string;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  cartCount: number;
}


export interface CartProviderProps {
  children: React.ReactNode;
}

export interface PaginationProps {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage: number;  
}