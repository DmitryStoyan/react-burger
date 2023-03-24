/* eslint-disable no-nested-ternary */
import React from 'react';
import styles from './styles.module.css';

// eslint-disable-next-line react/prop-types
const FillingBun = ({ located }) => (
  <div
    className={
      located === 'top'
        ? `${styles.bunTop} text text_type_main-medium text_color_inactive`
        : located === 'bottom'
          ? `${styles.bunBottom} text text_type_main-medium text_color_inactive`
          : `${styles.bun} text text_type_main-medium text_color_inactive`
      }
  />
);

export default FillingBun;
