import React from 'https://esm.sh/react';
import ReactDOM from 'https://esm.sh/react-dom';
import { App } from './App.js';

window.React = React;

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
