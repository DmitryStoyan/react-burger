import { useMemo, useRef } from 'react';
import styles from './burger-constructor.module.css';
import CurrencyIconBig from '../../images/currency-icon-big.png';
import {
  ConstructorElement,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppSelector, useAppDispatch } from '../../services/hooks';
import { sendOrder } from '../../services/actions/ingredients';
import { addIngredient, deleteIngredient, sortCart } from '../../services/reducers/ingredients';
import { useDrop, useDrag } from 'react-dnd';
import uuid from 'react-uuid';
import DndField from '../dnd-field/dnd-field';
import {constructorIngredientPropTypes, stuffListPropTypes} from '../../utils/components-prop-types';

// component
const ConstructorIngredient = ({ ingredient, index, onMove }) => {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const { name, price, image, uid } = ingredient;

  const handleDeleteIngredient = (id) => {
    dispatch(deleteIngredient(id));
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'stuff',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;

  const [, drop] = useDrop({
    accept: 'stuff',

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <li className={styles.listElement} ref={ref} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleDeleteIngredient(uid)}
      />
    </li>
  );
};

// component
const StuffList = ({ target, onHover }) => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store.ingredients);

  const classes = `${styles.burgerBody} ${styles.borderColor}`;

  const borderColor = onHover ? classes : styles.burgerBody;

  const moveItemHandler = (dragIndex, hoverIndex) => {
    const dragItem = cart[dragIndex];

    if (dragItem) {
      dispatch(sortCart({ dragItem, hoverIndex, dragIndex }));
    }
  };

  const ingredientItem = cart.map(
    (ingredient, index) =>
      ingredient.type !== 'bun' && (
        <ConstructorIngredient
          ingredient={ingredient}
          key={ingredient.uid}
          index={index}
          onMove={moveItemHandler}
        />
      ),
  );
  return (
    <ul className={borderColor} ref={target}>
      {ingredientItem}
    </ul>
  );
};

export default function BurgerConstructor() {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store.ingredients);

  const totalCost = useMemo(() => {
    if (cart.length > 0) {
      return cart
        .map((item) => item.price * (item.type === 'bun' ? 2 : 1))
        .reduce((sum, current) => {
          return sum + current;
        });
    } else {
      return 0;
    }
  }, [cart]);

  const bun = useMemo(() => {
    return cart.find((bun) => bun.type === 'bun');
  }, [cart]);

  const stuff = useMemo(() => {
    return cart.filter((stuff) => stuff.type !== 'bun');
  }, [cart]);

  const handleOpenOrderModal = (cart) => {
    dispatch(sendOrder(cart));
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'bun',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(ingredient) {
      const uid = uuid();
      dispatch(addIngredient({ ...ingredient, uid }));
    },
  });

  return (
    <section className={styles.total}>
      {cart.length > 0 ? (
        <ul className={styles.ingredientsList}>
          {bun && (
            <li className={styles.listElement}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          )}
          <div className={styles.smallScroll}>
            {stuff.length > 0 ? (
              <StuffList target={dropTarget} onHover={isHover} />
            ) : (
              <DndField target={dropTarget} onHover={isHover} text="Выберите начинку" />
            )}
          </div>
          {bun && (
            <li className={styles.listElement}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          )}
        </ul>
      ) : (
        <DndField target={dropTarget} onHover={isHover} text="Выберите булку" />
      )}

      <div className={styles.payment}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">{totalCost}</p>
          <img src={CurrencyIconBig} alt="Значок валюты" />
        </div>
        <Button
          disabled={!cart.length}
          type="primary"
          size="large"
          htmlType="button"
          onClick={() => handleOpenOrderModal(cart)}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = constructorIngredientPropTypes.isRequired
StuffList.propTypes = stuffListPropTypes.isRequired
