import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --background: #f9f9f9;
    --primary-color: #0f52ba;
    --secondary-color: #ffffff;
    --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body, #__next {
    background: var(--background);
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    height: calc(100vh + 2rem);
    width: 100vw;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    & > div {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

  }

  main {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    margin-bottom: 10rem;
    margin-top: 7.25rem;
    padding: 0 1rem;
    flex: 1;
  }

  footer {
    height: 2rem;
    font-size: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background:  #EEEEEE;
    font-weight: 400;
  }

`;
