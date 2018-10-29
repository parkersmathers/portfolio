import React from 'react';
import Letter from './Letter';
import styled from 'styled-components';

const AZGrid = styled.div`
  border: .5em solid ghostwhite;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(9, 10vw);
  grid-auto-rows: 10vw;

  @media screen and (orientation: portrait) {
    grid-template-columns: repeat(3, 9vh);
    grid-auto-rows: 9vh;
    text-align: center;
  }
`;

const letters = Array.from(`abcdefghijklmnopqrstuvwxyz.`)
const Alphabet = ({ letters }) => ({
  render() {
    const cells = letters.map((letter) => {
      return (
        <Letter key={letter} letter={letter} />
      )
    })
    return (
      <AZGrid>{cells}</AZGrid>
    )
  }
})

export default Alphabet;
