import React from 'react'
import Page from '../components/Page'
import Alphabet from './Alphabet'
import styled from 'styled-components'

const Container = styled(Page)`
  /* flex: 1 0 0%; */
  /* display: flex; */
  /* flex-direction: column; */
    align-items: center;
    justify-content: center;
`

const Heading = styled.h2`
  font-size: 2.8vw;
  line-height: 9.5vh;
  z-index: 1;
  margin-top: calc(-7vw);
  width: 95vw;

  &::first-letter {
    font-size: 200%;
  }

  > span {
    color: rgb(150, 150, 150);
    font-size: 55%;
    font-style: italic;
  }

  @media screen and (orientation: portrait) {
    background: rgba(255, 255, 255, 0.6);
    font-size: 6vw;
    line-height: 6vh;
    margin-top: 0;
    margin-left: 0.5em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 60%;
    border: none;
    align-self: flex-start;
  }
`

const Home = () => (
  <Container>
    <Alphabet />
    <Heading>
      “To abstract is to draw out the essence of a matter. To abstract in art is
      to separate certain fundamentals from irrelevant material which surrounds
      them.”
      <span> — Ben Shahn</span>
    </Heading>
  </Container>
)

export default Home
