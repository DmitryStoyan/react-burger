/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function ProductNavigation({ tabs, current, handleClick }) {
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

ProductNavigation.propTypes = {
  tabs: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductNavigation;
