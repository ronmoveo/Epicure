import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import NavBar from './NavBar/NavBar';
import CartModal from './CartModal/CartModal';
import SearchModal from './SearchModal/SearchModal';
import { RoutePaths } from '../../../utils/enum';
import { CHEFS, EPICURE, RESTAURANTS } from '../../../utils/constants';

const Header: React.FC = () => (
  <header className="header">
    <div className="header__wrapper">
      <div className="header__mobile-menu">
        <NavBar />
      </div>
      <div className="header__content">
        <NavLink to={RoutePaths.HOME} className="header__logo">
          <img src="/logo.svg" alt="Epicure Logo" />
        </NavLink>
        <NavLink to={RoutePaths.HOME} className="header__title">
          {EPICURE}
        </NavLink>
        <nav className="header__nav">
          <NavLink
            to={RoutePaths.RESTAURANTS}
            className={({ isActive }) =>
              isActive ? "header__nav-link header__nav-link--active" : "header__nav-link"}
          >
            {RESTAURANTS}
          </NavLink>
          <NavLink
            to={RoutePaths.CHEFS}
            className={({ isActive }) =>
              isActive ? "header__nav-link header__nav-link--active" : "header__nav-link"}
          >
            {CHEFS}
          </NavLink>
        </nav>
      </div>
      <div className="header__actions">
        <SearchModal />
        <button className="header__action-button">
          <img src="/person.svg" alt="User" />
        </button>
        <CartModal />
      </div>
    </div>
  </header>
);

export default Header;