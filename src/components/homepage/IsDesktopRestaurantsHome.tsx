import { Chef, Restaurant } from "../../interfaces";
import useIsDesktop from "../Common/useIsDesktop";
import RestaurantsSwiper from "./ResaurantsSwiper/RestaurantsSwiper";
import RestaurantsHomeDesktop from "./RestaurantsHomeDesktop/RestaurantsHomeDesktop";


export interface IsDesktopRestaurantsHomeProps {
    restaurants: Restaurant[];
    title1: string;
    title2?: string;
    allLink?: string;
    showChef?: boolean;
    isStars?: boolean;
  }

const IsDesktopRestaurantsHome: React.FC<IsDesktopRestaurantsHomeProps> = ({ restaurants, title1, title2 = title1, allLink = undefined, showChef = false, isStars = false }) => {

    const IsDesktopScreen = useIsDesktop();
    return (
        <>
            {IsDesktopScreen ? (
                <RestaurantsHomeDesktop
                    restaurants={restaurants} 
                    title={title1} 
                    allLink={allLink}
                    showChef={showChef}
                    isStars={isStars}
                />
            ) : (
                <RestaurantsSwiper 
                    restaurants={restaurants} 
                    title={title2} 
                    showChef={showChef}
                />
            )}
        </>
    );
};

export default IsDesktopRestaurantsHome;

