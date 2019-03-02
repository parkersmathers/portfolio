import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import Layout from '../components/Layout'
import Home from '../components/Home'

const Wrapper = styled(Page)`
  margin-bottom: 0;
`

export default () => {
  return (
    <Layout>
      <Wrapper>
        <Home />
      </Wrapper>
    </Layout>
  )
}
