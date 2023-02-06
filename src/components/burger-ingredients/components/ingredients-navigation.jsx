import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.css';
import { ingredientsNavigationPropTypes } from '../../../utils/components-prop-types';

function IngredientsNavigation({ tabs, currentTab, handleClick }) {
  return (
    <div className={styles.tabsWrapper}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          value={tab.type}
          active={currentTab === tab.type}
          onClick={() => handleClick(tab.type)}>
          {tab.name}
        </Tab>
      ))}
    </div>
  );
}


IngredientsNavigation.propTypes = ingredientsNavigationPropTypes.isRequired

export default IngredientsNavigation;
