import { Routes, Route, Navigate } from "react-router-dom"
import { CaloriesPage } from "../pages/CaloriesPage"

export const CaloriesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CaloriesPage />}></Route>
      <Route path="/*" element={<Navigate to="/" />}></Route>
    </Routes>
  )
}
