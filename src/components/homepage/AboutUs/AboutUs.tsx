import React from 'react';
import './AboutUs.scss';
import Logo from '../../Common/EpicureLogo';
import DownloadLogos from './DownloadLogos/DownloadLogos';
import AboutUsText from './AboutUsText/AboutUsText';

const AboutUs: React.FC = () => {
  return (
    <div className="AboutUs">
        <Logo />
        <DownloadLogos />
        <AboutUsText />
 
    </div>
  );
};

export default AboutUs;
