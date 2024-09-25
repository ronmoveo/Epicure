import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel, FreeMode } from "swiper/modules";
import { RestaurantsSwiperProps } from "../../../types";
import "./RestaurantsSwiper.scss";

export default function RestaurantsSwiper({ restaurants, title, showChef = false }: RestaurantsSwiperProps) {
  const swiperProps = {
    spaceBetween: 24,
    allowTouchMove: true,
    simulateTouch: true,
    grabCursor: true,
    freeMode: true,
    mousewheel: true,
    modules: [Mousewheel, FreeMode],
  };

  const stopSwiperScroll = (e: React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <section className="restaurantContainer">
      <h2 className="restaurantTitle">{title}</h2>
      <Swiper {...swiperProps}>
        {restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <div className="restaurantCard">
              <img src={restaurant.photo} alt={restaurant.name} className="restaurantImage" />
              <div className="restaurantInfo">
                <h3
                  className="restaurantName"
                  onTouchMove={stopSwiperScroll}
                >
                  {restaurant.name}
                </h3>
                {showChef && <p className="restaurantChef">{restaurant.chef}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="all-restaurants-link">
      <a href="/all-restaurants">
          All Restaurants 
          <img src="/arrow.svg" alt="arrow" className="arrow-icon" />
      </a>
      </div>

    </section>
  );
}
