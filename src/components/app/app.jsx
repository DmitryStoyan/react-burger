import React, { useState, useEffect } from 'react'
import { AppHeader } from '../app-header/app-header';
import styles from './app.module.css'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import api from '../../utils/api';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import {getIngredients} from '../../services/actions/ingredients'
import {useAppDispatch, useAppSelector} from '../../services/hooks'
import {closeOrderModal} from '../../services/reducers/ingredients'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  // const [ingredients, setIngredients] = useState([])
  // const [modal, setModal] = useState(false)
  const { order } = useAppSelector(store => store.ingredients)
  const [ingredient, setIngredient] = useState(null)
  // const [order, setOrder] = useState(false)
  const dispatch = useAppDispatch()

  // const getIngredients = async () => {
  //   try {
  //     const res = await api.getData()
  //     setIngredients(res.data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  useEffect(
    () => {
      dispatch(getIngredients())
    }, []
  )

  function handleCloseModal() {
    setIngredient(null);
  }

  function handleOpenModal(ingredient) {
    setIngredient(ingredient);
  }

  // function handleOpenOrderDetails() {
  //   setOrder(true);
  // }

  // Закрываем модалку путем присвоение null свойству order
  const handleCloseOrderModal = () => {
    dispatch(closeOrderModal())
  }


  return (
    <>
      <AppHeader />
      <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients onOpen={handleOpenModal} />
        <BurgerConstructor />
        </DndProvider>
      </main>

      {
        ingredient &&
        <Modal onClose={handleCloseModal} title={'Детали ингредиента'}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      }

      {
        order &&
        <Modal onClose={handleCloseOrderModal} >
          <OrderDetails />
        </Modal>
      }

    </>
  )
}

export default App
