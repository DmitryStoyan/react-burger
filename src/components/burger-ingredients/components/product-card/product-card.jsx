/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { useMemo } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { setCurrentIngredient } from '../../../../services/actions/ingredient';
import styles from './styles.module.css';

function ProductCard({ item }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const curentIngredient = () => {
    dispatch(setCurrentIngredient(item));
  };

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
  const setCount = useMemo(() => {
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
        onClick={curentIngredient}
        ref={dragRef}
        draggable
      >
        {setCount > 0 && <Counter count={setCount} size="default" />}
        <img
          className={isDrag ? `${styles.cardIsDrag}` : null}
          src={item.image}
          alt={item.name}
        />
        <p className="text text_type_digits-default mt-1 mb-1">
          {item.price}
          <CurrencyIcon />
        </p>
        <h3 className="text text_type_main-default">{item.name}</h3>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductCard;
