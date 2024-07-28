import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <MainHeader>
      <p className='logo'>My Logo</p>
      <NavLinks>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </NavLinks>
      <NavLink className='cta' to='/contact'><button>Contact</button></NavLink>
    </MainHeader>
  );
}

export default Navbar;

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;

  .logo {
    cursor: pointer;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }

  a.active {
    color: #007BFF;
  }
`;
