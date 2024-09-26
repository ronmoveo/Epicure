import {IconData, Restaurant, Dish, Chef} from "./interfaces"

export const mockDishIconData: IconData[] = [
  {
    symbol: 'spicy.svg',
    label: 'Spicy'
  },
  {
    symbol: 'vegitarian.svg',
    label: 'Vegitarian'
  },
  {
    symbol: 'vegan.svg',
    label: 'Vegan'
  },
  
];

export const mockDishes: Dish[] = [
    {
      id: "1",
      name: "Pad Ki Mao",
      isSignature: true,
      ingredients: ["Shrimps", "Glass Noodles", "Kemiri Nuts", "Shallots", "Lemon Grass", "Magic Chili Brown Coconut"],
      photo: "/PadKiMao.svg",
      price: 88,
      icon: "spicy.svg",
      type: "dinner",
    },
    {
      id: "2",
      name: "Garlic Butter Shrimp",
      isSignature: true,
      ingredients: ["Shrimps", "Garlic", "Butter", "Parsley", "Lemon Juice"],
      photo: "/PadKiMao.svg",
      price: 95,
      icon: "vegan.svg",
      type: "dinner",
    },
    {
      id: "3",
      name: "Tom Yum Soup",
      isSignature: true,
      ingredients: ["Shrimps", ],
      photo: "/PadKiMao.svg",
      price: 78,
      icon: "vegitarian.svg",
      type: "dinner",
    },
    {
      id: "4",
      name: "Pasta",
      isSignature: true,
      ingredients: ["Shrimps", "Lemongrass", "Galangal", "Chili", "Lime"],
      photo: "/PadKiMao.svg",
      price: 78,
      icon: "vegan.svg",
      type: "dinner",
    },
    {
      id: "5",
      name: "Steak with butter wagio meat cow fed ",
      isSignature: true,
      ingredients: ["Shrimps", "Lemongrass", "Galangal", "Chili", "Lime","Shrimps", "Lemongrass", "Galangal", "Chili", "Lime"],
      photo: "/PadKiMao.svg",
      price: 78,
      icon: "spicy.svg",
      type: "dinner",
    },
    {
      id: "6",
      name: "Sushi",
      isSignature: true,
      ingredients: ["Shrimps", "Lemongrass", "Galangal", "Chili", "Lime","Shrimps", "Lemongrass", "Galangal", "Chili", "Lime","Shrimps", "Lemongrass", "Galangal", "Chili", "Lime",],
      photo: "/PadKiMao.svg",
      price: 78,
      icon: "spicy.svg",
      type: "dinner",
    },
  ];
  
  export const mockRestaurants: Restaurant[] = [
    {
      id: "r1",
      chef: "Ran Shmueli",
      name: "Claro",
      photo: "PadKiMao.svg",

    },
    {
      id: "r2",
      chef: "Meir Adoni",
      name: "Lumia the best in the world",
      photo: "PadKiMao.svg",
    },
    {
      id: "r3",
      chef: "aa",
      name: "Onza ",
      photo: "PadKiMao.svg",
    },
    {
      id: "r4",
      chef: "aa",
      name: "Onza 3123 ",
      photo: "PadKiMao.svg",
    },
  ];

  export const mockChefs: Chef[] = [
    {
      id: "c1",
      name: "Ran Shmueli",
      restaurants: [mockRestaurants[0]],
      photo: "PadKiMao.svg",
      about: "am",

    },
    {
      id: "c2",
      name: "Meir Adoni",
      restaurants: [mockRestaurants[0]],
      photo: "PadKiMao.svg",
      about: "am",
    },
    {
      id: "c3",
      name: "Yossi Shitrit",
      restaurants: [mockRestaurants[0],mockRestaurants[1]],
      photo: "yosi.svg",
      about: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    },
    {
      id: "c4",
      name: "aa",
      restaurants: [mockRestaurants[0]],
      photo: "PadKiMao.svg",
      about: "am",
    },
  ];

