import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <MainHeader>
      {/* i will add my portfolio logo here */}
      <p className='logo'>My Logo</p> 
      <NavLinks className="nav-link">
        <li><NavLink to='/' className={(e) => (e.isActive ? 'active-navbar' : '')} >Home</NavLink></li>
        <li><NavLink to='/projects' className={(e) => (e.isActive ? 'active-navbar' : '')} >Projects</NavLink></li>
        <li><NavLink to='/about' className={(e) => (e.isActive ? 'active-navbar' : '')} >About</NavLink></li>
      </NavLinks>
      <NavLink className='cta' to='/contact'><Button>Contact</Button></NavLink>
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
    margin-right: auto;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  li .nav-link{
    font-weight: 500;
    font-size: 16px;
    color: #edf0f1;
    text-decoration: none;
  }

  .nav-links{
    list-style: none;

  }
`;

const Button = styled.button`
  margin-left: 20px;
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover{
    background-color: rgba(0, 136, 169, 0.8);
  }
`
