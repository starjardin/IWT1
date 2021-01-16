import styled from 'styled-components'

export const LatestArticleStyles = styled.div`
  background-color : hsl(0, 0%, 98%);
  padding : 1.5rem;
  .card {
    background-color : hsl(0, 0%, 100%);
    margin-bottom : 1.5rem;
    .last-article-img {
      margin-bottom : 2rem;
    }

    div {
      padding : 2rem;
      .card-heading {
        font-size : 27px;
        padding : 1rem 0;
      }
      .card-paragraph {
        margin-bottom : 2rem;
      }
    }
  }
`