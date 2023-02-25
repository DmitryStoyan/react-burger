/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

import ProductCard from '../product-card/product-card';

import styles from './styles.module.css';

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

export default ProductList;
