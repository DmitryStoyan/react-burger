import React from 'react';
import { useSelector } from 'react-redux';
import PropTypese from 'prop-types';
import styles from './styles.module.css';
import doneIcon from '../../images/done.svg';

/* Соержимое модалки с деталями заказа, которые устанваливаются кликом при формировании заказа */
function OrderDetails() {
  const { orderNumber } = useSelector((store) => store.order);
  return (
    <div className={`${styles.container} mt-30 mb-30`}>
      <h3 className={`${styles.number} text text_type_digits-large mb-8`}>{orderNumber}</h3>
      <span className="text text_type_main-medium mb-15">идентификатор заказа</span>
      <img className={`${styles.icon} mb-15`} src={doneIcon} alt="done-icon" />
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <span className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
}

OrderDetails.propTypese = {
  orderNum: PropTypese.number.isRequired,
};

export default OrderDetails;
