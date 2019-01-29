import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import github from '../assets/github-32px.png'

const year = new Date().getFullYear()

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 1.5em 0.75em;
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
`

const P = styled.p`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75em;
  height: 100%;
  margin-left: 0.75em;
  text-decoration: none;
`

const Img = styled.img`
  height: auto;
  margin: 0 0.75em;
  width: 1.75em;
`

const Footer = ({ title, srcUrl }) => (
  <StyledFooter>
    <P>
      ©{year} {title}
    </P>
    <A href={srcUrl} target='_blank' rel='noopener'>
      <Img src={github} alt='source code' />
    </A>
  </StyledFooter>
)

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  srcUrl: PropTypes.string.isRequired
}

export default Footer
