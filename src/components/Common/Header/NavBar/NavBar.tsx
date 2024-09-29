import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import Separator from '../../Separator/Separator';
import { navLinks } from '../../../../utils/constants';

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
              <img src="/closeLogo.svg" alt="Close" />
            </button>

            <nav className="modal__nav">
              {navLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <Link to={link.path} onClick={toggleModal}>
                    {link.label}
                  </Link>
                  {index === 1 && <Separator />}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
