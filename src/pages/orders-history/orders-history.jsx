/* eslint-disable react/no-array-index-key */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wsUserOrdersConnectionStart, wsUserOrdersConnectionClosed } from "../../services/actions/ws";
import { OrdersComponent } from "../../components/orders-component/orders-component";
import { getCookie } from "../../utils/cookie";
import styles from "./orders-history.module.css";
import Preloader from "../../components/preloader/preloader";

export const OrdersHistory = () => {
  const { userOrders } = useSelector((store) => store.ordersData);
  userOrders.reverse();

  const dispatch = useDispatch();

  const accessToken = getCookie('accessToken');

  useEffect(() => {
    dispatch(wsUserOrdersConnectionStart(`wss://norma.nomoreparties.space/orders?token=${accessToken}`));
    return () => {
      dispatch(wsUserOrdersConnectionClosed());
    };
  }, [dispatch, accessToken]);

  return (
    <ul className={styles.list}>
      {
          userOrders.length > 0 ? (
            <>
              {
                userOrders.map((order, idx) => (
                  <OrdersComponent key={idx} isHistory order={order} />
                ))
              }
            </>
          ) : (<Preloader />)
        }
    </ul>
  );
};
