import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';

const routes = createBrowserRouter([
  { path: "/", element: <> <Header /><Home /><Footer /> </> },
  { path: "/restaurants", element: <> <Header /><RestaurantList /><Footer /> </> },
  { path: "/restaurant/:id", element: <> <Header /><RestaurantDetail /><Footer /> </> }
]);

export default routes;
