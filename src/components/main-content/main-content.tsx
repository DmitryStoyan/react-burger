import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from '../../../src/utils/hooks';

import Preloader from '../preloader/preloader';
import Modal from '../modal/modal';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { resetOrderError, getIngredients, resetIngredientsError } from '../../services/actions/export';

import styles from './styles.module.css';

function MainContent() {
  const { ingredientsRequest, ingredientsRequestFailed } = useSelector((store) => store.ingredients);
  const { orderRequestFailed } = useSelector((store) => store.order);

  const dispatch = useDispatch();

  const resetErrors = () => {
    dispatch(resetIngredientsError());
    dispatch(resetOrderError());
  };

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {ingredientsRequest && !ingredientsRequestFailed && <Preloader />}

      {!ingredientsRequestFailed && !ingredientsRequest && (
        <main className={`${styles.content}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}

      {ingredientsRequestFailed && orderRequestFailed && (
        <Modal heading="Что-то пошло не так..." closeModal={resetErrors} />
      )}
    </div>
  );
}

export default MainContent;
