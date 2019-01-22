import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { PageWrapper } from '../components/Page'

const Wrapper = styled(PageWrapper)`
  @media screen and (orientation: portrait) {
    flex-direction: column-reverse;
  }
`

const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
    padding: 0 1em;
  }
`

const Panel = styled.div`
  flex: 3 0 0%;
  display: flex;
  flex-direction: column;
`

const Image = styled(Img)`
  flex: 5 0 0%;
  max-width: 100%;
  width: 70vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 1px 0;

  img {
    object-fit: contain !important;
  }

  @media screen and (orientation: portrait) {
    width: calc(100vw - 2px);
    margin-top: 5vh;

    img {
      width: 98% !important;
      margin: 0 auto !important;
      right: 0 !important;
    }
  }
`

const Navbar = styled.nav`
  display: flex;
  align-items: space-between;
  justify-content: center;

  @media screen and (orientation: portrait) {
    justify-content: center;
    max-width: 700px;
  }
`

const Prev = styled.p`
  border: 1px solid red;
  border-radius: 50%;
  height: 1em;
  width: 1em;

  @media screen and (orientation: portrait) {
    height: 2em;
    width: 2em;
  }
`

const Next = styled(Prev)`
  float: right;
`

const Direction = styled(Link)`
  font-size: 1.25em;
  display: block;
  padding: 1em;

  &:hover {
    ${Prev} {
      background-color: pink;
    }
    ${Next} {
      background-color: silver;
    }
  }
`

const A = styled.a`
  display: block;
  padding: 1em 0;
  text-decoration: none;

  p,
  small {
    color: red;
    text-align: right;
    display: block;
  }
`

export default ({ data, pageContext }) => {
  const project = data.markdownRemark
  const { previous, next } = pageContext
  console.log(pageContext)
  return (
    <Layout>
      <Wrapper>
        <Navbar>
          <Box>
            {previous && (
              <Direction to={previous.fields.slug}>
                <Prev />
              </Direction>
            )}
          </Box>
          <Box>
            {next && (
              <Direction to={next.fields.slug}>
                <Next />
              </Direction>
            )}
          </Box>
        </Navbar>
        <Box>
          <Project>
            <Panel>
              <A href={project.frontmatter.url} target='_blank' rel='noopener'>
                <p>{project.frontmatter.title}</p>
                <small>{project.frontmatter.url}</small>
              </A>
              <A href={project.frontmatter.src} target='_blank' rel='noopener'>
                <p>{project.frontmatter.tools}</p>
                <small>{project.frontmatter.src}</small>
              </A>
            </Panel>
            <Image
              fluid={project.frontmatter.image.childImageSharp.fluid}
              alt={project.frontmatter.title}
            />
          </Project>
        </Box>
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
