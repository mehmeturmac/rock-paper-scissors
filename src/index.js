import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Contexts
import { MainProvider } from './contexts/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainProvider>
    <App />
  </MainProvider>
);
