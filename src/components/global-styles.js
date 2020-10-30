import { createGlobalStyle } from 'styled-components'




export const GlobalStyle = createGlobalStyle`
  * > *{
    box-sizing: border-box;
  }
    html,body{
        height:100%;
        width:100%;
        margin:0;
        padding:0;
        background:${props => props.theme.color.white};
        box-sizing: border-box;
    }
    a{
      text-decoration:none;
    }
    a:hover{
      text-decoration:none;
    }
    h1,h2,h3,h4{
      font-weight:700;
    }
    h5,h6{
      font-weight:400;
    }
`