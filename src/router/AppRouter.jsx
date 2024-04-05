import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CaloriesPage } from "../calories/pages/CaloriesPage";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { DailyCaloriesForm } from "../DailyCaloriesForm/DailyCaloriesForm";
import { AddProduct } from "../AddProduct/addProduct"

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {authStatus === "not-authenticated" ? (
          <Route path="/auth/*" element={<AuthRoutes />} />
        ) : (
          <Route path="/*" element={<CaloriesPage />} />
        )}

        {/* Login y Registro */}
        {/* Calories */}
        {/* evitar que el usuario llegue a una ruta que no existe */}
        <Route path="DailyCaloriesForm" element={<DailyCaloriesForm />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
        <Route path="/*"element={<AddProduct/>} />
      </Route>
    </Routes>
  );
};
