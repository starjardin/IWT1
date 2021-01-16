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
  padding-top : 4rem;
  .icon {
    display : inline-block;
    width : 2rem;
    height : 2rem;
    background-repeat : no-repeat;
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
    span {
      visibility : hidden;
    }
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <img />
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
      <nav>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </nav>
      <div>
        <button type="button">Request Invite</button>
      </div>
    </FooterStyles>
  )
}
