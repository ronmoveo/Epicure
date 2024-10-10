import React from 'react';
import { ABOUT_US, ABOUT_US_TEXT } from '../../../../utils/constants';
import "./AboutUsText.scss";

const AboutUsText: React.FC = () => (
  <div className="AboutUsText">
    <h2>{ABOUT_US}</h2>
    <p>{ABOUT_US_TEXT}</p>
  </div>
);

export default AboutUsText;