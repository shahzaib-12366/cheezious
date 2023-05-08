import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BackdropProvider } from 'use-backdrop';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BackdropProvider>
    <App />
  </BackdropProvider>
  </React.StrictMode>
);


