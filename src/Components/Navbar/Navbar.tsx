import './Navbar.css';
import React from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
      <p className='logo'>divii</p>
      <ul className=''>
        <li>
        <Link to='/'>Home</Link>
          {/* <Link activeClass='active' to='landingContainer' spy={true} smooth={true}>
            Home
          </Link> */}
        </li>
        <li>
          {/* <Link activeClass='active' to='missionContainer' spy={true} smooth={true}>
            Features
          </Link> */}
          <Link to='/features'>Features</Link>
        </li>
        <li>
          {/* <Link to='providersContainer' spy={true} smooth={true}>
            Demo
          </Link> */}
          <Link to='/demo'>Demo</Link>
        
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
