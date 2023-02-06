import { forwardRef } from 'react';
import styles from './styles.module.css';
import IngredientsItem from './ingredients-item';
import { ingredientsListPropTypes } from '../../../utils/components-prop-types';

const IngredientsList = forwardRef(({ ingredients, onOpen }, ref) => {
  const ingredientItems = ingredients.map((ingredient) => (
    <ul className={styles.ingredientsGroupList} id={ingredient.type} ref={ref} key={ingredient._id}>
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

IngredientsList.propTypes = ingredientsListPropTypes.isRequired

export default IngredientsList;
