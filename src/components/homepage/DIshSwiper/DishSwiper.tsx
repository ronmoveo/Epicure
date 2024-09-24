import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { DishSwiperProps } from "../../../types";
import "./DishSwiper.scss";
import { Mousewheel, FreeMode } from "swiper/modules";

export default function DishSwiper({ dishes }: DishSwiperProps) {
  const swiperProps = {
    allowTouchMove: true,
    simulateTouch: true,
    grabCursor: true,
    freeMode: true,
    mousewheel: true,
    modules: [Mousewheel, FreeMode],
  };

  return (
    <section className="container">
      <h2 className="title">SIGNATURE DISH OF:</h2>
      <Swiper {...swiperProps}>
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <div className="dishCard">
              <img src={dish.photo} alt={dish.name} className="dishImage" />
              <div className="dishInfo">
                <h3 className="dishName">{dish.name}</h3>
                <p className="dishIngredients">{dish.ingredients.join(", ")}</p>
                {dish.icon && <img src={dish.icon} alt="icon" className="dishIcon" />}
                <p className="dishPrice">₪{dish.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
