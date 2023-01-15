import React, {forwardRef} from 'react'
import styles from './burger-ingredient.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from "react-dnd";

// component
const Ingredient = ({ ingredient, onOpen }) => {

  const [{ opacity }, dragRef] = useDrag({
    type: 'bun',
    item: ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1,
    })
  });

  return (
    <li className={`${styles.card} pl-4 pr-4`} onClick={() => onOpen(ingredient)} ref={dragRef}
      style={{ opacity }} >
      <Counter count={11} size="default" />
      <img className={styles.ingredientCardImage} src={ingredient.image} alt={ingredient.image} />
      <div className={styles.ingredientCardPrice}>
        <span>{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.ingredientCardName}>{ingredient.name}</p>
    </li>
  )
}

const BurgerIngredient = forwardRef(({ ingredients, onOpen }, ref) => {
  const ingredientItem = ingredients.map((ingredient) => (
    <Ingredient ingredient={ingredient} key={ingredient._id} onOpen={onOpen}  />
  ))

  return (
    <div ref={ref}>
      {ingredientItem}
    </div>
  )
})


export default BurgerIngredient
