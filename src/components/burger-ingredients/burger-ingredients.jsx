import React, {useRef} from 'react';
import styles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../burger-ingredient/burger-ingredient';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types';
import { useAppSelector, useAppDispatch } from '../../services/hooks'
import useSwitchTabs from '../use-switch-tabs/use-switch-tabs';
import {swithTab} from '../../services/reducers/ingredients'

function BurgerIngredients({ onOpen }) {
    const dispatch = useAppDispatch()
    // const [current, setCurrent] = React.useState('one')
    const bunsRef = useRef(null)
    const saucesRef = useRef(null)
    const fillingsRef = useRef(null)
    const rootRef = useRef(null)

    const { ingredients, currentTab } = useAppSelector(store => store.ingredients)

    const buns = ingredients.filter((item) => {
        return item.type === 'bun'
    })
    const sauces = ingredients.filter((item) => {
        return item.type === 'sauce'
    })
    const fillings = ingredients.filter((item) => {
        return item.type === 'main'
    })

    const smoothSettings = { block: "start", behavior: "smooth" }

    const handleBunTab = (event) => {
        dispatch(swithTab(event))
        bunsRef.current.scrollIntoView(smoothSettings);
      }
      const handleSauceTab = (event) => {
        dispatch(swithTab(event))
        saucesRef.current.scrollIntoView(smoothSettings);
      }
      const handleFillingsTab = (event) => {
        dispatch(swithTab(event))
        fillingsRef.current.scrollIntoView(smoothSettings);
      }

    const setCurrent = value => dispatch(swithTab(value))


    useSwitchTabs(rootRef, bunsRef, () => setCurrent('buns'))
    useSwitchTabs(rootRef, saucesRef, () => setCurrent('sauces'))
    useSwitchTabs(rootRef, fillingsRef, () => setCurrent('fillings'))


    return (
        <section className="pt-10 pl-5">
            <h2 className="text text_type_main-large mt-10 mb-5">
                Соберите бургер
            </h2>
            <div style={{ display: 'flex' }}>
                <Tab value="bun" active={currentTab === 'bun'} onClick={handleBunTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={currentTab === 'sauce'} onClick={handleSauceTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={currentTab === 'main'} onClick={handleFillingsTab}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredientsContainer}>
                <h3 className="text text_type_main-medium pt-5">
                    Булки
                </h3>
                <ul className={styles.ingredientsGroupList}>

                    <BurgerIngredient ingredients={buns} onOpen={onOpen} ref={bunsRef} />

                </ul>

                <h3 className="text text_type_main-medium">
                    Соусы
                </h3>
                <ul className={styles.ingredientsGroupList}>

                    <BurgerIngredient ingredients={sauces} onOpen={onOpen} ref={saucesRef} />

                </ul>

                <h3 className="text text_type_main-medium">
                    Начинки
                </h3>
                <ul className={styles.ingredientsGroupList}>

                    <BurgerIngredient ingredients={fillings} onOpen={onOpen} ref={fillingsRef} />

                </ul>

            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    // data: PropTypes.arrayOf(ingredientType).isRequired,
    onOpen: PropTypes.func.isRequired,
}

export default BurgerIngredients;
