/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { useSelector } from 'src/utils/hooks';
import { useSelector } from '../../../src/utils/hooks';

import { formatDate } from '../../constants/variables';

import styles from './orders-component.module.css';

// import type { IIngredient } from 'src/providers/types/export';
import type { IIngredient } from '../../services/types/export';
import type { IOrderComponentProps } from './orders-component.props';

export function OrdersComponent({ order, isHistory = false }: IOrderComponentProps) {
  const location = useLocation();
  const {
    status, number, createdAt, name, ingredients,
  } = order;
  const { ingredientsArray } = useSelector((store) => store.ingredients);

  // eslint-disable-next-line max-len
  const findIngredient = (product: string | IIngredient, products: IIngredient[]) => products.find((foundIngredient) => foundIngredient._id === product);

  const checkStatus = (condition: string) => {
    if (condition === 'done') {
      return 'Создан';
    }
  };

  const calculateSum = () => {
    let sum = 0;
    ingredients.forEach((ingredient: string | IIngredient) => {
      const find = ingredientsArray.find((orderIngredient: IIngredient) => orderIngredient._id === ingredient);
      if (find?.price) {
        sum += find.price;
      }
    });
    return sum;
  };

  return (
    <li>

      <Link
        className={styles.link}
        to={{
          pathname: `${location.pathname}/${number}`,
          state: { background: location },
        }}
      >

        <div className={styles.header}>
          <p className="text text_type_digits-default">{`#${number}`}</p>
          <p className="text text_type_main-default text_color_inactive">{formatDate(createdAt)}</p>
        </div>

        <h2 className="text text_type_main-medium">{name}</h2>
        {
          (status && isHistory) && <p className="text text_type_main-default">{checkStatus(status)}</p>
        }

        <div className={styles.footer}>
          <ul className={styles.ingredients_list}>
            {
              ingredients.map((ingredient, idx) => {
                const foundIngredient = findIngredient(ingredient, ingredientsArray);
                if (idx < 5) {
                  return (
                    <li key={idx} style={{ zIndex: 9 - idx }} className={styles.ingredients_list_item}>
                      <img
                        className={styles.ingredients_list_item_image}
                        src={foundIngredient?.image}
                        alt={foundIngredient?.name}
                      />
                    </li>
                  );
                } if (idx === 6) {
                  return (
                    <li key={idx} style={{ zIndex: 9 - idx }} className={styles.last_ingredient}>
                      <img
                        className={styles.last_ingredient_image}
                        src={foundIngredient?.image}
                        alt={foundIngredient?.name}
                      />
                      <div className={styles.overlay} />
                      <span className={`text text_type_main-default ${styles.last_ingredient_count}`}>
                        +
                        {ingredients.length - 5}
                      </span>
                    </li>
                  );
                }
                return null;
              })
            }

          </ul>
          <div className={styles.total}>
            <span className="text text_type_digits-default">{calculateSum()}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>

      </Link>
    </li>
  );
}
