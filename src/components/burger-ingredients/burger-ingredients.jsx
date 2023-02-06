import React, { useCallback, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './burger-ingredients.module.css';
import IngredientsList from './components/ingredients-list';
import PropTypes from 'prop-types';
import IngredientsNavigation from './components/ingredients-navigation';
import { useAppSelector } from '../../services/hooks';
import { ProductType } from '../../utils/variables';

function BurgerIngredients({ onOpen }) {
  const { ingredients } = useAppSelector((store) => store.ingredients);

  const [currentTab, setCurrentTab] = useState('bun');

  const [bunsRef, inViewBuns] = useInView({ threshold: 0.6 });
  const [saucesRef, inViewSauces] = useInView({ threshold: 0.1 });
  const [fillingsRef, inViewFillings] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inViewBuns) {
      console.log(inViewBuns);
      setCurrentTab('bun');
    }
    if (inViewSauces) {
      setCurrentTab('sauce');
      console.log(inViewSauces);
    }
    if (inViewFillings) {
      console.log(inViewFillings);
      setCurrentTab('main');
    }
  }, [inViewBuns, inViewFillings, inViewSauces]);

  const handleClick = useCallback(
    (e) => {
      setCurrentTab(e);
      document.getElementById(e).scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [setCurrentTab],
  );

  const buns = ingredients.filter((ingredient) => ingredient.type === ProductType.Bun.type);
  const fillings = ingredients.filter((ingredient) => ingredient.type === ProductType.Main.type);
  const sauces = ingredients.filter((ingredient) => ingredient.type === ProductType.Sauce.type);

  return (
    <section className="pt-10 pl-5">
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <div className={styles.navigationWrapper}>
        <IngredientsNavigation
          tabs={[ProductType.Bun, ProductType.Sauce, ProductType.Main]}
          currentTab={currentTab}
          handleClick={handleClick}
        />
      </div>
      <div className={styles.ingredientsContainer}>
        <h3 className="text text_type_main-medium pt-5">Булки</h3>
        <IngredientsList ingredients={buns} onOpen={onOpen} ref={bunsRef} />
        <h3 className="text text_type_main-medium">Соусы</h3>
        <IngredientsList ingredients={sauces} onOpen={onOpen} ref={saucesRef} />
        <h3 className="text text_type_main-medium">Начинки</h3>
        <IngredientsList ingredients={fillings} onOpen={onOpen} ref={fillingsRef} />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default BurgerIngredients;
