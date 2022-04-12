import './Landing.css';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Landing = () => {
  return (
    <div className='landingContainer'>
      <img src={`./sitecard.png`} className='cardPic'></img>
      <div className='textContainer'>
        <p className='header'>divii</p>
        <p className='subHeader'>a tarot card app built for mobile</p>
        <p className='launch'>LAUNCHING MAY 2022</p>
      </div>
    </div>
  );
};

export default Landing;
