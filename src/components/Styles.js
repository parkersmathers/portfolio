import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body, html {
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font: 14px/1.5 monospace;
  }

  body, main, section, article, header, footer, div, ul, li, p, a, h1, h2, h3 {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  ul, li {
    list-style: none;
  }
`
