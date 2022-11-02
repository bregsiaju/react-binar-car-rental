import React from 'react';
import OurService from './components/LandingPage/OurService';
import WhyUs from './components/LandingPage/WhyUs';
import Footer from './components/UI/Footer';
import Hero from './components/UI/Hero';
import Navbar from './components/UI/NavigationBar';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="service"></div>
      <div className="body-container">
        <OurService />
        <WhyUs />
      </div>
      <Footer />
    </>
  );
}

export default App;
