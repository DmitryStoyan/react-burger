/* eslint-disable no-undef */
import React, { useEffect, useCallback } from 'react';
import {
  Switch, Route, useLocation, useHistory,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Preloader from '../preloader/preloader';
import Modal from '../modal/modal';
import ProtectedRoute from "../protected-route/protected-route";
import MainContent from "../main-content/main-content";
import { getCookie } from '../../utils/cookie';
import {
  getIngredients, closeOrderModal, resetConstructor, closeIngredientModal, checkAuth,
} from '../../services/actions/export';
import {
  Profile,
  NotFound,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
} from '../../pages';

export const Constructor = () => {
  // «вытащить» кусок состояния в компонент из store
  const { orderRequest, orderRequestFailed, orderNumber } = useSelector((store) => store.order);
  const accessToken = getCookie('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  // Отправка экшенов в store
  const dispatch = useDispatch();

  const location = useLocation();
  const background = location.state && location.state.background;
  const history = useHistory();

  const closeIngredientDetailsModal = useCallback(
    (path) => {
      dispatch(closeIngredientModal());
      history.push(path);
    },
    [dispatch, history],
  );

  const closeOrderDetailsModal = useCallback(() => {
    dispatch(closeOrderModal());
    dispatch(resetConstructor());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuth(`Bearer ${accessToken}`, refreshToken));
    dispatch(getIngredients());
  }, [dispatch, accessToken, refreshToken]);

  return (
    <div className={`${styles.constructor} mb-10`}>
      <Switch location={background || location}>
        <Route exact path="/">
          <MainContent />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route exact path="/ingredients/:id">
          <IngredientDetails title="Детали ингредиента" />
        </Route>
        <Route exact path="/reset-password">
          <ResetPassword />
        </Route>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>

      {orderNumber && (
        <Modal closeModal={closeOrderDetailsModal}>
          {!orderRequest && !orderRequestFailed ? <OrderDetails /> : <Preloader />}
        </Modal>
      )}
      {background && (
        <Route path="/ingredients/:id">
          <Modal heading="Детали ингредиента" closeModal={() => closeIngredientDetailsModal('/')}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}
    </div>
  );
};
