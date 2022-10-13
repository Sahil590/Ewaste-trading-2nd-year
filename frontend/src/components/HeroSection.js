  
import React from 'react';
import '../App.css';
import { Button } from './Navbar/Button';
import '../css/Herosection.css';
import { Image } from 'react-bootstrap';

function HeroSection() {
  return (
      
    <div className='hero-container'>
      
      <div className='backround'>
      <h1>E-Trade: Make the earth better</h1>
      <p>Our goal is to minimise the amount of e-waste that ends up in landfill by giving it to people who may have a better use for it or disposing of it through the correct channels that recycle the electronics safely and responsibly. </p>
      <h2>What are you waiting for? </h2>
      </div>
    </div>
  );
}

export default HeroSection;