import React, { useState } from 'react'
import styled from 'styled-components'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <FooterBelow>
        <FooterCopyRight>
            <p>&#169; {year} Sushil. All right reserved.</p>
        </FooterCopyRight>
            <FooterLinks>
                <a href="" target="_blank"><p>Terms &#38; Conditions</p></a>
                <a href="" target="_blank"><p>Privacy</p></a>
                <a href="" target="_blank"><p>Security</p></a>
                <a href="" target="_blank"><p>Cookie Declaration</p></a>
            </FooterLinks>
    </FooterBelow>
)
}


export default Footer


const FooterBelow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0%.2rem;
`

const FooterCopyRight = styled.div`
    color: white;
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
`

const FooterLinks = styled.div`
    display: flex;
    flex-direction: row;

    p{
        font-size: 13px;
        line-height: 15px;
        color: white;
        margin-left: 2rem;
        font-weight: 600;
    }

`