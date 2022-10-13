import React from 'react';
import '../App.css';

import Listings from './Listings'
import Footer from './Footer';
import Users from './Users';
import HeroSection from './HeroSection';
import { Container } from 'react-bootstrap';

function Homepage() {
  return (
    <>
    <HeroSection />
    <Container className='mt-3' >
      <h2 className = 'text-center text-white'>Current Listings </h2>
      <Listings />
    </Container>   
    </>  
  );
}

export default Homepage;