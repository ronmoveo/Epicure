import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import { RoutePaths } from "./utils/enum";
import Restaurants from "./pages/Restaurants";
import RestaurantPage from "./pages/RestaurantPage";

const routes = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    element: <App />,
    children: [
      { path: RoutePaths.HOME, element: <Home /> }, 
      { path: RoutePaths.RESTAURANTS, element: <Restaurants /> },
      { path: RoutePaths.RESTAURANT, element: <RestaurantPage /> },
    ],
  },
]);

export default routes;
