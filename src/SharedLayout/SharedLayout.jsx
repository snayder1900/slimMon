import { Outlet, Link } from "react-router-dom";
import logoMobile from "../../assets/img/logoMobile.svg";
import logoTablet from "../../assets/img/logoTablet.svg";
import logoDesktop from "../../assets/img/logoDesktop.svg";
import { useState } from "react";
import { useEffect } from "react";
import css from "./SharedLayout.module.css";

export const SharedLayout = () => {
  const [logoSrc, setLogoSrc] = useState(() => {
    if (window.innerWidth >= 1279) {
      return logoDesktop;
    } else {
      return window.innerWidth <= 767 ? logoMobile : logoTablet;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setLogoSrc(window.innerWidth <= 767 ? logoMobile : logoTablet);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${css.container} ${css.images}`}>
      <div className={css.navContainer}>
        <ul className={css.list}>
          <li className={css.list__firstItem}>
            <Link to="/">
              <img src={logoSrc} alt="Logo" />
            </Link>
          </li>
          <li className={`${css.menu} ${css.list__secondItem}`}>
            <Link to="/">INICIAR SESIÓN</Link>
          </li>
          <li className={css.menu}>
            <Link to="/">REGISTRO</Link>
          </li>
        </ul>
      </div>
      <div className={css.childrenContainer}>
        <Outlet />
      </div>
    </div>
  );
};
