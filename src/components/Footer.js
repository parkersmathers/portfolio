import React from 'react';

import styled from 'styled-components';
import { padding } from './Header';
import githubLogo from './images/github-32px.png';

const year = new Date().getFullYear();

const marginLeft = padding.split(' ')[1];

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: ${padding};
  width: 100%;
  z-index: 1;

  @media screen and (orientation: portrait) {
    justify-content: center;
  }
`;

const A = styled.a`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-decoration: none;
`;

const P = styled.p`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: .75em;
  height: 100%;
  margin-left: ${marginLeft};
  text-decoration: none;
`;

const Img = styled.img`
  height: auto;
  margin: 0 ${marginLeft};
  width: 1.75em;
`;

const Footer = ({ title, srcUrl }) => (
  <FooterWrapper>
    <P>©{year} {title}</P>
    <A href={srcUrl}><Img src={githubLogo}/></A>
  </FooterWrapper>
)

export default Footer;
