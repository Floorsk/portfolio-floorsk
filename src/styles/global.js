import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #FFF;
        font-family: 'Roboto';
        color: #161617;
    }
`;

export default GlobalStyle