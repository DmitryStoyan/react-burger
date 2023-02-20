import React, {
  useState, useRef, useEffect, useCallback,
} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { registration } from "../../services/actions/user";
import styles from './styles.module.css';

export const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  const userData = useSelector((store) => store.userData.userData);

  const onNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return;
    }
    dispatch(registration(email, name, password));
  }, [dispatch, email, name, password]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    userData && history.push('/');
  }, [userData, history]);

  return (
    <main className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={`${styles.title} text text_type_main-medium`}>
          Регистрация
        </h1>
        <div className="mt-6 mb-6">
          <Input
            type="text"
            placeholder="Имя"
            onChange={onNameChange}
            value={name}
            name="name"
            error={false}
            ref={inputRef}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <div className="mb-6">
          <Input
            type="text"
            placeholder="e-mail"
            onChange={onEmailChange}
            value={email}
            name="e-mail"
            error={false}
            ref={inputRef}
            errorText="Ошибка"
            size="default"
          />
        </div>
        <div className="mb-6">
          <PasswordInput
            onChange={onPasswordChange}
            value={password}
            name="password"
          />
        </div>
        <Button disabled={!(name && email && password)} type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive">
        {"Уже зарегистрированы? "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </main>
  );
};
