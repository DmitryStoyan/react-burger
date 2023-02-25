import React from 'react';
import styles from './styles.module.css';
import type { IFillingMain } from './filling-main.props';

function FillingMain({ check }: IFillingMain) {
  return (
    <div
      className={
      check
        ? `${styles.mainHover}`
        : `${styles.main} text text_type_main-medium text_color_inactive`
      }
    />
  );
}

export default FillingMain;
