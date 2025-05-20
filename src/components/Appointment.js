import React from "react";
import "./Appointment.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Appointment = () => {
  return (
    <section className="appointment" id="appointment">
      <div className="appointment-bg">
        <div className="overlay">
          <div className="container">
            <div className="appointment-grid">
              {/* Left: Text + Contact Info */}
              <div className="appointment-text">
                <h2>MAKE AN APPOINTMENT</h2>
                <p>
                  Booking an appointment with us is easy! Just fill out the form
                  below, and we'll get back to you as soon as possible to confirm
                  your appointment.
                </p>

                <div className="appointment-contact">
                  <div className="contact-method">
                    <div className="icon-wrapper">
                      <FaPhone className="appointment-icon" />
                    </div>
                    <div className="appointment-info">
                      <p className="appointment-title">GIVE US A CALL</p>
                      <p className="appointment-detail">+1 940-612-9127</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="icon-wrapper">
                      <FaEnvelope className="appointment-icon" />
                    </div>
                    <div className="appointment-info">
                      <p className="appointment-title">SEND US AN EMAIL</p>
                      <p className="appointment-detail">
                        famabarbershop@xyz.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Appointment Form */}
              <div className="appointment-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" required />
                  </div>

                  <div className="double-group">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" type="tel" required />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" type="email" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="4" />
                  </div>

                  <button type="submit" className="btn">
                    Book an Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.1672255734915!2d-97.14318978480227!3d33.21898188084014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2ad0d4a1e6f1%3A0x3078463b8d32401f!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209%2C%20USA!5e0!3m2!1sen!2sus!4v1716227227206!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Fama Barber Shop and Beauty Salon"
          className="google-map"
        ></iframe>
      </div>
    </section>
  );
};

export default Appointment;
