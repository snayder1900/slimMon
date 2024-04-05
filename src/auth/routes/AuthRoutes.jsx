
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
import { DailyCaloriesForm } from '../../DailyCaloriesForm/DailyCaloriesForm'
import { SharedLayout } from '../../SharedLayout/SharedLayout'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="DailyCaloriesForm" element={<DailyCaloriesForm />}></Route>
      </Route> 
      {/* <Route path='DailyCaloriesForm' element={<DailyCaloriesForm />} ></Route> */}
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='register' element={<RegisterPage />}></Route>
      {/* Queda pendiente organizar con el companiero que cree la primera pagina para redireccionarlo ah[i] */}
      <Route path='/*' element={ <Navigate to="/auth/DailyCaloriesForm" /> }></Route>
    </Routes>
  )
}
