import React from 'react';
import './AboutUs.scss';
import { aboutUsText } from '../../../utils/constants';
import {AboutUsProps }  from '../../../interfaces';


const AboutUs: React.FC<AboutUsProps> = ({ downloads }) => {
  return (
    <div className="AboutUs">
      <div className="AboutUs__content">
        <img className="AboutUs__logo" src="/fullLogo.svg" alt="Epicure Logo" />
        <div className="AboutUs__text">
          <h2>About Us:</h2>
          <p>{aboutUsText}</p>
        </div>
      </div>
      <div className="AboutUs__download-container">
        {downloads.map((button, index) => (
          <img key={index} className="AboutUs__download" src={button.image} alt={`${button.name} Download`} /> 
        ))}
      </div>
    </div>
  );
};

export default AboutUs;