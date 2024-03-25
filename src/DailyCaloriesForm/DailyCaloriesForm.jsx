import React from "react";
import { Formik, Form, Field } from "formik";
import css from "./DailyCaloriesForm.module.css";

const DailyCaloriesForm = () => {
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
          picked: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.height) {
            errors.height = "Por favor diligenciar la altura";
          }

          if (!values.age) {
            errors.age = "Por favor diligenciar la edad ";
          }

          if (!values.currentWeight) {
            errors.currentWeight = "Por favor diligenciar peso actual ";
          }

          if (!values.desiredWeight) {
            errors.desiredWeight = "Por favor diligenciar peso deseado ";
          }

          if (!values.picked) {
            errors.picked = "Por favor diligenciar tipo de sangre";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log("formulario enviado");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
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
                  <label className={css.label} htmlFor="">
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
                  <label className={css.label} htmlFor="">
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
                        name="picked"
                        value="One"
                        className={css.inputMobile__blood}
                      />
                      1
                    </label>
                    <label className={`${css.label}`}>
                      <Field
                        type="radio"
                        name="picked"
                        value="Two"
                        className={css.inputMobile__blood}
                      />
                      2
                    </label>
                    <label className={`${css.label}`}>
                      <Field
                        type="radio"
                        name="picked"
                        value="Three"
                        className={css.inputMobile__blood}
                      />
                      3
                    </label>
                    <label className={`${css.label}`}>
                      <Field
                        type="radio"
                        name="picked"
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
                  Campos subrayados en rojo son obligatorios
                </div>
              )}
            </ul>
            <div className={css.buttonContainer}>
              <button type="submit">Empezar a perder peso</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { DailyCaloriesForm };
