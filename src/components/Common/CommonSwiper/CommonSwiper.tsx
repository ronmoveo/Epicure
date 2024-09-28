
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel, FreeMode } from "swiper/modules";
import "./CommonSwiper.scss";
import { CommonSwiperProps } from "../../../interfaces";
import { SwiperOptions } from "swiper/types";

export default function CommonSwiper({ items, renderItem, title, allLink }: CommonSwiperProps) {
  const swiperProps: SwiperOptions = {
    spaceBetween: 24,
    slidesPerView: 'auto',
    allowTouchMove: true,
    simulateTouch: true,
    grabCursor: true,
    freeMode: true,
    mousewheel: true,
    modules: [Mousewheel, FreeMode],
  };
  return (
    <section className="swiperContainer">
      <h2 className="swiperTitle">{title}</h2>
      <div className="swiperWrapper">
        <Swiper {...swiperProps}>
          {items.map((item) => (
            <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      {allLink && (
        <div className="all-items-link">
          <a href={allLink}>
            All {allLink.slice(1)} 
            <img src="/arrow.svg" alt="arrow" className="arrow-icon" />
          </a>
        </div>
      )}
    </section>
  );
}
