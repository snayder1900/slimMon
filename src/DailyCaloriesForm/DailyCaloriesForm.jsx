import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import css from "./DailyCaloriesForm.module.css";
// import { i } from "vite/dist/node/types.d-FdqQ54oU";
import Modal from "../components/Modal";
import { getDataModal } from "../services/slimmomApi";

const DailyCaloriesForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState({
    height: "",
    age: "",
    currentWeight: "",
    desiredWeight: "",
    bloodType: "",
  });
  const [dailyRateInfo, setDailyRateInfo] = useState(0);
  const [notAllowed, setNotAllowed] = useState([]);
  const formHandle = async (event) => {
    event.preventDefault();
    try {
      const { result } = await getDataModal("products", formData);
      setDailyRateInfo(result.dailyRate);
      setNotAllowed(result.notAllowedProducts);
    } catch (error) {
      console.error("error al enviar datos:", error.message);
    }
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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

          if (!values.picked) {
            errors.picked = "Por favor diligenciar tipo de sangre";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          formHandle();
          resetForm();
          console.log("formulario enviado");
        }}
      >
        {({ errors, touched }) => (
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
                  <label className={css.label} htmlFor="">
                    Altura *
                  </label>
                  <Field
                    type="text"
                    className={css.inputMobile}
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
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
                  <label className={css.label} htmlFor="">
                    Edad *
                  </label>
                  <Field
                    type="text"
                    className={css.inputMobile}
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
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
                  <label className={css.label} htmlFor="">
                    Peso actual *
                  </label>
                  <Field
                    type="text"
                    className={css.inputMobile}
                    name="currentWeight"
                    value={formData.currentWeight}
                    onChange={handleChange}
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
                  <label className={css.label} htmlFor="">
                    Peso deseado *
                  </label>
                  <Field
                    type="text"
                    className={css.inputMobile}
                    name="desiredWeight"
                    value={formData.desiredWeight}
                    onChange={handleChange}
                  />
                </div>
              </li>
              <li>
                <div className={css.lisContainer__blood}>
                  <div
                    id="my-radio-group"
                    className={`${css.label} ${
                      touched.picked && errors.picked
                        ? css.label__blood_error
                        : css.label__blood
                    }`}
                  >
                    Tipo de sangre *
                  </div>
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    className={css.inputMobile__bloodContainer}
                  >
                    <label className={`${css.label}`}>
                      <Field
                        type="radio"
                        name="bloodType"
                        value="One"
                        className={css.inputMobile__blood}
                      />
                      1
                    </label>
                    <label className={`${css.label}`}>
                      <Field
                        type="radio"
                        name="bloodType"
                        value="Two"
                        className={css.inputMobile__blood}
                      />
                      2
                    </label>
                    <label className={`${css.label}`}>
                      <Field
                        type="radio"
                        name="bloodType"
                        value="Three"
                        className={css.inputMobile__blood}
                      />
                      3
                    </label>
                    <label className={`${css.label}`}>
                      <Field
                        type="radio"
                        name="bloodType"
                        value="Four"
                        className={css.inputMobile__blood}
                      />
                      4
                    </label>
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
                className={css.loseWeightBtn}
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
