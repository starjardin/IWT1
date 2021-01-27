import React from 'react'

import Currency from '../images/image-currency.jpg'
import Confetti from '../images/image-confetti.jpg'
import Plane from '../images/image-plane.jpg'
import Restaurant from '../images/image-restaurant.jpg'
import { LatestArticleStyles } from "./LatestArticleStyles"

const currency = {
  img: Currency,
  postedBy: `Claire Robinson`,
  title: `Receive money in any currency with no fees`,
  paragraph : `Latest Articles By   The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single … `
}

const restaurant = {
  img: Restaurant,
  postedBy: `By Wilson Hutton`,
  paragraph : ` Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …`,
  title : `Treat yourself without worrying about money`
}

const plane = {
  img: Plane,
  title: `Take your Easybank card wherever you go`,
  paragraph: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … `,
  postedBy: `By Wilson Hutton`
}

const confetti = {
  img: Confetti,
  title: `Our invite-only Beta accounts are now live!`,
  postedBy: `By Claire Robinson`,
  paragraph: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..`
}
export default function LastArticle() {

  function LastArticleFunc(params) {
    return <div className="card">
      <img src={params.img} className="last-article-img" />
      <div>
        <small>{ params.postedBy } </small>
        <h4 className="card-heading">{ params.title }</h4>
        <p className="card-paragraph">{ params.paragraph }</p>
      </div>
    </div>
  }

  return (
    <>
      {/* <h2>Latest Articles</h2> */}
      <LatestArticleStyles>
        <div className="container">
          {LastArticleFunc(currency)} 
          {LastArticleFunc(restaurant)} 
          {LastArticleFunc(plane)} 
          {LastArticleFunc(confetti)} 
        </div>
      </LatestArticleStyles>
    </>
  )
}
