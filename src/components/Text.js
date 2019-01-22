import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  font-size: 2.8vw;
  line-height: 9.5vh;
  margin-top: calc(-9vw);
  width: 95vw;
  z-index: 1;

  &::first-letter {
    font-size: 200%;
  }

  > span {
    color: rgba(0, 0, 0, 0.8);
    display: inline-block;
    font-size: 55%;
  }

  @media screen and (orientation: portrait) {
    background: rgba(255, 255, 255, 0.6);
    font-size: 5vw;
    line-height: 6.8vh;
    margin-top: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 90vw;
    border: none;
  }
`

const Text = () => {
  return (
    <>
      <P>
        “To abstract is to draw out the essence of a matter. To abstract in art
        is to separate certain fundamentals from irrelevant material which
        surrounds them.” <span> — Ben Shahn</span>
      </P>
    </>
  )
}

export default Text
