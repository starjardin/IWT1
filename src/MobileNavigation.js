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
    transform : none;
    
    ul {
      display : flex !important;
      justify-content : flex-end;
    }
  }
`

const IcocCloseStyles = styled.div`
  img {
    width : 1rem;
    height : 1rem;
  }
`

export default function MobileNavigation({ setIsNavigationOpen, isNavigationOpen, display }) {
  return (
    <>
      <HeaderStyles
        className="header"
      >
          <img src={Logo} className="header-img"/>
        <IcocCloseStyles
          className="navigation"
          onClick={() => { setIsNavigationOpen(!isNavigationOpen) }}
        >
          <img src={ IconClose } className='icon-close'/>
        </IcocCloseStyles>
      </HeaderStyles>
      <MobileNavigationStyles >
        <ul style={ {
          display: isNavigationOpen ? 'block' : 'none'
        }}>
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
