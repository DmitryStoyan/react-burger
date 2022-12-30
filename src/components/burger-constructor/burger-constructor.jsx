import styles from './burger-constructor.module.css';
import CurrencyIconBig from '../../images/currency-icon-big.png';
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor({ data, onOpen }) {
  return (
    <section className={styles.total}>
      <ul className={styles.ingredientsList}>
        <li className={styles.listElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <div className={styles.smallScroll}>
          <li className={styles.listElement}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={'https://code.s3.yandex.net/react/code/sauce-03.png'}
            />
          </li>
          <li className={styles.listElement}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={'https://code.s3.yandex.net/react/code/meat-02.png'}
            />
          </li>
          <li className={styles.listElement}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={'https://code.s3.yandex.net/react/code/sp_1.png'}
            />
          </li>
          <li className={styles.listElement}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
            />
          </li>
          <li className={styles.listElement}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
            />
          </li>
          <li className={styles.listElement}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
            />
          </li>
        </div>
        <li className={styles.listElement}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={20}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
      </ul>
      <div className={styles.payment}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium">610</p>
          <img src={CurrencyIconBig} alt='Значок валюты' />
        </div>
        <Button type="primary" size="large" htmlType='button' onClick={onOpen}>Оформить заказ</Button>
      </div>
    </section>
  )
}
