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
  }
`

const Panel = styled.div`
  flex: 4 0 0%;
  display: flex;
  justify-content: space-around;
`

const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ImgBox = styled(Panel)`
  flex: 5 0 0%;
  display: block;
  height: 100%;
  max-width: 100%;
  width: 70vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media screen and (orientation: portrait) {
    width: calc(100vw - 2px);
    flex: 7 0 0%;
  }
`

// const Screenshot = props => {
//   let normalizedProps = props
//   if (props.fluid && props.fluid.presentationWidth) {
//     normalizedProps = {
//       ...props,
//       style: {
//         ...(props.style || {}),
//         maxWidth: props.fluid.presentationWidth,
//         margin: "0 auto", // Used to center the image
//       },
//     }
//   }

//   return <Img {...normalizedProps} />
// }

export default ({ data }) => {
  const project = data.markdownRemark
  return (
    <Layout>
      <Wrapper>
        <Project>
          <Panel>
            <Flex>
              <Link to='/work'>&lt; Work</Link>
            </Flex>
            <Flex>
              <Link to={project.frontmatter.url}>
                <p>{project.frontmatter.title}</p>
                <p>{project.frontmatter.url}</p>
              </Link>
              <Link to={project.frontmatter.src}>
                {project.frontmatter.src && <p>GitHub</p>}
                <p>tools: {project.frontmatter.tools}</p>
              </Link>
            </Flex>
          </Panel>
          <ImgBox>
            <Img
              fluid={project.frontmatter.image.childImageSharp.fluid}
              alt={project.frontmatter.title}
            />
          </ImgBox>
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
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
