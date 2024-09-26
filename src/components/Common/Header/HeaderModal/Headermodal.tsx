import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderModal.scss';
import { HeaderModalProps } from '../../../../interfaces';

const HeaderModal: React.FC<HeaderModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          ×
        </button>
        <nav className="modal__nav">
          <Link to="/restaurants" onClick={onClose}>Restaurants</Link>
          <Link to="/restaurants" onClick={onClose}>Chefs</Link>
          <div className="modal__separator"></div>
          <Link to="/restaurants" onClick={onClose}>Contact Us</Link>
          <Link to="/restaurants" onClick={onClose}>Term of Use</Link>
          <Link to="/restaurants" onClick={onClose}>Privacy Policy</Link>
        </nav>
      </div>
    </div>
  );
};

export default HeaderModal;