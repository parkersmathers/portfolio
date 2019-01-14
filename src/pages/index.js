import React from 'react'
import './index.css'
import styled from 'styled-components'
import { PageWrapper } from '../templates/page'
import Layout from '../components/Layout'
import Home from '../components/Home'

const Wrapper = styled(PageWrapper)`
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
