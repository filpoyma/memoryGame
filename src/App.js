import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Game from './containers/Game';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
  font-family: 'Comfortaa', cursive;
}
`;

const App = () => (
  <>
    <GlobalStyle />
    <Game />
  </>
);

export default App;
