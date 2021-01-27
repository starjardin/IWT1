import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosMenu } from "react-icons/io"
import { ButtonRequestStyles } from './Masthead'

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
  max-width : 1600px;
  margin : auto;

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
    .header-img {
      width : 30%;
    }
  }
`
export default function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  return (
    <>
      <div className="header-container">
        <div className="container">
          { isNavigationOpen
            ? <MobileNavigation
              setIsNavigationOpen={setIsNavigationOpen}
              isNavigationOpen={isNavigationOpen}
            />
            : <HeaderStyles
              className="header"
            >
              <img src={Logo} className="header-img"/>
              <IoIosMenu
                className="navigation"
                onClick={ () => { setIsNavigationOpen(!isNavigationOpen) } }
              />
              <MobileNavigation
                setIsNavigationOpen={setIsNavigationOpen}
                isNavigationOpen={ isNavigationOpen }
                display={isNavigationOpen ? "none" : "block"}
              />
              <ButtonRequestStyles
                type="button"
                className="none"
              >
                Request invite
              </ButtonRequestStyles>
            </HeaderStyles>
          }
        </div>
      </div>
    </>
  )
}
