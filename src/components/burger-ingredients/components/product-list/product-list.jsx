/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ProductCard from '../product-card/product-card';

const ProductList = forwardRef(({ items, itemsType }, ref) => (
  <div className={`${styles.container} mb-10`}>
    <h2 className="text text_type_main-medium" id={itemsType.type}>{itemsType.name}</h2>
    <ul className={`${styles.list} pr-2 pl-4`} ref={ref}>
      {items.map((item) => (
        <li
          className={styles.item}
          key={item._id}
        >
          <ProductCard item={item} />
        </li>
      ))}
    </ul>
  </div>
));

ProductList.propTypes = {
  itemsType: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default ProductList;
