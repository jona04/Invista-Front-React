import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');


    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    html, body, #root{
        min-height:100%;
    }

    body{
        background:#fff;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button{
        color: #222;
        font-size: 14px;
        font-family: Roboto, sans-serif;
    }


`;
