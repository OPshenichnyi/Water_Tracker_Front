import { createGlobalStyle } from 'styled-components';
import variables from './Variables';
import Roboto from '../fonts/Roboto-Regular.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto', sans-serif;
  src: url(${Roboto}) format('woff2');
       
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${variables.blackPrimary};
  background-color: ${variables.whitePrimary};
  width: 100%;
  height: 100vh;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
a {
  text-decoration: none;
  color: currentColor;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  cursor: pointer;
  padding: 0;
  border: 0;
  outline: 0;
}
html {
  scroll-behavior: smooth;
}

[class="container"], [class$="main-container"] {
		width: 320px;
		padding: 0 20px;
		margin: 0 auto;
	}
	@media screen and (min-width: 768px) {
		[class="container"], [class$="main-container"] {
			width: 768px;
			padding: 0 32px;
		}
	}
	@media screen and (min-width: 1440px) {
		[class="container"], [class$="main-container"] {
			width: 1440px;
			padding: 0 112px;
		}
			}
`;
