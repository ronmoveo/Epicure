import CommonSwiper from '../../Common/CommonSwiper/CommonSwiper';
import RestaurantCard from '../../Common/RestaurantCard/RestaurantCard';
import { RestaurantsSwiperProps } from '../../../interfaces';
import './RestaurantsSwiper.scss';
import { RoutePaths } from '../../../utils/enum';

export default function RestaurantsSwiper({ restaurants, title, showChef = false }: RestaurantsSwiperProps) {
  return (
    <CommonSwiper
      items={restaurants}
      renderItem={(restaurant) => 
      <RestaurantCard 
      restaurant={restaurant}
       showChef={showChef}
      />}
      title={title}
      allLink = {RoutePaths.RESTAURANTS} 
    />
  );
}