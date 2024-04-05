import React, { useState } from 'react';
import css from "./mobilemenu.module.css"

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={css["menu-toggle"] + " " + css["js-open-menu"]}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="mobile-menu"
        onClick={toggleModal}
      >
        <svg
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className={css.modal}>
          <div className={css["modal-content"]}>
            <span className={css.close} onClick={toggleModal}>
              &times;
            </span>
            <a className={css.modallink__Diario} href="#">Diario</a>
            <a className={css.modallink__Calculadora} href="#">Calculadora</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
