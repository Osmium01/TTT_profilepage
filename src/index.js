// src/index.js or src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faHeart, faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faStar, faHeart, faThumbsUp, faEye);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
