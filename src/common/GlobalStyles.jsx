import { createGlobalStyle } from 'styled-components';
import variables from './Variables';
import Roboto from '../fonts/Roboto.woff2';
import RobotoBold from '../fonts/Roboto-Bold.woff2';
import RobotoMedium from '../fonts/Roboto-Medium.woff2';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${Roboto}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src: url(${RobotoMedium}) format('woff2');
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  src: url(${RobotoBold}) format('woff2');
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", 
			"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
			"Helvetica Neue", sans-serif;
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
  font-family: inherit;
}
html {
  scroll-behavior: smooth;
}

@media screen and (max-width: 767px) {
  [class="container"], [class$="main-container"] {
		max-width: 320px;
		padding: 0 20px;
		margin: 0 auto;
	}
	}


	@media screen and (min-width: 768px) {
		[class="container"], [class$="main-container"] {
			width: 768px;
			padding: 0 32px;
      margin: 0 auto;
		}
	}
	@media screen and (min-width: 1440px) {
		[class="container"], [class$="main-container"] {
			width: 1440px;
			padding: 0 112px;
		}
			}
`;
