import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'
import { footerLinks } from '../../../utils/constants';


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        {footerLinks.map((link, index) => (
          <Link key={index} to={link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
