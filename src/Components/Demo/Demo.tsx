import './Demo.css';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { COLORS } from '../../Constants';
import { FaStar } from 'react-icons/fa'

const Demo = () => {

  return (
    <div className='missionContainer'>
      <div className='phoneContainer'>
        <img src={`./phoneframe.png`} className='frame'></img>
            <video
            playsInline
            autoPlay
            muted
            loop
            src={
              './demo.mp4'
            }
            className='phoneScreen'
          ></video>
      </div>
    </div>
  );
};

export default Demo;
