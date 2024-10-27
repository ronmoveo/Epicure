import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./CommonSwiper.scss";
import { CommonSwiperProps } from "../../../interfaces";
import { ALL_RESTAURANTS, SWIPER_PROPS } from "../../../utils/constants";

const CommonSwiper: React.FC<CommonSwiperProps> = ({ items, renderItem, title, allLink }) => {
  return (
    <section className="swiperContainer">
      <h2 className="swiperTitle">{title}</h2>
      <div className="swiperWrapper">
        <Swiper 
          {...SWIPER_PROPS}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      {allLink && (
        <div className="all-items-link">
          <a href={allLink}>
            {ALL_RESTAURANTS}  
            <img src="/arrow.svg" alt="arrow" className="arrow-icon" />
          </a>
        </div>
      )}
    </section>
  );
}

export default CommonSwiper;