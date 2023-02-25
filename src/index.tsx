/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
// связываем react и redux
import { Provider } from 'react-redux';
// создание store подключение thunk
import { createStore, applyMiddleware } from 'redux';
// redux синхронен,для асинхронных действий нужен thunk
import thunk from 'redux-thunk';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/app/app';
import { rootReducer } from './services/reducers';
import { composeEnhancers } from './utils/redux-devtools';
import { ALL_ORDERS_URL, USER_ORDERS_URL } from './constants/api-constants';
import { wsAllOrdersActions, wsUserOrdersActions } from './services/actions/ws';
import { socketMiddleware } from './middleware/socketMiddleware';
import reportWebVitals from './reportWebVitals';

const enhancer = composeEnhancers(applyMiddleware(
  thunk,
  socketMiddleware(ALL_ORDERS_URL, wsAllOrdersActions),
  socketMiddleware(USER_ORDERS_URL, wsUserOrdersActions),
));
// состояние приложения и методы для взаимодействия с ним
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Router basename="/stellar-burger">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
