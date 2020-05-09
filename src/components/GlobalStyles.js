import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    font-family: Futura, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
  }

  h1, h2, h3, h4, h5, h6, p {
    -webkit-font-smoothing: antialiased;

  }
`;

export default GlobalStyles;