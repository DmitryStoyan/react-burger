/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import type { IIngredientsNav } from './product-navigation.props';

function ProductNavigation({ tabs, current, handleClick }: IIngredientsNav) {
  return (
    <div style={{ display: 'flex' }}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          value={tab.type}
          active={current === tab.type}
          onClick={() => handleClick(tab.type)}
        >
          {tab.name}
        </Tab>
      ))}
    </div>
  );
}

export default ProductNavigation;
