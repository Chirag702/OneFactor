import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tabler/dist/css/tabler.min.css'; // Adjust the path as needed
import { BrowserRouter, HashRouter } from 'react-router-dom';




// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root and render the App
const root = ReactDOM.createRoot(rootElement);

root.render(
  <HashRouter>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    <App />
  </HashRouter>
);
