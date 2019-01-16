import React from 'react'
import Letter from './Letter'
import styled from 'styled-components'

const AZGrid = styled.div`
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

const Alphabet = () => ({
  render() {
    const letters = Array.from(`abcdefghijklmnopqrstuvwxyz.`)
    return (
      <AZGrid>
        {letters.map(letter => (
          <Letter key={letter} letter={letter} />
        ))}
      </AZGrid>
    )
  }
})

export default Alphabet
