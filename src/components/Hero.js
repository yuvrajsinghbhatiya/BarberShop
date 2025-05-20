import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Fama Barber Shop & Beauty Salon</h1>
        <h2>Where Style Meets Precision</h2>
        <p>
          Experience premium grooming and beauty services designed for modern lifestyles. Step into luxury and leave with confidence.
        </p>
        <div className="hero-buttons">
          <a href="#appointment" className="btn btn-primary">Book an Appointment</a>
          <a href="#services" className="btn btn-secondary">Explore Services</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
