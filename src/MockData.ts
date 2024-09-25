import {IconData} from "./types"

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

export const mockDishes = [
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
      name: "Steak",
      isSignature: true,
      ingredients: ["Shrimps", "Lemongrass", "Galangal", "Chili", "Lime","Shrimps", "Lemongrass", "Galangal", "Chili", "Lime"],
      photo: "/PadKiMao.svg",
      price: 78,
      icon: "/icons/spicy.png",
      type: "dinner",
    },
    {
      id: "6",
      name: "Sushi",
      isSignature: true,
      ingredients: ["Shrimps", "Lemongrass", "Galangal", "Chili", "Lime","Shrimps", "Lemongrass", "Galangal", "Chili", "Lime","Shrimps", "Lemongrass", "Galangal", "Chili", "Lime",],
      photo: "/PadKiMao.svg",
      price: 78,
      icon: "/icons/spicy.png",
      type: "dinner",
    },
  ];
  
  export const mockRestaurants = [
    {
      id: "r1",
      name: "Onza is the best",
      photo: "/images/onza.jpg",

    },
    {
      id: "r2",
      name: "Onza bnfjkasndf dfanjksdn",
      photo: "/images/onza.jpg",
    },
    {
      id: "r2",
      name: "Onza ",
      photo: "/images/onza.jpg",
    },
    {
      id: "r2",
      name: "Onza 3123 ",
      photo: "/images/onza.jpg",
    },
  ];
  