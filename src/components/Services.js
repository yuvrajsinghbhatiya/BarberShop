import React from "react";
import "./Services.css";

import MenIcon from "../assets/icons/men.png";
import KidIcon from "../assets/icons/kid.png";
import BeardIcon from "../assets/icons/beard.png";
import TrimIcon from "../assets/icons/trim.png";
import HeadIcon from "../assets/icons/head.png";
import FullIcon from "../assets/icons/full.png";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: MenIcon,
      title: "MENS HAIRCUT",
      description:
        "Precision haircut tailored to your style preferences by our skilled barbers.",
      price: "$30 USD",
    },
    {
      id: 2,
      icon: KidIcon,
      title: "KIDS HAIRCUT",
      description:
        "Child-friendly haircut designed with patience and skill for a comfortable experience.",
      price: "$27 USD",
    },
    {
      id: 3,
      icon: BeardIcon,
      title: "HAIR & BEARD TOUCH-UP",
      description:
        "Expert beard shaping and trimming to enhance your facial features and style.",
      price: "$40 USD",
    },
    {
      id: 4,
      icon: TrimIcon,
      title: "BEARD TRIM & NECK SHAVE",
      description:
        "Precision beard trim and neck shave for a polished look, enhancing your facial structure.",
      price: "$25 USD",
    },
    {
      id: 5,
      icon: HeadIcon,
      title: "LINE-UP HEAD ONLY",
      description:
        "Precision line-up for a clean and sharp look, focusing on the hairline and edges.",
      price: "$15 USD",
    },
    {
      id: 6,
      icon: FullIcon,
      title: "FAMA FULL SERVICE",
      description:
        "Full service including haircut, beard trim, and scalp treatment for a complete grooming experience.",
      price: "$60 USD",
    },
  ];

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <h2>BROWSE OUR SERVICES</h2>
        <p className="services-intro">
          Our mobile barbers bring the full barber shop experience to your
          location, offering premium cuts and styling services customized to
          your preferences. Each service comes with complimentary consultation.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-header">
                <div className="service-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <div className="service-price">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <button className="btn">BOOK AN APPOINTMENT</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
