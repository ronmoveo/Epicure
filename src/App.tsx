import { Outlet, RouterProvider } from 'react-router-dom';
import routes from './routes';
import './App.scss';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';

function App() {
  return <RouterProvider router={routes} />;

}

export default App;
