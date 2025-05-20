import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ContactInfo from './components/ContactInfo';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Luxury from './components/Luxury';
import WhyChoose from './components/WhyChoose';
import Appointment from './components/Appointment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <ContactInfo />
      <AboutUs />
      <Services />
      <Luxury />
      <WhyChoose />
      <Appointment />
      <Footer />
    </div>
  );
}

export default App;