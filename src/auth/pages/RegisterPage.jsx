import { AuthLayout } from "../layout/AuthLayout"
import css from "../layout/Auth.module.css";


export const RegisterPage = () => {
  return (
    <AuthLayout title="CREAR UNA CUENTA">
      <section className={css.form__section}>
        <input className={css.form__name} type="text" placeholder="Nombre *"/>
      </section>
    </AuthLayout>
  )
}
