import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

let pjson = require('../package.json').name;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={`/${pjson}`}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
