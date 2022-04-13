import { Fragment } from 'react';
import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const DefinedGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
  }

  h1 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const GlobalStyle = () => {
  return (
    <Fragment>
      <Reset />
      <DefinedGlobalStyle />
    </Fragment>
  );
};

export default GlobalStyle;
