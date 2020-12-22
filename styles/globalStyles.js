import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
        'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
        monospace, serif;
    }
    body {
        margin: 0;
        padding: 25px 50px;
        background-color: #eeeeee;
    }
    p {
        font-size: 14px;
        line-height: 24px;
    }
`;

export default GlobalStyle;
