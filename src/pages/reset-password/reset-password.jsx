/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword, setForgotPasswordState } from "../../services/actions/user";
import styles from './styles.module.css';

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const isPasswordForgot = useSelector((store) => store.userData.isPasswordForgot);
  // возвращает новое местоположение при каждом изменении URL
  const location = useLocation();
  const userData = useSelector((store) => store.userData.userData);

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !code) {
      return;
    }

    dispatch(resetPassword(password, code));
    dispatch(setForgotPasswordState(false));
    setCode("");
    setPassword("");
    history.push('/');
  };

  useEffect(() => {
    if (userData) {
      (location.state && location.state.previousLocation)
        ? history.push(location.state.previousLocation.pathname)
        : history.push('/');
    } else {
      !isPasswordForgot && history.push('/forgot-password');
    }
  }, [userData, history, location, isPasswordForgot]);

  return (
    <main className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1
          className={`${styles.title} text text_type_main-medium mb-6`}
        >
          Восстановление пароля
        </h1>
        <PasswordInput
          onChange={onPasswordChange}
          value={password}
          name="password"
          placeholder="Введите новый пароль"
        />
        <div className="mb-6 mt-6">
          <Input
            type="text"
            placeholder="Введите код из письма"
            onChange={onCodeChange}
            value={code}
            name="e-mail"
            error={false}
            ref={inputRef}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <Button disabled={!(password && code)} type="primary" size="medium">
          Сохранить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Вспомнили пароль? "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </main>
  );
};
