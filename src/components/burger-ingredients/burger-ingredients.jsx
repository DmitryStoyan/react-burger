import React from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types';

function BurgerIngredients({ data, onOpen }) {
    const [current, setCurrent] = React.useState('one')

    const buns = data.filter((item) => {
        return item.type === 'bun'
    })
    const sauces = data.filter((item) => {
        return item.type === 'sauce'
    })
    const fillings = data.filter((item) => {
        return item.type === 'main'
    })


    return (
        <section className="pt-10 pl-5">
            <h2 className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </h2>
            <div style={{ display: 'flex' }}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredientsContainer}>
                <h3 className="text text_type_main-medium pt-5">
                    Булки
                </h3>
                <ul className={styles.ingredientsGroupList}>

                    <BurgerIngredient ingredients={buns}  onOpen={onOpen} />

               </ul>

                <h3 className="text text_type_main-medium">
                    Соусы
                </h3>
                <ul className={styles.ingredientsGroupList}>

                    <BurgerIngredient ingredients={sauces}  onOpen={onOpen} />

                </ul>

                <h3 className="text text_type_main-medium">
                    Начинки
                </h3>
                <ul className={styles.ingredientsGroupList}>

                    <BurgerIngredient ingredients={fillings} onOpen={onOpen}  />

                </ul>

            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
    onOpen: PropTypes.func.isRequired,
  }

export default BurgerIngredients;
