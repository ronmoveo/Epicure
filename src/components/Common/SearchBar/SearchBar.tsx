import React from 'react';
import './SearchBar.scss';
import { SearchBarProps } from '../../../interfaces';

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="search-bar">
      <div className="search-bar__content">
        <button className="search-bar__button">
          <img src="/search.svg" alt="Search" />
        </button>
        <input 
          type="text" 
          className="search-bar__input" 
          placeholder={placeholder} 
        />
      </div>
    </div>
  );
};

export default SearchBar;