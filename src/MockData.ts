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
    ingredients: ["Shrimps", "Glass Noodles", "Kemiri Nuts", "Shallots", "Lemon Grass", "Magic Chili", "Brown Coconut", "Garlic", "Ginger", "Soy Sauce", "Fish Sauce", "Basil", "Cilantro", "Mint", "Lime Juice", "Sugar", "Pepper", "Salt", "Oil", "Water"],
    photo: "/PadKiMao.svg",
    price: 88,
    icon: "spicy.svg",
    types: ["dinner", "lunch"],
    sideDish: ["White bread", "Sticky rice", "rice"],
    changes: ["Without Peanuts", "Less spicy"],
    quantity: 1,
  },
  {
    id: "2",
    name: "Garlic Butter Shrimp",
    isSignature: true,
    ingredients: ["Shrimps", "Garlic", "Butter", "Parsley", "Lemon Juice", "Olive Oil", "Salt", "Pepper", "Paprika", "Thyme", "Rosemary", "Chili Flakes", "White Wine", "Shallots", "Lemon Zest", "Dill", "Chives", "Basil", "Oregano", "Bay Leaves"],
    photo: "/kab-kem.svg",
    price: 95,
    icon: "vegan.svg",
    types: ["dinner"],
    sideDish: ["White bread", "Sticky rice"],
    changes: ["Without Peanuts", "Less spicy"],
    quantity: 1,
  },
  {
    id: "3",
    name: "Tom Yum Soup",
    isSignature: true,
    ingredients: ["Shrimps", "Lemongrass", "Galangal", "Kaffir Lime Leaves", "Chili", "Lime Juice", "Fish Sauce", "Tomatoes", "Mushrooms", "Cilantro", "Garlic", "Shallots", "Coconut Milk", "Chicken Stock", "Sugar", "Salt", "Pepper", "Oil", "Water", "Green Onions"],
    photo: "/tomYumSoup.jpg",
    price: 86,
    icon: "vegitarian.svg",
    types: ["lunch"],
    sideDish: ["White bread", "Sticky rice"],
    changes: ["Without Peanuts", "Less spicy"],
    quantity: 1,
  },
  { 
    id: "4",
    name: "Sashimi",
    isSignature: true,
    ingredients: ["Tuna", "Salmon", "Yellowtail", "Wasabi", "Japanese Soy Sauce", "Pickled Ginger", "Radish", "Cucumber", "Avocado", "Seaweed", "Sesame Seeds", "Lemon", "Lime", "Chili", "Garlic", "Ginger", "Green Onions", "Shiso Leaves", "Nori", "Rice Vinegar"],
    photo: "/Yapan.svg",
    price: 74,
    icon: "vegan.svg",
    types: ["breakfast","dinner", "lunch"],
    sideDish: ["White bread", "Sticky rice"],
    changes: ["Without Tuna", "Without Salmon", "Without Yellowtail"],
    quantity: 1,
  },
  {
    id: "5",
    name: "Japanese wagyu grass fed  picanha with goat herb butter with steam green vegetables",
    isSignature: false,
    ingredients: ["Wagyu Beef", "Goat Herb Butter", "Green Vegetables", "Garlic", "Thyme", "Rosemary", "Salt", "Pepper", "Olive Oil", "Soy Sauce", "Mirin", "Sake", "Sugar", "Ginger", "Scallions", "Sesame Oil", "Chili", "Lime", "Lemongrass", "Galangal"],
    photo: "/KitchenMarket.jpeg",
    price: 69,
    icon: "spicy.svg",
    types: ["breakfast"],
    sideDish: ["White bread", "Sticky rice"],
    changes: ["Without Peanuts", "Less spicy"],
    quantity: 1,
  },
  {
    id: "6",
    name: "Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi Sushi",
    isSignature: true,
    ingredients: ["Sushi Rice", "Nori", "Shrimps", "Tuna", "Salmon", "Avocado", "Cucumber", "Pickled Radish", "Wasabi", "Soy Sauce", "Ginger", "Sesame Seeds", "Crab Meat", "Scallions", "Cream Cheese", "Tempura Flakes", "Spicy Mayo", "Eel Sauce", "Tobiko", "Chili"],
    photo: "/sushi.jpg",
    price: 78,
    icon: "spicy.svg",
    types: ["dinner", "lunch"],
    sideDish: ["White bread", "Sticky rice"],
    changes: ["Without Peanuts", "Less spicy"],
    quantity: 1,
  },
  ];
  
  export const mockRestaurants: Restaurant[] = [
    {
      id: "r1",
      chef: "Ran Shmueli",
      name: "Claro",
      rating: 4,
      photo: "/Claro.jpeg",
      openedDate: new Date("1997-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ],
      dishes: mockDishes,
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
      ],
      dishes: mockDishes,
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
      ],
      dishes: mockDishes,
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
      ],
      dishes: mockDishes,
    },
    {
      id: "r5",
      chef: "Shahaf Shabtay",
      name: "Nithan Thai",
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
      ],
      dishes: mockDishes,
    },
    {
      id: "r6",
      chef: "Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe Aviv Moshe",
      name: "Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa Messa",
      rating: 5,
      photo: "/Messa.svg",
      openedDate: new Date("2003-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ],
      dishes: mockDishes,
    },
    {
      id: "r7",
      chef: "Yossi Shitrit",
      name: "HIBA",
      rating: 2,
      photo: "/HIBA.jpg",
      openedDate: new Date("2003-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ],
      dishes: mockDishes,
    },
    {
      id: "r8",
      chef: "Yossi Shitrit",
      name: "Kitchen Market",
      rating: 5,
      photo: "/KitchenMarket.jpeg",
      openedDate: new Date("2003-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ],
      dishes: mockDishes,
    },
    {
      id: "r9",
      chef: "Yuval Ben Moshe",
      name: "Taizu",
      rating: 5,
      photo: "/Taizu.jpeg",
      openedDate: new Date("2003-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ],
      dishes: mockDishes,
    },
    {
      id: "r10",
      chef: "Yossi Shitrit",
      name: "Mashya",
      rating: 5,
      photo: "/Mashya.jpg",
      openedDate: new Date("2003-11-12"),
      openingHours: [
        { day: "Sunday", open: "Closed", close: "Closed" },
        { day: "Monday", open: "09:00", close: "22:00" },
        { day: "Tuesday", open: "09:00", close: "22:00" },
        { day: "Wednesday", open: "09:00", close: "22:00" },
        { day: "Thursday", open: "09:00", close: "22:00" },
        { day: "Friday", open: "09:00", close: "22:00" },
        { day: "Saturday", open: "10:00", close: "20:00" },
      ],
      dishes: mockDishes,
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
      restaurants: [mockRestaurants[6],mockRestaurants[7],mockRestaurants[9]],
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

