import React from 'react';
import styled from 'styled-components';

const LetterStyle = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (orientation: portrait) {
    justify-content: center;
    margin: .5em;
    border: 1px outset green;
    border-radius: 50%;
  }
`;

const Letter = ({ letter }) => (
  <LetterStyle>{letter}</LetterStyle>
);

export default Letter;
