import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
