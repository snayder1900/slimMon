import { Link, NavLink } from "react-router-dom";
import css from "./Auth.module.css";


export const AuthLayout = ({children, title = ''}) => {
  return (
    <div className={css.container}>
      <nav className={css.navContainer}>
        <Link>
          <img
            src="/assets/img/logo.png"
            alt="Logo de la pagina de calcular calorias"
          />
          {/* Pendiente para que se redireccione ala pagina principal */}
        </Link>
        <div className={css.verticalBar__container}>
          <span className={css.verticalBar__span}></span>
        </div>
        <ul>
          <li className={css.navContainer__item}>
            {/* <Link className={css.navContainer__link} to={"/auth/login"}>INICIAR SESIÓN</Link> */}
            <NavLink
              className={ ({isActive}) => `${css.navContainer__link} ${isActive ? css.active :  ''}` } 
              to={"/auth/login"}
            >
                INICIAR SESIÓN
            </NavLink>
          </li>
          <li className={css.navContainer__item}>
            {/* <Link className={css.navContainer__link} to="/auth/register">
              CREAR UNA CUENTA
            </Link> */}
            <NavLink
              className={ ({isActive}) => `${css.navContainer__link} ${isActive ? css.active :  ''}` } 
              to={"/auth/register"}
            >
                CREAR UNA CUENTA
            </NavLink>
          </li>
          {/* Pendiente  cargar pagina siguiente */}
        </ul>
      </nav>

      <form action="" className={css.form}>
        <h1 className={css.form__title}>{title}</h1>
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum modi minima maiores asperiores pariatur molestiae libero sunt sint laborum veniam repellat error cumque consequatur officiis neque voluptatum ducimus, quaerat quae?</p> */}
        <div className={css.form__container}>
          {children}
          <section className={css.form__section}>
            <input className={css.form__email} type="email" placeholder="Correo electrónico *"/>
          </section>
          <section className={css.form__section}>
            <input className={css.form__password} type="password" placeholder="Contraseña *"/>
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

      <div>
        <img className={css.form__img1} src="/assets/img/banano.png" alt="" />
        <img className={css.form__img2} src="/assets/img/fresa.png" alt="" />
        <img className={css.form__img3} src="/assets/img/hojas.png" alt="" />
        <img className={css.form__img4} src="/assets/img/forma.svg" alt="" />
      </div>
    </div>
  )
}
