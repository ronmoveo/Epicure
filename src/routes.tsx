import { createBrowserRouter } from 'react-router-dom';
import App from './App';  // Import the main layout component
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';

const routes = createBrowserRouter([
  {
    path: "/", 
    element: <App />,   // App contains Header, Footer, and Outlet
    children: [
      { path: "/", element: <Home /> },   // Render Home component in Outlet
      { path: "/restaurants", element: <RestaurantList /> },
      { path: "/restaurant/:id", element: <RestaurantDetail /> },
    ],
  },
]);

export default routes;
