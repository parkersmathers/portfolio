import React from 'react'
import styled from 'styled-components'
import github from '../assets/github-32px.png'

const year = new Date().getFullYear()

const Footer = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 1;

  @media screen and (orientation: portrait) {
    justify-content: center;
    max-width: 700px;
  }
`

const A = styled.a`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  padding: 1.5em 0.75em;

  @media screen and (orientation: portrait) {
    padding-left: 0;
    padding-right: 0;
    align-items: center;
  }
`

const P = styled.p`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75em;
  height: 100%;
  margin-left: 1.5em;
  text-decoration: none;

  @media screen and (orientation: portrait) {
    align-items: flex-end;
    margin-left: 0;
  }
`

const Img = styled.img`
  height: auto;
  margin: 0 0.75em;
  width: 1.75em;
`

export default ({ title, srcUrl }) => (
  <Footer>
    <P>
      ©{year} {title}
    </P>
    <A href={srcUrl} target='_blank' rel='noopener'>
      <Img src={github} alt='source code' />
    </A>
  </Footer>
)
