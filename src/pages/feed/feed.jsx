import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './feed.module.css';
import { OrdersList } from "../../components/orders-list/orders-list";
import { OrdersInfo } from "../../components/orders-info/orders-info";
import { wsAllOrdersConnectionClosed, wsAllOrdersConnectionStart } from "../../services/actions/ws";

export const Feed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsAllOrdersConnectionStart());

    return () => {
      dispatch(wsAllOrdersConnectionClosed());
    };
  }, [dispatch]);

  return (
    <article className={styles.container}>
      <OrdersList />
      <OrdersInfo />
    </article>
  );
};
