// import React from "react";

import { Constructor } from "../constructor/constructor";
import { Header } from "../header/header";

import appStyles from "./app.module.css";

export function App() {
  return (
    <div className={appStyles.app}>
      <Header />
      <Constructor />
    </div>
  );
}
