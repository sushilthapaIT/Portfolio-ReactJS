import React from 'react'
import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <MainHeader>
      {/* <img className='logo' src='./images/temp-logo.jpg' alt='logo of sushil portfolio website' /> */}
      <p>My Logo</p>
      <NavLinks>
        <li><NavLink to=''>Home</NavLink></li>
        <li><NavLink to=''>Projects</NavLink></li>
        <li><NavLink to=''>About</NavLink></li>
      </NavLinks>
      <Link className='cta' href=''><button>Contact</button></Link>

    </MainHeader>
  )
}

export default Navbar

const MainHeader = styled.header`
  
`
const NavLinks = styled.nav`
  
`