/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "../modal-overlay/modal-overlay";

import styles from "./styles.module.css";

import type { IModal } from "./modal.props";

const rootModalContainer = document.getElementById("modals");

/* Передача props для модального окна, используются в компоненте App */
function Modal({ closeModal, heading, children }: IModal) {
  const handleEscKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEscKeydown);
    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  });

  /* Рендер вне корневого элемента */
  return ReactDOM.createPortal(
    <section className={styles.container}>
      <div className={`${styles.wrapper}`}>
        {heading && (
          <h2 className={`${styles.heading} text text_type_main-large`}>
            {heading}
          </h2>
        )}
        <button
          className={`${styles.closeButton} closeButton`}
          onClick={closeModal}
        >
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
      <ModalOverlay handleClick={closeModal} />
    </section>,
    rootModalContainer!
  );
}

export default Modal;
