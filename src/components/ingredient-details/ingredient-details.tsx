/* eslint-disable no-shadow */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from '../../../src/utils/hooks';

import Preloader from '../preloader/preloader';

import styles from './styles.module.css';
import NutritionValue from './components/nutrition-value';

/* Соержимое модалки с ингредиентом, которые устанваливаются кликом по выбранному ингредиенту */
function IngredientDetails() {
  const { id } = useParams<{ id: string }>();
  const { ingredientsArray } = useSelector((store) => store.ingredients);
  const ingredient = ingredientsArray.find((ingredient) => ingredient._id === id);

  return (
    <>
      {!ingredient && <Preloader />}
      {ingredient && (
      <div className={`${styles.container} mb-15`}>
        <img className="mb-4" src={ingredient.image_large} alt={ingredient.name} />
        <p className="text text_type_main-medium mb-8">
          {ingredient.name}
        </p>
        <ul className={`${styles.nutritionList} `}>
          <NutritionValue text="Калории,ккал" value={ingredient.calories} />
          <NutritionValue text="Белки, г" value={ingredient.proteins} />
          <NutritionValue text="Жиры, г" value={ingredient.fat} />
          <NutritionValue text="Углеводы, г" value={ingredient.carbohydrates} />
        </ul>
      </div>
      )}
    </>
  );
}

export default IngredientDetails;
