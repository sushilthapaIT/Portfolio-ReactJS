import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      {/* <img className='logo' src='./images/temp-logo.jpg' alt='logo of sushil portfolio website' /> */}
      <p className='logo'>My Logo</p>
      <nav>
        <li><a to='/'>Home</a></li>
        <li><a to='/projects'>Projects</a></li>
        <li><a to='/about'>About</a></li>
      </nav>
      <a className='cta' to='/contact'><button>Contact</button></a>
    </header>
  );
}

export default Navbar;

// const MainHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 30px 10%;

//   .logo {
//     cursor: pointer;
//   }
// `;

// const NavLinks = styled.ul`
//   list-style: none;
//   display: flex;
//   gap: 20px;

//   li {
//     margin: 0;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;
//     font-weight: bold;
//   }

//   a.active {
//     color: #007BFF; 
//   }
// `;
