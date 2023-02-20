/* eslint-disable no-undef */
import { compose } from 'redux';
// Мы проверяем, что расширение Redux DevTools есть, а глобальный window вообще существует — это важно, например при SSR.
// Если всё хорошо, мы используем расширение. В противном случае — вызовем функцию compose
export const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
