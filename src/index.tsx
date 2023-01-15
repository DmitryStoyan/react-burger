import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app.jsx';
import { Provider } from 'react-redux'
import {store} from './services/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
