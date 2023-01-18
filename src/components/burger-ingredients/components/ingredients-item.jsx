import styles from './styles.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';

const IngredientsItem = ({ ingredient, onOpen }) => {
  const [{ opacity }, dragRef] = useDrag({
    type: 'bun',
    item: ingredient,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
    <li
      className={`${styles.card} pl-4 pr-4`}
      onClick={() => onOpen(ingredient)}
      ref={dragRef}
      style={{ opacity }}>
      <Counter count={11} size="default" />
      <img className={styles.ingredientCardImage} src={ingredient.image} alt={ingredient.image} />
      <div className={styles.ingredientCardPrice}>
        <span>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.ingredientCardName}>{ingredient.name}</p>
    </li>
  );
};

export default IngredientsItem;
