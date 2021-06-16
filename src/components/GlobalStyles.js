import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    @font-face{
        font-family: 'InfinitySans-RegularA1';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/InfinitySans-RegularA1.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    };

    a{
        text-decoration:none;
        color:inherit;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: InfinitySans-RegularA1;
        font-size: 14px;
        background-color: #eee;
    }
`;

export default GlobalStyles;
