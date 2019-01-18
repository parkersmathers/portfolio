import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  width: 100%;

  @media screen and (orientation: portrait) {
    align-items: center;

    &:first-child {
      text-align: center;
    }
  }
`

const Title = styled.div`
  flex: 1 0 0%;
  padding: 1.5em .75em;
  margin-left: 0.75em;
  width: 100%;

  @media screen and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
  }
`

const Nav = styled(Title)`
  width: calc(100% - 3em);
`

export default ({ title }) => {
  return (
    <Header>
      <Title>
        <Link to='/'>{title}</Link>
      </Title>
      <Nav>
        <div>
          <Link to='/work'>work</Link>
          <span>/</span>
          <Link to='/about'>about</Link>
        </div>
      </Nav>
    </Header>
  )
}

