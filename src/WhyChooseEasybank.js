import React from 'react'
import OnlineBankingImg from '../images/icon-online.svg'
import SimpleBudgetingImg from '../images/icon-budgeting.svg'
import FastOnboardingImg from '../images/icon-onboarding.svg'
import OpenApiImg from '../images/icon-api.svg'
import { WhyChooseEasybankStyles } from './WhyChooseEasybankStyles'

const onlineBanking = {
  img: OnlineBankingImg,
  title : `Online Banking`,
  description : `Our modern web and mobile applications allow you to keep track of your finacies wherever you are in the world`
}

const simpleBudgeting = {
  img: SimpleBudgetingImg,
  title : `Simple Budgeting`,
  description : `See exactly where your money goes each month. Recieve notifications when you're close to your hitting limits`
}
const fastOnBoarding = {
  img: FastOnboardingImg,
  title : `Fast Onboarding`,
  description : `We don't do branches. Open your account in minutes online and start taking control of your finaces right away.`
}
const openApi = {
  img: OpenApiImg,
  title : `Open API`,
  description : `Manage your savings investments, pension, and much more from one account. Tracking your money has never been easier`
}

export default function WhyChooseEasybank() {

  function ResonsToChooseEasybank (params) {
    return <div>
      <img src={ params.img }/>
      <h4 className="title">{ params.title }</h4>
      <p className="paragraph">{ params.description }</p>
    </div>
  }

  return (
    <WhyChooseEasybankStyles>
      <header className="header">
        <h3 className="heading">Why choose Easybank</h3>
        <p className="paragraph">
          We leverage Open Banking to turn your bank accoutn into finacial hub. Control your finacise loke never before.
        </p>
      </header>
      <div className="why-we-choose-container">
        {ResonsToChooseEasybank(onlineBanking)}
        {ResonsToChooseEasybank(simpleBudgeting)}
        {ResonsToChooseEasybank(fastOnBoarding)}
        {ResonsToChooseEasybank(openApi)}
      </div>
    </WhyChooseEasybankStyles>
  )
}