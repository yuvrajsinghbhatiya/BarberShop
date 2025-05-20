import React from "react";
import "./ContactInfo.css";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h4>ADDRESS</h4>
              <p>500 N BELL AVE #109</p>
              <p>Denton, TX 76209 UNITED STATES</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-details">
              <h4>PHONE</h4>
              <p>+1 940-612-9127</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaClock />
            </div>
            <div className="contact-details">
              <h4>HOURS</h4>
              <p>MON - SAT: 9AM - 7PM</p>
              <p>SUN: CLOSED</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
