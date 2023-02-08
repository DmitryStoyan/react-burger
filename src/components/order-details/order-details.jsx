import done from '../../images/done.png';
import styles from './order-details.module.css';
import { useAppSelector, useAppDispatch } from '../../services/hooks'

export default function OrderDetails() {
  const { order } = useAppSelector(store => store.ingredients)

  return (
    <div className={styles.order}>
      <h3 className={styles.orderNumber}>{order.order.number}</h3>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <img src={done} alt='Готово!' />
      <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
