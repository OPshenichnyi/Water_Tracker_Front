import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { GlobalStyle } from 'common/GlobalStyles';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
