import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CaloriesPage } from "../calories/pages/CaloriesPage"


export const AppRouter = () => {

  const authStatus = 'not-authenticated';

  return (
    <Routes>
      {
        ( authStatus ===  'not-authenticated' )
          ? <Route path="/auth/*" element={<AuthRoutes />} />
          : <Route path="/*" element={<CaloriesPage />} />
      }

          {/* Login y Registro */}
          {/* Calories */}
          {/* evitar que el usuario llegue a una ruta que no existe */}
          <Route path="/*" element={<Navigate to="/auth/login"/>} />
    </Routes>
  )
}