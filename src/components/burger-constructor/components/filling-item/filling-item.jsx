import React, { useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { changeOrder } from '../../../../services/actions/constructor';
import styles from './styles.module.css';
import { productPropType } from '../../../../constants/propTypes';

const FillingItem = ({ item, deleteHandler, index }) => {
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
    // eslint-disable-next-line no-shadow
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
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
        <DragIcon />
      </div>
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={() => deleteHandler(item)}
      />
    </li>
  );
};

FillingItem.propTypes = {
  item: productPropType.isRequired,
  index: PropTypes.number.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default FillingItem;
