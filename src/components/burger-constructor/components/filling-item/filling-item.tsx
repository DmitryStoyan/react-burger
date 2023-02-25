import React, { useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from '../../../../../src/utils/hooks';
import { changeOrder } from '../../../../services/actions/constructor';
import styles from './styles.module.css';
import type { IFillingItem } from './filling-item.props';

function FillingItem({ item, deleteHandler, index }: IFillingItem) {
  const ref = useRef(null);
  const id = item.uId;
  const dispatch = useDispatch();

  const [{ handlerId }, drop] = useDrop({
    accept: 'filling',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },

    hover(item: { index: number }) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch(changeOrder(dragIndex, hoverIndex));
      // eslint-disable-next-line no-param-reassign
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'filling',
    item: () => ({ id, index }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;

  drag(drop(ref));

  return (
    <li
      className={`${styles.fillingItem} mb-4 mr-2`}
      style={{ opacity }}
      data-handler-id={handlerId}
      ref={ref}
    >
      <div className="pr-2">
        <DragIcon type="secondary" />
      </div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={() => deleteHandler(item)}
      />
    </li>
  );
}

export default FillingItem;
