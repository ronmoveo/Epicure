import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

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
    </header>
  );
};

export default Header;