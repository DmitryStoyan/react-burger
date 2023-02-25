import type { IWsActions, IWsUserActions } from '../services/types/ws';
import type { AppDispatch, RootState } from '../services/types';
import type { Middleware, MiddlewareAPI } from 'redux';

// Middleware отвечает за отправку и получение сообщений, а также за обработку событий закрытия соединения и ошибок.
// В качестве параметра мидлвар принимает wsUrl, который передаётся в процессе имплементации мидлвара в хранилище
export const socketMiddleware = (wsUrl: string, wsActions: IWsActions | IWsUserActions)
:Middleware => ((store: MiddlewareAPI<AppDispatch, RootState>) => {
  let socket: WebSocket | null = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type, payload } = action;
    const {
      onOpen, onClose, onError, onMessage,
    } = wsActions;

    if (type === (wsActions as IWsUserActions).wsInitWithToken) {
      // объект класса WebSocket
      socket = new WebSocket(payload);
    }

    if (type === (wsActions as IWsActions).wsInit) {
      socket = new WebSocket(wsUrl);
    }

    if (type === onClose) {
      socket?.close(1000, 'CLOSE_DONE');
    }

    // функция, которая вызывается при открытии сокета
    if (socket) {
      socket.onopen = (event) => {
        dispatch({ type: onOpen, payload: event });
      };
      // функция, которая вызывается при закрытии соединения
      socket.onclose = () => {
        dispatch({ type: onClose });
      };
      // функция, которая вызывается при ошибке соединения
      socket.onerror = (event) => {
        dispatch({ type: onError, payload: event });
      };
      // функция, которая вызывается при получении события от сервера. Само сообщение находится в свойстве data объекта event
      socket.onmessage = (event) => {
        const { data } = event;
        const parsedData = JSON.parse(data);
        const { success, ...restParsedData } = parsedData;

        dispatch({ type: onMessage, payload: restParsedData });
      };
    }
    next(action);
  };
}) as Middleware;
