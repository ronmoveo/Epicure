import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './VersatileCardCarousel.scss';

interface Item {
  id: string;
  name: string;
  isSignature?: boolean;
  ingredients?: string[];
  photo: string;
  price?: number;
  icon?: string;
  type?: string;
}

interface VersatileCardCarouselProps {
  items: Item[];
  title: string;
  showIngredients?: boolean;
  showPrice?: boolean;
  showIcon?: boolean;
}

const VersatileCardCarousel: React.FC<VersatileCardCarouselProps> = ({
  items,
  title,
  showIngredients = true,
  showPrice = true,
  showIcon = true,
}) => {
  return (
    <div className="versatile-card-carousel">
      <h2 className="carousel-title">{title}</h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="card-slide">
            <div className="card">
              <img src={item.photo} alt={item.name} className="card-image" />
              <div className="card-info">
                <h3 className="card-name">{item.name}</h3>
                {showIngredients && item.ingredients && (
                  <p className="card-ingredients">{item.ingredients.join(', ')}</p>
                )}
                <div className="card-footer">
                  {showIcon && item.icon && (
                    <img src={item.icon} alt="Item icon" className="card-icon" />
                  )}
                  {showPrice && item.price && (
                    <span className="card-price">₪{item.price}</span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <a href="/restaurants" className="all-restaurants-link">All Restaurants &gt;&gt;</a>
    </div>
  );
};

export default VersatileCardCarousel;