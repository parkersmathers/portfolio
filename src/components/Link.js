import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled.a`
  display: block;
  padding: 1em 0;
  text-decoration: none;

  p {
    color: red;
    text-align: right;
  }
`

const StyledGatsbyLink = styled(GatsbyLink)`
  display: block;
  text-decoration: none;
  border: none;
  outline: none;
  color: silver;
  min-height: 100%;
`

const Link = ({ children, to }) => {
  // Test assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <StyledGatsbyLink to={to}>
        {children}
      </StyledGatsbyLink>
    )
  }
  return (
    <StyledLink href={to} target='_blank' rel='noopener'>
      {children}
    </StyledLink>
  )
}

export default Link
