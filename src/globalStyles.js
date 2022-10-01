import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body,html{
       background-color:${(props) => props.theme.primarybg};
       font-family: 'Nunito Sans', sans-serif;
       color: ${(props) => props.theme.text};
    }
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    a{
        cursor:pointer;
        text-decoration:none;
        color:${(props) => props.theme.text};
    }
    
`;

export default GlobalStyle;
