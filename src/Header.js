import React, { useState } from 'react'
import styled from 'styled-components'

import Logo from '../images/logo.svg'
import MobileNavigation from './MobileNavigation'

export const HeaderStyles = styled.div`
  background-color : #fff;
  z-index : 5;
  position : relative;
  display : flex;
  justify-content : space-between;
  padding : 1rem;

  .header-img {
    width : 50%;
  }

  .navigation {
    cursor : pointer;
    color : red;
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
              <span
                className="navigation"
                onClick={() => { setIsNavigationOpen(!isNavigationOpen) }}
              >
                open
              </span>
            </HeaderStyles>
        }
      </div>
    </>
  )
}
