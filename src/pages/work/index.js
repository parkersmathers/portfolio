import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { PageWrapper } from '../../templates/page'
import Layout from '../../components/Layout'
import Project from '../../components/Project'

const Wrapper = styled(PageWrapper)`
  justify-content: flex-start;
  position: relative;
  background: transparent;
`

const Index = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark
  
  const renderProjects = projects
    .filter(project => project.node.frontmatter.title.length > 0)
    .map(({ node: project }) => <Project key={project.id} project={project} />)

  return (
    <Layout>
      <Wrapper>
        <h3>work:</h3>
        {renderProjects}
      </Wrapper>
    </Layout>
  )
}

export default Index

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
`
