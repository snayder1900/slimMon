import React from "react";
import { Formik, Field } from "formik";
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
          bloodType: 0,
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

          if (!values.bloodType) {
            errors.bloodType = "Por favor diligenciar tipo de sangre";
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
          <form onSubmit={handleSubmit}>
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
                  <input
                    type="text"
                    className={css.inputMobile}
                    name="height"
                    value={values.height}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {/* errors.height ? css.lisContainer_error : */}
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
                  <input
                    type="text"
                    className={css.inputMobile}
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                  <input
                    type="text"
                    className={css.inputMobile}
                    name="currentWeight"
                    value={values.currentWeight}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                  <input
                    type="text"
                    className={css.inputMobile}
                    name="desiredWeight"
                    value={values.desiredWeight}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    htmlFor=""
                  >
                    Tipo de sangre *
                  </label>
                  <div className={css.inputMobile__bloodContainer}>
                    <div className={css.inputMobile__bloodContainer__option}>
                      <input
                        type="radio"
                        id="1"
                        name="bloodType"
                        value={values.bloodType}
                        className={css.inputMobile__blood}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="1" className={`${css.label}`}>
                        1
                      </label>
                    </div>
                    <div className={css.inputMobile__bloodContainer__option}>
                      <input
                        type="radio"
                        id="2"
                        name="bloodType"
                        value={values.bloodType}
                        className={css.inputMobile__blood}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="2" className={css.label}>
                        2
                      </label>
                    </div>
                    <div className={css.inputMobile__bloodContainer__option}>
                      <input
                        type="radio"
                        id="3"
                        name="bloodType"
                        value={values.bloodType}
                        className={css.inputMobile__blood}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="3" className={css.label}>
                        3
                      </label>
                    </div>
                    <div className={css.inputMobile__bloodContainer__option}>
                      <input
                        type="radio"
                        id="4"
                        name="bloodType"
                        value={values.bloodType}
                        className={css.inputMobile__blood}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="4" className={`${css.label}`}>
                        4
                      </label>
                    </div>

                    <div
                      id="my-radio-group"
                      className={`${css.label} ${
                        touched.bloodType && errors.bloodType
                          ? css.label__blood_error
                          : css.label__blood
                      }`}
                    >
                      Tipo de sangre *
                    </div>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <Field type="radio" name="picked" value="One" />
                        One
                      </label>
                      <label>
                        <Field type="radio" name="picked" value="Two" />
                        Two
                      </label>
                      <div>Picked: {values.picked}</div>
                    </div>
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
          </form>
        )}
      </Formik>
    </div>
  );
};

export { DailyCaloriesForm };
