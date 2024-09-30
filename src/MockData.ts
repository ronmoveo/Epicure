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
      photo: "//PadKiMao.svg",
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
      rating: 4,
      photo: "/PadKiMao.svg",
      openedDate: new Date("1997-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ]
    },
    {
      id: "r2",
      chef: "Yariv Malili",
      name: "Kab Kem",
      rating: 4.5,
      photo: "/kab-kem.svg",
      openedDate: new Date("2007-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ]
    },
    {
      id: "r3",
      chef: "Yuval Ben Moshe",
      name: "Yapan",
      rating: 3.5,
      photo: "/Yapan.svg",
      openedDate: new Date("2020-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ]
    },
    {
      id: "r4",
      chef: "Yanir Green",
      name: "Tiger Lily",
      rating: 4.5,
      photo: "/tiger-lily.svg",
      openedDate: new Date("2022-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ]
    },
    {
      id: "r5",
      chef: "Shahaf Shabtay",
      name: "Nitan Thai",
      rating: 5,
      photo: "/nithan-thai.svg",
      openedDate: new Date("2003-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ]
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

