import React from 'react';
import './AboutUs.scss';
import Logo from '../../Common/EpicureLogo';
import DownloadLogos from './DownloadLogos/DownloadLogos';
import { AboutUsProps } from '../../../interfaces';
import AboutUsText from './AboutUsText/AboutUsText';

const AboutUs: React.FC<AboutUsProps> = ({ downloads }) => {
  return (
    <div className="AboutUs">
      <div className="AboutUs__content">
        <Logo />
        <AboutUsText />
      </div>
      <DownloadLogos downloads={downloads} />
    </div>
  );
};

export default AboutUs;
