import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
    color: inherit;
    appearance: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }

  img,
  svg {
    vertical-align: bottom;
  }

  body {
    color: #374151;
    word-break: keep-all;
    font-family: "Pretendard", sans-serif;
  }
`;

export default GlobalStyle;
