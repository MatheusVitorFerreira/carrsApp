import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;   
    background-color: #161c2bff;
    font-family: 'Arial', sans-serif;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export default GlobalStyle;
