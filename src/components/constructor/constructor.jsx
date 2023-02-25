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
import { OrdersInfoDetails } from "../orders-info-details/orders-info-details";
import { getCookie } from '../../utils/cookie';
import {
  getIngredients, closeOrderModal, resetConstructor, closeIngredientModal, checkAuth, cleanOrderInfo,
} from '../../services/actions/export';
import {
  Profile,
  NotFound,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Feed,
} from '../../pages';

export const Constructor = () => {
  const { orderRequest, orderRequestFailed, orderNumber } = useSelector((store) => store.order);
  const accessToken = getCookie('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

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

  const closeOrdersModal = useCallback(() => {
    history.goBack();
    dispatch(cleanOrderInfo());
  }, [dispatch, history]);

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
        <Route exact path="/feed">
          <Feed />
        </Route>

        <Route exact path="/feed/:orderNumber">
          <OrdersInfoDetails isPopup={false} />
        </Route>
        <Route exact path="/profile/orders/:orderNumber">
          <OrdersInfoDetails isPopup={false} />
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
        <Route exact path="/ingredients/:id">
          <Modal heading="Детали ингредиента" closeModal={() => closeIngredientDetailsModal('/')}>
            <IngredientDetails />
          </Modal>
        </Route>
      )}

      {background && (
      <Route exact path="/feed/:orderNumber">
        <Modal
          closeModal={() => closeOrdersModal()}
        >
          <OrdersInfoDetails isPopup />
        </Modal>
      </Route>
      )}

      {background && (
        <Route exact path="/profile/orders/:orderNumber">
          <Modal
            closeModal={() => closeOrdersModal()}
          >
            <OrdersInfoDetails isPopup />
          </Modal>
        </Route>
      )}

    </div>
  );
};
