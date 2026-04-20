import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import './styles/global.css';

// Mount the portfolio app.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
