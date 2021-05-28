import React, { Fragment } from "react"
import Helmet from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"
import Logo from "../images/logo.svg"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #212a39;
    color: #f3fcff;
    margin: 0;
    position: relative;
    padding: 2rem;
  }
`

const Body = styled.main`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 90%;

  h2 {
    font-size: 2.5rem;
    font-family: 'Arvo', serif;
    margin-bottom: 0;
    line-height: 3.5rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-family: 'Raleway', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  strong {
    color: #ffc000;
  }
`

const SvgLogo = styled(Logo)`
  width: 100%;
  max-width: 300px;

  @media screen and (max-height: 360px) {
    max-width: 200px;
  }
`

const IndexPage = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Helmet>
        <title>Mauritius Functional Programmers Community</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,400;0,700;0,900;1,400&family=Arvo:ital,wght@0,700;1,700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Body>
        <SvgLogo />
        <h2>Hello World</h2>
        <p>We are the Mauritius <strong>Fun</strong>ctional <strong>Pro</strong>grammers Community</p>
      </Body>
    </Fragment> )
}

export default IndexPage
