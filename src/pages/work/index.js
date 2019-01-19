import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { PageWrapper } from '../../components/Page'
import Layout from '../../components/Layout'

const Wrapper = styled(PageWrapper)`
  justify-content: flex-start;
  position: relative;
  background: transparent;
`

const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid silver;
  padding: 1.5em 2em;
  text-decoration: none;

  @media (hover: hover) {
    &:hover {
      border-bottom-color: lawngreen;
    }
  }

  @media screen and (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
    border-bottom-color: lawngreen;
    height: auto;
  }
`

const Text = styled.div`
  flex: 1 0 0%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: initial;
  position: relative;

  @media screen and (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: 100%;
  }
`

const Title = styled.h2`
  font-weight: 500;
  z-index: 1;

  @media (hover: hover) {
    ${ StyledLink }:hover & {
      color: orangered;
    }
  }

  @media screen and (orientation: portrait) {
    color: orangered;
    font-size: 1em;
    white-space: nowrap;
  }
`

const Subtitle = styled.p`
  flex: 1 0 0%;
  color: lightgray;
  margin-left: -1.5em;

  ${ Text }:hover & {
    color: silver;
  }

  @media screen and (orientation: portrait) {
    hyphens: auto;
    margin-left: 0;
    word-break: break-all;
    word-wrap: break-word;
  }
`

export default ({ data }) => {
  const renderProjects = data.allMarkdownRemark.edges.map(({ node }) => (
    <StyledLink key={node.id} to={node.fields.slug}>
      <Text>
        <Title>{node.frontmatter.title}</Title>
        <Subtitle>{node.frontmatter.url}</Subtitle>
      </Text>
    </StyledLink>
  ))

  return (
    <Layout>
      <Wrapper>
        <h3>work:</h3>
        {renderProjects}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC }) {
      edges {
        node {
          id
          frontmatter {
            title
            url
            src
            tools
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
