
import React from 'react';
import './AboutUs.css';
import aboutImage from '../assets/images/about.jpg';

const AboutUs = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <h2>ABOUT US</h2>
            <p>Fama Beauty Salon & Barber Shop is a place for the whole family where we will treat you as you deserve, with love, respect and professionalism. We are a family business with more than 10 years of experience in the field. We are here to serve you and make you feel at home.</p>
            <div className="stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>CUSTOMER SATISFACTION</p>
              </div>
              <div className="stat-item">
                <h3>10</h3>
                <p>YEARS OF EXPERIENCE</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="Barber giving haircut at home" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;