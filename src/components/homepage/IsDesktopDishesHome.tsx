import { IsDesktopDishesHomeProps } from "../../interfaces";
import useIsDesktop from "../Common/useIsDesktop";
import DishesHomeDesktop from "./DishesHomeDesktop/DishesHomeDesktop";
import DishSwiper from "./DIshSwiper/DishSwiper";




const IsDesktopDishesHome: React.FC<IsDesktopDishesHomeProps> = ({ signatureDishes, title}) => {

    const IsDesktopScreen = useIsDesktop();
    return (
        <>
            {IsDesktopScreen ? (
                <DishesHomeDesktop 
                dishes={signatureDishes} 
                title={title}
                isDesktop

                />
            ) : (
                <DishSwiper dishes={signatureDishes} />

            )}
        </>
    );
};

export default IsDesktopDishesHome;

