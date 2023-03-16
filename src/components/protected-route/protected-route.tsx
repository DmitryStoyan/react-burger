/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "../../../src/utils/hooks";

import Preloader from "../preloader/preloader";

import type { RouteProps } from "react-router-dom";

function ProtectedRoute({ children, ...rest }: RouteProps) {
  const { userData, isAuthChecked } = useSelector((store) => store.userData);
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  !isAuthChecked && <Preloader />;
  // if (isAuthChecked && !userData) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={
  //       () => (userData ? (children) : (
  //         <Redirect to={{
  //           pathname: '/login',
  //           state: { previousLocation: location },
  //         }}
  //         />
  //       ))
  //     }
  //     />
  //   );
  // }

  if (isAuthChecked && !userData) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { previousLocation: location },
        }}
      />
    );
  }
  return <Route {...rest}>{children}</Route>;
}

export default ProtectedRoute;
