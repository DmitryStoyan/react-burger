import React from 'react'
import styles from './burger-ingredient.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'


const BurgerIngredient = ({ingredients, onOpen }) => {
  const ingredientItem = ingredients.map((ingredient) => (
    <li  className={`${styles.card} pl-4 pr-4`} key={ingredient._id} onClick={() => onOpen(ingredient)} >
       <Counter count={11} size="default" />
      <img className={styles.ingredientCardImage} src={ingredient.image} alt={ingredient.image} />
      <div className={styles.ingredientCardPrice}>
        <span>{ingredient.price}</span>
        <CurrencyIcon  type="primary" />
      </div>
      <p className={styles.ingredientCardName}>{ingredient.name}</p>
    </li>
  ))

  return (
    <>
    {ingredientItem}
  </>
  )
}

export default BurgerIngredient
