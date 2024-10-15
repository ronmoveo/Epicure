import React, { useState } from 'react';
import './CartModal.scss';
import { useCart } from '../../../../cartContext';
import { CHECKOUT, CURRENCY_SYMBOL, MY_ORDER, ORDER_HISTORY, TOTAL, YOUR_BAG_IS_EMPTY } from '../../../../utils/constants';

const CartModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, cartCount } = useCart();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <button className="header__action-button" onClick={toggleModal}>
        <img src="/cart.svg" alt="Bag" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>

      {isOpen && (
        <div className="cart-modal">
          <div className="cart-modal__header">
            {cartItems.length > 0 && (
              <>
              <h2 className="cart-modal__title">{MY_ORDER}</h2>
              <p className="cart-modal__restaurant">{cartItems[0].restaurantName}</p>
              </>
            )}
          </div>
          <div className="cart-modal__items-container">
            {cartItems.length === 0 ? (
              <div className="cart-modal__empty">
                <div className="cart-modal__image-wrapper">
                  <img src="/cart.svg" alt="Bag" className="cart-modal__image" />
                </div>
                <p className="cart-modal__text">
                  {YOUR_BAG_IS_EMPTY}
                </p>
                <button className="cart-modal__history">
                {ORDER_HISTORY}
                </button>
              </div>
            ) : (
              <div className="cart-modal__items">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.sideDish.join('-')}-${item.changes.join('-')}`} className="cart-modal__item">
                    <img src={item.photo} alt={item.name} className="cart-modal__item-image" />
                    <div className="cart-modal__item-details">
                      <h3 className="cart-modal__item-name">
                        <span className="cart-modal__item-quantity">{item.quantity}x </span>
                        <span className="cart-modal__item-name-text">{item.name}</span>
                      </h3>
                      <p className="cart-modal__item-options">
                        {item.sideDish.join(' | ')} {item.changes.length > 0 && '|'} {item.changes.join(' | ')}
                      </p>
                      <div className="cart-modal__item-price-container">
                        <span className="cart-modal__item-currency">{CURRENCY_SYMBOL}</span>
                        <span className="cart-modal__item-price">{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="cart-modal__footer">
              <div className="cart-modal__total">
                <p>
                  {TOTAL} <span className="cart-modal__currency">{CURRENCY_SYMBOL}</span>{calculateTotal()}
                </p>
              </div>
              <button className="cart-modal__checkout">
                <span className="cart-modal__checkout-text">{CHECKOUT}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CartModal;
