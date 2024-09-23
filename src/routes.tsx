import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import Info from './components/Info'

import Hero from './components/Hero'

const routes = createBrowserRouter([
  { path: "/", element: <> <Header /><Hero /><Home /><Info /><Footer /> </> },
  { path: "/restaurants", element: <> <Header /><RestaurantList /><Footer /> </> },
  { path: "/restaurant/:id", element: <> <Header /><RestaurantDetail /><Footer /> </> }
]);

export default routes;
