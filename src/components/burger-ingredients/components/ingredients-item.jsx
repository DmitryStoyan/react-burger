import styles from './styles.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux'
import { ingredientsItemPropTypes } from '../../../utils/components-prop-types';

const IngredientsItem = ({ ingredient, onOpen }) => {
  const { image, price, name } = ingredient
  const { cart } = useSelector(store => store.ingredients)

  const [{ opacity }, dragRef] = useDrag({
    type: 'bun',
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  let counter = 0
  cart.forEach(ingredient => ingredient.name === name && (ingredient.type === 'bun' ? counter += 2 : counter += 1))

  return (
    <li
      className={`${styles.card} pl-4 pr-4`}
      onClick={() => onOpen(ingredient)}
      ref={dragRef}
      style={{ opacity }}>
      {counter > 0 &&
          <Counter count={counter} size="default" />
      }
      <img className={styles.ingredientCardImage} src={ingredient.image} alt={ingredient.image} />
      <div className={styles.ingredientCardPrice}>
        <span>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.ingredientCardName}>{ingredient.name}</p>
    </li>
  );
};

IngredientsItem.propTypes = ingredientsItemPropTypes.isRequired

export default IngredientsItem;
