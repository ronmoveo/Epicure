import React, { useEffect, useRef, useState } from 'react';
import './SearchModal.scss';
import SearchBar from '../../SearchBar/SearchBar';
import { SEARCH, SEARCH_FOR_RESTAURANT_CUISINE_CHEF } from '../../../../utils/constants';

const SearchModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button className="header__action-button" onClick={toggleModal}>
        <img src="/search.svg" alt="Search" />
      </button>

      {isOpen && (
        <div className="search-modal" ref={modalRef}>
          <div className="search-modal__header">
            <button className="search-modal__close" onClick={toggleModal}>
              <img src="/closeLogo.svg" alt="Close" />
            </button>
            <h2 className="search-modal__title">{SEARCH}</h2>
          </div>
          <div className="search-modal__search">
            <SearchBar placeholder= {SEARCH_FOR_RESTAURANT_CUISINE_CHEF} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;