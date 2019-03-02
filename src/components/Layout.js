import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import Page from '../components/Page'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import Styles from './Styles'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #fff;
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
        <>
          <Styles />
          <Layout>
            <Header title={title} />
            {/* <Page> */}
            {children}
            {/* </Page> */}
            <Footer title={title} srcUrl={srcUrl} />
          </Layout>
        </>
      )
    }}
  />
)
