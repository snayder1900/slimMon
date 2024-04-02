import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import css from "./DailyCaloriesForm.module.css";
// import { i } from "vite/dist/node/types.d-FdqQ54oU";
import Modal from "../components/Modal";
import { getDataModal } from "../services/slimmomApi";

const DailyCaloriesForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dailyRateInfo, setDailyRateInfo] = useState(0);
  const [notAllowed, setNotAllowed] = useState([]);

  const formHandle = async (values) => {
    try {
      const { result } = await getDataModal("products", values);
      setDailyRateInfo(result.dailyRate);
      setNotAllowed(result.notAllowedProducts);
      console.log("datos obtenidos:", result);
    } catch (error) {
      console.error("error al enviar datos:", error.message);
    }
  };

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={`${css.container}`}>
      <h1 className={css.tittle}>
        Calcule ahora mismo su ingesta diaria de calorías
      </h1>
      <Formik
        initialValues={{
          height: "",
          age: "",
          currentWeight: "",
          desiredWeight: "",
          bloodType: "",
        }}
        //se comento esta validación porque se presentan problemas y no se envian los datos com debe al servidor.//
        validate={(values) => {
          let errors = {};
          const validateNumber = /^\d+$/;

          if (!values.height) {
            errors.height = "Por favor diligenciar la altura";
          } else if (!validateNumber.test(values.height)) {
            errors.height = "Campo debe ser numerico";
          }
          if (!values.age) {
            errors.age = "Por favor diligenciar la edad ";
          } else if (!validateNumber.test(values.age)) {
            errors.age = "Campo debe ser numerico";
          }

          if (!values.currentWeight) {
            errors.currentWeight = "Por favor diligenciar peso actual ";
          } else if (!validateNumber.test(values.currentWeight)) {
            errors.currentWeight = "Campo debe ser numerico";
          }

          if (!values.desiredWeight) {
            errors.desiredWeight = "Por favor diligenciar peso deseado ";
          } else if (!validateNumber.test(values.desiredWeight)) {
            errors.desiredWeight = "Campo debe ser numerico";
          }

          if (!values.bloodType) {
            errors.bloodType = "Por favor diligenciar tipo de sangre";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          formHandle(values);
          resetForm();
          console.log("formulario enviado");
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <ul className={css.list}>
              <li className={css.listItem}>
                <div
                  className={
                    touched.height && errors.height
                      ? css.lisContainer_error
                      : css.lisContainer
                  }
                >
                  <label className={css.label} htmlFor="height">
                    Altura *
                  </label>
                  <Field
                    type="text"
                    className={css.inputMobile}
                    name="height"
                  />
                </div>
              </li>
              <li className={css.listItem}>
                <div
                  className={
                    touched.age && errors.age
                      ? css.lisContainer_error
                      : css.lisContainer
                  }
                >
                  <label className={css.label} htmlFor="age">
                    Edad *
                  </label>
                  <Field type="text" className={css.inputMobile} name="age" />
                </div>
              </li>
              <li className={css.listItem}>
                <div
                  className={
                    touched.currentWeight && errors.currentWeight
                      ? css.lisContainer_error
                      : css.lisContainer
                  }
                >
                  <label className={css.label} htmlFor="currentWeight">
                    Peso actual *
                  </label>
                  <Field
                    type="text"
                    className={css.inputMobile}
                    name="currentWeight"
                  />
                </div>
              </li>
              <li className={css.listItem}>
                <div
                  className={
                    touched.desiredWeight && errors.desiredWeight
                      ? css.lisContainer_error
                      : css.lisContainer
                  }
                >
                  <label className={css.label} htmlFor="desiredWeight">
                    Peso deseado *
                  </label>
                  <Field
                    type="text"
                    className={css.inputMobile}
                    name="desiredWeight"
                  />
                </div>
              </li>
              <li>
                <div className={css.lisContainer__blood}>
                  <label
                    className={`${css.label} ${
                      touched.bloodType && errors.bloodType
                        ? css.label__blood_error
                        : css.label__blood
                    }`}
                  >
                    Tipo de sangre *
                  </label>
                  <div
                    role="group"
                    aria-labelledby="bloodType"
                    className={css.inputMobile__bloodContainer}
                  >
                    {[1, 2, 3, 4].map((value) => (
                      <label key={value} className={`${css.label}`}>
                        <Field
                          type="radio"
                          name="bloodType"
                          value={value}
                          checked={values.bloodType === String(value)}
                          className={css.inputMobile__blood}
                        />
                        {value}
                      </label>
                    ))}
                  </div>
                </div>
              </li>
              {Object.keys(errors).length > 0 && (
                <div className={css.label_error}>
                  {Object.values(errors)[0]}
                </div>
              )}
            </ul>
            <div className={css.buttonContainer}>
              <button
                onClick={clickHandler}
                type="submit"
                className={
                  Object.keys(errors).length > 0
                    ? css.loseWeightBtn__disable
                    : css.loseWeightBtn
                }
                disabled={Object.keys(errors).length > 0 ? true : false}
              >
                Empezar a perder peso
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {isModalOpen && (
        <Modal
          toggleModal={clickHandler}
          dailyRate={dailyRateInfo}
          notAllowedProducts={notAllowed.slice(0, 4)}
        />
      )}
    </div>
  );
};

export { DailyCaloriesForm };
