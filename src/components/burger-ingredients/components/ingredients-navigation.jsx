import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsNavigation({ tabs, currentTab, handleClick }) {
  return (
    <div style={{ display: 'flex' }}>
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

export default IngredientsNavigation;
