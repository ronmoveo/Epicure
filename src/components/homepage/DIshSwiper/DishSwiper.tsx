// DishSwiper.tsx
import React from 'react';
import CommonSwiper from '../../Common/CommonSwiper/CommonSwiper';
import DishCard from '../../Common/DishCard/DishCard';
import { DishSwiperProps } from '../../../interfaces';
import './DishSwiper.scss';

export default function DishSwiper({ dishes }: DishSwiperProps) {
  return (
    <CommonSwiper
      items={dishes}
      renderItem={(dish) => <DishCard dish={dish} />}
      title="SIGNATURE DISH OF:"
      allLink="/restaurants"
    />
  );
}