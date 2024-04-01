import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import css from "./Modal.module.css";
const modalRoot = document.querySelector("#modal-root");

function Modal({ toggleModal, dailyRate, notAllowedProducts }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.addEventListener("keydown", handlekeydown);
    return () => {
      window.removeEventListener("keydown", handlekeydown);
    };
  });

  const handlekeydown = (event) => {
    if (event.code === "Escape") {
      toggleModal();
    }
  };
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };
  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.modal_button} onClick={handleBackdropClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" onClick={handleBackdropClick} className={css.close}> 
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <h3 className={css.title}>
          Tu ingesta diaria recomendada de calorías es
        </h3>
        <h3 className={css.title_movil}>
          Calcula tu ingesta diaria de calorias ahora mismo
        </h3>
        <p className={css.number}>
          {dailyRate} <span className={css.sub}>Kcal</span>
        </p>
        <div className={css.box_list}>
          <p className={css.sub_title}>Alimentos que no deberías comer</p>
          <ol className={css.list}>
            {notAllowedProducts.map((product) => (
              <li key={product._id} className={css.list}>
                {product.title}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <button className={css.button}>Comienza a perder peso</button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
