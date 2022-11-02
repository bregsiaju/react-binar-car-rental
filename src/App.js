import React from 'react';

import Navbar from './components/UI/NavigationBar';
import Hero from './components/UI/Hero';
import Footer from './components/UI/Footer';

import OurService from './components/LandingPage/OurService';
import WhyUs from './components/LandingPage/WhyUs';
// import Testimonial from './components/LandingPage/Testimonial';
import GettingStarted from './components/LandingPage/GettingStarted';
import FAQ from './components/LandingPage/FAQ';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="service" />
      <div className="body-container">
        <OurService />
        <div id="why-us" />
        <WhyUs />
        {/* <Testimonial /> */}
        <GettingStarted />
        <div id="FAQ" />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}

export default App;
