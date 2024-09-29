import React from 'react';
import './Hero.scss';
import SearchBar from '../../Common/SearchBar/SearchBar';
import { EPICURE_WORKS_WITH_THE_TOP_CHEF_RESTAURANTS_IN_TEL_AVIV, SEARCH_FOR_RESTAURANT_CUISINE_CHEF } from '../../../utils/constants';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{EPICURE_WORKS_WITH_THE_TOP_CHEF_RESTAURANTS_IN_TEL_AVIV}</h1>
        <div className="hero__search">
          <SearchBar placeholder={SEARCH_FOR_RESTAURANT_CUISINE_CHEF} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
 