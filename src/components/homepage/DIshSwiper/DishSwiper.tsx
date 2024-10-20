import CommonSwiper from '../../Common/CommonSwiper/CommonSwiper';
import DishCard from '../../Common/DishCard/DishCard';
import { DishSwiperProps } from '../../../interfaces';
import './DishSwiper.scss';
import { SIGNATURE_DISH_OF } from '../../../utils/constants';
import { RoutePaths } from '../../../utils/enum';

export default function DishSwiper({ dishes }: DishSwiperProps) {
  return (
    <div className='DishSwiper'>
    <CommonSwiper
      items={dishes}
      renderItem={(dish) => (
        <DishCard 
          dish={dish}
        />
      )}
      title={SIGNATURE_DISH_OF}
      allLink={RoutePaths.RESTAURANTS}
    />
    </div>
  );
}