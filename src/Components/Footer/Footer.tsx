import './Footer.css';
import React from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
      <ul className=''>
        <li>
          <a
            href='https://diviiprivacypolicy.tiiny.site/'
            target='_blank'
            rel='noreferrer'
          >
            Privacy Policy
          </a>
        </li>
        <li
          onClick={() =>
            window.open(
              'mailto:admin@diviitarot.com?subject=divii&body=How can we help you?'
            )
          }
        >
          Contact Us
        </li>
      </ul>
    </div>
  );
};
