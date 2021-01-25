import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMenuOutline } from "react-icons/io"

import Logo from '../images/logo.svg'
import MobileNavigation from './MobileNavigation'

export const HeaderStyles = styled.div`
  background-color : #fff;
  z-index : 5;
  position : relative;
  display : flex;
  justify-content : space-between;
  padding : 1rem;
  align-items : center;

  .header-img {
    width : 50%;
  }

  .navigation {
    cursor : pointer;
    span {
      visibility : hidden;
    }
  }
  
  .header {
    display: none;
  }
    
  @media (min-width : 700px) {
    .navigation {
      display: none;
    }
  }
`
export default function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  return (
    <>
      <div className="header-container">
        {
          isNavigationOpen
            ? <MobileNavigation
              setIsNavigationOpen={setIsNavigationOpen}
              isNavigationOpen={isNavigationOpen}
            />
            : <HeaderStyles
              className="header"
            >
                <img src={Logo} className="header-img"/>
              <p
                className="navigation"
                onClick={ () => { setIsNavigationOpen(!isNavigationOpen) } }
              >
                open
              </p>
              <MobileNavigation
                setIsNavigationOpen={setIsNavigationOpen}
                isNavigationOpen={ isNavigationOpen }
                display={isNavigationOpen ? "none" : "block"}
              />
            </HeaderStyles>
        }
      </div>
    </>
  )
}
