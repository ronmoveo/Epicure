import React from 'react';
import VersatileCardCarousel from '../components/VersatileCardCarousel';

const Home: React.FC = () => {
  const dishes = [
    {
      id: "1",
      name: "Pad Ki Mao",
      isSignature: true,
      ingredients: ["Shrimps", "Glass Noodles", "Kemiri Nuts", "Shallots", "Lemon Grass", "Magic Chili Brown Coconut"],
      photo: "/images/pad-ki-mao.jpg",
      price: 88,
      icon: "/icons/spicy.png",
      type: "dinner"
    },
    {
      id: "2",
      name: "Pad Ki Mao",
      isSignature: true,
      ingredients: ["Shrimps", "Glass Noodles", "Kemiri Nuts", "Shallots", "Lemon Grass", "Magic Chili Brown Coconut"],
      photo: "/images/pad-ki-mao.jpg",
      price: 88,
      icon: "/icons/spicy.png",
      type: "dinner"
    },
    {
      id: "2",
      name: "Pad Ki Mao",
      isSignature: true,
      ingredients: ["Shrimps", "Glass Noodles", "Kemiri Nuts", "Shallots", "Lemon Grass", "Magic Chili Brown Coconut"],
      photo: "/images/pad-ki-mao.jpg",
      price: 88,
      icon: "/icons/spicy.png",
      type: "dinner"
    },
    {
      id: "2",
      name: "Pad Ki Mao",
      isSignature: true,
      ingredients: ["Shrimps", "Glass Noodles", "Kemiri Nuts", "Shallots", "Lemon Grass", "Magic Chili Brown Coconut"],
      photo: "/images/pad-ki-mao.jpg",
      price: 88,
      icon: "/icons/spicy.png",
      type: "dinner"
    },
    // Add more dishes here...
  ];

  const restaurants = [
    {
      id: "r1",
      name: "Onza",
      photo: "/images/onza.jpg",
    },
    {
      id: "r2",
      name: "Onza",
      photo: "/images/onza.jpg",
    },
    // Add more restaurants here...
  ];

  return (
    <div className="home">
      <VersatileCardCarousel 
        items={dishes} 
        title="SIGNATURE DISH OF:" 
        showIngredients={true} 
        showPrice={true} 
        showIcon={true}
      />
      <VersatileCardCarousel 
        items={restaurants} 
        title="YOSSI'S RESTAURANTS" 
        showIngredients={false} 
        showPrice={false} 
        showIcon={false}
      />
    </div>
  );
};

export default Home;