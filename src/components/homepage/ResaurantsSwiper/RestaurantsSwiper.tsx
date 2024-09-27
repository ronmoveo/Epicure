// RestaurantsSwiper.tsx
import React from 'react';
import CommonSwiper from '../../Common/CommonSwiper/CommonSwiper';
import RestaurantCard from '../../Common/RestaurantCard/RestaurantCard';
import { RestaurantsSwiperProps } from '../../../interfaces';
import './RestaurantsSwiper.scss';

export default function RestaurantsSwiper({ restaurants, title, showChef = false }: RestaurantsSwiperProps) {
  return (
    <CommonSwiper
      items={restaurants}
      renderItem={(restaurant) => <RestaurantCard restaurant={restaurant} showChef={showChef} />}
      title={title}
      allLink="/restaurants"
    />
  );
}