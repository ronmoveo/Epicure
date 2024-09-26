import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import Separator from '../../Separator';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="header__menu-button" onClick={toggleModal}>
        <img src="/hamburger.svg" alt="Menu" />
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={toggleModal}>
            <img src="/closeLogo.svg" alt="close logo" />
            </button>
            <nav className="modal__nav">
              <Link to="/restaurants" onClick={toggleModal}>Restaurants</Link>
              <Link to="/restaurants" onClick={toggleModal}>Chefs</Link>
              <Separator />
              <Link to="/restaurants" onClick={toggleModal}>Contact Us</Link>
              <Link to="/restaurants" onClick={toggleModal}>Term of Use</Link>
              <Link to="/restaurants" onClick={toggleModal}>Privacy Policy</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
