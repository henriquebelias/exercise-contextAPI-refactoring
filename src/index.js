import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CarProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <CarProvider>
      <App />
    </CarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
