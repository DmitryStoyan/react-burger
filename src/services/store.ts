// создание store подключение thunk
import { createStore, applyMiddleware } from 'redux';
// redux синхронен,для асинхронных действий нужен thunk
import thunk from 'redux-thunk';

import { composeEnhancers } from '../utils/redux-devtools';
import { ALL_ORDERS_URL, USER_ORDERS_URL } from '../constants/api-constants';
import { socketMiddleware } from '../middleware/socketMiddleware';

import { wsAllOrdersActions, wsUserOrdersActions } from './actions/ws';
import { rootReducer } from './reducers';

const enhancer = composeEnhancers(applyMiddleware(
  thunk,
  socketMiddleware(ALL_ORDERS_URL, wsAllOrdersActions),
  socketMiddleware(USER_ORDERS_URL, wsUserOrdersActions),
));
// состояние приложения и методы для взаимодействия с ним
export const store = createStore(rootReducer, enhancer);
