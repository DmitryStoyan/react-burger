/* eslint-disable react/prop-types */
import React from 'react';

import styles from './styles.module.css';

import type { IFillingIngredients } from './filling-ingredients.props';

function FillingIngredients({ check }: IFillingIngredients) {
  return (
    <div
      className={
      check
        ? `${styles.allProductsHover}`
        : `${styles.allProducts} text text_type_main-medium text_color_inactive`
      }
    />
  );
}

export default FillingIngredients;
