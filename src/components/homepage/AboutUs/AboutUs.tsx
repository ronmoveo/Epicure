import React from 'react';
import './AboutUs.scss';

const Info: React.FC = () => {
  return (
    <div className="Info">
        
        <img className="Info__logo" src="/fullLogo.svg" alt="Epicure Logo" />
        <button className="header__menu-button">
          <img className="Info__download" src="/download.svg" alt="download" />
        </button>
        <h2> About Us: </h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non 
            eu ipsum. Cras porta malesuada eros, eget blandit
            turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna, 
            dignissim a vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
            eu ipsum. Cras porta malesuada eros.
        </p>
    </div>
  );
};

export default Info;