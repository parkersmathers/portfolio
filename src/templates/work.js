import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image';
import styled from 'styled-components';
import { PageWrapper } from '../templates/page';

const WorkWrapper = styled(PageWrapper)`
  flex-direction: row;
  align-items: center;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1em;
  width: 100%;

  @media screen and (orientation: portrait) {
    flex-direction: column;
  }
`;

const LinkWrapper = styled.div`
  flex: 1 0 0%;
`;

const ExtLink = styled.a`
  color: red;
  display: block;
  padding: 1em 0;
  text-decoration: none;
  text-align: right;
`;

const Screenshot = styled(Img)`
  flex: 1 0 0%;
  height: 100%;
  max-width: 100%;
  width: 70vw;

  @media screen and (orientation: portrait) {
    width: calc(100vw - 2px);
  }
`;

const Template = ({ data }) => {
  const { markdownRemark: project } = data;
  return (
    <WorkWrapper>
      <Helmet title={`Work - ${project.frontmatter.title}`} />
      <InfoBox>
        <LinkWrapper>
          <ExtLink href={project.frontmatter.url}>
            <p>{project.frontmatter.title}</p>
            <p>{project.frontmatter.url}</p>
          </ExtLink>
          <ExtLink href={project.frontmatter.src}>
            {(project.frontmatter.src) && <p>GitHub</p>}
            <p style={{ flexWrap: `wrap` }}>tools: {project.frontmatter.tools}</p>
          </ExtLink>
        </LinkWrapper>
        <Screenshot
          sizes={project.frontmatter.image.childImageSharp.sizes}
          alt={project.frontmatter.title}
        />
      </InfoBox>
    </WorkWrapper>
  );
}

export default Template;

export const pageQuery = graphql`
  query WorkPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        url
        src
        tools
        image {
          childImageSharp {
            sizes(quality: 100) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
