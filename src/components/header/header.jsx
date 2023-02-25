import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './styles.module.css';

export const Header = () => {
  const { pathname } = useLocation();
  const userData = useSelector((store) => store.userData.userData);

  return (
    <header className={`${styles.header} pt-4 pb-4 pt-10`}>
      <nav className={`${styles.navigation}`}>
        <div className={`${styles.wrapper}`}>
          <menu className={`${styles.menuList} pt-4 pb-4`}>

            <li className="pt-4 pr-5 pb-4 pl-5">
              <NavLink
                activeClassName={styles.linkActive}
                className={`${styles.link} text text_type_main-default`}
                exact
                to="/"
              >
                <BurgerIcon type={pathname === '/' ? 'primary' : 'secondary'} />
                <span className="ml-2">Конструктор</span>
              </NavLink>
            </li>

            <li className="pt-4 pr-5 pb-4 pl-5 ml-2">
              <NavLink
                activeClassName={styles.linkActive}
                className={`${styles.link} text text_type_main-default`}
                exact
                to="/feed"
              >
                <ListIcon type={pathname === '/feed' ? 'primary' : 'secondary'} />
                <span className="ml-2">Лента заказов</span>
              </NavLink>
            </li>

          </menu>
          <Link to="/">
            <div className="pt-2 pb-2">
              <Logo />
            </div>
          </Link>
        </div>
        <NavLink
          activeClassName={styles.linkActive}
          className={`${styles.link} text text_type_main-default`}
          to="/profile"
        >
          <ProfileIcon type={pathname === '/profile' ? 'primary' : 'secondary'} />
          <span className="ml-2">{userData ? userData.name : 'Личный кабинет'}</span>
        </NavLink>
      </nav>
    </header>
  );
};
