import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../templates/page';
import Home from '../components/Home';

const Wrapper = styled(PageWrapper)`
  margin-bottom: 0;
`;

export default () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  )
}
