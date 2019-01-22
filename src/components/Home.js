import React from 'react'
import Alphabet from './Alphabet'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Home = () => (
  <Container>
    <Alphabet />
  </Container>
)

export default Home
