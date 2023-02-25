/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector } from '../../../../utils/hooks';

import styles from './styles.module.css';

import type { IIngredientCard } from './product-card.props';

function ProductCard({ item }: IIngredientCard) {
  const location = useLocation();

  const { bun, filling } = useSelector((store) => store.burgerConstructor);

  const [{ isDrag }, dragRef] = useDrag(
    {
      type: 'ingredient',
      item,
      collect: (monitor) => ({
        isDrag: monitor.isDragging(),
      }),
    },
    [bun, filling],
  );

  // счетчик наличия ингрединта в меню
  const setCount: any = useMemo(() => {
    if (item.type === 'bun') {
      return bun && item._id === bun._id ? 1 : null;
    }
    return filling && filling.filter((fillingItem) => fillingItem._id === item._id).length;
  }, [bun, filling, item._id, item.type]);

  return (
    <Link
      className={styles.link}
      to={{
        pathname: `/ingredients/${item._id}`,
        state: { background: location },
      }}
    >
      <div
        className={`${styles.card} pl-4 pr-4`}
        ref={dragRef}
        draggable
      >
        {setCount > 0 && <Counter count={setCount} size="default" />}
        <img
          className={isDrag ? `${styles.cardIsDrag}` : ''}
          src={item.image}
          alt={item.name}
        />
        <p className="text text_type_digits-default mt-1 mb-1">
          {item.price}
          <CurrencyIcon type="secondary" />
        </p>
        <h3 className="text text_type_main-default">{item.name}</h3>
      </div>
    </Link>
  );
}

export default ProductCard;
