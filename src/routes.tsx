import { createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';

const routes = createBrowserRouter([
  { path: "/", element: <> <Header /><Home /> </> },
  { path: "/restaurants", element: <> <Header /><RestaurantList /> </> },
  { path: "/restaurant/:id", element: <> <Header /><RestaurantDetail /> </> }
]);

export default routes;
