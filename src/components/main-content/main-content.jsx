import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './styles.module.css';
import Preloader from "../preloader/preloader";
import Modal from "../modal/modal";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { resetOrderError, getIngredients, resetIngredientsError } from '../../services/actions/export';

const MainContent = () => {
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
};

export default MainContent;
