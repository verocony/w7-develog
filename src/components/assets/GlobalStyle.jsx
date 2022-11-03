import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    body {
        background-color: #f8f9fa;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }

    ul li, ol li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    h3 {
        font-size: 1.3125rem;
    font-weight: 700;
    color: #212529;
    }
`

export default GlobalStyle;