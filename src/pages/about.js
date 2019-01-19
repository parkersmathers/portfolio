import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { PageWrapper } from '../components/Page'
import Layout from '../components/Layout'

const About = styled(PageWrapper)`
  justify-content: flex-start;
  margin-bottom: 0;

  h3:last-of-type,
  p:first-of-type {
    margin: 0 4.5em;
  }

  p:last-of-type {
    margin-left: 6em;
  }

  a {
    color: inherit;

    &:hover {
      color: orangered;
    }
  }

  @media screen and (orientation: portrait) {
    h3:last-of-type {
      margin: 0 1em;
    }

    p:first-of-type,
    p:last-of-type {
      margin: 0 2em;
    }
  }
`

export default ({ data }) => {
  const email = data.site.siteMetadata.email
  return (
    <Layout>
      <About>
        <h3>about:</h3>
        <p>
          I am a web developer based in Marietta, GA. I build websites for
          poets, artists, nonprofits, and other industries.
        </p>
        <h3>contact:</h3>
        <p>
          <a href={`mailto:${ email }`}>{email}</a>
        </p>
      </About>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        email
      }
    }
  }
`
