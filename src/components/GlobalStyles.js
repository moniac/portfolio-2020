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

  body.transition {
    @media (prefers-reduced-motion: no-preference) {
      transition: color 300ms ease-out, fill 300ms ease-out, stroke 300ms ease-out, background-color 300ms ease-out;
  }



  h1, h2, h3, h4, h5, h6, p {
    -webkit-font-smoothing: antialiased;
    scroll-margin-top: 4rem;
  }
`;

export default GlobalStyles;
