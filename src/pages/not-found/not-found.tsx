import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

export function NotFound() {
  return (
    <main className={styles.wrapper}>
      <p className="text text_type_digits-large text_color_inactive">404</p>
      <h2 className="text text_type_main-large">
        Страница не найдена
      </h2>
      <Link className={styles.link} to="/">
        <Button type="primary" size="medium">
          На главную
        </Button>
      </Link>
    </main>
  );
}
