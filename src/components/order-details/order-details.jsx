import done from '../../images/done.png';
import styles from './order-details.module.css';

export default function OrderDetails() {
  return (
    <div className={styles.order}>
      <h3 className="text text_type_digits-large mt-20" style={{ textShadow: '0 0 30px #4c4cff' }}>034536</h3>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <img src={done} alt='Готово!' />
      <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
