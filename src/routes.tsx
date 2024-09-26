import { createBrowserRouter } from 'react-router-dom';
import App from './App';  // Import the main layout component
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';



const routes = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      { path: "/", element: <Home /> },  
      { path: "/restaurants", element: <Restaurants /> },
    ],
  },
]);

export default routes;
