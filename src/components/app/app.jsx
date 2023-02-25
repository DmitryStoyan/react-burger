import React from 'react';
import { Constructor } from '../constructor/constructor';
import { Header } from '../header/header';
import appStyles from './app.module.css';

export const App = () => (
  <div className={appStyles.app}>
    <Header />
    <Constructor />
  </div>

);
