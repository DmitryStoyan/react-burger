/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, ...rest }) => {
  const userData = useSelector((store) => store.userData.userData);
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={
        () => (userData ? (children) : (
          <Redirect to={{
            pathname: `/login`,
            state: { previousLocation: location },
          }}
          />
        ))
      }
    />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
