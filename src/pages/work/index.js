import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from '../../templates/page';
import Project from '../../components/Project';

const Wrapper = styled(PageWrapper)`
  justify-content: flex-start;
  position: relative;
  background: transparent;
`;

const Index = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;
  return (
    <Wrapper>
      <h3>work:</h3>
      {projects
        .filter(project => project.node.frontmatter.title.length > 0)
        .map(({ node: project }) => {
          return (
            <Project key={project.id} project={project} />
          );
        })}
    </Wrapper>
  );
}

export default Index;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            url
            src
            tools
          }
        }
      }
    }
  }
`;
