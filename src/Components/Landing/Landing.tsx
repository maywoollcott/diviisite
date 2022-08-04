import './Landing.css';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Footer } from '../Footer/Footer';

const Landing = () => {
  return (
    <div>
      <div className='landingContainer'>
        <img src={`./sitecard.png`} className='cardPic'></img>
        <div className='textContainer'>
          <p className='header'>divii</p>
          <p className='subHeader'>launching August 2022</p>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Landing;
