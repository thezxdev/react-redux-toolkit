import React from 'react';
import ReactDOM from 'react-dom/client';
// Importación del Provider y nuestro store
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Proveer el store de manera global */}
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
)
