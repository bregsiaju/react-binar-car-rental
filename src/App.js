import React from 'react';
import OurService from './components/LandingPage/OurService';
import Footer from './components/UI/Footer';
import Hero from './components/UI/Hero';
import Navbar from './components/UI/NavigationBar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="body-container">
        <OurService />
      </div>
      <Footer />
    </>
  );
}

export default App;
