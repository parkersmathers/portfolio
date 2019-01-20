import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: white;
`

const Content = styled.div`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100%;
  width: 100%;
  position: relative;

  @media screen and (orientation: portrait) {
    max-width: 700px;
  }
`

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            srcUrl
          }
        }
      }
    `}
    render={data => {
      const { title, srcUrl } = data.site.siteMetadata
      return (
        <Layout>
          <Header title={title} />
          <Content>{children}</Content>
          <Footer title={title} srcUrl={srcUrl} />
        </Layout>
      )
    }}
  />
)
