import React from 'react'
import styled from 'styled-components'
// import { Link } from 'gatsby'

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
    align-self: flex-end;
  }
`

const Letter = styled.div`
  /* > span,
  > ${Link} { */
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
  /* } */

  /* > ${Link} {
    font-size: 2em;
    border-bottom: 1px solid lawngreen;
  } */
`

const letters = Array.from(`abcdefghijklmnopqrstuvwxyz.`)

// const A = `/work/a-world-of-difference`
// const F = `Fluora Studio`
// const J = `Jeff Alessandrelli`
// const T = `Trey Moody`
// const W = `William Gentry`

const renderLetters = letters.map(letter => (
  <Letter key={letter} to={letter}>{letter}</Letter>
))

const Alphabet = () => (
  <Grid>
    {renderLetters}
  </Grid>
)

export default Alphabet
