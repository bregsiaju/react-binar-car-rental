import React from 'react';
import Footer from './components/UI/Footer';
import Hero from './components/UI/Hero';
import Navbar from './components/UI/NavigationBar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="body-container">
        <Footer />
      </div>
    </>
  );
}

export default App;
