import React from 'react'
import Logo from "../images/logo.svg"
import Facebook from "../images/icon-facebook.svg"
import Youtube from "../images/icon-youtube.svg"
import Twitter from "../images/icon-twitter.svg"
import Instagram from "../images/icon-instagram.svg"
import Pinterest from "../images/icon-pinterest.svg"

export default function Footer() {
  return (
    <div>
      <img />
      <nav>
        <ul>
          <li><a href="/facebook">facebook</a></li>
          <li><a href="/youtube">Youtube</a></li>
          <li><a href="/twitter">Twitter</a></li>
          <li><a href="/pinterest">Pinterest</a></li>
          <li><a href="/instagram">Instagram</a></li>
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
    </div>
  )
}
