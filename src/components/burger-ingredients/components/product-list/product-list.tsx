/* eslint-disable react/prop-types */
import React, { forwardRef, LegacyRef } from 'react';

import ProductCard from '../product-card/product-card';
import { IProductList } from './product-list.props';

import styles from './styles.module.css';

const ProductList = forwardRef(({ items, itemsType }: IProductList, ref: LegacyRef<HTMLUListElement> | undefined) => (
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
