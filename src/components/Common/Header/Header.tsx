import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import NavBar from './NavBar/NavBar';
import CartModal from './CartModal/CartModal';
import SearchModal from './SearchModal/SearchModal';
import { RoutePaths } from '../../../utils/enum';

const Header: React.FC = () => (
  <header className="header">
    <div className="header__mobile-menu">
      <NavBar />
    </div>
    <div className="header__content">
      <Link to={RoutePaths.HOME} className="header__logo">
        <img src="/logo.svg" alt="Epicure Logo" />
      </Link>
      <Link to={RoutePaths.HOME} className="header__title">
        EPICURE
      </Link>
      <nav className="header__nav">
        <Link to={RoutePaths.RESTAURANTS} className="header__nav-link">
          Restaurants
        </Link>
        <Link to={RoutePaths.RESTAURANTS} className="header__nav-link">
          Chefs
        </Link>
      </nav>
    </div>
    <div className="header__actions">
      <SearchModal />
      <button className="header__action-button">
        <img src="/person.svg" alt="User" />
      </button>
      <CartModal />
    </div>
  </header>
);

export default Header;