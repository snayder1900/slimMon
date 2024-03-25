import css from "./DailyCaloriesForm.module.css";

const DailyCaloriesForm = () => {
  return (
    <div className={`${css.container}`}>
      <h1 className={css.tittle}>
        Calcule ahora mismo su ingesta diaria de calorías
      </h1>
      <form action="">
        <ul className={css.list}>
          <li className={css.listItem}>
            <div className={css.lisContainer}>
              <label className={css.label} htmlFor="">
                Altura *
              </label>
              <input type="text" className={css.inputMobile} />
            </div>
          </li>
          <li className={css.listItem}>
            <div className={css.lisContainer}>
              <label className={css.label} htmlFor="">
                Edad *
              </label>
              <input type="text" className={css.inputMobile} />
            </div>
          </li>
          <li className={css.listItem}>
            <div className={css.lisContainer}>
              <label className={css.label} htmlFor="">
                Peso actual *
              </label>
              <input type="text" className={css.inputMobile} />
            </div>
          </li>
          <li className={css.listItem}>
            <div className={css.lisContainer}>
              <label className={css.label} htmlFor="">
                Peso deseado *
              </label>
              <input type="text" className={css.inputMobile} />
            </div>
          </li>
          <li>
            <div className={css.lisContainer__blood}>
              <label className={`${css.label} ${css.label__blood}`} htmlFor="">
                Tipo de sangre *
              </label>
              <div className={css.inputMobile__bloodContainer}>
                <div className={css.inputMobile__bloodContainer__option}>
                  <input
                    type="radio"
                    id="1"
                    name="bloodType"
                    value="1"
                    className={css.inputMobile__blood}
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
                    value="2"
                    className={css.inputMobile__blood}
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
                    value="3"
                    className={css.inputMobile__blood}
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
                    value="4"
                    className={css.inputMobile__blood}
                  />
                  <label htmlFor="4" className={`${css.label}`}>
                    4
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className={css.buttonContainer}>
          <button type="submit">Empezar a perder peso</button>
        </div>
      </form>
    </div>
  );
};

export { DailyCaloriesForm };
