import React from 'react';
import './SearchBar.scss';
import { SearchBarProps } from '../../../interfaces';


const SearchBar: React.FC <SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        className="search-bar__input" 
        placeholder={placeholder} 
      />
      <button className="search-bar__button">
        <img src="/search.svg" alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
