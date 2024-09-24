export type Dish = {
    id: string;
    name: string;
    photo: string;
    ingredients: string[];
    price: number;
    icon: string;
    type: string;
  }

export type  DishSwiperProps = {
    dishes: Dish[];  
  }
  