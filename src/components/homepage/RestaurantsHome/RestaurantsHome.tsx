import { ALL_RESTAURANTS } from "../../../utils/constants";
import { Restaurant } from "../../../interfaces";
import RestaurantCard from "../../Common/RestaurantCard/RestaurantCard";
import "./RestaurantsHome.scss";

interface RestaurantsHomeProps {
    restaurants: Restaurant[];
    title: string;
    allLink?: string;
    showChef?: boolean;
    isStars?: boolean;
}

const RestaurantsHome: React.FC<RestaurantsHomeProps> = ({ restaurants, title, allLink, showChef = false, isStars = false }) => {
    return (
        <section className="RestaurantsHome">
            <h2 className="title">{title}</h2>
            <div className="restaurantCards">
                    {restaurants.slice(0, 3).map(restaurant => (
                        <RestaurantCard 
                            key={restaurant.id} 
                            restaurant={restaurant} 
                            showChef={showChef}
                            isStars={isStars}
                        />
                    ))}
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

export default RestaurantsHome;
