import React from 'react';
import { AboutUsProps } from '../../../../interfaces';
import "./DownloadLogos.scss"

const DownloadLogos: React.FC<{ downloads: AboutUsProps['downloads'] }> = ({ downloads }) => (
  <div className="DownloadLogos">
    {downloads.map((button, index) => (
      <img key={index} className="DownloadLogos__image" src={button.image} alt={`${button.name} Download`} />
    ))}
  </div>
);

export default DownloadLogos;