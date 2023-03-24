/* eslint-disable no-unused-expressions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from 'react-router-dom';
import { useDrop } from 'react-dnd';
import FillingItem from './components/filling-item/filling-item';
import styles from './styles.module.css';
import { postOrderRequest, removeItem, addItem } from '../../services/actions/export';
import { ariaLable } from '../../constants/export';
import FillingBun from './components/filling-bun/filling-bun';
import FillingMain from './components/filling-main/filling-main';
import FillingIngredients from './components/filling-ingredients/filling-ingredients';

function BurgerConstructor() {
  const {
    bun, filling, totalPrice, ingredientIds,
  } = useSelector((store) => store.burgerConstructor);
  const userData = useSelector((store) => store.userData.userData);
  const history = useHistory();
  const dispatch = useDispatch();

  const postOrder = (orderData) => {
    userData && dispatch(postOrderRequest(orderData));
    !userData && history.push('/login');
  };

  const handleDelete = (item) => {
    dispatch(removeItem(item));
  };

  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addItem(item));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  return (
    <section className={`${styles.container} pt-25 pl-4`} aria-label={ariaLable.constructor}>
      <ul className={`${styles.ingredientList} pr-2`} ref={drop}>
        {!bun && filling.length === 0 && <FillingIngredients />}
        {!bun && filling.length > 0 && <FillingBun located="top" />}

        {bun && (
        <li className={`${styles.ingredientItem} ml-4`}>
          <ConstructorElement
            type="top"
            isLocked
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image_mobile}
          />
        </li>
        )}
        {filling.length === 0 && bun && <FillingMain />}
        {filling.length > 0 && (
        <li className={`${styles.ingredientItem}`}>
          <ul className={`${styles.fillingList} mt-4 mb-4`}>

            {filling.map((item, index) => (
              <FillingItem
                item={item}
                deleteHandler={handleDelete}
                index={index}
                key={item.uId}
              />
            ))}
          </ul>
        </li>
        )}
        {!bun && filling.length > 0 && <FillingBun located="bottom" />}
        {bun
          && (
            <li className={`${styles.ingredientItem} pl-4`}>
              <ConstructorElement
                type="bottom"
                isLocked
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image_mobile}
              />
            </li>
          )}
      </ul>
      <div className={`${styles.order} mt-10`}>
        <span className="text text_type_digits-medium mr-10">
          {totalPrice}
          <CurrencyIcon />
        </span>
        <Button disabled={!(bun && filling.length > 0)} type="primary" size="medium" onClick={() => postOrder(ingredientIds)}>
          Оформить заказ
        </Button>
      </div>

    </section>
  );
}

export default BurgerConstructor;
