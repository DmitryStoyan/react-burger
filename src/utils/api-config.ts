/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import { BASE_URL } from '../constants/api-constants';

class Api {
  private _baseUrl: string;

  constructor(data: string) {
    this._baseUrl = data;
  }

  // вспомогательная функция проверки на ошибку возвращающая либо ОК ,либо ОШИБКУ
  _parseResponse = (res: Response) => (res.ok ? res.json() : res.json().then((err: any) => Promise.reject(err)));

  // Запрос ингредиентов
  takeIngredients() {
    return fetch(`${this._baseUrl}/ingredients`).then((res) => this._parseResponse(res));
  }

  // Отправка данных заказа
  postOrder(accessToken: string, order: string[]) {
    return fetch(`${this._baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: accessToken,
      },
      body: JSON.stringify({
        ingredients: order,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос данных заказа
  getOrderInfo(orderNumber: number) {
    return fetch(`${this._baseUrl}/orders/${orderNumber}`).then((res) => this._parseResponse(res));
  }

  // Запрос на восстановление пароля
  postEmail(email: string) {
    return fetch(`${this._baseUrl}/password-reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на обновление пароля
  postResetPassword(password: string, token: string) {
    return fetch(`${this._baseUrl}/password-reset/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        token,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на авторизацию
  postLogin(email: any, password: string) {
    return fetch(`${this._baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на регистрацию
  postRegister(email: string, name: string, password: string) {
    return fetch(`${this._baseUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос данных пользователя
  getUserData(token: string) {
    return fetch(`${this._baseUrl}/auth/user`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на редактирвоание данных пользователя
  patchUserData(token: string, name: string, email: string, password: string) {
    return fetch(`${this._baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: token,
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    }).then((res) => {
      this._parseResponse(res);
    });
  }

  // Запрос для обновления токена
  postRefreshToken(refreshToken: string) {
    return fetch(`${this._baseUrl}/auth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this._parseResponse(res));
  }

  // Запрос на выход из системы
  postLogout(refreshToken: string) {
    return fetch(`${this._baseUrl}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: refreshToken,
      }),
    }).then((res) => this._parseResponse(res));
  }
}

export default new Api(BASE_URL);
