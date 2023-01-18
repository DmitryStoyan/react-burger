import { forwardRef } from 'react';
import styles from './styles.module.css';
import IngredientsItem from './ingredients-item';

const IngredientsList = forwardRef(({ ingredients, onOpen }, ref) => {
  const ingredientItems = ingredients.map((ingredient) => (
    <ul className={styles.ingredientsGroupList} id={ingredient.type} ref={ref}>
      <IngredientsItem
        ingredient={ingredient}
        key={ingredient._id}
        id={ingredient.type}
        onOpen={onOpen}
      />
    </ul>
  ));

  return ingredientItems;
});

export default IngredientsList;
