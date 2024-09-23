import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <footer className="footer">

         <div className='footer__links'>
            <Link to="/restaurants">
                Contact Us
            </Link>
            <Link to="/restaurants">
                Term of Use
            </Link>
            <Link to="/restaurants">
                Privacy Policy
            </Link>
         </div>
    </footer>
  );
};

export default Footer;