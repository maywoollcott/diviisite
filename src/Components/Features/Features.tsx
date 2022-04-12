import './Features.css';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { COLORS } from '../../Constants';
import { FaStar } from 'react-icons/fa'

const Features = () => {

  const [selectedFeature, setSelectedFeature] = useState(0);
  const [gifAddress, setGifAddress] = useState('./readinggif.gif')

  return (
    <div className='missionContainer'>
      <div className='phoneContainer'>
        <img src={`./phoneframe.png`} className='frame'></img>
        <img src={gifAddress} className='phoneScreen'></img>
        {selectedFeature === 2 &&
            <video
            playsInline
            autoPlay
            muted
            loop
            src={
              './daily.mp4'
            }
            className='phoneScreen'
          ></video>
        }
      </div>
      <div className='bulletContainer'>
        <div className='bulletRow'>
          <FaStar className={selectedFeature === 0 ? 'bullet active' : 'bullet'} size={28}/>
            <p 
              onClick={() => {
              setSelectedFeature(0);
              setGifAddress('./readinggif.gif')
              }} 
              className='bulletText'>Gain insight into your life by choosing from a variety of spreads</p>
        </div>
        <div className='bulletRow'>
          <FaStar className={selectedFeature === 1 ? 'bullet active' : 'bullet'} size={28}/>
          <p 
            onClick={() => {
              setSelectedFeature(1);
              setGifAddress('./librarygif.gif')
              }} 
            className='bulletText'>Tune into the ancient art of tarot by studying our comprehensive encyclopedia of cards and interpretations</p>
        </div>
        <div className='bulletRow'>
          <FaStar className={selectedFeature === 2 ? 'bullet active' : 'bullet'} size={28}/>
          <p 
            className='bulletText'
            onClick={() => {
              setSelectedFeature(2);
            }} 
            >Share your readings with friends and on social media
          </p>
        </div>
        <div className='bulletRow'>
          <FaStar className={selectedFeature === 3 ? 'bullet active' : 'bullet'} size={28}/>
          <p 
            onClick={() => {
            setSelectedFeature(3);
            setGifAddress('./historygif.gif')
            }} 
            className='bulletText'>Look back on your reading history from any date</p>
        </div>
        <div className='bulletRow'>
          <FaStar className={selectedFeature === 4 ? 'bullet active' : 'bullet'} size={28}/>
          <p 
             onClick={() => {
              setSelectedFeature(4);
              setGifAddress('./personalgif.gif')
              }} 
            className='bulletText'>View and save your one-of-a-kind, personalized tarot card</p>
        </div>
        <div className='bulletRow'>
          <FaStar className={selectedFeature === 5 ? 'bullet active' : 'bullet'} size={28}/>
          <p 
             onClick={() => {
              setSelectedFeature(5);
              setGifAddress('./profilegif.gif')
              }} 
            className='bulletText'>Check stats on your usage and most commonly drawn cards</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
