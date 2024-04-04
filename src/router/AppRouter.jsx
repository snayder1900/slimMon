import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CaloriesPage } from "../calories/pages/CaloriesPage"
import { SharedLayout } from "../SharedLayout/SharedLayout"
import { DailyCaloriesForm } from "../DailyCaloriesForm/DailyCaloriesForm"
import { useAuthStore } from "../hooks"


export const AppRouter = () => {

  const { status, checkAuthToken } = useAuthStore();
  // const authStatus = 'not-authenticated';

  useEffect(() => {
    checkAuthToken();
  }, [])

  if( status === 'checking' ) {
    return (
      <h3>Cargando</h3>
    )
  }
  

  return (
    <Routes>
      {                
        // ( status ===  'not-authenticated' )
        //   ? <Route path="/auth/*" element={<AuthRoutes />} />
        //   : <Route path="/*" element={<CaloriesPage />} />
        ( status ===  'not-authenticated' )
          ? (
            <>
              <Route path="/auth/*" element={<AuthRoutes />} />
              {/* evitar que el usuario llegue a una ruta que no existe */}
              <Route path="/*" element={<Navigate to="/auth/DailyCaloriesForm"/>} />
            </>
          )
          : (
            <>
              <Route path="/" element={<CaloriesPage />} />
              {/* evitar que el usuario llegue a una ruta que no existe */}
              <Route path="/*" element={<Navigate to="/"/>} />
            </>
          )
      }

    </Routes>
  )
}
