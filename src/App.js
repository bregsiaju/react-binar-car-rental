import React from 'react';
import OurService from './components/LandingPage/OurService';
import WhyUs from './components/LandingPage/WhyUs';
import Footer from './components/UI/Footer';
import Hero from './components/UI/Hero';
import Navbar from './components/UI/NavigationBar';
// import Testimonial from './components/LandingPage/Testimonial';
import './App.css';
import GettingStarted from './components/LandingPage/GettingStarted';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="service"></div>
      <div className="body-container">
        <OurService />
        <WhyUs />
        {/* <Testimonial /> */}
        <GettingStarted />
      </div>
      <Footer />
    </>
  );
}

export default App;
