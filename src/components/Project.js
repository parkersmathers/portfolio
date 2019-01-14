import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid silver;
  padding: 1.5em 2em;

  @media (hover: hover) {
    &:hover {
      border-bottom-color: lawngreen;
    }
  }

  @media screen and (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
    border-bottom-color: lawngreen;
    height: auto;
  }
`

const StyledLink = styled(Link)`
  flex: 1 0 0%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: initial;
  text-decoration: none;
  position: relative;

  @media screen and (orientation: portrait) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    width: 100%;
  }
`

const Title = styled.h2`
  font-weight: 500;
  z-index: 1;

  @media (hover: hover) {
    ${Item}:hover & {
      color: orangered;
    }
  }

  @media screen and (orientation: portrait) {
    color: orangered;
    font-size: 1em;
    white-space: nowrap;
  }
`

const Url = styled.p`
  flex: 1 0 0%;
  color: lightgray;
  margin-left: -1.5em;

  ${StyledLink}:hover & {
    color: silver;
  }

  @media screen and (orientation: portrait) {
    hyphens: auto;
    margin-left: 0;
    word-break: break-all;
    word-wrap: break-word;
  }
`

const SrcLink = styled.a`
  color: inherit;
  padding: 0.5em 0 0;
  text-align: right;

  &:hover {
    background: black;
    color: greenyellow;
  }

  @media screen and (orientation: portrait) {
    order: +1;
  }
`

const HoverBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 0;
  ${'' /* opacity: 0; */}
  opacity: 1;
  width: 100%;

  @media screen and (orientation: portrait) {
    height: auto;
    ${'' /* opacity: 1; */}
  }

  ${'' /* ${Item}:hover & {
    cursor: default;
    height: auto;
    opacity: 1;
  } */}

  ${'' /* img {
    width: 100%;
    max-width: 400px;
  } */}

  p {
    font-size: 0.75em;
  }
`

const Project = ({ project }) => (
  <Item>
    <StyledLink to={project.frontmatter.path}>
      <Title>{project.frontmatter.title}</Title>
      <Url>{project.frontmatter.url}</Url>
    </StyledLink>
    {/*
    {(project.frontmatter.src.length > 0) &&
      <SrcLink href={project.frontmatter.src}>github/</SrcLink>
    }
    <HoverBoard>
      <p>{project.frontmatter.tools}</p>
      <img src={project.frontmatter.selfie} />
    </HoverBoard> */}
  </Item>
)

export default Project
