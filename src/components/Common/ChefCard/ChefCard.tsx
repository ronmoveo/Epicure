import React from 'react';
import './ChefCard.scss';

interface ChefCardProps {
  photo: string;
  name: string;
}

const ChefCard: React.FC<ChefCardProps> = ({ photo, name }) => {
  return (
    <div className="chef-card">
      <div className="chef-photo-container">
        <img src={photo} alt={name} className="chef-photo" />
        <div className="chef-name-label">{name}</div>
      </div>
    </div>
  );
};

export default ChefCard;