import React from 'react';

import styles from './styles.module.css';

import type { INutritionValue } from './nutrition-value.props';

function NutritionValue({ text, value }: INutritionValue) {
  return (
    <li className={`${styles.nutritionListItem}`}>
      <p className="text text_type_main-default text_color_inactive mb-2">{text}</p>
      <span className="text text_type_digits-default text_color_inactive">{value}</span>
    </li>
  );
}

export default NutritionValue;
