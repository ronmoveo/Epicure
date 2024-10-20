import React from 'react';
import './AboutUs.scss';
import Logo from '../../Common/EpicureLogo';
import DownloadLogos from './DownloadLogos/DownloadLogos';
import AboutUsText from './AboutUsText/AboutUsText';

const AboutUs: React.FC = () => {
  return (
    <section className="AboutUs">
      <div className='Wrapper'>
        <Logo />
          <div className="Content">
            <DownloadLogos />
            <AboutUsText />
          </div>
      </div>
    </section>
  );
};

export default AboutUs;
