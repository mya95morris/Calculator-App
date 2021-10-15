import styled, {
  createGlobalStyle
} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        --desktop: 1440px;
        --font: 'Spartan', sans-serif;
        --fontsizenum: 32px;
        --mobile: 375px;
        box-sizing: border-box;
    }
    *, *:before, *:after {box-sizing: inherit;}
    body {
        font-family: 'Spartan', sans-serif;
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, p, ul, li {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    button {
      border: none;
      box-shadow: none;
      outline: none;
    }
`;

export default function Page({
  children
}) {
  return ( <
    >
    <
    GlobalStyles / >
    <
    div > {
      children
    } < /div> < /
    >
  );
}
