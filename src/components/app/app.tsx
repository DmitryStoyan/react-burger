// import React from "react";

import { useEffect } from "react";

import { getIngredients } from "../../services/actions/ingredients";
import { useDispatch } from "../../utils/hooks";
import { Constructor } from "../constructor/constructor";
import { Header } from "../header/header";

import appStyles from "./app.module.css";

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  return (
    <div className={appStyles.app}>
      <Header />
      <Constructor />
    </div>
  );
}
