import { Link } from 'react-router-dom';
import './Header.scss';
import NavBar from './NavBar/NavBar';

const Header: React.FC = () => {


  return (
    <header className="header">
      <button className="header__menu-button">
        <img src="/hamburger.svg" alt="Menu" />
      </button>
      <Link to="/" className="header__logo">
        <img src="/logo.svg" alt="Epicure Logo" />
      </Link>
      <div className="header__actions">
        <button className="header__action-button">
          <img src="/search.svg" alt="Search" />
        </button>
        <button className="header__action-button">
          <img src="/person.svg" alt="User" />
        </button>
        <button className="header__action-button">
          <img src="/cart.svg" alt="Bag" />
        </button>
      </div>
      <NavBar/>
    </header>
  );
};

export default Header;