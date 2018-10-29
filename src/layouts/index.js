import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';
import styled from 'styled-components';

const TemplateWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  background: white;
`;

const Row = styled.div`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  width: 100%;
  position: relative;
`;

const NavPanel = styled(Link)`
  background: transparent;
  border-radius: 50%;
  border: 1px solid transparent;
  margin: 1vw;
  height: 20vw;
  width: 20vw;
  position: absolute;
  right: 0;
  z-index: 1;

  @media (hover: hover) {
    &:hover {
      background: pink;
    }
  }

  @media screen and (orientation: portrait) {
    border: 1px solid pink;
  }
`;

const Template = ({ children, data }) => {
  const { title, srcUrl } = data.site.siteMetadata
  return (
    <TemplateWrapper>
      <Header title={title} />
      <Row>
        <NavPanel to="/work/"></NavPanel>
        {children()}
      </Row>
      <Footer title={title} srcUrl={srcUrl} />
    </TemplateWrapper>
  )
}

export default Template;

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
        srcUrl
      }
    }
  }
`;
