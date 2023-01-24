import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #e4f2f2;
  }
  button{
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;