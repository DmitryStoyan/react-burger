/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './orders-info.module.css';
import Preloader from "../preloader/preloader";

export const OrdersInfo = () => {
  const { total } = useSelector((store) => store.ordersData);
  const { totalToday } = useSelector((store) => store.ordersData);
  const { orders } = useSelector((store) => store.ordersData);

  return (
    <div className={styles.container}>
      {
          orders.length > 0 ? (
            <>
              <div className={styles.order_numbers}>
                {
                  orders?.some((order) => order.status === 'done') && (
                    <div className={styles.ready}>
                      <p className="text text_type_main-medium pb-6">
                        Готовы:
                      </p>
                      <div className={styles.numbers_container}>
                        <ul className={styles.list_accent}>
                          {
                            orders?.map((order, idx) => {
                              if (idx < 10 && order.status === 'done') {
                                return (
                                  <li key={idx} className="text text_type_digits-default pb-2">
                                    {order.number}
                                  </li>
                                );
                              }
                              return null;
                            })
                          }
                        </ul>
                        <ul className={styles.list_accent}>
                          {
                            orders?.map((order, idx) => {
                              if (idx >= 10 && idx < 20 && order.status === 'done') {
                                return (
                                  <li key={idx} className="text text_type_digits-default pb-2">
                                    {order.number}
                                  </li>
                                );
                              }
                              return null;
                            })
                          }
                        </ul>
                      </div>
                    </div>
                  )
                }

                {
                  orders?.some((order) => order.status === 'pending') && (
                    <div className={styles.atWork}>
                      <p className="text text_type_main-medium pb-6">
                        В работе:
                      </p>
                      <ul className={styles.list}>
                        {
                          orders?.map((order, idx) => {
                            if (idx < 10 && order.status === 'pending') {
                              return (
                                <li key={idx} className="text text_type_digits-default pb-2">
                                  {order.number}
                                </li>
                              );
                            }
                            return null;
                          })
                        }
                      </ul>
                    </div>
                  )
                }
              </div>
              <div className={styles.all_time}>
                <p className="text text_type_main-medium">
                  Выполнено за все время:
                </p>
                <span className={`${styles.digits} text text_type_digits-large`}>{total}</span>
              </div>
              <div>
                <p className="text text_type_main-medium">
                  Выполнено за сегодня:
                </p>
                <span className={`${styles.digits} text text_type_digits-large`}>{totalToday}</span>
              </div>
            </>
          ) : (<Preloader />)
        }
    </div>
  );
};
