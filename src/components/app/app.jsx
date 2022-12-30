import React, {useState, useEffect} from 'react'
import {AppHeader} from '../app-header/app-header';
import styles from './app.module.css'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import api from '../../utils/api';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';


const App = () => {
  const [ingredients, setIngredients] = useState([])
  // const [modal, setModal] = useState(false)
  const [ingredient, setIngredient] = useState(null)
  const [order, setOrder] = useState(false)


const getIngredients = async () => {
  try {
    const res = await api.getData()
    setIngredients(res.data)
  } catch (error) {
    console.error(error)
  }
}

useEffect(
  () => {
    getIngredients()
  }, []
)

function handleCloseModal () {
  setIngredient(null);
  setOrder(false);
}

function handleOpenModal(ingredient) {
  setIngredient(ingredient);
}

function handleOpenOrderDetails() {
  setOrder(true);
}


  return (
    <>
    <AppHeader />
    <main className={styles.main}>
    <BurgerIngredients data={ingredients}  onOpen={handleOpenModal} />
    <BurgerConstructor data={ingredients} onOpen={handleOpenOrderDetails} />
    </main>

    {
      ingredient &&
        <Modal onClose={handleCloseModal} title={'Детали ингредиента'}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
    }

{
      order &&
        <Modal onClose={handleCloseModal} >
          <OrderDetails />
        </Modal>
    }

    </>
  )
}

export default App
