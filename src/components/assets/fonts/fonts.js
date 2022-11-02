import { createGlobalStyle } from "styled-components";
import FiraMono from "../fonts/FiraMono-Medium.woff";
import NotoSans from "../fonts/NotoSans-Medium.woff";

export default createGlobalStyle`
@font-face {
  font-family: 'Fira Mono', monospace;
  src: local("FiraMono"), url(${FiraMono}) format('woff');
}

@font-face {
  font-family: 'Noto Sans KR', sans-serif;
  src: local("NotoSans"), url(${NotoSans}) format('woff');
}
`