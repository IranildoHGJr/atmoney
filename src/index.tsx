import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';// Pode renomiar com "as" exemplo : import { App as Batata } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
