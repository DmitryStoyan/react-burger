/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-unused-expressions */
import React, { useState, useRef, useEffect } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from '../../../../../src/utils/hooks';

import { sendUserData } from '../../../../services/actions/export';
import { getCookie } from '../../../../utils/cookie';

import styles from './styles.module.css';

import type { FormEvent, ChangeEvent, SyntheticEvent } from 'react';

function ProfileForm() {
  // @ts_ignore
  const { userData } = useSelector((store) => store.userData);
  const dispatch = useDispatch();
  const accessToken = getCookie('accessToken');
  // eslint-disable-next-line no-undef
  const refreshToken = localStorage.getItem('refreshToken');

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const nameInputRef = useRef<any>(null);
  const emailInputRef = useRef<any>(null);
  const passwordInputRef = useRef<any>(null);
  const [isDataChanged, setIsDataChanged] = useState(false);

  const onNameClick = () => nameInputRef.current.focus();

  const oтEmailClick = () => emailInputRef.current.focus();

  const onPasswordClick = () => passwordInputRef.current.focus();

  const onNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setName(value);
    // @ts-ignore
    value === userData.name ? setIsDataChanged(false) : setIsDataChanged(true);
  };

  const onEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setLogin(value);
    // @ts-ignore
    value === userData.email ? setIsDataChanged(false) : setIsDataChanged(true);
  };

  const onPasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setPassword(value);
    value === password ? setIsDataChanged(false) : setIsDataChanged(true);
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendUserData(`Bearer ${accessToken}`, name, login, password, refreshToken));
  };

  const onCancelEditing = (evt: SyntheticEvent) => {
    evt.preventDefault();
    // @ts-ignore
    setName(userData.name);
    // @ts-ignore
    setLogin(userData.email);
    setPassword('');
  };

  useEffect(() => {
    if (userData) {
      setLogin(userData.email);
      setName(userData.name);
      setPassword('');
    }
  }, [userData]);

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Input
        type="text"
        placeholder="Имя"
        onChange={onNameChange}
        icon="EditIcon"
        value={name}
        name="name"
        error={false}
        ref={nameInputRef}
        onIconClick={onNameClick}
        errorText="Ошибка"
        size="default"
      />
      <Input
        type="email"
        placeholder="Логин"
        onChange={onEmailChange}
        icon="EditIcon"
        value={login}
        name="name"
        error={false}
        ref={emailInputRef}
        onIconClick={oтEmailClick}
        errorText="Ошибка"
        size="default"
      />
      <Input
        type="text"
        placeholder="Пароль"
        onChange={onPasswordChange}
        icon="EditIcon"
        value={password}
        name="name"
        error={false}
        ref={passwordInputRef}
        onIconClick={onPasswordClick}
        errorText="Ошибка"
        size="default"
      />
      {
        isDataChanged && (
        <div className={styles.buttons__container}>
          <Button htmlType='button' onClick={onCancelEditing} type="secondary" size="medium">
            Отмена
          </Button>
          <Button htmlType='submit' type="primary" size="medium">
            Сохранить
          </Button>
        </div>
        )
      }
    </form>
  );
}

export default ProfileForm;
