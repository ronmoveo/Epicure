import React from 'react';
import { ABOUT_US, ABOUT_US_TEXT1, ABOUT_US_TEXT2 } from '../../../../utils/constants';
import "./AboutUsText.scss";

const AboutUsText: React.FC = () => (
  <div className="AboutUsText">
    <h2> {ABOUT_US}</h2>
    <p className= "AboutUsParagraph"> {ABOUT_US_TEXT1}</p>
    <p className= "AboutUsParagraph"> {ABOUT_US_TEXT2}</p>
  </div>
);

export default AboutUsText;