import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
  border: 0.5em solid ghostwhite;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(9, 10vw);
  grid-auto-rows: 10vw;

  @media screen and (orientation: portrait) {
    grid-template-columns: repeat(3, 9vh);
    grid-auto-rows: 9vh;
    text-align: center;
  }
`

const Letter = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (orientation: portrait) {
    justify-content: center;
    margin: 0.5em;
    border: 1px outset green;
    border-radius: 50%;
  }
`

const letters = Array.from(`abcdefghijklmnopqrstuvwxyz.`)

const Alphabet = () => (
  <Grid>
    {letters.map(letter => (
      <Letter key={letter}>{letter}</Letter>
    ))}
  </Grid>
)

export default Alphabet
