import React, { useState } from 'react';
import './CartModal.scss';
import { YOUR_BAG_IS_EMPTY } from '../../../../utils/constants';

const CartModal: React.FC = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="header__action-button" onClick={toggleModal}>
        <img src="/cart.svg" alt="Bag" />
      </button>

      {isOpen && (
        <div className="cart-modal">
          <div className="cart-modal__content">
            <div className="cart-modal__container">
              <div className="cart-modal__image-wrapper">
                <img src="/cart.svg" alt="Bag" className="cart-modal__image" />
              </div>
              <p className="cart-modal__text">{YOUR_BAG_IS_EMPTY}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;