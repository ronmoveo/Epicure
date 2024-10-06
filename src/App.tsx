import { Outlet } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import './App.scss';
import "/src/assets/styles/global.scss";
import { CartProvider } from './cartContext';



function App() {
  return (
    <>
    <CartProvider>
      <Header />   
      <Outlet />   
      <Footer />  
    </CartProvider>

    </>
  );
}

export default App;
