import styled from 'styled-components'

const Page = styled.main`
  flex: 1 0 0%;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 15px;
  height: 100%;
  min-height: 100%;

  h3 {
    font-weight: 600;
    font-style: italic;
    margin-left: 3em;
    padding: 2em 0 1em;
  }

  @media screen and (orientation: portrait) {
    max-width: 700px;
    border-color: transparent;

    h3 {
      font-weight: normal;
      margin: 0 1em;
      padding: 1.5em 0 0.5em;
    }
  }
`

export default Page
