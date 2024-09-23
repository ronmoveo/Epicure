import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import './App.scss';

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
