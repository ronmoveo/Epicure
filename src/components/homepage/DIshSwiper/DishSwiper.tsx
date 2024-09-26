import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { DishSwiperProps } from "../../../interfaces";
import "./DishSwiper.scss";
import { Mousewheel, FreeMode } from "swiper/modules";

export default function DishSwiper({ dishes }: DishSwiperProps) {
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
    <section className="dishContainer">
      <h2 className="dishTitle">SIGNATURE DISH OF:</h2>
      <Swiper {...swiperProps}>
        {dishes.map((dish) => (
          <SwiperSlide key={dish.id}>
            <div className="dishCard">
              <img src={dish.photo} alt={dish.name} className="dishImage" />
              <div className="dishInfo">
                <h3
                  className="dishName"
                  onTouchMove={stopSwiperScroll}
                >
                  {dish.name}
                </h3>
                <p className="dishIngredients">
                  {dish.ingredients.join(", ")}
                </p>
                {dish.icon && (
                  <img src={dish.icon} alt="icon" className="dishIcon" />
                )}
                <p className="dishPrice">₪{dish.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="all-restaurants-link">
        <a href="/restaurants">All Restaurants &gt;&gt;</a>
      </div>
    </section>
  );
}