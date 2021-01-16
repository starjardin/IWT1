import React from 'react'
import styled from 'styled-components'

import Logo from '../images/logo.svg'
import IconClose from '../images/icon-close.svg'
import { HeaderStyles } from './Header'

const MobileNavigationStyles = styled.nav`
  position : fixed;
  background-color : #fff;
  width : 80%;
  z-index : 6;
  text-align : center;
  transform : translateX(50%);
  right : 50%;
  ul {
    padding : 0;

    li {
      list-style : none;
      a {
        text-decoration : none;
        display : inline-block;
        padding : 0.5rem;
        text-transform : capitalize;
      }
    }
  }

  @media (min-width : 720px) {
    position : initial;
    ul {
      display : flex;
    }
  }
`

export default function MobileNavigation({ setIsNavigationOpen, isNavigationOpen }) {
  console.log(isNavigationOpen);
  return (
    <>
      <HeaderStyles
        className="header"
      >
          <img src={Logo} className="header-img"/>
        <span
          className="navigation"
          onClick={() => { setIsNavigationOpen(!isNavigationOpen) }}
        >
          <img src={ IconClose }/>
        </span>
      </HeaderStyles>
      <MobileNavigationStyles >
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </MobileNavigationStyles>
    </>
  )
}
