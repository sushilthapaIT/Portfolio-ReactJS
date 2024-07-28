import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <MainHeader>
      {/* <img className='logo' src='./images/temp-logo.jpg' alt='logo of sushil portfolio website' /> */}
      <p>My Logo</p>
      <NavLinks>
        <li><a href=''>Home</a></li>
        <li><a href=''>Projects</a></li>
        <li><a href=''>About</a></li>
      </NavLinks>
      <a className='cta' href=''><button>Contact</button></a>

    </MainHeader>
  )
}

export default Navbar

const MainHeader = styled.header`
  
`
const NavLinks = styled.nav`
  
`