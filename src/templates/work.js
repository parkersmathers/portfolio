import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { PageWrapper } from '../components/Page'
import Link from '../components/Link'

const Wrapper = styled(PageWrapper)`
  @media screen and (orientation: portrait) {
    flex-direction: column-reverse;

    h3 {
      padding-bottom: 2em;
    }
  }
`

const Row = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: center;

  @media screen and (orientation: portrait) {
    align-items: stretch;
  }
`

const Project = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2em;
  width: 100%;
  border-bottom: 1px solid limegreen;

  @media screen and (orientation: portrait) {
    flex-direction: column-reverse;
    border-bottom-color: transparent;
  }
`

const Panel = styled.div`
  flex: 4 0 0%;
  display: flex;
  justify-content: space-around;

  @media screen and (orientation: portrait) {
    flex-direction: column-reverse;
  }
`

const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (orientation: portrait) {
    flex: 1 0 auto;
  }
`

const Image = styled(Img)`
  flex: 5 0 0%;
  max-width: 100%;
  width: 70vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 1px;

  img {
    object-fit: contain !important;
  }

  @media screen and (orientation: portrait) {
    width: calc(100vw - 2px);
    margin-top: 2vh;

    img {
      width: 98% !important;
      margin: 0 auto !important;
      right: 0 !important;
    }
  }
`

export default ({ data }) => {
  const project = data.markdownRemark
  return (
    <Layout>
      <Wrapper>
        <h3>
          <Link to='/work'>&lt; work</Link>
        </h3>
        <Row>
          <Project>
            <Panel>
              <Flex>
                <Link to={project.frontmatter.url}>
                  <p>{project.frontmatter.title}</p>
                  <p>{project.frontmatter.url}</p>
                </Link>
                <Link to={project.frontmatter.src}>
                  <p>
                    {project.frontmatter.tools}
                    {project.frontmatter.src && <span> ...</span>}
                  </p>
                </Link>
              </Flex>
            </Panel>
            <Image
              fluid={project.frontmatter.image.childImageSharp.fluid}
              alt={project.frontmatter.title}
            />
          </Project>
        </Row>
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
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
