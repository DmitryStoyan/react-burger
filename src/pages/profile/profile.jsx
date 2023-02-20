/* eslint-disable no-undef */
import React from "react";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../services/actions/user";
import styles from './styles.module.css';
import ProfileForm from "./components/profile-form/profile-form";

export const Profile = () => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  const handleLogout = () => {
    const refreshToken = localStorage.getItem('refreshToken');
    dispatch(logout(refreshToken));
  };

  return (
    <main className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              activeClassName={styles.link_active}
              className={`${styles.link} text text_type_main-medium`}
              to={`${url}`}
              exact
            >
              Профиль
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.link_active}
              className={`${styles.link} text text_type_main-medium`}
              exact
              to={`${url}/orders`}
            >
              История заказов
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.link_active}
              className={`${styles.link} text text_type_main-medium`}
              to="/login"
              onClick={handleLogout}
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p
          className={`${styles.text} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <Route exact path={`${path}`}>
        <ProfileForm />
      </Route>
      <Route exact path={`${path}/orders`}>
        <span className="text text_type_main-default">Скоро здесь будет лента заказов...</span>
      </Route>
    </main>
  );
};

export default Profile;
