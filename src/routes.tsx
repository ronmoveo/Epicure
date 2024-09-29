import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import { RoutePaths } from "./utils/enum";

const routes = createBrowserRouter([
  {
    path: RoutePaths.HOME,
    element: <App />,
    children: [
      { path: RoutePaths.HOME, element: <Home /> }, 
      { path: RoutePaths.RESTAURANTS, element: <Restaurants /> },
    ],
  },
]);

export default routes;
