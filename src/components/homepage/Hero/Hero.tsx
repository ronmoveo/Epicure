import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Epicure works with the top chef restaurants in Tel Aviv</h1>
        <div className="hero__search">
          <input type="text" placeholder="Search for restaurant cuisine, chef" />
          <button className="hero__search-button">
            <img src="/search.svg" alt="Search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
 