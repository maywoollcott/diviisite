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
            href='https://app.termly.io/document/privacy-policy/812be366-6bee-4d71-add5-7cee1f910afc'
            target='_blank'
            rel='noreferrer'
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href='https://app.termly.io/document/terms-of-use-for-website/2bbc99b5-c3bc-4cab-919c-17bc14675c22'
            target='_blank'
            rel='noreferrer'
          >
            Terms and Conditions
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
