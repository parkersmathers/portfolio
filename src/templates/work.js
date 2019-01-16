import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { PageWrapper } from './page'
import Link from '../components/Link'

const Wrapper = styled(PageWrapper)`
  flex-direction: row;
  align-items: center;
`

const Project = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2em;
  width: 100%;
  border-bottom: 1px solid limegreen;

  @media screen and (orientation: portrait) {
    flex-direction: column;
  }
`

const Panel = styled.div`
  flex: 4 0 0%;
  display: flex;
  justify-content: space-around;
`

const FlexCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Screenshot = styled(Img)`
  flex: 5 0 0%;
  height: 100%;
  max-width: 100%;
  width: 70vw;

  @media screen and (orientation: portrait) {
    width: calc(100vw - 2px);
  }
`

export default ({ data }) => {
  const project = data.markdownRemark
  return (
    <Layout>
      <Wrapper>
        <Project>
          <Panel>
            <FlexCol>
              <Link to='/'>home</Link>
            </FlexCol>
            <FlexCol>
              <Link href={project.frontmatter.url}>
                <p>{project.frontmatter.title}</p>
                <p>{project.frontmatter.url}</p>
              </Link>
              <Link href={project.frontmatter.src}>
                {project.frontmatter.src && <p>GitHub</p>}
                <p>tools: {project.frontmatter.tools}</p>
              </Link>
            </FlexCol>
          </Panel>
          <Screenshot
            fluid={project.frontmatter.image.childImageSharp.fluid}
            alt={project.frontmatter.title}
          />
        </Project>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        url
        src
        tools
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
