import React from 'react';
import './Luxury.css';
import luxuryImage from '../assets/images/luxury-service.webp';

const Luxury = () => {
  return (
    <section className="luxury" style={{ backgroundImage: `url(${luxuryImage})` }}>
      <div className="luxury-overlay"></div>
      <div className="container">
        <div className="luxury-content">
          <h2>EXPERIENCE THE LUXURY OF CONCIERGE BARBER SERVICES AT YOUR HOME</h2>
          <button className="btn">BOOK AN APPOINTMENT</button>
        </div>
      </div>
    </section>
  );
};

export default Luxury;