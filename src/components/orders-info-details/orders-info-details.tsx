/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../src/utils/hooks';
import Preloader from '../preloader/preloader';
import { getOrderInfo } from '../../services/actions/export';
import styles from './orders-info-details.module.css';
import type { IIngredient } from '../../services/types/export';
import type { IOrderInfoDetailsProps } from './order-info-detail.props';

export function OrdersInfoDetails({ isPopup }: IOrderInfoDetailsProps) {
  const dispatch = useDispatch();

  const { orderNumber } = useParams<any>();
  const { orderInfo } = useSelector((store) => store.ordersData);
  const { ingredientsArray } = useSelector((store) => store.ingredients);

  const foundIngredients = orderInfo?.ingredients.map((orderIngredient: unknown) => ingredientsArray.find((ingredient: IIngredient) => ingredient._id === orderIngredient));

  const calculateSum = () => {
    let sum = 0;
    foundIngredients?.forEach((ingredient) => {
      const orderedIngredient = ingredientsArray.find((orderIngredient) => orderIngredient?._id === ingredient?._id);
      if (orderedIngredient?.price) {
        sum += orderedIngredient.price;
      }
    });
    return sum;
  };

  const checkStatus = (status: string) => {
    if (status === 'pending') {
      return 'Готовится';
    }
    return 'Выполнен';
  };

  const checkStyles = (status: string) => {
    if (status === 'pending') {
      return {
        color: '#00CCCC',
      };
    }
    return {};
  };

  function formatDate(str: string | number | Date) {
    return new Date(str).toLocaleString();
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    orderNumber && dispatch(getOrderInfo(+orderNumber));
  }, [dispatch, orderNumber]);

  return (

    orderInfo?.number ? (
      <div className={styles.container} style={!isPopup ? { marginTop: '120px' } : {}}>
        <div className={styles.order_info}>
          <p
            className={`text text_type_digits-default pb-10 ${styles.order_number}`}
          >
            #
            {
                orderInfo && orderInfo.number
              }

          </p>
          <h2 className="text text_type_main-medium pb-3">
            {
                orderInfo && orderInfo.name
              }
          </h2>

          <p
            className={`text text_type_main-default pb-15 ${styles.order_status}`}
            style={checkStyles(orderInfo?.status)}
          >
            {
                checkStatus(orderInfo?.status)
              }
          </p>

          <p className="text text_type_main-medium pb-6">Состав:</p>
          <ul className={styles.list}>
            {
                  Array.from(new Set(foundIngredients))?.map((ingredient, idx) => (
                    <li key={idx} className={styles.list_item}>
                      <img className={styles.image} src={ingredient?.image} alt="" />
                      <h3
                        className={`text text_type_main-default ${styles.title}`}
                      >
                        {ingredient?.name}
                      </h3>
                      <div className={`text text_type_digits-default ${styles.item_currency}`}>
                        <span>
                          {
                              foundIngredients && foundIngredients?.filter((filteredIngredient) => filteredIngredient?._id === ingredient?._id).length
                            }
                        </span>
                        x
                        <div className={`text text_type_digits-default ${styles.item_currency_container}`}>
                          <span>{ingredient?.price}</span>
                          <CurrencyIcon type="primary" />
                        </div>
                      </div>
                    </li>
                  ))
                }
          </ul>
          <div className={styles.footer}>
            <p className="text text_type_main-default text_color_inactive">
              {
                  formatDate(orderInfo?.createdAt)
                }

            </p>
            <div className={styles.currency_container}>
              <span className="text text_type_digits-default">
                {
                    calculateSum()
                  }

              </span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </div>
    ) : <Preloader />

  );
}
