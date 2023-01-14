import styles from './ingredients-set.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types.js';
import BurgerIngredient from '../burger-ingredient/burger-ingredient.jsx';

export default function IngredientsSet({ ingredients, type, title, onClick }) {
  return (
    <section className='pb-10'>
      <h3 className="text text_type_main-medium mb-6">{title}</h3>
      <ul className={styles.set}>
        {ingredients
          .filter((ingredient) => ingredient.type === type)
          .map((ingredient) => (
            <BurgerIngredient
              key={ingredient._id}
              ingredient={ingredient}
              onClick={onClick}
            />
          ))}
      </ul>
    </section>
  )
}

IngredientsSet.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
}
