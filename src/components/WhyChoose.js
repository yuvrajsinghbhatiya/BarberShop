import React, { useState, useEffect } from 'react';
import './WhyChoose.css';
import { FiAward, FiStar, FiCheck } from 'react-icons/fi';
import GoogleIcon from '../assets/icons/google.png';
import BooksyIcon from '../assets/icons/booksy.png';

const quotes = [
  {
    text: "Solid services, years of experience and great price.",
    author: "Richard P.",
  },
  {
    text: "Very professional, clean, and family oriented barbershop. It's always a pleasure getting a haircut.",
    author: "Carlos D.",
  },
  {
    text: "We live out of town and drive here for my son to get a haircut. Max and all the barbers are good.",
    author: "Vanessa R.",
  },
  {
    text: "The Coolest Barber in Denton. He also gives a clean cut and is attentive.",
    author: "Issac R.",
  },
  {
    text: "Costly compared to other barbershops with better haircuts.",
    author: "Jorge A.",
    }
];

const WhyChoose = () => {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <section className="why-choose section-padding" id="about">
      <div className="container">
        <h2>WHY CHOOSE US</h2>
        <p className="why-choose-intro">
          Our barbers aren't simply skilled — they're dedicated craftsmen who take pride in delivering exceptional service. We bring professional equipment and premium products to your space, ensuring salon-quality results with the added convenience of in-home service.
        </p>

        <div className="why-choose-grid">
          <div className="why-choose-card">
            <div className="why-choose-icon"><FiAward /></div>
            <h3>LICENSED</h3>
            <p>Our team is fully licensed. You'll receive professional service from barbers with proper certifications and extensive training.</p>
          </div>

          <div className="why-choose-card">
            <div className="why-choose-icon"><FiStar /></div>
            <h3>MASTERS</h3>
            <p>Our barbers are passionate about their craft and continually stay updated with the latest techniques and quality standards for every client.</p>
          </div>

          <div className="why-choose-card">
            <div className="why-choose-icon"><FiCheck /></div>
            <h3>TRUSTED</h3>
            <p>We have a strong safety and privacy policy that ensures discretion and respect for your home while providing exceptional service.</p>
          </div>
        </div>

        <div className="ratings-section">
          <div className="rating-card google">
            <div className="rating-logo"><img src={GoogleIcon} alt="Google" /></div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-number">4.6</div>
            <div className="rating-reviews">117 reviews</div>
          </div>

          <div className="rating-quote">
            <p>"THE BEST BARBER SERVICES"</p>
            <p className="quote-text">{randomQuote.text}</p>
            <p className="quote-author">– {randomQuote.author}</p>
          </div>

          <div className="rating-card tripadvisor">
            <div className="rating-logo"><img src={BooksyIcon} alt="Tripadvisor" /></div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-number">4.9</div>
            <div className="rating-reviews">289 reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
