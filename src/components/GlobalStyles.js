import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    background: var(--color-background);
    color: var(--color-text);
  }

  h1, h2, h3, h4, h5, h6, p {
    -webkit-font-smoothing: antialiased;
    scroll-margin-top: 4rem;
  }
`;

export default GlobalStyles;
