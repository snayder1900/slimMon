import { Link, NavLink } from "react-router-dom";
import css from "./Auth.module.css";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div className={css.container}>
      <form action="" className={css.form}>
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum modi minima maiores asperiores pariatur molestiae libero sunt sint laborum veniam repellat error cumque consequatur officiis neque voluptatum ducimus, quaerat quae?</p> */}
        <div className={css.form__container}>
          {children}
          <section className={css.form__section}>
            <input
              className={css.form__email}
              type="email"
              placeholder="Correo electrónico *"
            />
          </section>
          <section className={css.form__section}>
            <input
              className={css.form__password}
              type="password"
              placeholder="Contraseña *"
            />
          </section>
        </div>
        <div className={css.form__container}>
          <Link className={css.form__login}>INICIAR SESIÓN</Link>
          {/* Pendiente  cargar pagina siguiente */}
          <Link className={css.form__createAccount} to="/auth/register">
            CREAR UNA CUENTA
          </Link>
        </div>
      </form>
    </div>
  );
};
