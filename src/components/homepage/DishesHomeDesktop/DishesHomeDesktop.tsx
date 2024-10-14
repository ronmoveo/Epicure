import { DishesHomeDesktopProps } from "../../../interfaces";
import DishCard from "../../Common/DishCard/DishCard";
import "./DishesHomeDesktop.scss";



const DishesHomeDesktop: React.FC<DishesHomeDesktopProps> = ({ dishes, title, isDesktop }) => {
    return (
        <section className="DishesHomeDesktop">
            <h2 className="title">{title}</h2>
                <div className="dishCards">
                        {dishes.slice(0, 3).map(dish => (
                            <DishCard 
                                key={dish.id}
                                dish={dish}
                                isDesktop={isDesktop}                       
                            />
                        ))}
                </div>
        </section>
    );
}

export default DishesHomeDesktop;


