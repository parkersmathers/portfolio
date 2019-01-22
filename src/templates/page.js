import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.section`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 15px;

  h3 {
    font-weight: 600;
    font-style: italic;
    margin-left: 3em;
    padding: 2em 0 1em;
  }

  @media screen and (orientation: portrait) {
    h3 {
      font-weight: normal;
      margin: 0 1em;
      padding: 1.5em 0 .5em;
    }
  }
`;

const Page = ({ children }) => (
  <PageWrapper>{children}</PageWrapper>
)

export default Page;
export { PageWrapper };