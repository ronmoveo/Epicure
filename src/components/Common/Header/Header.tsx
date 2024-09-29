import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import NavBar from './NavBar/NavBar';
import CartModal from './CartModal/CartModal';
import SearchModal from './SearchModal/SearchModal';

const Header: React.FC = () => {
  return (
    <header className="header">
      <NavBar />
      <Link to="/" className="header__logo">
        <img src="/logo.svg" alt="Epicure Logo" />
      </Link>
      <div className="header__actions">
        <SearchModal />
        <button className="header__action-button">
          <img src="/person.svg" alt="User" />
        </button>
        <CartModal />
      </div>
    </header>
  );
};

export default Header;