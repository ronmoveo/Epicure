import React from 'react';
import { aboutUsText } from '../../../../utils/constants';
import "./AboutUsText.scss";

const AboutUsText: React.FC = () => (
  <div className="AboutUsText">
    <h2>About Us:</h2>
    <p>{aboutUsText}</p>
  </div>
);

export default AboutUsText;