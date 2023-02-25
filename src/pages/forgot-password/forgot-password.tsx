import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from '../../../src/utils/hooks';

import { forgotPassword, setForgotPasswordState } from '../../services/actions/export';

import styles from './styles.module.css';

import type { FormEvent, ChangeEvent } from 'react';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      return;
    }
    dispatch(forgotPassword(email));
    dispatch(setForgotPasswordState(true));
    setEmail('');
    history.push('/reset-password');
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <main className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2
          className={`${styles.title} text text_type_main-medium mb-6`}
        >
          Восстановление пароля
        </h2>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Укажите e-mail"
            onChange={onEmailChange}
            value={email}
            name="e-mail"
            error={false}
            ref={inputRef}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <Button disabled={!(email)} type="primary" size="medium">
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {'Вспомнили пароль? '}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </main>
  );
}
