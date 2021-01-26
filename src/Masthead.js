import React from 'react'
import styled from 'styled-components'
import BgIntroMobile from '../images/bg-intro-mobile.svg'
import BgIntroDesktop from '../images/bg-intro-desktop.svg'

import MockUps from '../images/image-mockups.png'


const MastheadStyles = styled.div`
  background-color : hsl(0, 0%, 98%);
  text-align : center;
  padding-bottom : 5rem;

  .masthead-img {
    display : inline-block;
    transform : translateY(-29%);
  }

  .masthead-heading {
    font-size : 40px;
    font-weight : 700;
    line-height : 52px;
    color : hsl(233, 26%, 24%);
  }

  .masthead-paragraph {
    color : hsl(233, 8%, 62%);
  }

  .request {
    padding : 0.7rem 1.5rem;
    color : #fff;
    background-image: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
    border : none;
    border-radius : 25px;
    margin : 2rem 0;
    cursor: pointer;
    transition : .5s ease;
    &:hover {
      background-image : linear-gradient(to left, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
      transform : scale(1.1)
    }
  }

  .masthead-header {
    img {
      background-image : url(${BgIntroMobile});
      background-repeat : no-repeat;
      background-position : top;
      background-size : 100% 53%;
    }
  }

  @media (min-width : 1244px) {
    .masthead-header {
      display : flex;
      flex-direction : row-reverse;
      align-items : center;
      max-height : 50vh;
      img {
        background-image : url(${BgIntroDesktop});
        background-position: 0% 0%;
        background-size: cover;
        padding-left: 10rem;
        padding-bottom: 0rem;
      }
    }

    .masthead-img {
      transform : translateY(0);
    }
  }
`

export default function Masthead() {
  return (
    <MastheadStyles className="masthead-container">
      <header className="masthead-header">
        <img src={MockUps} className="masthead-img"/>
        <div>
          <h2 className="masthead-heading">
          Next generation digital banking
        </h2>
        <p className="masthead-paragraph">
          Take your finacial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more
        </p>
        <button
          type="button"
          className="btn request"
        >
          Request invite
        </button>
        </div>
      </header>
    </MastheadStyles>
  )
}
