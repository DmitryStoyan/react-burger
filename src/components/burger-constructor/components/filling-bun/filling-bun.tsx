/* eslint-disable no-nested-ternary */
import React from 'react';

import styles from './styles.module.css';

import type { IFillingBun } from './filling-bun.props';

// eslint-disable-next-line react/prop-types
function FillingBun({ located }: IFillingBun) {
  return (
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
}

export default FillingBun;
