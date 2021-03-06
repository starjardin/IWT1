import React from 'react'
import styled from 'styled-components'

import Logo from "../images/logo.svg"
import Facebook from "../images/icon-facebook.svg"
import Youtube from "../images/icon-youtube.svg"
import Twitter from "../images/icon-twitter.svg"
import Instagram from "../images/icon-instagram.svg"
import Pinterest from "../images/icon-pinterest.svg"

const FooterStyles = styled.div`
  background-color : hsl(233, 26%, 24%);
  padding-top: 48px;
  text-align : center;
  .container {
    max-width : 1600px;
    margin : auto;
  }
  img {
    width : 20%;
    margin : auto;
    filter : brightness(0) invert(1);
    padding-bottom : 35px;
    cursor: pointer;
  }
  .icon {
    display : inline-block;
    width : 2rem;
    height : 2rem;
    background-repeat : no-repeat;
  }

  ul {
    padding : 0 0 48px 0;
    li {
      list-style : none;
      a {
        text-decoration : none;
        color: hsl(0, 0%, 100%);
        font-style: 16px;
        padding : 5px;
        display : inline-block;
        font-weight : 600;
        cursor: pointer;
        transition : .2s ease;
      }
      
      a:hover {
        transform : scale(1.1)
      }
    }
  }

  .facebook {
    background-image : url(${Facebook});
  }
  .youtube {
    background-image : url(${Youtube});
  }
  .twitter {
    background-image : url(${Twitter});
  }
  .pinterest {
    background-image : url(${Pinterest});
  }
  .instagram {
    background-image : url(${Instagram});
  }

  .icon-navigations {
    display : flex;
    justify-content: center;
    padding-bottom : 20px;
    span {
      visibility : hidden;
    }
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
  
  @media (min-width : 1000px) {
    .container {
      display : grid;
      grid-template-columns : repeat(3, 1fr);

      .footer-icons {
        display: flex;
        flex-direction : column;
        align-items : center;
        justify-content : space-between;
        img {
          width : 40%;
          height : 50%;
          margin : 0;
        }
      }
      .request {
        margin : 0 0 1rem 0;
      }
      .btn-container {
        p {
          color : #fff;
        }
      }
    }
  }
`

const TextNavigationStyles = styled.ul`
  display : grid;
  grid-template-columns : repeat(auto-fill, minmax(160px, 1fr));
  a:hover {
    background-color : hsl(233, 56%, 24%);
    color : hsl(0, 10%, 70%);
  }
  @media (max-width : 1000px) {
    display: flex;
    flex-direction : column;
    justify-content : center;
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer-icons">
          <img src={Logo} alt="logo" />
          <IconNavigation />
        </div>
        <TextNavigation />
        <div className="btn-container">
          <button
            type="button"
            className="request"
          >
            Request Invite
          </button>
          <p>&#x40; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </FooterStyles>
  )
}

const TextNavigation = () => {
  return <nav>
          <TextNavigationStyles className="anchor-texts">
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </TextNavigationStyles>
        </nav>
}

const IconNavigation = () => {
  return (
    <nav>
      <ul className="icon-navigations">
        <li>
          <a
            href="/facebook"
            className="icon facebook"
          >
            <span>facebook</span>
            </a>
        </li>
        <li>
          <a 
            href="/youtube"
            className="icon youtube"
          >
            <span>Youtube</span>
          </a>
          </li>
        <li>
          <a 
            href="/twitter"
            className="icon twitter"
          >
            <span>Twitter</span>
          </a>
          </li>
        <li>
          <a 
            href="/pinterest"
            className="icon pinterest"
          >
            <span>Pinterest</span>
          </a>
        </li>
        <li>
          <a 
            href="/instagram"
            className="icon instagram"
          >
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}