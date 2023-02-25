/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from '../../../src/utils/hooks';

import { OrdersComponent } from '../orders-component/orders-component';
import Preloader from '../preloader/preloader';

import styles from './orders-list.module.css';

export function OrdersList() {
  const { orders } = useSelector((store) => store.ordersData);

  return (
    <div className={styles.main_container}>
      <h1 className="mt-10 mb-5 text text_type_main-large">Лента заказов</h1>
      <div
        className={`${styles.orders_container} mt-10 ingredients-container`}
      >
        {
          orders.length > 0 ? (
            <ul className={`${styles.list} pt-6 pb-10 pr-4 pl-4`}>
              {
                orders?.map((order, idx) => (
                  <OrdersComponent key={idx} isHistory={false} order={order} />
                ))
              }
            </ul>
          ) : (<Preloader />)
        }
      </div>
    </div>
  );
}
