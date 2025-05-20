import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram,  FaYelp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Fama Barber Shop & Beauty Salon</h3>
            <p>Professional Barber Services</p>
          </div>
          
          <div className="footer-social">
            <a href="https://www.instagram.com/famabeautysalontx/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
    
            <a href="https://www.instagram.com/famabeautysalontx/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.yelp.com/biz/fama-cuts-los-angeles" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaYelp />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Fama Barber Service - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;