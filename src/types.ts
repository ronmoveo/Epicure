export type Dish = {
    id: string;
    name: string;
    photo: string;
    ingredients: string[];
    price: number;
    icon: string;
    type: string;
    isSignature: boolean;
  }

export type Restaurant = {
      id: string;
      chef: string;
      name: string;
      photo: string;

}

export type Chef = {
  id: string;
  name: string;
  restaurants: Restaurant[];
  photo: string;
  about: string;
}

export type  DishSwiperProps = {
    dishes: Dish[];  
  }


export type IconData = {
  symbol: string;
  label: string;
}

export type RestaurantsSwiperProps = {
  restaurants: Restaurant[];
  title: string;
  showChef?: boolean;
}