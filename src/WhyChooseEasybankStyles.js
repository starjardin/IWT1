import styled from 'styled-components'

export const WhyChooseEasybankStyles = styled.div`
  background-color: hsl(220, 16%, 96%);
  text-align : center;
  padding : 5rem 1rem;
  .container {
    max-width : 1600px;
    margin : auto;
  }

  .heading {
    font-size : 27px;
  }

  .heading, .title{
    color : hsl(233, 26%, 24%);
    padding-block: 1rem;
  }

  img  {
    width: 3rem;
    height: 3rem;
    margin : auto;
  }

  .paragraph {
    color: hsl(233, 8%, 62%);
    margin : 0 0 2rem 0;
    font-size : 18px;
  }

  @media (min-width : 1000px) {
    text-align : start;
    .why-we-choose-container {
      display : flex;
      padding : 1.5rem;
      gap : 2rem;
      img {
        margin : 0;
      }
    }
  }
  .header {
    max-width : 545px;
  }
`
