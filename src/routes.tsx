import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import Info from './components/homepage/AboutUs/AboutUs'

import Hero from './components/homepage/Hero/Hero'

const routes = createBrowserRouter([
  // homepage
  { path: "/", element: <> <Header /><Hero /><Home /><Info /><Footer /> </> },
  { path: "/restaurants", element: <> <Header /><RestaurantList /><Footer /> </> },
  { path: "/restaurant/:id", element: <> <Header /><RestaurantDetail /><Footer /> </> }
]);

export default routes;
