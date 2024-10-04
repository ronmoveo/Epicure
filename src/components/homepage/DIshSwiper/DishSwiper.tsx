import CommonSwiper from '../../Common/CommonSwiper/CommonSwiper';
import DishCard from '../../Common/DishCard/DishCard';
import { DishSwiperProps } from '../../../interfaces';
import './DishSwiper.scss';
import { SIGNATURE_DISH_OF } from '../../../utils/constants';
import { RoutePaths } from '../../../utils/enum';

export default function DishSwiper({ dishes }: DishSwiperProps) {
  return (
    <CommonSwiper
      items={dishes}
      renderItem={(dish) => (
        <DishCard 
          dish={dish} 
          imageWidth={245}
          imageHeight={152}
          cardHeight={388}
        />
      )}
      title={SIGNATURE_DISH_OF}
      allLink={RoutePaths.RESTAURANTS}
    />
  );
}