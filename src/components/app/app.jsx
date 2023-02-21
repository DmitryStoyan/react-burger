import React from 'react';
import { Constructor } from '../constructor/constructor';
import { Header } from '../header/header';
import Styles from './app.module.css';

export const App = () => (
  <div className={Styles.app}>
    <Header />
    <Constructor />
  </div>

);
