import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderModal from './HeaderModal/Headermodal';
import './Header.scss';

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <button className="header__menu-button" onClick={toggleModal}>
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
      <HeaderModal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
};

export default Header;