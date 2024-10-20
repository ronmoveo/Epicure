import React from 'react';
import "./DownloadLogos.scss"
import { DOWNLOAD_BUTTONS } from '../../../../utils/constants';

const DownloadLogos: React.FC = () => {
  return (
    <div className="DownloadLogos">
      {DOWNLOAD_BUTTONS.map((button, index) => (
        <img
          key={index}
          className="DownloadLogos__image"
          src={button.image}
          alt={button.name}
        />
      ))}
    </div>
  );
};

export default DownloadLogos;
