import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  width: 100%;

  @media screen and (orientation: portrait) {
    /* align-items: center; */

    &:first-child {
      text-align: center;
    }
  }
`

const Title = styled.h1`
  font-size: inherit;
  display: inline-block;
  width: 50%;
  
  @media screen and (orientation: portrait) {
    width: auto;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0; */
  }
`

const Nav = styled.nav`
  display: inline-block;
  width: 50%;

  li {
    display: inline-block;
  }
`

const HeaderLink = styled(Link)`
  display: inline-block;
  padding: 1.75em 1.5em 1.25em;

  &:hover {
    color: #ff0000;
  }

  @media screen and (orientation: portrait) {
    padding-bottom: 0.5em;
    width: auto;
    /* background-color: rgb(225, 255, 225); */
    /* margin-top: 1em; */
    /* border-radius: 1em 1em 0 0; */
    /* padding: 1em 1.5em 0.5em; */
  }
`

export default ({ title }) => {
  return (
    <Header>
      <Title>
        <HeaderLink to='/'>{title}</HeaderLink>
      </Title>
      <Nav>
        <ul>
          <li>
            <HeaderLink to='/work'>work</HeaderLink>
            <span>/</span>
          </li>
          <li><HeaderLink to='/about'>about</HeaderLink></li>
        </ul>
      </Nav>
    </Header>
  )
}
